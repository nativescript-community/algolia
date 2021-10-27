export class Algolia {
    public client: Client;

    constructor(appID: string, apiKey: string) {
        this.client = Client.alloc().initWithAppIDApiKey(appID, apiKey);
    }

    public initIndex(name: string): AlgoliaIndex {
        return new AlgoliaIndex(this.client, name);
    }
}


export class AlgoliaIndex {
    public index: Index;

    constructor(client: Client, name: string) {
        this.index = client.indexWithName(name);
    }

    public search(query: string, args?: any[]): Promise<void> {
        return new Promise((resolve, reject) => {
            const queryObject = Query.alloc().initWithQuery(query);

            if (args) {
                Object.keys(args).forEach((key) => {
                    if (key in queryObject) {
                        if (key === 'aroundRadius' && args[key] === 'all') {
                            queryObject.setParameterWithNameTo('aroundRadius', 'all');
                        } else {
                            queryObject[key] = buildQuery(key, args[key]);
                        }
                    }
                });
            }

            this.index.searchCompletionHandler(queryObject, (success, error) => {
                if (error) {
                    return reject({ status: error.code, reason: error.localizedDescription });
                }

                return resolve(convertToJSON(success));
            });

        });
    }

    public setSettings(settings: any): Promise<void> {
        return new Promise((resolve, reject) => {
            const settingsNSDictionary: NSDictionary<string, any> = NSDictionary.dictionaryWithDictionary(settings);
            this.index.setSettingsCompletionHandler(settingsNSDictionary, (success, error) => {
                if (error) {
                    return reject({ status: error.code, reason: error.localizedDescription });
                }

                return resolve(convertToJSON(success));
            });
        });
    }

    public saveObjects(objects: any[]): Promise<void> {
        return new Promise((resolve, reject) => {
            let objectsNSDictionary: NSDictionary<string, any>[] = [];
            for (const object of objects) {
                objectsNSDictionary.push(NSDictionary.dictionaryWithDictionary(object));
            }

            this.index.saveObjectsCompletionHandler(objectsNSDictionary, (success, error) => {
                if (error) {
                    return reject({ status: error.code, reason: error.localizedDescription });
                }

                return resolve(convertToJSON(success));
            });
        });
    }
}

export const convertToJSON = (data: NSDictionary<string, any>): any => {
    const jsonData = NSJSONSerialization.dataWithJSONObjectOptionsError(data, 0);
    return JSON.parse(NSString.alloc().initWithDataEncoding(jsonData, 4).toString());
};

export const buildQuery = (key: string, value: string): string | boolean | LatLng => {
    if (key === 'aroundLatLng') {
        const latlng = value.replace(/ /g, '').split(',');
        return LatLng.alloc().initWithLatLng(Number(latlng[0]), Number(latlng[1]));
    }

    return value;
};
