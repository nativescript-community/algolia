declare namespace com {
    namespace algolia {
        namespace search {
            namespace saas {
                class Query {
                    constructor(query: string);

                    set(key: string, value: string);

                    multipleQueriesAsync(query: IndexQuery[], strategy: string, handler: CompletionHandler);
                }

                class Index {
                    searchAsync(query: Query, handler: CompletionHandler): void;

                    setSettingsAsync(setting: { [key: string]: string[] }, handler: CompletionHandler): void;

                    addObjectAsync(object: { [key: string]: string[] }, handler: CompletionHandler): void;

                    saveObjectsAsync(object: org.json.JSONArray, handler: CompletionHandler): void;
                }

                class Client {
                    constructor(appId: string, appKey: string);

                    initIndex(name: string): Index;
                }

                class IndexQuery {
                    constructor(indexName: string, query: Query);
                }
                export class CompletionHandler {
                    public static class: java.lang.Class<CompletionHandler>;
                    /**
                     * Constructs a new instance of the com.algolia.search.saas.CompletionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor();
                    public requestCompleted(param0: org.json.JSONObject, param1: Error): void;
                }
            }
        }
    }
}
