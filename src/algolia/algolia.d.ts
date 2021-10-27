export declare class AlgoliaIndex {
    constructor(client: Client, name: string);
    search(query: string, args?: any[]): Promise<void>;
    setSettings(settings: any): Promise<void>;
    saveObjects(objects: any[]): Promise<void>;
}
