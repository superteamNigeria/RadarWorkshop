declare const DeleteV2WebhooksWebhookid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhookId: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["webhookId"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Collections: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["ownerAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly mintAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                            readonly transferable: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in this project can be transferred";
                            };
                            readonly compressed: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in this project are compressed";
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly description: "Name stored as on-chain metadata";
                                readonly examples: readonly ["Underdog NFT"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly maxLength: 10;
                                readonly description: "Symbol stored as on-chain metadata";
                                readonly examples: readonly ["UPDG"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description stored in the metadata";
                                readonly examples: readonly ["I minted this NFT with the Underdog API"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                            };
                            readonly externalUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to an external URL defining the asset";
                                readonly examples: readonly ["https://app.underdogprotocol.com"];
                            };
                            readonly animationUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to the asset's animation.";
                                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                            };
                            readonly attributes: {
                                readonly type: "object";
                                readonly additionalProperties: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "number";
                                    }];
                                };
                                readonly description: "Key-value pairs of your NFT attributes";
                            };
                        };
                        readonly required: readonly ["mintAddress", "status", "name", "image"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2CollectionsMintaddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["mintAddress"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly identifier: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly namespace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project can be transferred";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project are compressed";
                };
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly nfts: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly maxLength: 32;
                                        readonly description: "Name stored as on-chain metadata";
                                        readonly examples: readonly ["Underdog NFT"];
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                        readonly maxLength: 10;
                                        readonly description: "Symbol stored as on-chain metadata";
                                        readonly examples: readonly ["UPDG"];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Description stored in the metadata";
                                        readonly examples: readonly ["I minted this NFT with the Underdog API"];
                                    };
                                    readonly image: {
                                        readonly type: "string";
                                        readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                                        readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                                    };
                                    readonly animationUrl: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the asset's animation.";
                                        readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                                    };
                                    readonly externalUrl: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to an external URL defining the asset";
                                        readonly examples: readonly ["https://app.underdogprotocol.com"];
                                    };
                                    readonly attributes: {
                                        readonly type: "object";
                                        readonly additionalProperties: {
                                            readonly anyOf: readonly [{
                                                readonly type: "string";
                                            }, {
                                                readonly type: "number";
                                            }];
                                        };
                                        readonly description: "Key-value pairs of your NFT attributes";
                                    };
                                    readonly transferable: {
                                        readonly type: "boolean";
                                        readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                                    };
                                    readonly compressed: {
                                        readonly type: "boolean";
                                        readonly description: "Whether or not the NFTs in the Project are compressed";
                                    };
                                    readonly mintAddress: {
                                        readonly type: "string";
                                        readonly description: "Base-58 encoded string representing an on-chain address";
                                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                                    };
                                    readonly ownerAddress: {
                                        readonly type: "string";
                                        readonly description: "Wallet address for the NFT's owner";
                                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                                    };
                                    readonly claimerAddress: {
                                        readonly type: "string";
                                        readonly description: "Wallet address allowed to claim the NFT";
                                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["name", "image", "mintAddress", "status"];
                            };
                        };
                        readonly page: {
                            readonly type: "number";
                            readonly description: "Page number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly description: "Number per page";
                            readonly examples: readonly [10];
                        };
                        readonly totalPages: {
                            readonly type: "number";
                            readonly description: "Total number of pages";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "number";
                            readonly description: "Total number of results";
                            readonly examples: readonly [1];
                        };
                    };
                    readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
                };
            };
            readonly required: readonly ["mintAddress", "status", "name", "image", "nfts"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Domains: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly authority: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly namespace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly address: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly authority: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly namespace: {
                                readonly type: "string";
                            };
                            readonly expiredAt: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "string";
                                }, {
                                    readonly nullable: true;
                                }];
                            };
                        };
                        readonly required: readonly ["address", "authority", "namespace"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2DomainsNamespace: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly namespace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["namespace"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly authority: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly namespace: {
                    readonly type: "string";
                };
                readonly expiredAt: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }, {
                        readonly nullable: true;
                    }];
                };
            };
            readonly required: readonly ["address", "authority", "namespace"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Inscriptions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly address: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly authority: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly superAdminAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly orgId: {
                                readonly type: "integer";
                            };
                            readonly value: {
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "string";
                                }];
                            };
                            readonly updatedAt: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "string";
                                }];
                            };
                        };
                        readonly required: readonly ["address", "authority", "superAdminAddress", "orgId", "value", "createdAt", "updatedAt"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2InscriptionsAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["address"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly authority: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly superAdminAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly orgId: {
                    readonly type: "integer";
                };
                readonly value: {
                    readonly type: "string";
                };
                readonly createdAt: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly updatedAt: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }];
                };
            };
            readonly required: readonly ["address", "authority", "superAdminAddress", "orgId", "value", "createdAt", "updatedAt"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2NftsMintaddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["mintAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly id: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address for the NFT's owner";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly claimerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address allowed to claim the NFT";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Orgs: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                            };
                            readonly superAdminAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly minLength: 3;
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                            readonly balance: {
                                readonly type: "number";
                            };
                            readonly priority: {
                                readonly type: "integer";
                                readonly enum: readonly [0, 1, 2];
                                readonly description: "`1` `2`";
                            };
                            readonly recharge: {
                                readonly type: readonly ["object", "null"];
                                readonly properties: {
                                    readonly limit: {
                                        readonly type: "number";
                                        readonly minimum: 500;
                                        readonly maximum: 10000;
                                    };
                                    readonly amount: {
                                        readonly type: "number";
                                        readonly minimum: 500;
                                        readonly maximum: 1000000;
                                    };
                                    readonly enabled: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly required: readonly ["limit", "amount", "enabled"];
                            };
                            readonly network: {
                                readonly type: "string";
                                readonly enum: readonly ["DEVNET", "LOCALNET", "MAINNET"];
                                readonly description: "`DEVNET` `LOCALNET` `MAINNET`";
                            };
                        };
                        readonly required: readonly ["id", "superAdminAddress", "name", "status", "balance", "priority", "network"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrgsOrgidStats: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orgId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["orgId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly nfts: {
                    readonly type: "number";
                };
                readonly projects: {
                    readonly type: "number";
                };
            };
            readonly required: readonly ["nfts", "projects"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Projects: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                            };
                            readonly mintAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly semifungible: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in this project are semifungible";
                            };
                            readonly transferable: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in this project can be transferred";
                            };
                            readonly compressed: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in this project are compressed";
                            };
                            readonly core: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in this project use mpl-core standard";
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                            readonly sellerFeeBasisPoints: {
                                readonly type: "integer";
                                readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                                readonly examples: readonly [100];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly description: "Name stored as on-chain metadata";
                                readonly examples: readonly ["Underdog NFT"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly maxLength: 10;
                                readonly description: "Symbol stored as on-chain metadata";
                                readonly examples: readonly ["UPDG"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description stored in the metadata";
                                readonly examples: readonly ["I minted this NFT with the Underdog API"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                            };
                            readonly animationUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to the asset's animation.";
                                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                            };
                            readonly externalUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to an external URL defining the asset";
                                readonly examples: readonly ["https://app.underdogprotocol.com"];
                            };
                            readonly attributes: {
                                readonly type: "object";
                                readonly additionalProperties: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "number";
                                    }];
                                };
                                readonly description: "Key-value pairs of your NFT attributes";
                            };
                        };
                        readonly required: readonly ["id", "mintAddress", "status", "sellerFeeBasisPoints", "name", "image"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsNProjectid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly semifungible: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project are semifungible";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project can be transferred";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project are compressed";
                };
                readonly core: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project use mpl-core standard";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly sellerFeeBasisPoints: {
                    readonly type: "integer";
                    readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                    readonly examples: readonly [100];
                };
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly nfts: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly maxLength: 32;
                                        readonly description: "Name stored as on-chain metadata";
                                        readonly examples: readonly ["Underdog NFT"];
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                        readonly maxLength: 10;
                                        readonly description: "Symbol stored as on-chain metadata";
                                        readonly examples: readonly ["UPDG"];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Description stored in the metadata";
                                        readonly examples: readonly ["I minted this NFT with the Underdog API"];
                                    };
                                    readonly image: {
                                        readonly type: "string";
                                        readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                                        readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                                    };
                                    readonly animationUrl: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the asset's animation.";
                                        readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                                    };
                                    readonly externalUrl: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to an external URL defining the asset";
                                        readonly examples: readonly ["https://app.underdogprotocol.com"];
                                    };
                                    readonly attributes: {
                                        readonly type: "object";
                                        readonly additionalProperties: {
                                            readonly anyOf: readonly [{
                                                readonly type: "string";
                                            }, {
                                                readonly type: "number";
                                            }];
                                        };
                                        readonly description: "Key-value pairs of your NFT attributes";
                                    };
                                    readonly id: {
                                        readonly type: "number";
                                        readonly description: "Unique ID for an NFT in a Project";
                                    };
                                    readonly projectId: {
                                        readonly type: "number";
                                        readonly description: "The ID of the Project the NFT is part of";
                                    };
                                    readonly transferable: {
                                        readonly type: "boolean";
                                        readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                                    };
                                    readonly compressed: {
                                        readonly type: "boolean";
                                        readonly description: "Whether or not the NFTs in the Project are compressed";
                                    };
                                    readonly mintAddress: {
                                        readonly type: "string";
                                        readonly description: "Base-58 encoded string representing an on-chain address";
                                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                                    };
                                    readonly ownerAddress: {
                                        readonly type: "string";
                                        readonly description: "Wallet address for the NFT's owner";
                                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                                    };
                                    readonly claimerAddress: {
                                        readonly type: "string";
                                        readonly description: "Wallet address allowed to claim the NFT";
                                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
                            };
                        };
                        readonly page: {
                            readonly type: "number";
                            readonly description: "Page number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly description: "Number per page";
                            readonly examples: readonly [10];
                        };
                        readonly totalPages: {
                            readonly type: "number";
                            readonly description: "Total number of pages";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "number";
                            readonly description: "Total number of results";
                            readonly examples: readonly [1];
                        };
                    };
                    readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
                };
            };
            readonly required: readonly ["id", "mintAddress", "status", "sellerFeeBasisPoints", "name", "image", "nfts"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsNProjectidNfts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly identifier: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly namespace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly description: "Name stored as on-chain metadata";
                                readonly examples: readonly ["Underdog NFT"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly maxLength: 10;
                                readonly description: "Symbol stored as on-chain metadata";
                                readonly examples: readonly ["UPDG"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description stored in the metadata";
                                readonly examples: readonly ["I minted this NFT with the Underdog API"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                            };
                            readonly animationUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to the asset's animation.";
                                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                            };
                            readonly externalUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to an external URL defining the asset";
                                readonly examples: readonly ["https://app.underdogprotocol.com"];
                            };
                            readonly attributes: {
                                readonly type: "object";
                                readonly additionalProperties: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "number";
                                    }];
                                };
                                readonly description: "Key-value pairs of your NFT attributes";
                            };
                            readonly id: {
                                readonly type: "number";
                                readonly description: "Unique ID for an NFT in a Project";
                            };
                            readonly projectId: {
                                readonly type: "number";
                                readonly description: "The ID of the Project the NFT is part of";
                            };
                            readonly transferable: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                            };
                            readonly compressed: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in the Project are compressed";
                            };
                            readonly mintAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly ownerAddress: {
                                readonly type: "string";
                                readonly description: "Wallet address for the NFT's owner";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly claimerAddress: {
                                readonly type: "string";
                                readonly description: "Wallet address allowed to claim the NFT";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsNProjectidNftsNftid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly id: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address for the NFT's owner";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly claimerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address allowed to claim the NFT";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsNProjectidNftsNftidClaim: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly link: {
                    readonly type: "string";
                };
                readonly mintAddress: {
                    readonly type: "string";
                };
                readonly claimerAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly otp: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["link", "mintAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsNProjectidNftsSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly search: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly query: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly description: "Name stored as on-chain metadata";
                                readonly examples: readonly ["Underdog NFT"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly maxLength: 10;
                                readonly description: "Symbol stored as on-chain metadata";
                                readonly examples: readonly ["UPDG"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description stored in the metadata";
                                readonly examples: readonly ["I minted this NFT with the Underdog API"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                            };
                            readonly animationUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to the asset's animation.";
                                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                            };
                            readonly externalUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to an external URL defining the asset";
                                readonly examples: readonly ["https://app.underdogprotocol.com"];
                            };
                            readonly attributes: {
                                readonly type: "object";
                                readonly additionalProperties: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "number";
                                    }];
                                };
                                readonly description: "Key-value pairs of your NFT attributes";
                            };
                            readonly id: {
                                readonly type: "number";
                                readonly description: "Unique ID for an NFT in a Project";
                            };
                            readonly projectId: {
                                readonly type: "number";
                                readonly description: "The ID of the Project the NFT is part of";
                            };
                            readonly transferable: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                            };
                            readonly compressed: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in the Project are compressed";
                            };
                            readonly mintAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly ownerAddress: {
                                readonly type: "string";
                                readonly description: "Wallet address for the NFT's owner";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly claimerAddress: {
                                readonly type: "string";
                                readonly description: "Wallet address allowed to claim the NFT";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsNProjectidStats: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly total: {
                    readonly type: "number";
                    readonly description: "Total number of assets in the Project";
                };
                readonly confirmed: {
                    readonly type: "number";
                    readonly description: "Number of confirmed assets";
                };
                readonly processing: {
                    readonly type: "number";
                    readonly description: "Number of assets being processed";
                };
                readonly pending: {
                    readonly type: "number";
                    readonly description: "Number of assets waiting to be processed";
                };
                readonly burned: {
                    readonly type: "number";
                    readonly description: "Number of burned assets";
                };
                readonly failed: {
                    readonly type: "number";
                    readonly description: "Number of assets failed";
                };
            };
            readonly required: readonly ["total", "confirmed", "processing", "pending", "burned", "failed"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsProjectid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly semifungible: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project are semifungible";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project can be transferred";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project are compressed";
                };
                readonly core: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project use mpl-core standard";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly sellerFeeBasisPoints: {
                    readonly type: "integer";
                    readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                    readonly examples: readonly [100];
                };
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly nfts: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly maxLength: 32;
                                        readonly description: "Name stored as on-chain metadata";
                                        readonly examples: readonly ["Underdog NFT"];
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                        readonly maxLength: 10;
                                        readonly description: "Symbol stored as on-chain metadata";
                                        readonly examples: readonly ["UPDG"];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Description stored in the metadata";
                                        readonly examples: readonly ["I minted this NFT with the Underdog API"];
                                    };
                                    readonly image: {
                                        readonly type: "string";
                                        readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                                        readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                                    };
                                    readonly animationUrl: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the asset's animation.";
                                        readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                                    };
                                    readonly externalUrl: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to an external URL defining the asset";
                                        readonly examples: readonly ["https://app.underdogprotocol.com"];
                                    };
                                    readonly attributes: {
                                        readonly type: "object";
                                        readonly additionalProperties: {
                                            readonly anyOf: readonly [{
                                                readonly type: "string";
                                            }, {
                                                readonly type: "number";
                                            }];
                                        };
                                        readonly description: "Key-value pairs of your NFT attributes";
                                    };
                                    readonly id: {
                                        readonly type: "number";
                                        readonly description: "Unique ID for an NFT in a Project";
                                    };
                                    readonly projectId: {
                                        readonly type: "number";
                                        readonly description: "The ID of the Project the NFT is part of";
                                    };
                                    readonly transferable: {
                                        readonly type: "boolean";
                                        readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                                    };
                                    readonly compressed: {
                                        readonly type: "boolean";
                                        readonly description: "Whether or not the NFTs in the Project are compressed";
                                    };
                                    readonly mintAddress: {
                                        readonly type: "string";
                                        readonly description: "Base-58 encoded string representing an on-chain address";
                                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                                    };
                                    readonly ownerAddress: {
                                        readonly type: "string";
                                        readonly description: "Wallet address for the NFT's owner";
                                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                                    };
                                    readonly claimerAddress: {
                                        readonly type: "string";
                                        readonly description: "Wallet address allowed to claim the NFT";
                                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
                            };
                        };
                        readonly page: {
                            readonly type: "number";
                            readonly description: "Page number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly description: "Number per page";
                            readonly examples: readonly [10];
                        };
                        readonly totalPages: {
                            readonly type: "number";
                            readonly description: "Total number of pages";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "number";
                            readonly description: "Total number of results";
                            readonly examples: readonly [1];
                        };
                    };
                    readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
                };
            };
            readonly required: readonly ["id", "mintAddress", "status", "sellerFeeBasisPoints", "name", "image", "nfts"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsProjectidNfts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly identifier: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly namespace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly description: "Name stored as on-chain metadata";
                                readonly examples: readonly ["Underdog NFT"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly maxLength: 10;
                                readonly description: "Symbol stored as on-chain metadata";
                                readonly examples: readonly ["UPDG"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description stored in the metadata";
                                readonly examples: readonly ["I minted this NFT with the Underdog API"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                            };
                            readonly animationUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to the asset's animation.";
                                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                            };
                            readonly externalUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to an external URL defining the asset";
                                readonly examples: readonly ["https://app.underdogprotocol.com"];
                            };
                            readonly attributes: {
                                readonly type: "object";
                                readonly additionalProperties: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "number";
                                    }];
                                };
                                readonly description: "Key-value pairs of your NFT attributes";
                            };
                            readonly id: {
                                readonly type: "number";
                                readonly description: "Unique ID for an NFT in a Project";
                            };
                            readonly projectId: {
                                readonly type: "number";
                                readonly description: "The ID of the Project the NFT is part of";
                            };
                            readonly transferable: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                            };
                            readonly compressed: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in the Project are compressed";
                            };
                            readonly mintAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly ownerAddress: {
                                readonly type: "string";
                                readonly description: "Wallet address for the NFT's owner";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly claimerAddress: {
                                readonly type: "string";
                                readonly description: "Wallet address allowed to claim the NFT";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsProjectidNftsNftid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly id: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address for the NFT's owner";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly claimerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address allowed to claim the NFT";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsProjectidNftsSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly search: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly query: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly description: "Name stored as on-chain metadata";
                                readonly examples: readonly ["Underdog NFT"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly maxLength: 10;
                                readonly description: "Symbol stored as on-chain metadata";
                                readonly examples: readonly ["UPDG"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description stored in the metadata";
                                readonly examples: readonly ["I minted this NFT with the Underdog API"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                            };
                            readonly animationUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to the asset's animation.";
                                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                            };
                            readonly externalUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to an external URL defining the asset";
                                readonly examples: readonly ["https://app.underdogprotocol.com"];
                            };
                            readonly attributes: {
                                readonly type: "object";
                                readonly additionalProperties: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "number";
                                    }];
                                };
                                readonly description: "Key-value pairs of your NFT attributes";
                            };
                            readonly id: {
                                readonly type: "number";
                                readonly description: "Unique ID for an NFT in a Project";
                            };
                            readonly projectId: {
                                readonly type: "number";
                                readonly description: "The ID of the Project the NFT is part of";
                            };
                            readonly transferable: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                            };
                            readonly compressed: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in the Project are compressed";
                            };
                            readonly mintAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly ownerAddress: {
                                readonly type: "string";
                                readonly description: "Wallet address for the NFT's owner";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly claimerAddress: {
                                readonly type: "string";
                                readonly description: "Wallet address allowed to claim the NFT";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsProjectidStats: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly total: {
                    readonly type: "number";
                    readonly description: "Total number of assets in the Project";
                };
                readonly confirmed: {
                    readonly type: "number";
                    readonly description: "Number of confirmed assets";
                };
                readonly processing: {
                    readonly type: "number";
                    readonly description: "Number of assets being processed";
                };
                readonly pending: {
                    readonly type: "number";
                    readonly description: "Number of assets waiting to be processed";
                };
                readonly burned: {
                    readonly type: "number";
                    readonly description: "Number of burned assets";
                };
                readonly failed: {
                    readonly type: "number";
                    readonly description: "Number of assets failed";
                };
            };
            readonly required: readonly ["total", "confirmed", "processing", "pending", "burned", "failed"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly query: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["query"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                            };
                            readonly mintAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly semifungible: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in this project are semifungible";
                            };
                            readonly transferable: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in this project can be transferred";
                            };
                            readonly compressed: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in this project are compressed";
                            };
                            readonly core: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in this project use mpl-core standard";
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                            readonly sellerFeeBasisPoints: {
                                readonly type: "integer";
                                readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                                readonly examples: readonly [100];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly description: "Name stored as on-chain metadata";
                                readonly examples: readonly ["Underdog NFT"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly maxLength: 10;
                                readonly description: "Symbol stored as on-chain metadata";
                                readonly examples: readonly ["UPDG"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description stored in the metadata";
                                readonly examples: readonly ["I minted this NFT with the Underdog API"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                            };
                            readonly animationUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to the asset's animation.";
                                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                            };
                            readonly externalUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to an external URL defining the asset";
                                readonly examples: readonly ["https://app.underdogprotocol.com"];
                            };
                            readonly attributes: {
                                readonly type: "object";
                                readonly additionalProperties: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "number";
                                    }];
                                };
                                readonly description: "Key-value pairs of your NFT attributes";
                            };
                        };
                        readonly required: readonly ["id", "mintAddress", "status", "sellerFeeBasisPoints", "name", "image"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsTProjectid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly semifungible: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project are semifungible";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project can be transferred";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project are compressed";
                };
                readonly core: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in this project use mpl-core standard";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly sellerFeeBasisPoints: {
                    readonly type: "integer";
                    readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                    readonly examples: readonly [100];
                };
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly nfts: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly maxLength: 32;
                                        readonly description: "Name stored as on-chain metadata";
                                        readonly examples: readonly ["Underdog NFT"];
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                        readonly maxLength: 10;
                                        readonly description: "Symbol stored as on-chain metadata";
                                        readonly examples: readonly ["UPDG"];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Description stored in the metadata";
                                        readonly examples: readonly ["I minted this NFT with the Underdog API"];
                                    };
                                    readonly image: {
                                        readonly type: "string";
                                        readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                                        readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                                    };
                                    readonly animationUrl: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the asset's animation.";
                                        readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                                    };
                                    readonly externalUrl: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to an external URL defining the asset";
                                        readonly examples: readonly ["https://app.underdogprotocol.com"];
                                    };
                                    readonly attributes: {
                                        readonly type: "object";
                                        readonly additionalProperties: {
                                            readonly anyOf: readonly [{
                                                readonly type: "string";
                                            }, {
                                                readonly type: "number";
                                            }];
                                        };
                                        readonly description: "Key-value pairs of your NFT attributes";
                                    };
                                    readonly id: {
                                        readonly type: "number";
                                        readonly description: "Unique ID for an NFT in a Project";
                                    };
                                    readonly projectId: {
                                        readonly type: "number";
                                        readonly description: "The ID of the Project the NFT is part of";
                                    };
                                    readonly transferable: {
                                        readonly type: "boolean";
                                        readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                                    };
                                    readonly compressed: {
                                        readonly type: "boolean";
                                        readonly description: "Whether or not the NFTs in the Project are compressed";
                                    };
                                    readonly mintAddress: {
                                        readonly type: "string";
                                        readonly description: "Base-58 encoded string representing an on-chain address";
                                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                                    };
                                    readonly ownerAddress: {
                                        readonly type: "string";
                                        readonly description: "Wallet address for the NFT's owner";
                                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                                    };
                                    readonly claimerAddress: {
                                        readonly type: "string";
                                        readonly description: "Wallet address allowed to claim the NFT";
                                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
                            };
                        };
                        readonly page: {
                            readonly type: "number";
                            readonly description: "Page number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly description: "Number per page";
                            readonly examples: readonly [10];
                        };
                        readonly totalPages: {
                            readonly type: "number";
                            readonly description: "Total number of pages";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "number";
                            readonly description: "Total number of results";
                            readonly examples: readonly [1];
                        };
                    };
                    readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
                };
            };
            readonly required: readonly ["id", "mintAddress", "status", "sellerFeeBasisPoints", "name", "image", "nfts"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsTProjectidNfts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly identifier: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly namespace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly description: "Name stored as on-chain metadata";
                                readonly examples: readonly ["Underdog NFT"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly maxLength: 10;
                                readonly description: "Symbol stored as on-chain metadata";
                                readonly examples: readonly ["UPDG"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description stored in the metadata";
                                readonly examples: readonly ["I minted this NFT with the Underdog API"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                            };
                            readonly animationUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to the asset's animation.";
                                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                            };
                            readonly externalUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to an external URL defining the asset";
                                readonly examples: readonly ["https://app.underdogprotocol.com"];
                            };
                            readonly attributes: {
                                readonly type: "object";
                                readonly additionalProperties: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "number";
                                    }];
                                };
                                readonly description: "Key-value pairs of your NFT attributes";
                            };
                            readonly id: {
                                readonly type: "number";
                                readonly description: "Unique ID for an NFT in a Project";
                            };
                            readonly projectId: {
                                readonly type: "number";
                                readonly description: "The ID of the Project the NFT is part of";
                            };
                            readonly transferable: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                            };
                            readonly compressed: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in the Project are compressed";
                            };
                            readonly mintAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly ownerAddress: {
                                readonly type: "string";
                                readonly description: "Wallet address for the NFT's owner";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly claimerAddress: {
                                readonly type: "string";
                                readonly description: "Wallet address allowed to claim the NFT";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsTProjectidNftsNftid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly id: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address for the NFT's owner";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly claimerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address allowed to claim the NFT";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsTProjectidNftsSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly search: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly query: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly description: "Name stored as on-chain metadata";
                                readonly examples: readonly ["Underdog NFT"];
                            };
                            readonly symbol: {
                                readonly type: "string";
                                readonly maxLength: 10;
                                readonly description: "Symbol stored as on-chain metadata";
                                readonly examples: readonly ["UPDG"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description stored in the metadata";
                                readonly examples: readonly ["I minted this NFT with the Underdog API"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                            };
                            readonly animationUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to the asset's animation.";
                                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                            };
                            readonly externalUrl: {
                                readonly type: "string";
                                readonly description: "URL pointing to an external URL defining the asset";
                                readonly examples: readonly ["https://app.underdogprotocol.com"];
                            };
                            readonly attributes: {
                                readonly type: "object";
                                readonly additionalProperties: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "number";
                                    }];
                                };
                                readonly description: "Key-value pairs of your NFT attributes";
                            };
                            readonly id: {
                                readonly type: "number";
                                readonly description: "Unique ID for an NFT in a Project";
                            };
                            readonly projectId: {
                                readonly type: "number";
                                readonly description: "The ID of the Project the NFT is part of";
                            };
                            readonly transferable: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                            };
                            readonly compressed: {
                                readonly type: "boolean";
                                readonly description: "Whether or not the NFTs in the Project are compressed";
                            };
                            readonly mintAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly ownerAddress: {
                                readonly type: "string";
                                readonly description: "Wallet address for the NFT's owner";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly claimerAddress: {
                                readonly type: "string";
                                readonly description: "Wallet address allowed to claim the NFT";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ProjectsTProjectidStats: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly total: {
                    readonly type: "number";
                    readonly description: "Total number of assets in the Project";
                };
                readonly confirmed: {
                    readonly type: "number";
                    readonly description: "Number of confirmed assets";
                };
                readonly processing: {
                    readonly type: "number";
                    readonly description: "Number of assets being processed";
                };
                readonly pending: {
                    readonly type: "number";
                    readonly description: "Number of assets waiting to be processed";
                };
                readonly burned: {
                    readonly type: "number";
                    readonly description: "Number of burned assets";
                };
                readonly failed: {
                    readonly type: "number";
                    readonly description: "Number of assets failed";
                };
            };
            readonly required: readonly ["total", "confirmed", "processing", "pending", "burned", "failed"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Requests: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly method: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly endpoint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly method: {
                                readonly type: "string";
                            };
                            readonly endpoint: {
                                readonly type: "string";
                            };
                            readonly body: {
                                readonly type: readonly ["string", "null"];
                            };
                            readonly createdAt: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "string";
                                }];
                            };
                            readonly transaction: {
                                readonly type: readonly ["object", "null"];
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: readonly ["ORG_CREATE", "PROJECT_CREATE", "PROJECT_NFT_BATCH", "PROJECT_SFT_BATCH", "PROJECT_NFT_BURN", "PROJECT_NFT_REVOKE", "PROJECT_NFT_UPDATE", "PROJECT_ROYALTIES_WITHDRAW", "PROJECT_UPDATE", "CORE_PROJECT_CREATE", "CORE_PROJECT_UPDATE", "CORE_PROJECT_ASSET_CREATE", "CORE_PROJECT_ASSET_UPDATE", "CORE_PROJECT_ASSET_BATCH", "PROJECT_NFT_CREATE", "PROJECT_SFT_CREATE", "PROJECT_NFT_TRANSFER", "PROJECT_ASSET_TRANSFER", "PROJECT_ASSET_BURN", "PROJECT_ASSET_UPDATE", "SHOP_CREATE", "DUST_CREATE", "NON_TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_NFT_CREATE", "INSCRIPTION_CREATE", "SNAPSHOT_CREATE", "TOKEN22_CREATE", "TOKEN_CREATE", "TOKEN_RENOUNCE", "TOKEN_MINT", "TREE_CREATE"];
                                        readonly description: "`ORG_CREATE` `PROJECT_CREATE` `PROJECT_NFT_BATCH` `PROJECT_SFT_BATCH` `PROJECT_NFT_BURN` `PROJECT_NFT_REVOKE` `PROJECT_NFT_UPDATE` `PROJECT_ROYALTIES_WITHDRAW` `PROJECT_UPDATE` `CORE_PROJECT_CREATE` `CORE_PROJECT_UPDATE` `CORE_PROJECT_ASSET_CREATE` `CORE_PROJECT_ASSET_UPDATE` `CORE_PROJECT_ASSET_BATCH` `PROJECT_NFT_CREATE` `PROJECT_SFT_CREATE` `PROJECT_NFT_TRANSFER` `PROJECT_ASSET_TRANSFER` `PROJECT_ASSET_BURN` `PROJECT_ASSET_UPDATE` `SHOP_CREATE` `DUST_CREATE` `NON_TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_NFT_CREATE` `INSCRIPTION_CREATE` `SNAPSHOT_CREATE` `TOKEN22_CREATE` `TOKEN_CREATE` `TOKEN_RENOUNCE` `TOKEN_MINT` `TREE_CREATE`";
                                    };
                                };
                                readonly required: readonly ["id", "type"];
                            };
                            readonly response: {
                                readonly type: readonly ["object", "null"];
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly status: {
                                        readonly type: "number";
                                    };
                                    readonly body: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["id", "status"];
                            };
                        };
                        readonly required: readonly ["id", "method", "endpoint", "createdAt"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2RequestsRequestid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly requestId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["requestId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly method: {
                    readonly type: "string";
                };
                readonly endpoint: {
                    readonly type: "string";
                };
                readonly body: {
                    readonly type: readonly ["string", "null"];
                };
                readonly createdAt: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly transaction: {
                    readonly type: readonly ["object", "null"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["ORG_CREATE", "PROJECT_CREATE", "PROJECT_NFT_BATCH", "PROJECT_SFT_BATCH", "PROJECT_NFT_BURN", "PROJECT_NFT_REVOKE", "PROJECT_NFT_UPDATE", "PROJECT_ROYALTIES_WITHDRAW", "PROJECT_UPDATE", "CORE_PROJECT_CREATE", "CORE_PROJECT_UPDATE", "CORE_PROJECT_ASSET_CREATE", "CORE_PROJECT_ASSET_UPDATE", "CORE_PROJECT_ASSET_BATCH", "PROJECT_NFT_CREATE", "PROJECT_SFT_CREATE", "PROJECT_NFT_TRANSFER", "PROJECT_ASSET_TRANSFER", "PROJECT_ASSET_BURN", "PROJECT_ASSET_UPDATE", "SHOP_CREATE", "DUST_CREATE", "NON_TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_NFT_CREATE", "INSCRIPTION_CREATE", "SNAPSHOT_CREATE", "TOKEN22_CREATE", "TOKEN_CREATE", "TOKEN_RENOUNCE", "TOKEN_MINT", "TREE_CREATE"];
                            readonly description: "`ORG_CREATE` `PROJECT_CREATE` `PROJECT_NFT_BATCH` `PROJECT_SFT_BATCH` `PROJECT_NFT_BURN` `PROJECT_NFT_REVOKE` `PROJECT_NFT_UPDATE` `PROJECT_ROYALTIES_WITHDRAW` `PROJECT_UPDATE` `CORE_PROJECT_CREATE` `CORE_PROJECT_UPDATE` `CORE_PROJECT_ASSET_CREATE` `CORE_PROJECT_ASSET_UPDATE` `CORE_PROJECT_ASSET_BATCH` `PROJECT_NFT_CREATE` `PROJECT_SFT_CREATE` `PROJECT_NFT_TRANSFER` `PROJECT_ASSET_TRANSFER` `PROJECT_ASSET_BURN` `PROJECT_ASSET_UPDATE` `SHOP_CREATE` `DUST_CREATE` `NON_TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_NFT_CREATE` `INSCRIPTION_CREATE` `SNAPSHOT_CREATE` `TOKEN22_CREATE` `TOKEN_CREATE` `TOKEN_RENOUNCE` `TOKEN_MINT` `TREE_CREATE`";
                        };
                    };
                    readonly required: readonly ["id", "type"];
                };
                readonly response: {
                    readonly type: readonly ["object", "null"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly type: "number";
                        };
                        readonly body: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["id", "status"];
                };
            };
            readonly required: readonly ["id", "method", "endpoint", "createdAt"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Transactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly status: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly enum: readonly ["burned", "confirmed", "failed", "pending", "processing"];
                                readonly description: "`burned` `confirmed` `failed` `pending` `processing`";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["ORG_CREATE", "PROJECT_CREATE", "PROJECT_NFT_BATCH", "PROJECT_SFT_BATCH", "PROJECT_NFT_BURN", "PROJECT_NFT_REVOKE", "PROJECT_NFT_UPDATE", "PROJECT_ROYALTIES_WITHDRAW", "PROJECT_UPDATE", "CORE_PROJECT_CREATE", "CORE_PROJECT_UPDATE", "CORE_PROJECT_ASSET_CREATE", "CORE_PROJECT_ASSET_UPDATE", "CORE_PROJECT_ASSET_BATCH", "PROJECT_NFT_CREATE", "PROJECT_SFT_CREATE", "PROJECT_NFT_TRANSFER", "PROJECT_ASSET_TRANSFER", "PROJECT_ASSET_BURN", "PROJECT_ASSET_UPDATE", "SHOP_CREATE", "DUST_CREATE", "NON_TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_NFT_CREATE", "INSCRIPTION_CREATE", "SNAPSHOT_CREATE", "TOKEN22_CREATE", "TOKEN_CREATE", "TOKEN_RENOUNCE", "TOKEN_MINT", "TREE_CREATE"];
                                readonly description: "`ORG_CREATE` `PROJECT_CREATE` `PROJECT_NFT_BATCH` `PROJECT_SFT_BATCH` `PROJECT_NFT_BURN` `PROJECT_NFT_REVOKE` `PROJECT_NFT_UPDATE` `PROJECT_ROYALTIES_WITHDRAW` `PROJECT_UPDATE` `CORE_PROJECT_CREATE` `CORE_PROJECT_UPDATE` `CORE_PROJECT_ASSET_CREATE` `CORE_PROJECT_ASSET_UPDATE` `CORE_PROJECT_ASSET_BATCH` `PROJECT_NFT_CREATE` `PROJECT_SFT_CREATE` `PROJECT_NFT_TRANSFER` `PROJECT_ASSET_TRANSFER` `PROJECT_ASSET_BURN` `PROJECT_ASSET_UPDATE` `SHOP_CREATE` `DUST_CREATE` `NON_TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_NFT_CREATE` `INSCRIPTION_CREATE` `SNAPSHOT_CREATE` `TOKEN22_CREATE` `TOKEN_CREATE` `TOKEN_RENOUNCE` `TOKEN_MINT` `TREE_CREATE`";
                            };
                            readonly walletAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly data: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Transaction data in stringified JSON format";
                            };
                            readonly signature: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Signature of the on-chain transaction";
                                readonly examples: readonly ["2yVZcx5rMDLDcqe31Uua6a93qw3qrNMsjroYWXV3sytttnrPSxk2heGK7yUorW6KrfiEpkLNYNVPivhgoigdRnK6"];
                            };
                            readonly createdAt: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "string";
                                }];
                            };
                            readonly network: {
                                readonly type: "string";
                                readonly enum: readonly ["DEVNET", "LOCALNET", "MAINNET"];
                                readonly description: "`DEVNET` `LOCALNET` `MAINNET`";
                            };
                        };
                        readonly required: readonly ["id", "status", "type", "walletAddress", "createdAt", "network"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2TransactionsTransactionid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["transactionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["burned", "confirmed", "failed", "pending", "processing"];
                    readonly description: "`burned` `confirmed` `failed` `pending` `processing`";
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["ORG_CREATE", "PROJECT_CREATE", "PROJECT_NFT_BATCH", "PROJECT_SFT_BATCH", "PROJECT_NFT_BURN", "PROJECT_NFT_REVOKE", "PROJECT_NFT_UPDATE", "PROJECT_ROYALTIES_WITHDRAW", "PROJECT_UPDATE", "CORE_PROJECT_CREATE", "CORE_PROJECT_UPDATE", "CORE_PROJECT_ASSET_CREATE", "CORE_PROJECT_ASSET_UPDATE", "CORE_PROJECT_ASSET_BATCH", "PROJECT_NFT_CREATE", "PROJECT_SFT_CREATE", "PROJECT_NFT_TRANSFER", "PROJECT_ASSET_TRANSFER", "PROJECT_ASSET_BURN", "PROJECT_ASSET_UPDATE", "SHOP_CREATE", "DUST_CREATE", "NON_TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_NFT_CREATE", "INSCRIPTION_CREATE", "SNAPSHOT_CREATE", "TOKEN22_CREATE", "TOKEN_CREATE", "TOKEN_RENOUNCE", "TOKEN_MINT", "TREE_CREATE"];
                    readonly description: "`ORG_CREATE` `PROJECT_CREATE` `PROJECT_NFT_BATCH` `PROJECT_SFT_BATCH` `PROJECT_NFT_BURN` `PROJECT_NFT_REVOKE` `PROJECT_NFT_UPDATE` `PROJECT_ROYALTIES_WITHDRAW` `PROJECT_UPDATE` `CORE_PROJECT_CREATE` `CORE_PROJECT_UPDATE` `CORE_PROJECT_ASSET_CREATE` `CORE_PROJECT_ASSET_UPDATE` `CORE_PROJECT_ASSET_BATCH` `PROJECT_NFT_CREATE` `PROJECT_SFT_CREATE` `PROJECT_NFT_TRANSFER` `PROJECT_ASSET_TRANSFER` `PROJECT_ASSET_BURN` `PROJECT_ASSET_UPDATE` `SHOP_CREATE` `DUST_CREATE` `NON_TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_NFT_CREATE` `INSCRIPTION_CREATE` `SNAPSHOT_CREATE` `TOKEN22_CREATE` `TOKEN_CREATE` `TOKEN_RENOUNCE` `TOKEN_MINT` `TREE_CREATE`";
                };
                readonly walletAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly data: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "Transaction data in stringified JSON format";
                };
                readonly signature: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "Signature of the on-chain transaction";
                    readonly examples: readonly ["2yVZcx5rMDLDcqe31Uua6a93qw3qrNMsjroYWXV3sytttnrPSxk2heGK7yUorW6KrfiEpkLNYNVPivhgoigdRnK6"];
                };
                readonly createdAt: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly network: {
                    readonly type: "string";
                    readonly enum: readonly ["DEVNET", "LOCALNET", "MAINNET"];
                    readonly description: "`DEVNET` `LOCALNET` `MAINNET`";
                };
            };
            readonly required: readonly ["id", "status", "type", "walletAddress", "createdAt", "network"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Webhooks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly superAdminAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly orgId: {
                                readonly type: "integer";
                            };
                            readonly walletAddress: {
                                readonly type: "string";
                                readonly description: "Base-58 encoded string representing an on-chain address";
                                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                            };
                            readonly valid: {
                                readonly type: "boolean";
                            };
                            readonly triggers: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly transactionType: {
                                            readonly type: "string";
                                            readonly enum: readonly ["ORG_CREATE", "PROJECT_CREATE", "PROJECT_NFT_BATCH", "PROJECT_SFT_BATCH", "PROJECT_NFT_BURN", "PROJECT_NFT_REVOKE", "PROJECT_NFT_UPDATE", "PROJECT_ROYALTIES_WITHDRAW", "PROJECT_UPDATE", "CORE_PROJECT_CREATE", "CORE_PROJECT_UPDATE", "CORE_PROJECT_ASSET_CREATE", "CORE_PROJECT_ASSET_UPDATE", "CORE_PROJECT_ASSET_BATCH", "PROJECT_NFT_CREATE", "PROJECT_SFT_CREATE", "PROJECT_NFT_TRANSFER", "PROJECT_ASSET_TRANSFER", "PROJECT_ASSET_BURN", "PROJECT_ASSET_UPDATE", "SHOP_CREATE", "DUST_CREATE", "NON_TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_NFT_CREATE", "INSCRIPTION_CREATE", "SNAPSHOT_CREATE", "TOKEN22_CREATE", "TOKEN_CREATE", "TOKEN_RENOUNCE", "TOKEN_MINT", "TREE_CREATE"];
                                            readonly description: "`ORG_CREATE` `PROJECT_CREATE` `PROJECT_NFT_BATCH` `PROJECT_SFT_BATCH` `PROJECT_NFT_BURN` `PROJECT_NFT_REVOKE` `PROJECT_NFT_UPDATE` `PROJECT_ROYALTIES_WITHDRAW` `PROJECT_UPDATE` `CORE_PROJECT_CREATE` `CORE_PROJECT_UPDATE` `CORE_PROJECT_ASSET_CREATE` `CORE_PROJECT_ASSET_UPDATE` `CORE_PROJECT_ASSET_BATCH` `PROJECT_NFT_CREATE` `PROJECT_SFT_CREATE` `PROJECT_NFT_TRANSFER` `PROJECT_ASSET_TRANSFER` `PROJECT_ASSET_BURN` `PROJECT_ASSET_UPDATE` `SHOP_CREATE` `DUST_CREATE` `NON_TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_NFT_CREATE` `INSCRIPTION_CREATE` `SNAPSHOT_CREATE` `TOKEN22_CREATE` `TOKEN_CREATE` `TOKEN_RENOUNCE` `TOKEN_MINT` `TREE_CREATE`";
                                        };
                                    };
                                    readonly required: readonly ["transactionType"];
                                };
                            };
                            readonly createdAt: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "string";
                                }];
                            };
                            readonly updatedAt: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "string";
                                }];
                            };
                        };
                        readonly required: readonly ["id", "url", "superAdminAddress", "orgId", "walletAddress", "valid", "triggers", "createdAt", "updatedAt"];
                    };
                };
                readonly page: {
                    readonly type: "number";
                    readonly description: "Page number";
                    readonly examples: readonly [1];
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "Number per page";
                    readonly examples: readonly [10];
                };
                readonly totalPages: {
                    readonly type: "number";
                    readonly description: "Total number of pages";
                    readonly examples: readonly [1];
                };
                readonly totalResults: {
                    readonly type: "number";
                    readonly description: "Total number of results";
                    readonly examples: readonly [1];
                };
            };
            readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2WebhooksWebhookid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhookId: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["webhookId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["number", "null"];
                    readonly default: 1;
                    readonly description: "Page number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: readonly ["number", "null"];
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly description: "Items per page";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly url: {
                    readonly type: "string";
                };
                readonly superAdminAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly orgId: {
                    readonly type: "integer";
                };
                readonly walletAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly valid: {
                    readonly type: "boolean";
                };
                readonly triggers: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly transactionType: {
                                readonly type: "string";
                                readonly enum: readonly ["ORG_CREATE", "PROJECT_CREATE", "PROJECT_NFT_BATCH", "PROJECT_SFT_BATCH", "PROJECT_NFT_BURN", "PROJECT_NFT_REVOKE", "PROJECT_NFT_UPDATE", "PROJECT_ROYALTIES_WITHDRAW", "PROJECT_UPDATE", "CORE_PROJECT_CREATE", "CORE_PROJECT_UPDATE", "CORE_PROJECT_ASSET_CREATE", "CORE_PROJECT_ASSET_UPDATE", "CORE_PROJECT_ASSET_BATCH", "PROJECT_NFT_CREATE", "PROJECT_SFT_CREATE", "PROJECT_NFT_TRANSFER", "PROJECT_ASSET_TRANSFER", "PROJECT_ASSET_BURN", "PROJECT_ASSET_UPDATE", "SHOP_CREATE", "DUST_CREATE", "NON_TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_NFT_CREATE", "INSCRIPTION_CREATE", "SNAPSHOT_CREATE", "TOKEN22_CREATE", "TOKEN_CREATE", "TOKEN_RENOUNCE", "TOKEN_MINT", "TREE_CREATE"];
                                readonly description: "`ORG_CREATE` `PROJECT_CREATE` `PROJECT_NFT_BATCH` `PROJECT_SFT_BATCH` `PROJECT_NFT_BURN` `PROJECT_NFT_REVOKE` `PROJECT_NFT_UPDATE` `PROJECT_ROYALTIES_WITHDRAW` `PROJECT_UPDATE` `CORE_PROJECT_CREATE` `CORE_PROJECT_UPDATE` `CORE_PROJECT_ASSET_CREATE` `CORE_PROJECT_ASSET_UPDATE` `CORE_PROJECT_ASSET_BATCH` `PROJECT_NFT_CREATE` `PROJECT_SFT_CREATE` `PROJECT_NFT_TRANSFER` `PROJECT_ASSET_TRANSFER` `PROJECT_ASSET_BURN` `PROJECT_ASSET_UPDATE` `SHOP_CREATE` `DUST_CREATE` `NON_TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_NFT_CREATE` `INSCRIPTION_CREATE` `SNAPSHOT_CREATE` `TOKEN22_CREATE` `TOKEN_CREATE` `TOKEN_RENOUNCE` `TOKEN_MINT` `TREE_CREATE`";
                            };
                        };
                        readonly required: readonly ["transactionType"];
                    };
                };
                readonly createdAt: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly updatedAt: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly requests: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly format: "uuid";
                                    };
                                    readonly method: {
                                        readonly type: "string";
                                    };
                                    readonly endpoint: {
                                        readonly type: "string";
                                    };
                                    readonly body: {
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly createdAt: {
                                        readonly anyOf: readonly [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "string";
                                        }];
                                    };
                                    readonly transaction: {
                                        readonly type: readonly ["object", "null"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                                readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: readonly ["ORG_CREATE", "PROJECT_CREATE", "PROJECT_NFT_BATCH", "PROJECT_SFT_BATCH", "PROJECT_NFT_BURN", "PROJECT_NFT_REVOKE", "PROJECT_NFT_UPDATE", "PROJECT_ROYALTIES_WITHDRAW", "PROJECT_UPDATE", "CORE_PROJECT_CREATE", "CORE_PROJECT_UPDATE", "CORE_PROJECT_ASSET_CREATE", "CORE_PROJECT_ASSET_UPDATE", "CORE_PROJECT_ASSET_BATCH", "PROJECT_NFT_CREATE", "PROJECT_SFT_CREATE", "PROJECT_NFT_TRANSFER", "PROJECT_ASSET_TRANSFER", "PROJECT_ASSET_BURN", "PROJECT_ASSET_UPDATE", "SHOP_CREATE", "DUST_CREATE", "NON_TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_NFT_CREATE", "INSCRIPTION_CREATE", "SNAPSHOT_CREATE", "TOKEN22_CREATE", "TOKEN_CREATE", "TOKEN_RENOUNCE", "TOKEN_MINT", "TREE_CREATE"];
                                                readonly description: "`ORG_CREATE` `PROJECT_CREATE` `PROJECT_NFT_BATCH` `PROJECT_SFT_BATCH` `PROJECT_NFT_BURN` `PROJECT_NFT_REVOKE` `PROJECT_NFT_UPDATE` `PROJECT_ROYALTIES_WITHDRAW` `PROJECT_UPDATE` `CORE_PROJECT_CREATE` `CORE_PROJECT_UPDATE` `CORE_PROJECT_ASSET_CREATE` `CORE_PROJECT_ASSET_UPDATE` `CORE_PROJECT_ASSET_BATCH` `PROJECT_NFT_CREATE` `PROJECT_SFT_CREATE` `PROJECT_NFT_TRANSFER` `PROJECT_ASSET_TRANSFER` `PROJECT_ASSET_BURN` `PROJECT_ASSET_UPDATE` `SHOP_CREATE` `DUST_CREATE` `NON_TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_NFT_CREATE` `INSCRIPTION_CREATE` `SNAPSHOT_CREATE` `TOKEN22_CREATE` `TOKEN_CREATE` `TOKEN_RENOUNCE` `TOKEN_MINT` `TREE_CREATE`";
                                            };
                                        };
                                        readonly required: readonly ["id", "type"];
                                    };
                                    readonly response: {
                                        readonly type: readonly ["object", "null"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly status: {
                                                readonly type: "number";
                                            };
                                            readonly body: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly required: readonly ["id", "status"];
                                    };
                                };
                                readonly required: readonly ["id", "method", "endpoint", "createdAt"];
                            };
                        };
                        readonly page: {
                            readonly type: "number";
                            readonly description: "Page number";
                            readonly examples: readonly [1];
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly description: "Number per page";
                            readonly examples: readonly [10];
                        };
                        readonly totalPages: {
                            readonly type: "number";
                            readonly description: "Total number of pages";
                            readonly examples: readonly [1];
                        };
                        readonly totalResults: {
                            readonly type: "number";
                            readonly description: "Total number of results";
                            readonly examples: readonly [1];
                        };
                    };
                    readonly required: readonly ["results", "page", "limit", "totalPages", "totalResults"];
                };
            };
            readonly required: readonly ["id", "url", "superAdminAddress", "orgId", "walletAddress", "valid", "triggers", "createdAt", "updatedAt", "requests"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchV2ProjectsNProjectid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly sellerFeeBasisPoints: {
                readonly type: "integer";
                readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                readonly examples: readonly [100];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly id: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address for the NFT's owner";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly claimerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address allowed to claim the NFT";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchV2ProjectsNProjectidNftsNftid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly id: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address for the NFT's owner";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly claimerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address allowed to claim the NFT";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchV2ProjectsProjectid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly sellerFeeBasisPoints: {
                readonly type: "integer";
                readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                readonly examples: readonly [100];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly projectId: {
                    readonly type: "integer";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["transactionId", "projectId", "mintAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchV2ProjectsProjectidNftsNftid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
        };
        readonly required: readonly ["name", "image"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly nftId: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["transactionId", "nftId", "mintAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchV2ProjectsTProjectid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly sellerFeeBasisPoints: {
                readonly type: "integer";
                readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                readonly examples: readonly [100];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly id: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address for the NFT's owner";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly claimerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address allowed to claim the NFT";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchV2ProjectsTProjectidNftsNftid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly id: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address for the NFT's owner";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly claimerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address allowed to claim the NFT";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2Inscriptions: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly value: {
                readonly type: "string";
            };
        };
        readonly required: readonly ["value"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly inscriptionAddress: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["transactionId", "inscriptionAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2NftsMintaddressClaim: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly claimerAddress: {
                readonly type: "string";
            };
            readonly payerAddress: {
                readonly type: "string";
            };
            readonly otp: {
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["mintAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transaction: {
                    readonly type: "string";
                    readonly description: "Encoded & serialized transaction to be signed by the claimer's wallet";
                };
            };
            readonly required: readonly ["transaction"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2Projects: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly semifungible: {
                readonly type: "boolean";
                readonly description: "Whether or not the NFTs in this project are semifungible";
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly core: {
                readonly type: "boolean";
                readonly description: "Whether or not the NFTs in this project use mpl-core standard";
            };
            readonly sellerFeeBasisPoints: {
                readonly type: "integer";
                readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                readonly examples: readonly [100];
            };
        };
        readonly required: readonly ["name", "image"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                };
                readonly transactionId: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["projectId", "transactionId"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsN: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly semifungible: {
                readonly type: "boolean";
                readonly description: "Whether or not the NFTs in this project are semifungible";
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly core: {
                readonly type: "boolean";
                readonly description: "Whether or not the NFTs in this project use mpl-core standard";
            };
            readonly sellerFeeBasisPoints: {
                readonly type: "integer";
                readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                readonly examples: readonly [100];
            };
        };
        readonly required: readonly ["name", "image"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                };
                readonly transactionId: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["projectId", "transactionId"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsNProjectidNfts: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly receiver: {
                readonly type: "object";
                readonly properties: {
                    readonly address: {
                        readonly type: "string";
                        readonly description: "Address that will receive the NFT";
                        readonly examples: readonly ["7px1aXrdcySNHEF8aQ12iHBW5a2MVsqQU1ELkTdYAgjN"];
                    };
                    readonly namespace: {
                        readonly type: "string";
                        readonly description: "Namespace of the application (e.g. solarplex, superteam)";
                        readonly examples: readonly ["public"];
                    };
                    readonly identifier: {
                        readonly type: "string";
                        readonly description: "Identifier for the user's Passport (i.e. email, wallet address, twitter handle)";
                        readonly examples: readonly ["kevin@underdogprotocol.com"];
                    };
                };
            };
            readonly receiverAddress: {
                readonly type: "string";
                readonly description: "Base-58 encoded string representing an on-chain address";
                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
            };
            readonly delegated: {
                readonly type: "boolean";
                readonly description: "If true, your Project will have delegated authority to transfer or burn the asset";
            };
        };
        readonly required: readonly ["name", "image"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly anyOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly maxLength: 32;
                        readonly description: "Name stored as on-chain metadata";
                        readonly examples: readonly ["Underdog NFT"];
                    };
                    readonly symbol: {
                        readonly type: "string";
                        readonly maxLength: 10;
                        readonly description: "Symbol stored as on-chain metadata";
                        readonly examples: readonly ["UPDG"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "Description stored in the metadata";
                        readonly examples: readonly ["I minted this NFT with the Underdog API"];
                    };
                    readonly image: {
                        readonly type: "string";
                        readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                        readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                    };
                    readonly animationUrl: {
                        readonly type: "string";
                        readonly description: "URL pointing to the asset's animation.";
                        readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                    };
                    readonly externalUrl: {
                        readonly type: "string";
                        readonly description: "URL pointing to an external URL defining the asset";
                        readonly examples: readonly ["https://app.underdogprotocol.com"];
                    };
                    readonly attributes: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly anyOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "number";
                            }];
                        };
                        readonly description: "Key-value pairs of your NFT attributes";
                    };
                    readonly id: {
                        readonly type: "number";
                        readonly description: "Unique ID for an NFT in a Project";
                    };
                    readonly projectId: {
                        readonly type: "number";
                        readonly description: "The ID of the Project the NFT is part of";
                    };
                    readonly transferable: {
                        readonly type: "boolean";
                        readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                    };
                    readonly compressed: {
                        readonly type: "boolean";
                        readonly description: "Whether or not the NFTs in the Project are compressed";
                    };
                    readonly mintAddress: {
                        readonly type: "string";
                        readonly description: "Base-58 encoded string representing an on-chain address";
                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    };
                    readonly ownerAddress: {
                        readonly type: "string";
                        readonly description: "Wallet address for the NFT's owner";
                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    };
                    readonly claimerAddress: {
                        readonly type: "string";
                        readonly description: "Wallet address allowed to claim the NFT";
                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    };
                    readonly status: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
            }, {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly maxLength: 32;
                            readonly description: "Name stored as on-chain metadata";
                            readonly examples: readonly ["Underdog NFT"];
                        };
                        readonly symbol: {
                            readonly type: "string";
                            readonly maxLength: 10;
                            readonly description: "Symbol stored as on-chain metadata";
                            readonly examples: readonly ["UPDG"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Description stored in the metadata";
                            readonly examples: readonly ["I minted this NFT with the Underdog API"];
                        };
                        readonly image: {
                            readonly type: "string";
                            readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                            readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                        };
                        readonly animationUrl: {
                            readonly type: "string";
                            readonly description: "URL pointing to the asset's animation.";
                            readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                        };
                        readonly externalUrl: {
                            readonly type: "string";
                            readonly description: "URL pointing to an external URL defining the asset";
                            readonly examples: readonly ["https://app.underdogprotocol.com"];
                        };
                        readonly attributes: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "number";
                                }];
                            };
                            readonly description: "Key-value pairs of your NFT attributes";
                        };
                        readonly id: {
                            readonly type: "number";
                            readonly description: "Unique ID for an NFT in a Project";
                        };
                        readonly projectId: {
                            readonly type: "number";
                            readonly description: "The ID of the Project the NFT is part of";
                        };
                        readonly transferable: {
                            readonly type: "boolean";
                            readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                        };
                        readonly compressed: {
                            readonly type: "boolean";
                            readonly description: "Whether or not the NFTs in the Project are compressed";
                        };
                        readonly mintAddress: {
                            readonly type: "string";
                            readonly description: "Base-58 encoded string representing an on-chain address";
                            readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                        };
                        readonly ownerAddress: {
                            readonly type: "string";
                            readonly description: "Wallet address for the NFT's owner";
                            readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                        };
                        readonly claimerAddress: {
                            readonly type: "string";
                            readonly description: "Wallet address allowed to claim the NFT";
                            readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                        };
                        readonly status: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
                };
            }];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly nftId: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["transactionId", "nftId", "mintAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsNProjectidNftsNftidBurn: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly nftId: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["transactionId", "nftId", "mintAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsNProjectidNftsNftidRevoke: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly nftId: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["transactionId", "nftId", "mintAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsProjectidNfts: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly receiver: {
                readonly type: "object";
                readonly properties: {
                    readonly address: {
                        readonly type: "string";
                        readonly description: "Address that will receive the NFT";
                        readonly examples: readonly ["7px1aXrdcySNHEF8aQ12iHBW5a2MVsqQU1ELkTdYAgjN"];
                    };
                    readonly namespace: {
                        readonly type: "string";
                        readonly description: "Namespace of the application (e.g. solarplex, superteam)";
                        readonly examples: readonly ["public"];
                    };
                    readonly identifier: {
                        readonly type: "string";
                        readonly description: "Identifier for the user's Passport (i.e. email, wallet address, twitter handle)";
                        readonly examples: readonly ["kevin@underdogprotocol.com"];
                    };
                };
            };
            readonly receiverAddress: {
                readonly type: "string";
                readonly description: "Base-58 encoded string representing an on-chain address";
                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
            };
            readonly delegated: {
                readonly type: "boolean";
                readonly description: "If true, your Project will have delegated authority to transfer or burn the asset";
            };
        };
        readonly required: readonly ["name", "image"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly nftId: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["transactionId", "nftId", "mintAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsProjectidNftsBatch: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly receiver: {
                readonly type: "object";
                readonly properties: {
                    readonly address: {
                        readonly type: "string";
                        readonly description: "Address that will receive the NFT";
                        readonly examples: readonly ["7px1aXrdcySNHEF8aQ12iHBW5a2MVsqQU1ELkTdYAgjN"];
                    };
                    readonly namespace: {
                        readonly type: "string";
                        readonly description: "Namespace of the application (e.g. solarplex, superteam)";
                        readonly examples: readonly ["public"];
                    };
                    readonly identifier: {
                        readonly type: "string";
                        readonly description: "Identifier for the user's Passport (i.e. email, wallet address, twitter handle)";
                        readonly examples: readonly ["kevin@underdogprotocol.com"];
                    };
                };
            };
            readonly receiverAddress: {
                readonly type: "string";
                readonly description: "Base-58 encoded string representing an on-chain address";
                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
            };
            readonly delegated: {
                readonly type: "boolean";
                readonly description: "If true, your Project will have delegated authority to transfer or burn the asset";
            };
            readonly batch: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly maxLength: 32;
                            readonly description: "Name stored as on-chain metadata";
                            readonly examples: readonly ["Underdog NFT"];
                        };
                        readonly symbol: {
                            readonly type: "string";
                            readonly maxLength: 10;
                            readonly description: "Symbol stored as on-chain metadata";
                            readonly examples: readonly ["UPDG"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Description stored in the metadata";
                            readonly examples: readonly ["I minted this NFT with the Underdog API"];
                        };
                        readonly image: {
                            readonly type: "string";
                            readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                            readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                        };
                        readonly animationUrl: {
                            readonly type: "string";
                            readonly description: "URL pointing to the asset's animation.";
                            readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                        };
                        readonly externalUrl: {
                            readonly type: "string";
                            readonly description: "URL pointing to an external URL defining the asset";
                            readonly examples: readonly ["https://app.underdogprotocol.com"];
                        };
                        readonly attributes: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "number";
                                }];
                            };
                            readonly description: "Key-value pairs of your NFT attributes";
                        };
                        readonly receiver: {
                            readonly type: "object";
                            readonly properties: {
                                readonly address: {
                                    readonly type: "string";
                                    readonly description: "Address that will receive the NFT";
                                    readonly examples: readonly ["7px1aXrdcySNHEF8aQ12iHBW5a2MVsqQU1ELkTdYAgjN"];
                                };
                                readonly namespace: {
                                    readonly type: "string";
                                    readonly description: "Namespace of the application (e.g. solarplex, superteam)";
                                    readonly examples: readonly ["public"];
                                };
                                readonly identifier: {
                                    readonly type: "string";
                                    readonly description: "Identifier for the user's Passport (i.e. email, wallet address, twitter handle)";
                                    readonly examples: readonly ["kevin@underdogprotocol.com"];
                                };
                            };
                        };
                        readonly receiverAddress: {
                            readonly type: "string";
                            readonly description: "Base-58 encoded string representing an on-chain address";
                            readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                        };
                        readonly delegated: {
                            readonly type: "boolean";
                            readonly description: "If true, your Project will have delegated authority to transfer or burn the asset";
                        };
                    };
                };
            };
        };
        readonly required: readonly ["name", "image", "batch"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "202": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly transactionId: {
                        readonly type: "string";
                        readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                    };
                    readonly nftId: {
                        readonly type: "number";
                        readonly description: "Unique ID for an NFT in a Project";
                    };
                    readonly projectId: {
                        readonly type: "number";
                        readonly description: "The ID of the Project the NFT is part of";
                    };
                    readonly transferable: {
                        readonly type: "boolean";
                        readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                    };
                    readonly compressed: {
                        readonly type: "boolean";
                        readonly description: "Whether or not the NFTs in the Project are compressed";
                    };
                };
                readonly required: readonly ["transactionId", "nftId"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsProjectidNftsLazy: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly receiver: {
                readonly type: "object";
                readonly properties: {
                    readonly address: {
                        readonly type: "string";
                        readonly description: "Address that will receive the NFT";
                        readonly examples: readonly ["7px1aXrdcySNHEF8aQ12iHBW5a2MVsqQU1ELkTdYAgjN"];
                    };
                    readonly namespace: {
                        readonly type: "string";
                        readonly description: "Namespace of the application (e.g. solarplex, superteam)";
                        readonly examples: readonly ["public"];
                    };
                    readonly identifier: {
                        readonly type: "string";
                        readonly description: "Identifier for the user's Passport (i.e. email, wallet address, twitter handle)";
                        readonly examples: readonly ["kevin@underdogprotocol.com"];
                    };
                };
            };
            readonly receiverAddress: {
                readonly type: "string";
                readonly description: "Base-58 encoded string representing an on-chain address";
                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
            };
            readonly delegated: {
                readonly type: "boolean";
                readonly description: "If true, your Project will have delegated authority to transfer or burn the asset";
            };
        };
        readonly required: readonly ["name", "image"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly id: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address for the NFT's owner";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly claimerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address allowed to claim the NFT";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsProjectidNftsNftidBurn: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly nftId: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["transactionId", "nftId", "mintAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsProjectidNftsNftidTransfer: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly receiverAddress: {
                readonly type: "string";
                readonly description: "Base-58 encoded string representing an on-chain address";
                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
            };
        };
        readonly required: readonly ["receiverAddress"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly nftId: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["transactionId", "nftId", "mintAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsProjectidRoyaltiesWithdraw: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly receiverAddress: {
                readonly type: "string";
                readonly description: "Base-58 encoded string representing an on-chain address";
                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
            };
        };
        readonly required: readonly ["receiverAddress"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly projectId: {
                    readonly type: "integer";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["transactionId", "projectId", "mintAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsProjectidSfts: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly receiver: {
                readonly type: "object";
                readonly properties: {
                    readonly address: {
                        readonly type: "string";
                        readonly description: "Address that will receive the NFT";
                        readonly examples: readonly ["7px1aXrdcySNHEF8aQ12iHBW5a2MVsqQU1ELkTdYAgjN"];
                    };
                    readonly namespace: {
                        readonly type: "string";
                        readonly description: "Namespace of the application (e.g. solarplex, superteam)";
                        readonly examples: readonly ["public"];
                    };
                    readonly identifier: {
                        readonly type: "string";
                        readonly description: "Identifier for the user's Passport (i.e. email, wallet address, twitter handle)";
                        readonly examples: readonly ["kevin@underdogprotocol.com"];
                    };
                };
            };
            readonly receiverAddress: {
                readonly type: "string";
                readonly description: "Base-58 encoded string representing an on-chain address";
                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
            };
            readonly delegated: {
                readonly type: "boolean";
                readonly description: "If true, your Project will have delegated authority to transfer or burn the asset";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly nftId: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
            };
            readonly required: readonly ["transactionId", "nftId"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsProjectidSftsBatch: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly type: "object";
            readonly properties: {
                readonly receiver: {
                    readonly type: "object";
                    readonly properties: {
                        readonly address: {
                            readonly type: "string";
                            readonly description: "Address that will receive the NFT";
                            readonly examples: readonly ["7px1aXrdcySNHEF8aQ12iHBW5a2MVsqQU1ELkTdYAgjN"];
                        };
                        readonly namespace: {
                            readonly type: "string";
                            readonly description: "Namespace of the application (e.g. solarplex, superteam)";
                            readonly examples: readonly ["public"];
                        };
                        readonly identifier: {
                            readonly type: "string";
                            readonly description: "Identifier for the user's Passport (i.e. email, wallet address, twitter handle)";
                            readonly examples: readonly ["kevin@underdogprotocol.com"];
                        };
                    };
                };
                readonly receiverAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly delegated: {
                    readonly type: "boolean";
                    readonly description: "If true, your Project will have delegated authority to transfer or burn the asset";
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "202": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly transactionId: {
                        readonly type: "string";
                        readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                    };
                    readonly nftId: {
                        readonly type: "number";
                        readonly description: "Unique ID for an NFT in a Project";
                    };
                    readonly projectId: {
                        readonly type: "number";
                        readonly description: "The ID of the Project the NFT is part of";
                    };
                };
                readonly required: readonly ["transactionId", "nftId"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsT: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly semifungible: {
                readonly type: "boolean";
                readonly description: "Whether or not the NFTs in this project are semifungible";
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly core: {
                readonly type: "boolean";
                readonly description: "Whether or not the NFTs in this project use mpl-core standard";
            };
            readonly sellerFeeBasisPoints: {
                readonly type: "integer";
                readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                readonly examples: readonly [100];
            };
        };
        readonly required: readonly ["name", "image"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                };
                readonly transactionId: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["projectId", "transactionId"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2ProjectsTProjectidNfts: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly receiver: {
                readonly type: "object";
                readonly properties: {
                    readonly address: {
                        readonly type: "string";
                        readonly description: "Address that will receive the NFT";
                        readonly examples: readonly ["7px1aXrdcySNHEF8aQ12iHBW5a2MVsqQU1ELkTdYAgjN"];
                    };
                    readonly namespace: {
                        readonly type: "string";
                        readonly description: "Namespace of the application (e.g. solarplex, superteam)";
                        readonly examples: readonly ["public"];
                    };
                    readonly identifier: {
                        readonly type: "string";
                        readonly description: "Identifier for the user's Passport (i.e. email, wallet address, twitter handle)";
                        readonly examples: readonly ["kevin@underdogprotocol.com"];
                    };
                };
            };
            readonly receiverAddress: {
                readonly type: "string";
                readonly description: "Base-58 encoded string representing an on-chain address";
                readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
            };
            readonly delegated: {
                readonly type: "boolean";
                readonly description: "If true, your Project will have delegated authority to transfer or burn the asset";
            };
        };
        readonly required: readonly ["name", "image"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly anyOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly maxLength: 32;
                        readonly description: "Name stored as on-chain metadata";
                        readonly examples: readonly ["Underdog NFT"];
                    };
                    readonly symbol: {
                        readonly type: "string";
                        readonly maxLength: 10;
                        readonly description: "Symbol stored as on-chain metadata";
                        readonly examples: readonly ["UPDG"];
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "Description stored in the metadata";
                        readonly examples: readonly ["I minted this NFT with the Underdog API"];
                    };
                    readonly image: {
                        readonly type: "string";
                        readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                        readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                    };
                    readonly animationUrl: {
                        readonly type: "string";
                        readonly description: "URL pointing to the asset's animation.";
                        readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                    };
                    readonly externalUrl: {
                        readonly type: "string";
                        readonly description: "URL pointing to an external URL defining the asset";
                        readonly examples: readonly ["https://app.underdogprotocol.com"];
                    };
                    readonly attributes: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly anyOf: readonly [{
                                readonly type: "string";
                            }, {
                                readonly type: "number";
                            }];
                        };
                        readonly description: "Key-value pairs of your NFT attributes";
                    };
                    readonly id: {
                        readonly type: "number";
                        readonly description: "Unique ID for an NFT in a Project";
                    };
                    readonly projectId: {
                        readonly type: "number";
                        readonly description: "The ID of the Project the NFT is part of";
                    };
                    readonly transferable: {
                        readonly type: "boolean";
                        readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                    };
                    readonly compressed: {
                        readonly type: "boolean";
                        readonly description: "Whether or not the NFTs in the Project are compressed";
                    };
                    readonly mintAddress: {
                        readonly type: "string";
                        readonly description: "Base-58 encoded string representing an on-chain address";
                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    };
                    readonly ownerAddress: {
                        readonly type: "string";
                        readonly description: "Wallet address for the NFT's owner";
                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    };
                    readonly claimerAddress: {
                        readonly type: "string";
                        readonly description: "Wallet address allowed to claim the NFT";
                        readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                    };
                    readonly status: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
            }, {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly maxLength: 32;
                            readonly description: "Name stored as on-chain metadata";
                            readonly examples: readonly ["Underdog NFT"];
                        };
                        readonly symbol: {
                            readonly type: "string";
                            readonly maxLength: 10;
                            readonly description: "Symbol stored as on-chain metadata";
                            readonly examples: readonly ["UPDG"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Description stored in the metadata";
                            readonly examples: readonly ["I minted this NFT with the Underdog API"];
                        };
                        readonly image: {
                            readonly type: "string";
                            readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                            readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                        };
                        readonly animationUrl: {
                            readonly type: "string";
                            readonly description: "URL pointing to the asset's animation.";
                            readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                        };
                        readonly externalUrl: {
                            readonly type: "string";
                            readonly description: "URL pointing to an external URL defining the asset";
                            readonly examples: readonly ["https://app.underdogprotocol.com"];
                        };
                        readonly attributes: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "number";
                                }];
                            };
                            readonly description: "Key-value pairs of your NFT attributes";
                        };
                        readonly id: {
                            readonly type: "number";
                            readonly description: "Unique ID for an NFT in a Project";
                        };
                        readonly projectId: {
                            readonly type: "number";
                            readonly description: "The ID of the Project the NFT is part of";
                        };
                        readonly transferable: {
                            readonly type: "boolean";
                            readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                        };
                        readonly compressed: {
                            readonly type: "boolean";
                            readonly description: "Whether or not the NFTs in the Project are compressed";
                        };
                        readonly mintAddress: {
                            readonly type: "string";
                            readonly description: "Base-58 encoded string representing an on-chain address";
                            readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                        };
                        readonly ownerAddress: {
                            readonly type: "string";
                            readonly description: "Wallet address for the NFT's owner";
                            readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                        };
                        readonly claimerAddress: {
                            readonly type: "string";
                            readonly description: "Wallet address allowed to claim the NFT";
                            readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                        };
                        readonly status: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
                };
            }];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly nftId: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["transactionId", "nftId", "mintAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2TransactionsTransactionidRetry: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["transactionId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["burned", "confirmed", "failed", "pending", "processing"];
                    readonly description: "`burned` `confirmed` `failed` `pending` `processing`";
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["ORG_CREATE", "PROJECT_CREATE", "PROJECT_NFT_BATCH", "PROJECT_SFT_BATCH", "PROJECT_NFT_BURN", "PROJECT_NFT_REVOKE", "PROJECT_NFT_UPDATE", "PROJECT_ROYALTIES_WITHDRAW", "PROJECT_UPDATE", "CORE_PROJECT_CREATE", "CORE_PROJECT_UPDATE", "CORE_PROJECT_ASSET_CREATE", "CORE_PROJECT_ASSET_UPDATE", "CORE_PROJECT_ASSET_BATCH", "PROJECT_NFT_CREATE", "PROJECT_SFT_CREATE", "PROJECT_NFT_TRANSFER", "PROJECT_ASSET_TRANSFER", "PROJECT_ASSET_BURN", "PROJECT_ASSET_UPDATE", "SHOP_CREATE", "DUST_CREATE", "NON_TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_NFT_CREATE", "INSCRIPTION_CREATE", "SNAPSHOT_CREATE", "TOKEN22_CREATE", "TOKEN_CREATE", "TOKEN_RENOUNCE", "TOKEN_MINT", "TREE_CREATE"];
                    readonly description: "`ORG_CREATE` `PROJECT_CREATE` `PROJECT_NFT_BATCH` `PROJECT_SFT_BATCH` `PROJECT_NFT_BURN` `PROJECT_NFT_REVOKE` `PROJECT_NFT_UPDATE` `PROJECT_ROYALTIES_WITHDRAW` `PROJECT_UPDATE` `CORE_PROJECT_CREATE` `CORE_PROJECT_UPDATE` `CORE_PROJECT_ASSET_CREATE` `CORE_PROJECT_ASSET_UPDATE` `CORE_PROJECT_ASSET_BATCH` `PROJECT_NFT_CREATE` `PROJECT_SFT_CREATE` `PROJECT_NFT_TRANSFER` `PROJECT_ASSET_TRANSFER` `PROJECT_ASSET_BURN` `PROJECT_ASSET_UPDATE` `SHOP_CREATE` `DUST_CREATE` `NON_TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_NFT_CREATE` `INSCRIPTION_CREATE` `SNAPSHOT_CREATE` `TOKEN22_CREATE` `TOKEN_CREATE` `TOKEN_RENOUNCE` `TOKEN_MINT` `TREE_CREATE`";
                };
                readonly walletAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly data: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "Transaction data in stringified JSON format";
                };
                readonly signature: {
                    readonly type: readonly ["string", "null"];
                    readonly description: "Signature of the on-chain transaction";
                    readonly examples: readonly ["2yVZcx5rMDLDcqe31Uua6a93qw3qrNMsjroYWXV3sytttnrPSxk2heGK7yUorW6KrfiEpkLNYNVPivhgoigdRnK6"];
                };
                readonly createdAt: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly network: {
                    readonly type: "string";
                    readonly enum: readonly ["DEVNET", "LOCALNET", "MAINNET"];
                    readonly description: "`DEVNET` `LOCALNET` `MAINNET`";
                };
            };
            readonly required: readonly ["id", "status", "type", "walletAddress", "createdAt", "network"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2Webhooks: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly url: {
                readonly type: "string";
            };
            readonly triggers: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly enum: readonly ["ORG_CREATE", "PROJECT_CREATE", "PROJECT_NFT_BATCH", "PROJECT_SFT_BATCH", "PROJECT_NFT_BURN", "PROJECT_NFT_REVOKE", "PROJECT_NFT_UPDATE", "PROJECT_ROYALTIES_WITHDRAW", "PROJECT_UPDATE", "CORE_PROJECT_CREATE", "CORE_PROJECT_UPDATE", "CORE_PROJECT_ASSET_CREATE", "CORE_PROJECT_ASSET_UPDATE", "CORE_PROJECT_ASSET_BATCH", "PROJECT_NFT_CREATE", "PROJECT_SFT_CREATE", "PROJECT_NFT_TRANSFER", "PROJECT_ASSET_TRANSFER", "PROJECT_ASSET_BURN", "PROJECT_ASSET_UPDATE", "SHOP_CREATE", "DUST_CREATE", "NON_TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_NFT_CREATE", "INSCRIPTION_CREATE", "SNAPSHOT_CREATE", "TOKEN22_CREATE", "TOKEN_CREATE", "TOKEN_RENOUNCE", "TOKEN_MINT", "TREE_CREATE"];
                };
            };
        };
        readonly required: readonly ["url", "triggers"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly url: {
                    readonly type: "string";
                };
                readonly superAdminAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly orgId: {
                    readonly type: "integer";
                };
                readonly walletAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly valid: {
                    readonly type: "boolean";
                };
                readonly triggers: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly transactionType: {
                                readonly type: "string";
                                readonly enum: readonly ["ORG_CREATE", "PROJECT_CREATE", "PROJECT_NFT_BATCH", "PROJECT_SFT_BATCH", "PROJECT_NFT_BURN", "PROJECT_NFT_REVOKE", "PROJECT_NFT_UPDATE", "PROJECT_ROYALTIES_WITHDRAW", "PROJECT_UPDATE", "CORE_PROJECT_CREATE", "CORE_PROJECT_UPDATE", "CORE_PROJECT_ASSET_CREATE", "CORE_PROJECT_ASSET_UPDATE", "CORE_PROJECT_ASSET_BATCH", "PROJECT_NFT_CREATE", "PROJECT_SFT_CREATE", "PROJECT_NFT_TRANSFER", "PROJECT_ASSET_TRANSFER", "PROJECT_ASSET_BURN", "PROJECT_ASSET_UPDATE", "SHOP_CREATE", "DUST_CREATE", "NON_TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_CREATE", "TRANSFERABLE_PROJECT_NFT_CREATE", "INSCRIPTION_CREATE", "SNAPSHOT_CREATE", "TOKEN22_CREATE", "TOKEN_CREATE", "TOKEN_RENOUNCE", "TOKEN_MINT", "TREE_CREATE"];
                                readonly description: "`ORG_CREATE` `PROJECT_CREATE` `PROJECT_NFT_BATCH` `PROJECT_SFT_BATCH` `PROJECT_NFT_BURN` `PROJECT_NFT_REVOKE` `PROJECT_NFT_UPDATE` `PROJECT_ROYALTIES_WITHDRAW` `PROJECT_UPDATE` `CORE_PROJECT_CREATE` `CORE_PROJECT_UPDATE` `CORE_PROJECT_ASSET_CREATE` `CORE_PROJECT_ASSET_UPDATE` `CORE_PROJECT_ASSET_BATCH` `PROJECT_NFT_CREATE` `PROJECT_SFT_CREATE` `PROJECT_NFT_TRANSFER` `PROJECT_ASSET_TRANSFER` `PROJECT_ASSET_BURN` `PROJECT_ASSET_UPDATE` `SHOP_CREATE` `DUST_CREATE` `NON_TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_CREATE` `TRANSFERABLE_PROJECT_NFT_CREATE` `INSCRIPTION_CREATE` `SNAPSHOT_CREATE` `TOKEN22_CREATE` `TOKEN_CREATE` `TOKEN_RENOUNCE` `TOKEN_MINT` `TREE_CREATE`";
                            };
                        };
                        readonly required: readonly ["transactionType"];
                    };
                };
                readonly createdAt: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }];
                };
                readonly updatedAt: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "string";
                    }];
                };
            };
            readonly required: readonly ["id", "url", "superAdminAddress", "orgId", "walletAddress", "valid", "triggers", "createdAt", "updatedAt"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutV2ProjectsNProjectid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly sellerFeeBasisPoints: {
                readonly type: "integer";
                readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                readonly examples: readonly [100];
            };
        };
        readonly required: readonly ["name", "image", "sellerFeeBasisPoints"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly params: {
                    readonly type: "object";
                    readonly properties: {
                        readonly projectId: {
                            readonly type: "integer";
                        };
                    };
                    readonly required: readonly ["projectId"];
                };
                readonly body: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly maxLength: 32;
                            readonly description: "Name stored as on-chain metadata";
                            readonly examples: readonly ["Underdog NFT"];
                        };
                        readonly symbol: {
                            readonly type: "string";
                            readonly maxLength: 10;
                            readonly description: "Symbol stored as on-chain metadata";
                            readonly examples: readonly ["UPDG"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Description stored in the metadata";
                            readonly examples: readonly ["I minted this NFT with the Underdog API"];
                        };
                        readonly image: {
                            readonly type: "string";
                            readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                            readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                        };
                        readonly animationUrl: {
                            readonly type: "string";
                            readonly description: "URL pointing to the asset's animation.";
                            readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                        };
                        readonly externalUrl: {
                            readonly type: "string";
                            readonly description: "URL pointing to an external URL defining the asset";
                            readonly examples: readonly ["https://app.underdogprotocol.com"];
                        };
                        readonly attributes: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "number";
                                }];
                            };
                            readonly description: "Key-value pairs of your NFT attributes";
                        };
                        readonly sellerFeeBasisPoints: {
                            readonly type: "integer";
                            readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                            readonly examples: readonly [100];
                        };
                    };
                    readonly required: readonly ["name", "image", "sellerFeeBasisPoints"];
                };
            };
            readonly required: readonly ["params", "body"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutV2ProjectsNProjectidNftsNftid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
        };
        readonly required: readonly ["image"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly id: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address for the NFT's owner";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly claimerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address allowed to claim the NFT";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutV2ProjectsProjectid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly sellerFeeBasisPoints: {
                readonly type: "integer";
                readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                readonly examples: readonly [100];
            };
        };
        readonly required: readonly ["name", "image", "sellerFeeBasisPoints"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly projectId: {
                    readonly type: "integer";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["transactionId", "projectId", "mintAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutV2ProjectsProjectidNftsNftid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
        };
        readonly required: readonly ["name", "image"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly description: "Transaction ID that identifies the Transaction generated by an API request";
                };
                readonly nftId: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
            };
            readonly required: readonly ["transactionId", "nftId", "mintAddress"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutV2ProjectsTProjectid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly maxLength: 32;
                readonly description: "Name stored as on-chain metadata";
                readonly examples: readonly ["Underdog NFT"];
            };
            readonly symbol: {
                readonly type: "string";
                readonly maxLength: 10;
                readonly description: "Symbol stored as on-chain metadata";
                readonly examples: readonly ["UPDG"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly sellerFeeBasisPoints: {
                readonly type: "integer";
                readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                readonly examples: readonly [100];
            };
        };
        readonly required: readonly ["name", "image", "sellerFeeBasisPoints"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly params: {
                    readonly type: "object";
                    readonly properties: {
                        readonly projectId: {
                            readonly type: "integer";
                        };
                    };
                    readonly required: readonly ["projectId"];
                };
                readonly body: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly maxLength: 32;
                            readonly description: "Name stored as on-chain metadata";
                            readonly examples: readonly ["Underdog NFT"];
                        };
                        readonly symbol: {
                            readonly type: "string";
                            readonly maxLength: 10;
                            readonly description: "Symbol stored as on-chain metadata";
                            readonly examples: readonly ["UPDG"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Description stored in the metadata";
                            readonly examples: readonly ["I minted this NFT with the Underdog API"];
                        };
                        readonly image: {
                            readonly type: "string";
                            readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                            readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                        };
                        readonly animationUrl: {
                            readonly type: "string";
                            readonly description: "URL pointing to the asset's animation.";
                            readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                        };
                        readonly externalUrl: {
                            readonly type: "string";
                            readonly description: "URL pointing to an external URL defining the asset";
                            readonly examples: readonly ["https://app.underdogprotocol.com"];
                        };
                        readonly attributes: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                }, {
                                    readonly type: "number";
                                }];
                            };
                            readonly description: "Key-value pairs of your NFT attributes";
                        };
                        readonly sellerFeeBasisPoints: {
                            readonly type: "integer";
                            readonly description: "Creator royalties in basis points - 100 basis points = 1%";
                            readonly examples: readonly [100];
                        };
                    };
                    readonly required: readonly ["name", "image", "sellerFeeBasisPoints"];
                };
            };
            readonly required: readonly ["params", "body"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutV2ProjectsTProjectidNftsNftid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly description: {
                readonly type: "string";
                readonly description: "Description stored in the metadata";
                readonly examples: readonly ["I minted this NFT with the Underdog API"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
            };
            readonly attributes: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "number";
                    }];
                };
                readonly description: "Key-value pairs of your NFT attributes";
            };
            readonly animationUrl: {
                readonly type: "string";
                readonly description: "URL pointing to the asset's animation.";
                readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
            };
            readonly externalUrl: {
                readonly type: "string";
                readonly description: "URL pointing to an external URL defining the asset";
                readonly examples: readonly ["https://app.underdogprotocol.com"];
            };
        };
        readonly required: readonly ["image"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly projectId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly nftId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["projectId", "nftId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly description: "Name stored as on-chain metadata";
                    readonly examples: readonly ["Underdog NFT"];
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly maxLength: 10;
                    readonly description: "Symbol stored as on-chain metadata";
                    readonly examples: readonly ["UPDG"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description stored in the metadata";
                    readonly examples: readonly ["I minted this NFT with the Underdog API"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.";
                    readonly examples: readonly ["https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"];
                };
                readonly animationUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to the asset's animation.";
                    readonly examples: readonly ["https://i.imgur.com/mGfz7Ig.mp4"];
                };
                readonly externalUrl: {
                    readonly type: "string";
                    readonly description: "URL pointing to an external URL defining the asset";
                    readonly examples: readonly ["https://app.underdogprotocol.com"];
                };
                readonly attributes: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly anyOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "number";
                        }];
                    };
                    readonly description: "Key-value pairs of your NFT attributes";
                };
                readonly id: {
                    readonly type: "number";
                    readonly description: "Unique ID for an NFT in a Project";
                };
                readonly projectId: {
                    readonly type: "number";
                    readonly description: "The ID of the Project the NFT is part of";
                };
                readonly transferable: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFT can be transferred based on the Project its a part of";
                };
                readonly compressed: {
                    readonly type: "boolean";
                    readonly description: "Whether or not the NFTs in the Project are compressed";
                };
                readonly mintAddress: {
                    readonly type: "string";
                    readonly description: "Base-58 encoded string representing an on-chain address";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address for the NFT's owner";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly claimerAddress: {
                    readonly type: "string";
                    readonly description: "Wallet address allowed to claim the NFT";
                    readonly examples: readonly ["dustFPTV7dujoJjgkKtf6is3bYaFEy1nswS23vxHfvt"];
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["name", "image", "id", "mintAddress", "status"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { DeleteV2WebhooksWebhookid, GetV2Collections, GetV2CollectionsMintaddress, GetV2Domains, GetV2DomainsNamespace, GetV2Inscriptions, GetV2InscriptionsAddress, GetV2NftsMintaddress, GetV2Orgs, GetV2OrgsOrgidStats, GetV2Projects, GetV2ProjectsNProjectid, GetV2ProjectsNProjectidNfts, GetV2ProjectsNProjectidNftsNftid, GetV2ProjectsNProjectidNftsNftidClaim, GetV2ProjectsNProjectidNftsSearch, GetV2ProjectsNProjectidStats, GetV2ProjectsProjectid, GetV2ProjectsProjectidNfts, GetV2ProjectsProjectidNftsNftid, GetV2ProjectsProjectidNftsSearch, GetV2ProjectsProjectidStats, GetV2ProjectsSearch, GetV2ProjectsTProjectid, GetV2ProjectsTProjectidNfts, GetV2ProjectsTProjectidNftsNftid, GetV2ProjectsTProjectidNftsSearch, GetV2ProjectsTProjectidStats, GetV2Requests, GetV2RequestsRequestid, GetV2Transactions, GetV2TransactionsTransactionid, GetV2Webhooks, GetV2WebhooksWebhookid, PatchV2ProjectsNProjectid, PatchV2ProjectsNProjectidNftsNftid, PatchV2ProjectsProjectid, PatchV2ProjectsProjectidNftsNftid, PatchV2ProjectsTProjectid, PatchV2ProjectsTProjectidNftsNftid, PostV2Inscriptions, PostV2NftsMintaddressClaim, PostV2Projects, PostV2ProjectsN, PostV2ProjectsNProjectidNfts, PostV2ProjectsNProjectidNftsNftidBurn, PostV2ProjectsNProjectidNftsNftidRevoke, PostV2ProjectsProjectidNfts, PostV2ProjectsProjectidNftsBatch, PostV2ProjectsProjectidNftsLazy, PostV2ProjectsProjectidNftsNftidBurn, PostV2ProjectsProjectidNftsNftidTransfer, PostV2ProjectsProjectidRoyaltiesWithdraw, PostV2ProjectsProjectidSfts, PostV2ProjectsProjectidSftsBatch, PostV2ProjectsT, PostV2ProjectsTProjectidNfts, PostV2TransactionsTransactionidRetry, PostV2Webhooks, PutV2ProjectsNProjectid, PutV2ProjectsNProjectidNftsNftid, PutV2ProjectsProjectid, PutV2ProjectsProjectidNftsNftid, PutV2ProjectsTProjectid, PutV2ProjectsTProjectidNftsNftid };
