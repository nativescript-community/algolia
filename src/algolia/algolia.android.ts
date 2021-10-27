export class Algolia {
    public client: com.algolia.search.saas.Client;
    constructor(appID: string, apiKey: string) {
        this.client = new com.algolia.search.saas.Client(appID, apiKey);
    }

    public initIndex(name: string): AlgoliaIndex {
        return new AlgoliaIndex(this.client, name);
    }
}

export class AlgoliaIndex {
    public index: com.algolia.search.saas.Index;

    constructor(client: com.algolia.search.saas.Client, name: string) {
        this.index = client.initIndex(name);
    }

    public search(query: string, args?: any[]): Promise<void> {
        return new Promise((resolve, reject) => {
            const queryObject = new com.algolia.search.saas.Query(query);

            const completionHandler = new CompletionHandler();
            completionHandler.handler = (content, error) => {
                if (error) {
                    reject(error);
                }
                resolve(content);
            };

            if (args) {
                Object.keys(args).forEach((key) => {
                    queryObject.set(key, args[key].toString());
                });
            }

            this.index.searchAsync(queryObject, completionHandler);
        });
    }

    public setSettings(settings: any): Promise<void> {
        return new Promise((resolve, reject) => {
            const completionHandler = new CompletionHandler();
            completionHandler.handler = (content, error) => {
                if (error) {
                    reject(error);
                }
                resolve(content);
            };

            this.index.setSettingsAsync((org as any).json.JSONObject.from(settings), completionHandler);
        });
    }

    public saveObjects(objects: any[]): Promise<void> {
        return new Promise((resolve, reject) => {
            const completionHandler = new CompletionHandler();
            completionHandler.handler = (content, error) => {
                if (error) {
                    reject(error);
                }
                resolve(content);
            };

            this.index.saveObjectsAsync((org as any).json.JSONObject.from(objects), completionHandler);
        });
    }
}

export const CompletionHandler = com.algolia.search.saas.CompletionHandler.extend({
    init(): void {
        return global.__native(this);
    },

    requestCompleted(content: JSON, error: Error): void {
        if (error) {
            return this.handler(null, error);
        }

        return this.handler(JSON.parse(content.toString()));
    }
});

