export declare class Algolia {
    constructor(appID: string, apiKey: string);
    initIndex(name: string): AlgoliaIndex;
}

export declare class AlgoliaIndex {
    constructor(client: any, name: string);
    search(query: string, args?: any[]): Promise<void>;
    setSettings(settings: any): Promise<void>;
    saveObjects(objects: any[]): Promise<void>;
}
