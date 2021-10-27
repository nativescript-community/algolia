
declare class AbstractClient extends NSObject {

	static addUserAgent(libraryVersion: LibraryVersion): void;

	static alloc(): AbstractClient; // inherited from NSObject

	static new(): AbstractClient; // inherited from NSObject

	completionQueue: NSOperationQueue;

	headers: NSDictionary<string, string>;

	hostStatusTimeout: number;

	readHosts: NSArray<string>;

	searchTimeout: number;

	timeout: number;

	useReachability: boolean;

	readonly userAgents: NSArray<LibraryVersion>;

	writeHosts: NSArray<string>;

	static readonly defaultHostStatusTimeout: number;

	static readonly userAgents: NSArray<LibraryVersion>;

	headerWithName(name: string): string;

	isAlive(completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	setHeaderWithNameTo(name: string, value: string): void;

	setHosts(hosts: NSArray<string> | string[]): void;
}

declare class AbstractQuery extends NSObject implements NSCopying {

	static alloc(): AbstractQuery; // inherited from NSObject

	static buildWithParameters(parameters: NSDictionary<string, string>): string;

	static new(): AbstractQuery; // inherited from NSObject

	readonly parameters: NSDictionary<string, string>;

	constructor(o: { parameters: NSDictionary<string, string>; });

	build(): string;

	clear(): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithParameters(parameters: NSDictionary<string, string>): this;

	objectForKeyedSubscript(index: string): string;

	parameterWithName(name: string): string;

	setObjectForKeyedSubscript(newValue: string, index: string): void;

	setParameterWithNameTo(name: string, value: string): void;
}

declare class AroundPrecision extends NSObject {

	static alloc(): AroundPrecision; // inherited from NSObject

	static new(): AroundPrecision; // inherited from NSObject

	readonly intValue: number;

	readonly rangesValue: NSArray<Range>;

	constructor(o: { number: number; });

	constructor(o: { ranges: NSArray<Range> | Range[]; });

	initWithNumber(number: number): this;

	initWithRanges(ranges: NSArray<Range> | Range[]): this;
}

declare class BrowseIterator extends NSObject {

	static alloc(): BrowseIterator; // inherited from NSObject

	static new(): BrowseIterator; // inherited from NSObject

	readonly index: Index;

	readonly query: Query;

	constructor(o: { index: Index; query: Query; completionHandler: (p1: BrowseIterator, p2: NSDictionary<string, any>, p3: NSError) => void; });

	cancel(): void;

	hasNext(): boolean;

	initWithIndexQueryCompletionHandler(index: Index, query: Query, completionHandler: (p1: BrowseIterator, p2: NSDictionary<string, any>, p3: NSError) => void): this;

	start(): void;
}

declare class Client extends AbstractClient {

	static alloc(): Client; // inherited from NSObject

	static new(): Client; // inherited from NSObject

	apiKey: string;

	readonly appID: string;

	constructor(o: { appID: string; apiKey: string; });

	batchOperationsCompletionHandler(operations: NSArray<any> | any[], completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	batchOperationsRequestOptionsCompletionHandler(operations: NSArray<any> | any[], requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	copyIndexFromToCompletionHandler(srcIndexName: string, dstIndexName: string, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	copyIndexFromToRequestOptionsCompletionHandler(srcIndexName: string, dstIndexName: string, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	deleteIndexWithNameCompletionHandler(name: string, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	deleteIndexWithNameRequestOptionsCompletionHandler(name: string, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	indexWithName(indexName: string): Index;

	initWithAppIDApiKey(appID: string, apiKey: string): this;

	listIndexes(completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	listIndexesWithRequestOptionsCompletionHandler(requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	moveIndexFromToCompletionHandler(srcIndexName: string, dstIndexName: string, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	moveIndexFromToRequestOptionsCompletionHandler(srcIndexName: string, dstIndexName: string, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	multipleQueriesStrategyCompletionHandler(queries: NSArray<IndexQuery> | IndexQuery[], strategy: string, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	multipleQueriesStrategyRequestOptionsCompletionHandler(queries: NSArray<IndexQuery> | IndexQuery[], strategy: string, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;
}

declare class GeoRect extends NSObject {

	static alloc(): GeoRect; // inherited from NSObject

	static new(): GeoRect; // inherited from NSObject

	readonly p1: LatLng;

	readonly p2: LatLng;

	constructor(o: { p1: LatLng; p2: LatLng; });

	initWithP1P2(p1: LatLng, p2: LatLng): this;
}

declare class Index extends NSObject implements Searchable {

	static alloc(): Index; // inherited from NSObject

	static new(): Index; // inherited from NSObject

	readonly client: Client;

	readonly name: string;

	searchCacheEnabled: boolean;

	searchCacheExpiringTimeInterval: number;

	addObjectCompletionHandler(object: NSDictionary<string, any>, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	addObjectRequestOptionsCompletionHandler(object: NSDictionary<string, any>, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	addObjectWithIDCompletionHandler(object: NSDictionary<string, any>, objectID: string, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	addObjectWithIDRequestOptionsCompletionHandler(object: NSDictionary<string, any>, objectID: string, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	addObjectsCompletionHandler(objects: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	addObjectsRequestOptionsCompletionHandler(objects: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	batchOperationsCompletionHandler(operations: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	batchOperationsRequestOptionsCompletionHandler(operations: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	browseFromCursorCompletionHandler(cursor: string, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	browseFromCursorRequestOptionsCompletionHandler(cursor: string, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	browseWithQueryCompletionHandler(query: Query, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	browseWithQueryRequestOptionsCompletionHandler(query: Query, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	clearIndex(completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	clearIndexWithRequestOptionsCompletionHandler(requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	clearSearchCache(): void;

	deleteByCompletionHandler(query: Query, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	deleteByQueryCompletionHandler(query: Query, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	deleteByQueryRequestOptionsCompletionHandler(query: Query, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	deleteByRequestOptionsCompletionHandler(query: Query, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	deleteObjectWithIDCompletionHandler(objectID: string, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	deleteObjectWithIDRequestOptionsCompletionHandler(objectID: string, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	deleteObjectsWithIDsCompletionHandler(objectIDs: NSArray<string> | string[], completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	deleteObjectsWithIDsRequestOptionsCompletionHandler(objectIDs: NSArray<string> | string[], requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	getObjectWithIDAttributesToRetrieveCompletionHandler(objectID: string, attributesToRetrieve: NSArray<string> | string[], completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	getObjectWithIDAttributesToRetrieveRequestOptionsCompletionHandler(objectID: string, attributesToRetrieve: NSArray<string> | string[], requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	getObjectWithIDCompletionHandler(objectID: string, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	getObjectsWithIDsAttributesToRetrieveCompletionHandler(objectIDs: NSArray<string> | string[], attributesToRetrieve: NSArray<string> | string[], completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	getObjectsWithIDsAttributesToRetrieveRequestOptionsCompletionHandler(objectIDs: NSArray<string> | string[], attributesToRetrieve: NSArray<string> | string[], requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	getObjectsWithIDsCompletionHandler(objectIDs: NSArray<string> | string[], completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	getSettings(completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	getSettingsWithRequestOptionsCompletionHandler(requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	multipleQueriesStrategyCompletionHandler(queries: NSArray<Query> | Query[], strategy: string, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	multipleQueriesStrategyRequestOptionsCompletionHandler(queries: NSArray<Query> | Query[], strategy: string, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	partialUpdateObjectWithIDCompletionHandler(partialObject: NSDictionary<string, any>, objectID: string, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	partialUpdateObjectWithIDCreateIfNotExistsCompletionHandler(partialObject: NSDictionary<string, any>, objectID: string, createIfNotExists: boolean, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	partialUpdateObjectWithIDCreateIfNotExistsRequestOptionsCompletionHandler(partialObject: NSDictionary<string, any>, objectID: string, createIfNotExists: boolean, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	partialUpdateObjectsCompletionHandler(objects: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	partialUpdateObjectsCreateIfNotExistsCompletionHandler(objects: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], createIfNotExists: boolean, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	partialUpdateObjectsCreateIfNotExistsRequestOptionsCompletionHandler(objects: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], createIfNotExists: boolean, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	saveObjectCompletionHandler(object: NSDictionary<string, any>, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	saveObjectRequestOptionsCompletionHandler(object: NSDictionary<string, any>, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	saveObjectsCompletionHandler(objects: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	saveObjectsRequestOptionsCompletionHandler(objects: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	searchCompletionHandler(query: Query, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	searchDisjunctiveFacetingDisjunctiveFacetsRefinementsCompletionHandler(query: Query, disjunctiveFacets: NSArray<string> | string[], refinements: NSDictionary<string, NSArray<string>>, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	searchDisjunctiveFacetingDisjunctiveFacetsRefinementsRequestOptionsCompletionHandler(query: Query, disjunctiveFacets: NSArray<string> | string[], refinements: NSDictionary<string, NSArray<string>>, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	searchForFacetValuesOfMatchingQueryCompletionHandler(facetName: string, text: string, query: Query, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	searchForFacetValuesOfMatchingQueryRequestOptionsCompletionHandler(facetName: string, text: string, query: Query, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	searchRequestOptionsCompletionHandler(query: Query, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	setSettingsCompletionHandler(settings: NSDictionary<string, any>, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	setSettingsForwardToReplicasCompletionHandler(settings: NSDictionary<string, any>, forwardToReplicas: boolean, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	waitTaskWithIDCompletionHandler(taskID: number, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	waitTaskWithIDRequestOptionsCompletionHandler(taskID: number, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;
}

declare class IndexQuery extends NSObject {

	static alloc(): IndexQuery; // inherited from NSObject

	static new(): IndexQuery; // inherited from NSObject

	readonly indexName: string;

	readonly query: Query;

	constructor(o: { indexName: string; query: Query; });

	constructor(o: { index: Index; query: Query; });

	initWithIndexNameQuery(indexName: string, query: Query): this;

	initWithIndexQuery(index: Index, query: Query): this;
}

declare var InstantSearchClientVersionNumber: number;

declare var InstantSearchClientVersionString: interop.Reference<number>;

declare class LatLng extends NSObject {

	static alloc(): LatLng; // inherited from NSObject

	static new(): LatLng; // inherited from NSObject

	readonly lat: number;

	readonly lng: number;

	constructor(o: { lat: number; lng: number; });

	initWithLatLng(lat: number, lng: number): this;
}

declare class LibraryVersion extends NSObject {

	static alloc(): LibraryVersion; // inherited from NSObject

	static new(): LibraryVersion; // inherited from NSObject

	readonly name: string;

	readonly version: string;

	constructor(o: { name: string; version: string; });

	initWithNameVersion(name: string, version: string): this;
}

declare class PlacesClient extends AbstractClient {

	static alloc(): PlacesClient; // inherited from NSObject

	static new(): PlacesClient; // inherited from NSObject

	apiKey: string;

	readonly appID: string;

	constructor(o: { appID: string; apiKey: string; });

	getObjectWithIDCompletionHandler(objectID: string, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	initWithAppIDApiKey(appID: string, apiKey: string): this;

	searchCompletionHandler(params: PlacesQuery, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;
}

declare class PlacesQuery extends AbstractQuery {

	static alloc(): PlacesQuery; // inherited from NSObject

	static new(): PlacesQuery; // inherited from NSObject

	static parse(queryString: string): PlacesQuery;

	aroundLatLng: LatLng;

	aroundLatLngViaIP: number;

	aroundRadius: number;

	countries: NSArray<string>;

	highlightPostTag: string;

	highlightPreTag: string;

	hitsPerPage: number;

	language: string;

	query: string;

	type: string;

	static readonly aroundRadiusAll: number;

	constructor(o: { copy: PlacesQuery; });

	constructor(o: { query: string; });

	initWithCopy(copy: PlacesQuery): this;

	initWithQuery(query: string): this;
}

declare class Query extends AbstractQuery {

	static alloc(): Query; // inherited from NSObject

	static new(): Query; // inherited from NSObject

	static parse(queryString: string): Query;

	advancedSyntax: number;

	allowTyposOnNumericTokens: number;

	alternativesAsExact: NSArray<string>;

	analytics: number;

	analyticsTags: NSArray<string>;

	aroundLatLng: LatLng;

	aroundLatLngViaIP: number;

	aroundPrecision: AroundPrecision;

	aroundRadius: number;

	attributesToHighlight: NSArray<string>;

	attributesToRetrieve: NSArray<string>;

	attributesToSnippet: NSArray<string>;

	clickAnalytics: number;

	disableExactOnAttributes: NSArray<string>;

	disableTypoToleranceOnAttributes: NSArray<string>;

	distinct: number;

	enablePersonalization: number;

	enableRules: number;

	exactOnSingleWordQuery: string;

	facetFilters: NSArray<any>;

	facetingAfterDistinct: number;

	facets: NSArray<string>;

	filters: string;

	getRankingInfo: number;

	highlightPostTag: string;

	highlightPreTag: string;

	hitsPerPage: number;

	ignorePlurals: any;

	insideBoundingBox: NSArray<GeoRect>;

	insidePolygon: NSArray<NSArray<LatLng>>;

	length: number;

	maxFacetHits: number;

	maxValuesPerFacet: number;

	minProximity: number;

	minWordSizefor1Typo: number;

	minWordSizefor2Typos: number;

	minimumAroundRadius: number;

	numericFilters: NSArray<any>;

	offset: number;

	optionalFilters: NSArray<string>;

	optionalWords: NSArray<string>;

	page: number;

	percentileComputation: number;

	query: string;

	queryType: string;

	removeStopWords: any;

	removeWordsIfNoResults: string;

	replaceSynonymsInHighlight: number;

	responseFields: NSArray<string>;

	restrictHighlightAndSnippetArrays: number;

	restrictSearchableAttributes: NSArray<string>;

	ruleContexts: NSArray<string>;

	snippetEllipsisText: string;

	sortFacetValuesBy: string;

	sumOrFiltersScores: number;

	synonyms: number;

	tagFilters: NSArray<any>;

	typoTolerance: string;

	static readonly aroundRadiusAll: number;

	constructor(o: { copy: Query; });

	constructor(o: { query: string; });

	initWithCopy(copy: Query): this;

	initWithQuery(query: string): this;
}

declare class Range extends NSObject {

	static alloc(): Range; // inherited from NSObject

	static new(): Range; // inherited from NSObject

	static rangeWithFromValue(from: number, value: number): Range;

	readonly from: number;

	readonly value: number;

	constructor(o: { from: number; value: number; });

	initFromValue(from: number, value: number): this;
}

declare class RequestOptions extends NSObject implements NSCopying {

	static alloc(): RequestOptions; // inherited from NSObject

	static new(): RequestOptions; // inherited from NSObject

	headers: NSDictionary<string, string>;

	urlParameters: NSDictionary<string, string>;

	constructor(o: { headers: NSDictionary<string, string>; urlParameters: NSDictionary<string, string>; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithHeadersUrlParameters(headers: NSDictionary<string, string>, urlParameters: NSDictionary<string, string>): this;
}

interface Searchable {

	searchDisjunctiveFacetingDisjunctiveFacetsRefinementsRequestOptionsCompletionHandler(query: Query, disjunctiveFacets: NSArray<string> | string[], refinements: NSDictionary<string, NSArray<string>>, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	searchForFacetValuesOfMatchingQueryRequestOptionsCompletionHandler(facetName: string, text: string, query: Query, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;

	searchRequestOptionsCompletionHandler(query: Query, requestOptions: RequestOptions, completionHandler: (p1: NSDictionary<string, any>, p2: NSError) => void): NSOperation;
}
declare var Searchable: {

	prototype: Searchable;
};
