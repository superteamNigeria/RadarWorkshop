"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'underdog/2.0.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * This endpoint allows you to retrieve a paginated list of all your Projects.
     *
     * @summary List all Projects
     * @throws FetchError<401, types.GetV2ProjectsResponse401> Unauthorized
     */
    SDK.prototype.getV2Projects = function (metadata) {
        return this.core.fetch('/v2/projects', 'get', metadata);
    };
    /**
     * This endpoint allows you to create a new Project.
     *
     * @summary Create a Project
     * @throws FetchError<401, types.PostV2ProjectsResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2ProjectsResponse403> Forbidden
     * @throws FetchError<404, types.PostV2ProjectsResponse404> Not Found
     */
    SDK.prototype.postV2Projects = function (body) {
        return this.core.fetch('/v2/projects', 'post', body);
    };
    /**
     * This endpoint allows you to search Projects with a query.
     *
     * @summary Search Projects
     * @throws FetchError<401, types.GetV2ProjectsSearchResponse401> Unauthorized
     */
    SDK.prototype.getV2ProjectsSearch = function (metadata) {
        return this.core.fetch('/v2/projects/search', 'get', metadata);
    };
    /**
     * This endpoint allows you to retrieve a Project by providing the Project ID.
     *
     * @summary Retrieve a Project
     * @throws FetchError<401, types.GetV2ProjectsProjectidResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsProjectidResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsProjectidResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsProjectid = function (metadata) {
        return this.core.fetch('/v2/projects/{projectId}', 'get', metadata);
    };
    /**
     * This endpoint allows you to perform an update on a Project.
     *
     * @summary Update a Project
     * @throws FetchError<401, types.PutV2ProjectsProjectidResponse401> Unauthorized
     * @throws FetchError<403, types.PutV2ProjectsProjectidResponse403> Forbidden
     * @throws FetchError<404, types.PutV2ProjectsProjectidResponse404> Not Found
     */
    SDK.prototype.putV2ProjectsProjectid = function (body, metadata) {
        return this.core.fetch('/v2/projects/{projectId}', 'put', body, metadata);
    };
    SDK.prototype.patchV2ProjectsProjectid = function (body, metadata) {
        return this.core.fetch('/v2/projects/{projectId}', 'patch', body, metadata);
    };
    /**
     * This endpoint allows you to retrieve stats about the NFTs in a Project.
     *
     * @summary Retrieve Project Stats
     * @throws FetchError<401, types.GetV2ProjectsProjectidStatsResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsProjectidStatsResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsProjectidStatsResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsProjectidStats = function (metadata) {
        return this.core.fetch('/v2/projects/{projectId}/stats', 'get', metadata);
    };
    /**
     * This endpoint allows you to withdraw Project royalties.
     *
     * @summary Withdraw Project Royalties
     * @throws FetchError<401, types.PostV2ProjectsProjectidRoyaltiesWithdrawResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2ProjectsProjectidRoyaltiesWithdrawResponse403> Forbidden
     * @throws FetchError<404, types.PostV2ProjectsProjectidRoyaltiesWithdrawResponse404> Not Found
     */
    SDK.prototype.postV2ProjectsProjectidRoyaltiesWithdraw = function (body, metadata) {
        return this.core.fetch('/v2/projects/{projectId}/royalties/withdraw', 'post', body, metadata);
    };
    /**
     * This endpoint allows you to create an NFT.
     *
     * @summary Create an NFT
     * @throws FetchError<401, types.PostV2ProjectsProjectidNftsResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2ProjectsProjectidNftsResponse403> Forbidden
     * @throws FetchError<404, types.PostV2ProjectsProjectidNftsResponse404> Not Found
     */
    SDK.prototype.postV2ProjectsProjectidNfts = function (body, metadata) {
        return this.core.fetch('/v2/projects/{projectId}/nfts', 'post', body, metadata);
    };
    /**
     * This endpoints allows you to retrieve a paginated list of all NFTs in a Project.
     *
     * @summary List all NFTs
     * @throws FetchError<401, types.GetV2ProjectsProjectidNftsResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsProjectidNftsResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsProjectidNftsResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsProjectidNfts = function (metadata) {
        return this.core.fetch('/v2/projects/{projectId}/nfts', 'get', metadata);
    };
    /**
     * This endpoint allows you to lazily create an NFT.
     *
     * @summary Lazy Create an NFT
     * @throws FetchError<401, types.PostV2ProjectsProjectidNftsLazyResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2ProjectsProjectidNftsLazyResponse403> Forbidden
     * @throws FetchError<404, types.PostV2ProjectsProjectidNftsLazyResponse404> Not Found
     */
    SDK.prototype.postV2ProjectsProjectidNftsLazy = function (body, metadata) {
        return this.core.fetch('/v2/projects/{projectId}/nfts/lazy', 'post', body, metadata);
    };
    /**
     * This endpoint allows you to create a batch of NFTs.
     *
     * @summary Create NFTs
     * @throws FetchError<401, types.PostV2ProjectsProjectidNftsBatchResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2ProjectsProjectidNftsBatchResponse403> Forbidden
     * @throws FetchError<404, types.PostV2ProjectsProjectidNftsBatchResponse404> Not Found
     */
    SDK.prototype.postV2ProjectsProjectidNftsBatch = function (body, metadata) {
        return this.core.fetch('/v2/projects/{projectId}/nfts/batch', 'post', body, metadata);
    };
    /**
     * This endpoints allows you to search a paginated list of NFTs by owner, mint, or claimer
     * address.
     *
     * @summary Search NFTs
     * @throws FetchError<401, types.GetV2ProjectsProjectidNftsSearchResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsProjectidNftsSearchResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsProjectidNftsSearchResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsProjectidNftsSearch = function (metadata) {
        return this.core.fetch('/v2/projects/{projectId}/nfts/search', 'get', metadata);
    };
    /**
     * This endpoint allows you to retrieve an NFT by ID.
     *
     * @summary Retrieve an NFT
     * @throws FetchError<401, types.GetV2ProjectsProjectidNftsNftidResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsProjectidNftsNftidResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsProjectidNftsNftidResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsProjectidNftsNftid = function (metadata) {
        return this.core.fetch('/v2/projects/{projectId}/nfts/{nftId}', 'get', metadata);
    };
    /**
     * This endpoint allows you to perform an update on an NFT.
     *
     * @summary Update an NFT
     * @throws FetchError<401, types.PutV2ProjectsProjectidNftsNftidResponse401> Unauthorized
     * @throws FetchError<403, types.PutV2ProjectsProjectidNftsNftidResponse403> Forbidden
     * @throws FetchError<404, types.PutV2ProjectsProjectidNftsNftidResponse404> Not Found
     */
    SDK.prototype.putV2ProjectsProjectidNftsNftid = function (body, metadata) {
        return this.core.fetch('/v2/projects/{projectId}/nfts/{nftId}', 'put', body, metadata);
    };
    /**
     * This endpoint allows you to perform a partial update on an NFT.
     *
     * @summary Partial Update an NFT
     * @throws FetchError<401, types.PatchV2ProjectsProjectidNftsNftidResponse401> Unauthorized
     * @throws FetchError<403, types.PatchV2ProjectsProjectidNftsNftidResponse403> Forbidden
     * @throws FetchError<404, types.PatchV2ProjectsProjectidNftsNftidResponse404> Not Found
     */
    SDK.prototype.patchV2ProjectsProjectidNftsNftid = function (body, metadata) {
        return this.core.fetch('/v2/projects/{projectId}/nfts/{nftId}', 'patch', body, metadata);
    };
    /**
     * This endpoint allows you to transfer an NFT.
     *
     * @summary Transfer an NFT
     * @throws FetchError<401, types.PostV2ProjectsProjectidNftsNftidTransferResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2ProjectsProjectidNftsNftidTransferResponse403> Forbidden
     * @throws FetchError<404, types.PostV2ProjectsProjectidNftsNftidTransferResponse404> Not Found
     */
    SDK.prototype.postV2ProjectsProjectidNftsNftidTransfer = function (body, metadata) {
        return this.core.fetch('/v2/projects/{projectId}/nfts/{nftId}/transfer', 'post', body, metadata);
    };
    /**
     * This endpoint allows you to burn an NFT.
     *
     * @summary Burn an NFT
     * @throws FetchError<401, types.PostV2ProjectsProjectidNftsNftidBurnResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2ProjectsProjectidNftsNftidBurnResponse403> Forbidden
     * @throws FetchError<404, types.PostV2ProjectsProjectidNftsNftidBurnResponse404> Not Found
     */
    SDK.prototype.postV2ProjectsProjectidNftsNftidBurn = function (metadata) {
        return this.core.fetch('/v2/projects/{projectId}/nfts/{nftId}/burn', 'post', metadata);
    };
    SDK.prototype.postV2ProjectsProjectidSfts = function (body, metadata) {
        return this.core.fetch('/v2/projects/{projectId}/sfts', 'post', body, metadata);
    };
    SDK.prototype.postV2ProjectsProjectidSftsBatch = function (body, metadata) {
        return this.core.fetch('/v2/projects/{projectId}/sfts/batch', 'post', body, metadata);
    };
    /**
     * This endpoint allows you to create a new Project.
     *
     * @summary Create a Project
     * @throws FetchError<401, types.PostV2ProjectsTResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2ProjectsTResponse403> Forbidden
     * @throws FetchError<404, types.PostV2ProjectsTResponse404> Not Found
     */
    SDK.prototype.postV2ProjectsT = function (body) {
        return this.core.fetch('/v2/projects/t', 'post', body);
    };
    /**
     * This endpoint allows you to retrieve a Project by providing the Project ID.
     *
     * @summary Retrieve a Project
     * @throws FetchError<401, types.GetV2ProjectsTProjectidResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsTProjectidResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsTProjectidResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsTProjectid = function (metadata) {
        return this.core.fetch('/v2/projects/t/{projectId}', 'get', metadata);
    };
    /**
     * This endpoint allows you to perform an update on a Project.
     *
     * @summary Update a Project
     * @throws FetchError<401, types.PutV2ProjectsTProjectidResponse401> Unauthorized
     * @throws FetchError<403, types.PutV2ProjectsTProjectidResponse403> Forbidden
     * @throws FetchError<404, types.PutV2ProjectsTProjectidResponse404> Not Found
     */
    SDK.prototype.putV2ProjectsTProjectid = function (body, metadata) {
        return this.core.fetch('/v2/projects/t/{projectId}', 'put', body, metadata);
    };
    SDK.prototype.patchV2ProjectsTProjectid = function (body, metadata) {
        return this.core.fetch('/v2/projects/t/{projectId}', 'patch', body, metadata);
    };
    /**
     * This endpoint allows you to retrieve stats about the NFTs in a Project.
     *
     * @summary Retrieve Project Stats
     * @throws FetchError<401, types.GetV2ProjectsTProjectidStatsResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsTProjectidStatsResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsTProjectidStatsResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsTProjectidStats = function (metadata) {
        return this.core.fetch('/v2/projects/t/{projectId}/stats', 'get', metadata);
    };
    /**
     * This endpoints allows you to retrieve a paginated list of all NFTs in a Project.
     *
     * @summary List all NFTs
     * @throws FetchError<401, types.GetV2ProjectsTProjectidNftsResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsTProjectidNftsResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsTProjectidNftsResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsTProjectidNfts = function (metadata) {
        return this.core.fetch('/v2/projects/t/{projectId}/nfts', 'get', metadata);
    };
    /**
     * This endpoint allows you to create a new NFT.
     *
     * @summary Create an NFT
     * @throws FetchError<401, types.PostV2ProjectsTProjectidNftsResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2ProjectsTProjectidNftsResponse403> Forbidden
     * @throws FetchError<404, types.PostV2ProjectsTProjectidNftsResponse404> Not Found
     */
    SDK.prototype.postV2ProjectsTProjectidNfts = function (body, metadata) {
        return this.core.fetch('/v2/projects/t/{projectId}/nfts', 'post', body, metadata);
    };
    /**
     * This endpoints allows you to search a paginated list of NFTs by owner, mint, or claimer
     * address.
     *
     * @summary Search NFTs
     * @throws FetchError<401, types.GetV2ProjectsTProjectidNftsSearchResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsTProjectidNftsSearchResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsTProjectidNftsSearchResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsTProjectidNftsSearch = function (metadata) {
        return this.core.fetch('/v2/projects/t/{projectId}/nfts/search', 'get', metadata);
    };
    /**
     * This endpoint allows you to retrieve an NFT by NFT ID.
     *
     * @summary Retrieve an NFT
     * @throws FetchError<401, types.GetV2ProjectsTProjectidNftsNftidResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsTProjectidNftsNftidResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsTProjectidNftsNftidResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsTProjectidNftsNftid = function (metadata) {
        return this.core.fetch('/v2/projects/t/{projectId}/nfts/{nftId}', 'get', metadata);
    };
    /**
     * This endpoint allows you to perform an update on an NFT.
     *
     * @summary Update an NFT
     * @throws FetchError<401, types.PutV2ProjectsTProjectidNftsNftidResponse401> Unauthorized
     * @throws FetchError<403, types.PutV2ProjectsTProjectidNftsNftidResponse403> Forbidden
     * @throws FetchError<404, types.PutV2ProjectsTProjectidNftsNftidResponse404> Not Found
     */
    SDK.prototype.putV2ProjectsTProjectidNftsNftid = function (body, metadata) {
        return this.core.fetch('/v2/projects/t/{projectId}/nfts/{nftId}', 'put', body, metadata);
    };
    SDK.prototype.patchV2ProjectsTProjectidNftsNftid = function (body, metadata) {
        return this.core.fetch('/v2/projects/t/{projectId}/nfts/{nftId}', 'patch', body, metadata);
    };
    /**
     * This endpoint allows you to create a new Project.
     *
     * @summary Create a Project
     * @throws FetchError<401, types.PostV2ProjectsNResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2ProjectsNResponse403> Forbidden
     * @throws FetchError<404, types.PostV2ProjectsNResponse404> Not Found
     */
    SDK.prototype.postV2ProjectsN = function (body) {
        return this.core.fetch('/v2/projects/n', 'post', body);
    };
    /**
     * This endpoint allows you to retrieve a Project by Project ID.
     *
     * @summary Retrieve a Project
     * @throws FetchError<401, types.GetV2ProjectsNProjectidResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsNProjectidResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsNProjectidResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsNProjectid = function (metadata) {
        return this.core.fetch('/v2/projects/n/{projectId}', 'get', metadata);
    };
    /**
     * This endpoint allows you to perform an update on a Project.
     *
     * @summary Update a Project
     * @throws FetchError<401, types.PutV2ProjectsNProjectidResponse401> Unauthorized
     * @throws FetchError<403, types.PutV2ProjectsNProjectidResponse403> Forbidden
     * @throws FetchError<404, types.PutV2ProjectsNProjectidResponse404> Not Found
     */
    SDK.prototype.putV2ProjectsNProjectid = function (body, metadata) {
        return this.core.fetch('/v2/projects/n/{projectId}', 'put', body, metadata);
    };
    SDK.prototype.patchV2ProjectsNProjectid = function (body, metadata) {
        return this.core.fetch('/v2/projects/n/{projectId}', 'patch', body, metadata);
    };
    /**
     * This endpoint allows you to retrieve stats about the NFTs in a Project.
     *
     * @summary Retrieve Project Stats
     * @throws FetchError<401, types.GetV2ProjectsNProjectidStatsResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsNProjectidStatsResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsNProjectidStatsResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsNProjectidStats = function (metadata) {
        return this.core.fetch('/v2/projects/n/{projectId}/stats', 'get', metadata);
    };
    /**
     * This endpoints allows you to retrieve a paginated list of all NFTs in a Project.
     *
     * @summary List all NFTs
     * @throws FetchError<401, types.GetV2ProjectsNProjectidNftsResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsNProjectidNftsResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsNProjectidNftsResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsNProjectidNfts = function (metadata) {
        return this.core.fetch('/v2/projects/n/{projectId}/nfts', 'get', metadata);
    };
    /**
     * This endpoint allows you to create a new NFT.
     *
     * @summary Create an NFT
     * @throws FetchError<401, types.PostV2ProjectsNProjectidNftsResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2ProjectsNProjectidNftsResponse403> Forbidden
     * @throws FetchError<404, types.PostV2ProjectsNProjectidNftsResponse404> Not Found
     */
    SDK.prototype.postV2ProjectsNProjectidNfts = function (body, metadata) {
        return this.core.fetch('/v2/projects/n/{projectId}/nfts', 'post', body, metadata);
    };
    /**
     * This endpoints allows you to search a paginated list of NFTs by owner, mint, or claimer
     * address.
     *
     * @summary Search NFTs
     * @throws FetchError<401, types.GetV2ProjectsNProjectidNftsSearchResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsNProjectidNftsSearchResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsNProjectidNftsSearchResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsNProjectidNftsSearch = function (metadata) {
        return this.core.fetch('/v2/projects/n/{projectId}/nfts/search', 'get', metadata);
    };
    /**
     * This endpoint allows you to retrieve an NFT by NFT ID.
     *
     * @summary Retrieve an NFT
     * @throws FetchError<401, types.GetV2ProjectsNProjectidNftsNftidResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsNProjectidNftsNftidResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsNProjectidNftsNftidResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsNProjectidNftsNftid = function (metadata) {
        return this.core.fetch('/v2/projects/n/{projectId}/nfts/{nftId}', 'get', metadata);
    };
    /**
     * This endpoint allows you to perform an update on an NFT.
     *
     * @summary Update an NFT
     * @throws FetchError<401, types.PutV2ProjectsNProjectidNftsNftidResponse401> Unauthorized
     * @throws FetchError<403, types.PutV2ProjectsNProjectidNftsNftidResponse403> Forbidden
     * @throws FetchError<404, types.PutV2ProjectsNProjectidNftsNftidResponse404> Not Found
     */
    SDK.prototype.putV2ProjectsNProjectidNftsNftid = function (body, metadata) {
        return this.core.fetch('/v2/projects/n/{projectId}/nfts/{nftId}', 'put', body, metadata);
    };
    SDK.prototype.patchV2ProjectsNProjectidNftsNftid = function (body, metadata) {
        return this.core.fetch('/v2/projects/n/{projectId}/nfts/{nftId}', 'patch', body, metadata);
    };
    /**
     * This endpoint generates a claim link for your NFT.
     *
     * @summary Generate NFT Claim Link
     * @throws FetchError<401, types.GetV2ProjectsNProjectidNftsNftidClaimResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2ProjectsNProjectidNftsNftidClaimResponse403> Forbidden
     * @throws FetchError<404, types.GetV2ProjectsNProjectidNftsNftidClaimResponse404> Not Found
     */
    SDK.prototype.getV2ProjectsNProjectidNftsNftidClaim = function (metadata) {
        return this.core.fetch('/v2/projects/n/{projectId}/nfts/{nftId}/claim', 'get', metadata);
    };
    /**
     * This endpoint allows you to revoke a non-transferable NFT.
     *
     * @summary Revoke an NFT
     * @throws FetchError<401, types.PostV2ProjectsNProjectidNftsNftidRevokeResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2ProjectsNProjectidNftsNftidRevokeResponse403> Forbidden
     * @throws FetchError<404, types.PostV2ProjectsNProjectidNftsNftidRevokeResponse404> Not Found
     */
    SDK.prototype.postV2ProjectsNProjectidNftsNftidRevoke = function (metadata) {
        return this.core.fetch('/v2/projects/n/{projectId}/nfts/{nftId}/revoke', 'post', metadata);
    };
    /**
     * This endpoint allows you to burn a non-transferable NFT.
     *
     * @summary Burn an NFT
     * @throws FetchError<401, types.PostV2ProjectsNProjectidNftsNftidBurnResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2ProjectsNProjectidNftsNftidBurnResponse403> Forbidden
     * @throws FetchError<404, types.PostV2ProjectsNProjectidNftsNftidBurnResponse404> Not Found
     */
    SDK.prototype.postV2ProjectsNProjectidNftsNftidBurn = function (metadata) {
        return this.core.fetch('/v2/projects/n/{projectId}/nfts/{nftId}/burn', 'post', metadata);
    };
    /**
     * Create an Inscription
     *
     */
    SDK.prototype.postV2Inscriptions = function (body) {
        return this.core.fetch('/v2/inscriptions', 'post', body);
    };
    /**
     * List Inscriptions
     *
     */
    SDK.prototype.getV2Inscriptions = function (metadata) {
        return this.core.fetch('/v2/inscriptions', 'get', metadata);
    };
    /**
     * Retrieve an Inscription
     *
     */
    SDK.prototype.getV2InscriptionsAddress = function (metadata) {
        return this.core.fetch('/v2/inscriptions/{address}', 'get', metadata);
    };
    /**
     * Retrieve an NFT
     *
     * @throws FetchError<404, types.GetV2NftsMintaddressResponse404> Not Found
     */
    SDK.prototype.getV2NftsMintaddress = function (metadata) {
        return this.core.fetch('/v2/nfts/{mintAddress}', 'get', metadata);
    };
    SDK.prototype.postV2NftsMintaddressClaim = function (body, metadata) {
        return this.core.fetch('/v2/nfts/{mintAddress}/claim', 'post', body, metadata);
    };
    /**
     * List NFT Collections
     *
     */
    SDK.prototype.getV2Collections = function (metadata) {
        return this.core.fetch('/v2/collections', 'get', metadata);
    };
    /**
     * Retrieve NFT Collection
     *
     * @throws FetchError<404, types.GetV2CollectionsMintaddressResponse404> Not Found
     */
    SDK.prototype.getV2CollectionsMintaddress = function (metadata) {
        return this.core.fetch('/v2/collections/{mintAddress}', 'get', metadata);
    };
    /**
     * List Domains
     *
     */
    SDK.prototype.getV2Domains = function (metadata) {
        return this.core.fetch('/v2/domains', 'get', metadata);
    };
    /**
     * Retrieve a Domain
     *
     */
    SDK.prototype.getV2DomainsNamespace = function (metadata) {
        return this.core.fetch('/v2/domains/{namespace}', 'get', metadata);
    };
    /**
     * List all Orgs
     *
     * @throws FetchError<401, types.GetV2OrgsResponse401> Unauthorized
     */
    SDK.prototype.getV2Orgs = function (metadata) {
        return this.core.fetch('/v2/orgs', 'get', metadata);
    };
    /**
     * This endpoint allows you to retrieve stats about the Org.
     *
     * @summary Retrieve Org Stats
     * @throws FetchError<401, types.GetV2OrgsOrgidStatsResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2OrgsOrgidStatsResponse403> Forbidden
     * @throws FetchError<404, types.GetV2OrgsOrgidStatsResponse404> Not Found
     */
    SDK.prototype.getV2OrgsOrgidStats = function (metadata) {
        return this.core.fetch('/v2/orgs/{orgId}/stats', 'get', metadata);
    };
    /**
     * This endpoint allows you to retrieve a paginated list of all your Transactions.
     *
     * @summary List all Transactions
     * @throws FetchError<401, types.GetV2TransactionsResponse401> Unauthorized
     */
    SDK.prototype.getV2Transactions = function (metadata) {
        return this.core.fetch('/v2/transactions', 'get', metadata);
    };
    /**
     * This endpoint allows you to retrieve a transaction by providing a transaction ID.
     *
     * @summary Retrieve a Transaction
     * @throws FetchError<401, types.GetV2TransactionsTransactionidResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2TransactionsTransactionidResponse403> Forbidden
     * @throws FetchError<404, types.GetV2TransactionsTransactionidResponse404> Not Found
     */
    SDK.prototype.getV2TransactionsTransactionid = function (metadata) {
        return this.core.fetch('/v2/transactions/{transactionId}', 'get', metadata);
    };
    /**
     * This endpoint allows you to retry a transaction with the given transaction ID.
     *
     * @summary Retry a Transaction
     * @throws FetchError<401, types.PostV2TransactionsTransactionidRetryResponse401> Unauthorized
     * @throws FetchError<403, types.PostV2TransactionsTransactionidRetryResponse403> Forbidden
     * @throws FetchError<404, types.PostV2TransactionsTransactionidRetryResponse404> Not Found
     */
    SDK.prototype.postV2TransactionsTransactionidRetry = function (metadata) {
        return this.core.fetch('/v2/transactions/{transactionId}/retry', 'post', metadata);
    };
    /**
     * This endpoint allows you to retrieve a paginated list of all your Requests.
     *
     * @summary List all Requests
     * @throws FetchError<401, types.GetV2RequestsResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2RequestsResponse403> Forbidden
     */
    SDK.prototype.getV2Requests = function (metadata) {
        return this.core.fetch('/v2/requests', 'get', metadata);
    };
    /**
     * This endpoint allows you to retrieve a request by providing a request ID.
     *
     * @summary Retrieve a Request
     * @throws FetchError<401, types.GetV2RequestsRequestidResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2RequestsRequestidResponse403> Forbidden
     * @throws FetchError<404, types.GetV2RequestsRequestidResponse404> Not Found
     */
    SDK.prototype.getV2RequestsRequestid = function (metadata) {
        return this.core.fetch('/v2/requests/{requestId}', 'get', metadata);
    };
    /**
     * This endpoint allows you to create a new Webhook.
     *
     * @summary Create a Webhook
     * @throws FetchError<401, types.PostV2WebhooksResponse401> Unauthorized
     */
    SDK.prototype.postV2Webhooks = function (body) {
        return this.core.fetch('/v2/webhooks', 'post', body);
    };
    /**
     * This endpoint allows you to retrieve a paginated list of all your Webhooks.
     *
     * @summary List all Webhooks
     * @throws FetchError<401, types.GetV2WebhooksResponse401> Unauthorized
     */
    SDK.prototype.getV2Webhooks = function (metadata) {
        return this.core.fetch('/v2/webhooks', 'get', metadata);
    };
    /**
     * This endpoint allows you to retrieve a Webhook by providing a Webhook ID.
     *
     * @summary Retrieve a Webhook
     * @throws FetchError<401, types.GetV2WebhooksWebhookidResponse401> Unauthorized
     * @throws FetchError<403, types.GetV2WebhooksWebhookidResponse403> Forbidden
     * @throws FetchError<404, types.GetV2WebhooksWebhookidResponse404> Not Found
     */
    SDK.prototype.getV2WebhooksWebhookid = function (metadata) {
        return this.core.fetch('/v2/webhooks/{webhookId}', 'get', metadata);
    };
    /**
     * This endpoint allows you to delete a Webhook.
     *
     * @summary Delete a Webhook
     * @throws FetchError<401, types.DeleteV2WebhooksWebhookidResponse401> Unauthorized
     * @throws FetchError<403, types.DeleteV2WebhooksWebhookidResponse403> Forbidden
     * @throws FetchError<404, types.DeleteV2WebhooksWebhookidResponse404> Not Found
     */
    SDK.prototype.deleteV2WebhooksWebhookid = function (metadata) {
        return this.core.fetch('/v2/webhooks/{webhookId}', 'delete', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
