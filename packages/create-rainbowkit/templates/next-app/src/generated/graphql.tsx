import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date (isoformat) */
  Date: any;
  /** The GenericScalar scalar type represents a generic GraphQL scalar value that could be: List or Object. */
  JSONScalar: any;
  datetime: any;
};

export type AggregateAttribute = {
  __typename?: 'AggregateAttribute';
  traitType: Scalars['String'];
  valueMetrics: Array<AggregateAttributeValue>;
};

export type AggregateAttributeValue = {
  __typename?: 'AggregateAttributeValue';
  count: Scalars['Int'];
  percent: Scalars['Float'];
  value: Scalars['String'];
};

export type AggregateAttributesQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  ownerAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type AggregateStat = {
  __typename?: 'AggregateStat';
  floorPrice?: Maybe<Scalars['Float']>;
  nftCount: Scalars['Int'];
  ownerCount: Scalars['Int'];
  ownersByCount: OwnerCountConnection;
  salesVolume: SalesVolume;
};


export type AggregateStatFloorPriceArgs = {
  networks?: InputMaybe<Array<NetworkInput>>;
  where: CollectionAddressAndAttributesInput;
};


export type AggregateStatNftCountArgs = {
  networks?: InputMaybe<Array<NetworkInput>>;
  where: CollectionAddressOwnerAddressAttributesInput;
};


export type AggregateStatOwnerCountArgs = {
  networks?: InputMaybe<Array<NetworkInput>>;
  where: CollectionAddressAndAttributesInput;
};


export type AggregateStatOwnersByCountArgs = {
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  where: CollectionAddressAndAttributesInput;
};


export type AggregateStatSalesVolumeArgs = {
  networks?: InputMaybe<Array<NetworkInput>>;
  timeFilter?: InputMaybe<TimeFilter>;
  where: CollectionAddressOwnerAddressAttributesInput;
};

export type ApprovalEvent = {
  __typename?: 'ApprovalEvent';
  approvalEventType: ApprovalEventType;
  approved?: Maybe<Scalars['Boolean']>;
  approvedAddress: Scalars['String'];
  collectionAddress: Scalars['String'];
  ownerAddress: Scalars['String'];
  tokenId?: Maybe<Scalars['String']>;
};

export enum ApprovalEventType {
  Approval = 'APPROVAL',
  ApprovalForAll = 'APPROVAL_FOR_ALL'
}

export type AttributeFilter = {
  traitType: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type AudioEncodingTypes = {
  __typename?: 'AudioEncodingTypes';
  large?: Maybe<Scalars['String']>;
  original: Scalars['String'];
};

export enum Chain {
  Mainnet = 'MAINNET'
}

export type Collection = {
  __typename?: 'Collection';
  address: Scalars['String'];
  attributes?: Maybe<Array<CollectionAttribute>>;
  description: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  networkInfo: NetworkInfo;
  symbol?: Maybe<Scalars['String']>;
  totalSupply?: Maybe<Scalars['Int']>;
};

export type CollectionAddressAndAttributesInput = {
  attributes?: InputMaybe<Array<AttributeFilter>>;
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
};

export type CollectionAddressOwnerAddressAttributesInput = {
  attributes?: InputMaybe<Array<AttributeFilter>>;
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  ownerAddresses?: InputMaybe<Array<Scalars['String']>>;
};

export type CollectionAttribute = {
  __typename?: 'CollectionAttribute';
  traitType?: Maybe<Scalars['String']>;
  valueMetrics: Array<CollectionAttributeValue>;
};

export type CollectionAttributeValue = {
  __typename?: 'CollectionAttributeValue';
  count: Scalars['Int'];
  percent: Scalars['Float'];
  value: Scalars['String'];
};

export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  nodes: Array<Collection>;
  pageInfo: PageInfo;
};

export enum CollectionSortKey {
  Created = 'CREATED',
  Name = 'NAME',
  None = 'NONE'
}

export type CollectionSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: CollectionSortKey;
};

export type CollectionsQueryInput = {
  collectionAddresses: Array<Scalars['String']>;
};

export type Currency = {
  __typename?: 'Currency';
  address: Scalars['String'];
  decimals: Scalars['Int'];
  name: Scalars['String'];
};

export type CurrencyAmount = {
  __typename?: 'CurrencyAmount';
  currency: Currency;
  decimal: Scalars['Float'];
  raw: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  collectionAddress: Scalars['String'];
  eventType: EventType;
  networkInfo: NetworkInfo;
  properties: EventProperties;
  tokenId?: Maybe<Scalars['String']>;
  transactionInfo: TransactionInfo;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  nodes: Array<Event>;
  pageInfo: PageInfo;
};

export type EventProperties = ApprovalEvent | MintEvent | Sale | TransferEvent | V1MarketEvent | V2AuctionEvent | V3AskEvent;

export enum EventSortKey {
  Created = 'CREATED'
}

export type EventSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: EventSortKey;
};

export enum EventType {
  ApprovalEvent = 'APPROVAL_EVENT',
  MintEvent = 'MINT_EVENT',
  SaleEvent = 'SALE_EVENT',
  TransferEvent = 'TRANSFER_EVENT',
  V1MarketEvent = 'V1_MARKET_EVENT',
  V2AuctionEvent = 'V2_AUCTION_EVENT',
  V3AskEvent = 'V3_ASK_EVENT'
}

export type EventsQueryFilter = {
  bidderAddresses?: InputMaybe<Array<Scalars['String']>>;
  eventTypes?: InputMaybe<Array<EventType>>;
  recipientAddresses?: InputMaybe<Array<Scalars['String']>>;
  sellerAddresses?: InputMaybe<Array<Scalars['String']>>;
  senderAddresses?: InputMaybe<Array<Scalars['String']>>;
  timeFilter?: InputMaybe<TimeFilter>;
};

export type EventsQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type ImageEncodingTypes = {
  __typename?: 'ImageEncodingTypes';
  large?: Maybe<Scalars['String']>;
  original: Scalars['String'];
  poster?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type ImageEncodingTypesVideoEncodingTypesAudioEncodingTypesUnsupportedEncodingTypes = AudioEncodingTypes | ImageEncodingTypes | UnsupportedEncodingTypes | VideoEncodingTypes;

export type Market = {
  __typename?: 'Market';
  collectionAddress: Scalars['String'];
  marketAddress: Scalars['String'];
  marketType: MarketType;
  networkInfo: NetworkInfo;
  price?: Maybe<PriceAtTime>;
  properties: MarketProperties;
  status: Scalars['String'];
  tokenId: Scalars['String'];
  transactionInfo: TransactionInfo;
};

export enum MarketCategory {
  Ask = 'ASK',
  Auction = 'AUCTION',
  Offer = 'OFFER'
}

export type MarketProperties = V1Ask | V1BidShare | V1Offer | V2Auction | V3Ask;

export enum MarketSortKey {
  ChainTokenPrice = 'CHAIN_TOKEN_PRICE',
  Created = 'CREATED',
  NativePrice = 'NATIVE_PRICE',
  None = 'NONE',
  TimedSaleEnding = 'TIMED_SALE_ENDING'
}

export type MarketSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: MarketSortKey;
};

export enum MarketStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED'
}

export enum MarketType {
  V1Ask = 'V1_ASK',
  V1BidShare = 'V1_BID_SHARE',
  V1Offer = 'V1_OFFER',
  V2Auction = 'V2_AUCTION',
  V3Ask = 'V3_ASK'
}

export type MarketTypeFilter = {
  bidderAddresses?: InputMaybe<Array<Scalars['String']>>;
  marketType: MarketType;
  statuses?: InputMaybe<Array<MarketStatus>>;
};

export type MarketWithToken = {
  __typename?: 'MarketWithToken';
  market: Market;
  token?: Maybe<Token>;
};

export type MarketWithTokenConnection = {
  __typename?: 'MarketWithTokenConnection';
  nodes: Array<MarketWithToken>;
  pageInfo: PageInfo;
};

export type MarketsQueryFilter = {
  marketFilters?: InputMaybe<Array<MarketTypeFilter>>;
  priceFilter?: InputMaybe<PriceFilter>;
};

export type MarketsQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export enum MediaType {
  Audio = 'AUDIO',
  Gif = 'GIF',
  Html = 'HTML',
  Image = 'IMAGE',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type Mint = {
  __typename?: 'Mint';
  collectionAddress: Scalars['String'];
  networkInfo: NetworkInfo;
  originatorAddress: Scalars['String'];
  price: PriceAtTime;
  toAddress: Scalars['String'];
  tokenId: Scalars['String'];
  transactionInfo: TransactionInfo;
};

export type MintEvent = {
  __typename?: 'MintEvent';
  collectionAddress: Scalars['String'];
  originatorAddress: Scalars['String'];
  price: PriceAtTime;
  toAddress: Scalars['String'];
  tokenId: Scalars['String'];
};

export type MintInfo = {
  __typename?: 'MintInfo';
  mintContext: TransactionInfo;
  originatorAddress: Scalars['String'];
  price: PriceAtTime;
  toAddress: Scalars['String'];
};

export enum MintSortKey {
  None = 'NONE',
  Price = 'PRICE',
  Time = 'TIME',
  TokenId = 'TOKEN_ID'
}

export type MintSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: MintSortKey;
};

export type MintWithTokenAndMarkets = {
  __typename?: 'MintWithTokenAndMarkets';
  markets: Array<Market>;
  mint: Mint;
  token?: Maybe<Token>;
};


export type MintWithTokenAndMarketsMarketsArgs = {
  filter?: InputMaybe<MarketsQueryFilter>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<MarketSortKeySortInput>;
};

export type MintWithTokenAndMarketsConnection = {
  __typename?: 'MintWithTokenAndMarketsConnection';
  nodes: Array<MintWithTokenAndMarkets>;
  pageInfo: PageInfo;
};

export type MintsQueryFilter = {
  priceFilter?: InputMaybe<PriceFilter>;
  timeFilter?: InputMaybe<TimeFilter>;
};

export type MintsQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  minterAddresses?: InputMaybe<Array<Scalars['String']>>;
  recipientAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export enum Network {
  Ethereum = 'ETHEREUM'
}

export type NetworkInfo = {
  __typename?: 'NetworkInfo';
  chain: Chain;
  network: Network;
};

export type NetworkInput = {
  chain?: Chain;
  network?: Network;
};

export type OwnerCount = {
  __typename?: 'OwnerCount';
  count: Scalars['Int'];
  owner: Scalars['String'];
};

export type OwnerCountConnection = {
  __typename?: 'OwnerCountConnection';
  nodes: Array<OwnerCount>;
  pageInfo: PageInfo;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  limit: Scalars['Int'];
};

export type PaginationInput = {
  after?: InputMaybe<Scalars['String']>;
  limit?: Scalars['Int'];
};

export type PriceAtTime = {
  __typename?: 'PriceAtTime';
  blockNumber: Scalars['Int'];
  chainTokenPrice?: Maybe<CurrencyAmount>;
  nativePrice: CurrencyAmount;
  usdcPrice?: Maybe<CurrencyAmount>;
};

export type PriceFilter = {
  currencyAddress?: InputMaybe<Scalars['String']>;
  maximumChainTokenPrice?: InputMaybe<Scalars['String']>;
  maximumNativePrice?: InputMaybe<Scalars['String']>;
  minimumChainTokenPrice?: InputMaybe<Scalars['String']>;
  minimumNativePrice?: InputMaybe<Scalars['String']>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  /** Gets the total set of NFT attributes */
  aggregateAttributes: Array<AggregateAttribute>;
  /** Gets counts, sales volume, and other statistics */
  aggregateStat: AggregateStat;
  /** NFT collection data */
  collections: CollectionConnection;
  /** Contract event information, e.g. Sales, Transfers, Mints, etc. */
  events: EventConnection;
  /** Data for specific ZORA markets, e.g. Buy Now, Auctions, Offers */
  markets: MarketWithTokenConnection;
  /** Historical minting data */
  mints: MintWithTokenAndMarketsConnection;
  /** Historical sales data from ZORA, OpenSea, LooksRare, 0x, and more */
  sales: SaleWithTokenConnection;
  /** Returns search results for a query */
  search: SearchResultConnection;
  /** Gets data on a single token */
  token?: Maybe<TokenWithFullMarketHistory>;
  /** Gets data for multiple tokens */
  tokens: TokenWithMarketsSummaryConnection;
};


export type RootQueryAggregateAttributesArgs = {
  networks?: InputMaybe<Array<NetworkInput>>;
  where: AggregateAttributesQueryInput;
};


export type RootQueryCollectionsArgs = {
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<CollectionSortKeySortInput>;
  where?: InputMaybe<CollectionsQueryInput>;
};


export type RootQueryEventsArgs = {
  filter?: InputMaybe<EventsQueryFilter>;
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<EventSortKeySortInput>;
  where?: InputMaybe<EventsQueryInput>;
};


export type RootQueryMarketsArgs = {
  filter?: InputMaybe<MarketsQueryFilter>;
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<MarketSortKeySortInput>;
  where?: InputMaybe<MarketsQueryInput>;
};


export type RootQueryMintsArgs = {
  filter?: InputMaybe<MintsQueryFilter>;
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<MintSortKeySortInput>;
  where?: InputMaybe<MintsQueryInput>;
};


export type RootQuerySalesArgs = {
  filter?: InputMaybe<SalesQueryFilter>;
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SaleSortKeySortInput>;
  where?: InputMaybe<SalesQueryInput>;
};


export type RootQuerySearchArgs = {
  filter?: InputMaybe<SearchFilter>;
  pagination: SearchPaginationInput;
  query: SearchQueryInput;
};


export type RootQueryTokenArgs = {
  network?: InputMaybe<NetworkInput>;
  token: TokenInput;
};


export type RootQueryTokensArgs = {
  filter?: InputMaybe<TokensQueryFilter>;
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<TokenSortInput>;
  where?: InputMaybe<TokensQueryInput>;
};

export type Sale = {
  __typename?: 'Sale';
  buyerAddress: Scalars['String'];
  collectionAddress: Scalars['String'];
  networkInfo: NetworkInfo;
  price: PriceAtTime;
  saleContractAddress?: Maybe<Scalars['String']>;
  saleType: SaleType;
  sellerAddress: Scalars['String'];
  tokenId: Scalars['String'];
  transactionInfo: TransactionInfo;
};

export enum SaleSortKey {
  ChainTokenPrice = 'CHAIN_TOKEN_PRICE',
  NativePrice = 'NATIVE_PRICE',
  None = 'NONE',
  Time = 'TIME'
}

export type SaleSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: SaleSortKey;
};

export enum SaleType {
  CryptopunksSale = 'CRYPTOPUNKS_SALE',
  FoundationSale = 'FOUNDATION_SALE',
  LooksRareSale = 'LOOKS_RARE_SALE',
  NounsAuctionSale = 'NOUNS_AUCTION_SALE',
  OpenseaBundleSale = 'OPENSEA_BUNDLE_SALE',
  OpenseaSingleSale = 'OPENSEA_SINGLE_SALE',
  RaribleSale = 'RARIBLE_SALE',
  SuperrareSale = 'SUPERRARE_SALE',
  ZeroxSale = 'ZEROX_SALE',
  ZoraV2AuctionSale = 'ZORA_V2_AUCTION_SALE',
  ZoraV3AskSale = 'ZORA_V3_ASK_SALE'
}

export type SaleWithToken = {
  __typename?: 'SaleWithToken';
  sale: Sale;
  token?: Maybe<Token>;
};

export type SaleWithTokenConnection = {
  __typename?: 'SaleWithTokenConnection';
  nodes: Array<SaleWithToken>;
  pageInfo: PageInfo;
};

export type SalesQueryFilter = {
  priceFilter?: InputMaybe<PriceFilter>;
  saleTypes?: InputMaybe<Array<SaleType>>;
  timeFilter?: InputMaybe<TimeFilter>;
};

export type SalesQueryInput = {
  buyerAddresses?: InputMaybe<Array<Scalars['String']>>;
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  sellerAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type SalesVolume = {
  __typename?: 'SalesVolume';
  chainTokenPrice: Scalars['Float'];
  totalCount: Scalars['Int'];
  usdcPrice: Scalars['Float'];
};

export type SearchFilter = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  entityType?: InputMaybe<SearchableEntity>;
};

export type SearchPaginationInput = {
  after?: InputMaybe<Scalars['String']>;
  limit?: Scalars['Int'];
};

export type SearchQueryInput = {
  text: Scalars['String'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  collectionAddress: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  entity?: Maybe<TokenCollection>;
  entityType: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  networkInfo: NetworkInfo;
  tokenId?: Maybe<Scalars['String']>;
};

export type SearchResultConnection = {
  __typename?: 'SearchResultConnection';
  nodes: Array<SearchResult>;
  pageInfo: PageInfo;
};

export enum SearchableEntity {
  Collection = 'COLLECTION',
  Token = 'TOKEN'
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type TimeFilter = {
  endDate?: InputMaybe<Scalars['String']>;
  lookbackHours?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  attributes?: Maybe<Array<TokenAttribute>>;
  collectionAddress: Scalars['String'];
  collectionName?: Maybe<Scalars['String']>;
  content?: Maybe<TokenContentMedia>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<TokenContentMedia>;
  lastRefreshTime?: Maybe<Scalars['datetime']>;
  metadata?: Maybe<Scalars['JSONScalar']>;
  mintInfo?: Maybe<MintInfo>;
  name?: Maybe<Scalars['String']>;
  networkInfo: NetworkInfo;
  owner?: Maybe<Scalars['String']>;
  tokenContract?: Maybe<TokenContract>;
  tokenId: Scalars['String'];
  tokenUrl?: Maybe<Scalars['String']>;
  tokenUrlMimeType?: Maybe<Scalars['String']>;
};

export type TokenAttribute = {
  __typename?: 'TokenAttribute';
  displayType?: Maybe<Scalars['String']>;
  traitType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TokenCollection = Collection | Token;

export type TokenContentMedia = {
  __typename?: 'TokenContentMedia';
  mediaEncoding?: Maybe<ImageEncodingTypesVideoEncodingTypesAudioEncodingTypesUnsupportedEncodingTypes>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TokenContract = {
  __typename?: 'TokenContract';
  chain: Scalars['Int'];
  collectionAddress: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  network: Scalars['String'];
  symbol?: Maybe<Scalars['String']>;
  totalSupply?: Maybe<Scalars['Int']>;
};

export type TokenInput = {
  address: Scalars['String'];
  tokenId: Scalars['String'];
};

export type TokenSortInput = {
  sortAxis?: InputMaybe<MarketCategory>;
  sortDirection: SortDirection;
  sortKey: TokenSortKey;
};

export enum TokenSortKey {
  ChainTokenPrice = 'CHAIN_TOKEN_PRICE',
  Minted = 'MINTED',
  NativePrice = 'NATIVE_PRICE',
  None = 'NONE',
  TimedSaleEnding = 'TIMED_SALE_ENDING',
  TokenId = 'TOKEN_ID',
  Transferred = 'TRANSFERRED'
}

export type TokenWithFullMarketHistory = {
  __typename?: 'TokenWithFullMarketHistory';
  events: Array<Event>;
  markets: Array<Market>;
  sales: Array<Sale>;
  token: Token;
};


export type TokenWithFullMarketHistoryEventsArgs = {
  filter?: InputMaybe<EventsQueryFilter>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<EventSortKeySortInput>;
};


export type TokenWithFullMarketHistoryMarketsArgs = {
  filter?: InputMaybe<MarketsQueryFilter>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<MarketSortKeySortInput>;
};


export type TokenWithFullMarketHistorySalesArgs = {
  filter?: InputMaybe<SalesQueryFilter>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SaleSortKeySortInput>;
};

export type TokenWithMarketsSummary = {
  __typename?: 'TokenWithMarketsSummary';
  events: Array<Event>;
  marketsSummary: Array<Market>;
  sales: Array<Sale>;
  token: Token;
};


export type TokenWithMarketsSummaryEventsArgs = {
  filter?: InputMaybe<EventsQueryFilter>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<EventSortKeySortInput>;
};


export type TokenWithMarketsSummarySalesArgs = {
  filter?: InputMaybe<SalesQueryFilter>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SaleSortKeySortInput>;
};

export type TokenWithMarketsSummaryConnection = {
  __typename?: 'TokenWithMarketsSummaryConnection';
  nodes: Array<TokenWithMarketsSummary>;
  pageInfo: PageInfo;
};

export type TokensQueryFilter = {
  attributeFilters?: InputMaybe<Array<AttributeFilter>>;
  marketFilters?: InputMaybe<Array<MarketTypeFilter>>;
  mediaType?: InputMaybe<MediaType>;
  priceFilter?: InputMaybe<PriceFilter>;
};

export type TokensQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  ownerAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type TransactionInfo = {
  __typename?: 'TransactionInfo';
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['Date'];
  logIndex?: Maybe<Scalars['Int']>;
  transactionHash?: Maybe<Scalars['String']>;
};

export type TransferEvent = {
  __typename?: 'TransferEvent';
  collectionAddress: Scalars['String'];
  fromAddress: Scalars['String'];
  toAddress: Scalars['String'];
  tokenId: Scalars['String'];
};

export type UnsupportedEncodingTypes = {
  __typename?: 'UnsupportedEncodingTypes';
  original: Scalars['String'];
};

export type V1Ask = {
  __typename?: 'V1Ask';
  amount: PriceAtTime;
  collectionAddress: Scalars['String'];
  currency: Scalars['String'];
  tokenId: Scalars['String'];
  v1AskStatus: V1MarketEntityStatus;
};

export type V1BidShare = {
  __typename?: 'V1BidShare';
  collectionAddress: Scalars['String'];
  creator: Scalars['String'];
  owner: Scalars['String'];
  previousOwner: Scalars['String'];
  tokenId: Scalars['String'];
  v1BidShareStatus: V1MarketEntityStatus;
};

export type V1MarketAskCreatedEventProperties = {
  __typename?: 'V1MarketAskCreatedEventProperties';
  amount: Scalars['String'];
  currency: Scalars['String'];
  price: PriceAtTime;
};

export type V1MarketAskRemovedEventProperties = {
  __typename?: 'V1MarketAskRemovedEventProperties';
  amount: Scalars['String'];
  currency: Scalars['String'];
  price: PriceAtTime;
};

export type V1MarketBidShareUpdatedEventProperties = {
  __typename?: 'V1MarketBidShareUpdatedEventProperties';
  creator: Scalars['String'];
  owner: Scalars['String'];
  previousOwner: Scalars['String'];
};

export enum V1MarketEntityStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED'
}

export type V1MarketEvent = {
  __typename?: 'V1MarketEvent';
  address: Scalars['String'];
  collectionAddress: Scalars['String'];
  properties: V1MarketEventProperties;
  tokenId: Scalars['String'];
  v1MarketEventType: V1MarketEventType;
};

export type V1MarketEventProperties = V1MarketAskCreatedEventProperties | V1MarketAskRemovedEventProperties | V1MarketBidShareUpdatedEventProperties | V1MarketOfferCreatedEventProperties | V1MarketOfferFinalizedEventProperties | V1MarketOfferRemovedEventProperties;

export enum V1MarketEventType {
  V1MarketAskCreated = 'V1_MARKET_ASK_CREATED',
  V1MarketAskRemoved = 'V1_MARKET_ASK_REMOVED',
  V1MarketBidCreated = 'V1_MARKET_BID_CREATED',
  V1MarketBidFinalized = 'V1_MARKET_BID_FINALIZED',
  V1MarketBidRemoved = 'V1_MARKET_BID_REMOVED',
  V1MarketBidShareUpdated = 'V1_MARKET_BID_SHARE_UPDATED'
}

export type V1MarketOfferCreatedEventProperties = {
  __typename?: 'V1MarketOfferCreatedEventProperties';
  amount: Scalars['String'];
  bidder: Scalars['String'];
  currency: Scalars['String'];
  price: PriceAtTime;
  recipient: Scalars['String'];
  sellOnShare: Scalars['String'];
};

export type V1MarketOfferFinalizedEventProperties = {
  __typename?: 'V1MarketOfferFinalizedEventProperties';
  amount: Scalars['String'];
  bidder: Scalars['String'];
  currency: Scalars['String'];
  price: PriceAtTime;
  recipient: Scalars['String'];
  sellOnShare: Scalars['String'];
};

export type V1MarketOfferRemovedEventProperties = {
  __typename?: 'V1MarketOfferRemovedEventProperties';
  amount: Scalars['String'];
  bidder: Scalars['String'];
  currency: Scalars['String'];
  price: PriceAtTime;
  recipient: Scalars['String'];
  sellOnShare: Scalars['String'];
};

export type V1Offer = {
  __typename?: 'V1Offer';
  amount: PriceAtTime;
  bidder: Scalars['String'];
  collectionAddress: Scalars['String'];
  currency: Scalars['String'];
  recipient: Scalars['String'];
  sellOnShare: Scalars['String'];
  tokenId: Scalars['String'];
  v1OfferStatus: V1MarketEntityStatus;
};

export type V2Auction = {
  __typename?: 'V2Auction';
  address: Scalars['String'];
  amountCuratorReceived?: Maybe<PriceAtTime>;
  amountTokenOwnerReceived?: Maybe<PriceAtTime>;
  approved: Scalars['Boolean'];
  auctionCurrency: Scalars['String'];
  auctionId: Scalars['String'];
  collectionAddress: Scalars['String'];
  curator: Scalars['String'];
  curatorFeePercentage: Scalars['Int'];
  duration: Scalars['String'];
  estimatedExpirationTime?: Maybe<Scalars['datetime']>;
  firstBidTime?: Maybe<Scalars['datetime']>;
  highestBidPrice?: Maybe<PriceAtTime>;
  highestBidder?: Maybe<Scalars['String']>;
  reservePrice: PriceAtTime;
  tokenId: Scalars['String'];
  tokenOwner: Scalars['String'];
  v2AuctionStatus: V2AuctionStatus;
};

export type V2AuctionApprovalUpdatedEventProperties = {
  __typename?: 'V2AuctionApprovalUpdatedEventProperties';
  approved: Scalars['Boolean'];
};

export type V2AuctionBidEventProperties = {
  __typename?: 'V2AuctionBidEventProperties';
  extended: Scalars['Boolean'];
  firstBid: Scalars['Boolean'];
  price: PriceAtTime;
  sender: Scalars['String'];
  value: Scalars['String'];
};

export type V2AuctionCanceledEventProperties = {
  __typename?: 'V2AuctionCanceledEventProperties';
  tokenOwner: Scalars['String'];
};

export type V2AuctionCreatedEventProperties = {
  __typename?: 'V2AuctionCreatedEventProperties';
  auctionCurrency: Scalars['String'];
  curator: Scalars['String'];
  curatorFeePercentage: Scalars['Int'];
  duration: Scalars['String'];
  price: PriceAtTime;
  reservePrice: Scalars['String'];
  tokenOwner: Scalars['String'];
};

export type V2AuctionDurationExtendedEventProperties = {
  __typename?: 'V2AuctionDurationExtendedEventProperties';
  duration: Scalars['String'];
};

export type V2AuctionEndedEventProperties = {
  __typename?: 'V2AuctionEndedEventProperties';
  amount: Scalars['String'];
  auctionCurrency: Scalars['String'];
  curator: Scalars['String'];
  curatorFee: Scalars['String'];
  tokenOwner: Scalars['String'];
  winner: Scalars['String'];
};

export type V2AuctionEvent = {
  __typename?: 'V2AuctionEvent';
  address: Scalars['String'];
  auctionId: Scalars['Int'];
  collectionAddress: Scalars['String'];
  properties: V2AuctionEventProperties;
  tokenId: Scalars['String'];
  v2AuctionEventType: V2AuctionEventType;
};

export type V2AuctionEventProperties = V2AuctionApprovalUpdatedEventProperties | V2AuctionBidEventProperties | V2AuctionCanceledEventProperties | V2AuctionCreatedEventProperties | V2AuctionDurationExtendedEventProperties | V2AuctionEndedEventProperties | V2AuctionReservePriceUpdatedEventProperties;

export enum V2AuctionEventType {
  V2AuctionApprovalUpdated = 'V2_AUCTION_APPROVAL_UPDATED',
  V2AuctionBid = 'V2_AUCTION_BID',
  V2AuctionCanceled = 'V2_AUCTION_CANCELED',
  V2AuctionCreated = 'V2_AUCTION_CREATED',
  V2AuctionDurationExtended = 'V2_AUCTION_DURATION_EXTENDED',
  V2AuctionEnded = 'V2_AUCTION_ENDED',
  V2AuctionReservePriceUpdated = 'V2_AUCTION_RESERVE_PRICE_UPDATED'
}

export type V2AuctionReservePriceUpdatedEventProperties = {
  __typename?: 'V2AuctionReservePriceUpdatedEventProperties';
  price: PriceAtTime;
  reservePrice: Scalars['String'];
};

export enum V2AuctionStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED'
}

export type V3Ask = {
  __typename?: 'V3Ask';
  address: Scalars['String'];
  askCurrency: Scalars['String'];
  askPrice: PriceAtTime;
  buyer?: Maybe<Scalars['String']>;
  collectionAddress: Scalars['String'];
  finder?: Maybe<Scalars['String']>;
  findersFeeBps: Scalars['Int'];
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
  tokenId: Scalars['String'];
  v3AskStatus: V3AskStatus;
};

export type V3AskCanceledEventProperties = {
  __typename?: 'V3AskCanceledEventProperties';
  askCurrency: Scalars['String'];
  askPrice: Scalars['String'];
  findersFeeBps: Scalars['Int'];
  price: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
};

export type V3AskCreatedEventProperties = {
  __typename?: 'V3AskCreatedEventProperties';
  askCurrency: Scalars['String'];
  askPrice: Scalars['String'];
  findersFeeBps: Scalars['Int'];
  price: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
};

export type V3AskEvent = {
  __typename?: 'V3AskEvent';
  address: Scalars['String'];
  collectionAddress: Scalars['String'];
  properties: V3AskEventProperties;
  tokenId: Scalars['String'];
  v3AskEventType: V3AskEventType;
};

export type V3AskEventProperties = V3AskCanceledEventProperties | V3AskCreatedEventProperties | V3AskFilledEventProperties | V3AskPriceUpdatedEventProperties;

export enum V3AskEventType {
  V3AskCanceled = 'V3_ASK_CANCELED',
  V3AskCreated = 'V3_ASK_CREATED',
  V3AskFilled = 'V3_ASK_FILLED',
  V3AskPriceUpdated = 'V3_ASK_PRICE_UPDATED'
}

export type V3AskFilledEventProperties = {
  __typename?: 'V3AskFilledEventProperties';
  askCurrency: Scalars['String'];
  askPrice: Scalars['String'];
  buyer: Scalars['String'];
  finder: Scalars['String'];
  findersFeeBps: Scalars['Int'];
  price: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
};

export type V3AskPriceUpdatedEventProperties = {
  __typename?: 'V3AskPriceUpdatedEventProperties';
  askCurrency: Scalars['String'];
  askPrice: Scalars['String'];
  findersFeeBps: Scalars['Int'];
  price: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
};

export enum V3AskStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED'
}

export type VideoEncodingTypes = {
  __typename?: 'VideoEncodingTypes';
  large?: Maybe<Scalars['String']>;
  original: Scalars['String'];
  poster?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type CollectionInfoQueryVariables = Exact<{
  networks?: InputMaybe<Array<NetworkInput> | NetworkInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<CollectionSortKeySortInput>;
  where?: InputMaybe<CollectionsQueryInput>;
}>;


export type CollectionInfoQuery = { __typename?: 'RootQuery', collections: { __typename?: 'CollectionConnection', nodes: Array<{ __typename?: 'Collection', address: string, description: string, name?: string | null, symbol?: string | null, totalSupply?: number | null, networkInfo: { __typename?: 'NetworkInfo', network: Network, chain: Chain }, attributes?: Array<{ __typename?: 'CollectionAttribute', traitType?: string | null, valueMetrics: Array<{ __typename?: 'CollectionAttributeValue', value: string, count: number, percent: number }> }> | null }>, pageInfo: { __typename?: 'PageInfo', limit: number, endCursor?: string | null, hasNextPage: boolean } } };

export type MeNfTsQueryVariables = Exact<{
  filter?: InputMaybe<TokensQueryFilter>;
  networks?: InputMaybe<Array<NetworkInput> | NetworkInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<TokenSortInput>;
  where?: InputMaybe<TokensQueryInput>;
}>;


export type MeNfTsQuery = { __typename?: 'RootQuery', tokens: { __typename?: 'TokenWithMarketsSummaryConnection', nodes: Array<{ __typename?: 'TokenWithMarketsSummary', token: { __typename?: 'Token', collectionAddress: string, tokenId: string, name?: string | null, owner?: string | null, metadata?: any | null, image?: { __typename?: 'TokenContentMedia', url?: string | null } | null } }> } };


export const CollectionInfoDocument = gql`
    query CollectionInfo($networks: [NetworkInput!], $pagination: PaginationInput, $sort: CollectionSortKeySortInput, $where: CollectionsQueryInput) {
  collections(
    networks: $networks
    pagination: $pagination
    sort: $sort
    where: $where
  ) {
    nodes {
      address
      description
      name
      symbol
      totalSupply
      networkInfo {
        network
        chain
      }
      attributes {
        traitType
        valueMetrics {
          value
          count
          percent
        }
      }
    }
    pageInfo {
      limit
      endCursor
      hasNextPage
    }
  }
}
    `;

/**
 * __useCollectionInfoQuery__
 *
 * To run a query within a React component, call `useCollectionInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionInfoQuery({
 *   variables: {
 *      networks: // value for 'networks'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCollectionInfoQuery(baseOptions?: Apollo.QueryHookOptions<CollectionInfoQuery, CollectionInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionInfoQuery, CollectionInfoQueryVariables>(CollectionInfoDocument, options);
      }
export function useCollectionInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionInfoQuery, CollectionInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionInfoQuery, CollectionInfoQueryVariables>(CollectionInfoDocument, options);
        }
export type CollectionInfoQueryHookResult = ReturnType<typeof useCollectionInfoQuery>;
export type CollectionInfoLazyQueryHookResult = ReturnType<typeof useCollectionInfoLazyQuery>;
export type CollectionInfoQueryResult = Apollo.QueryResult<CollectionInfoQuery, CollectionInfoQueryVariables>;
export const MeNfTsDocument = gql`
    query MeNFTs($filter: TokensQueryFilter, $networks: [NetworkInput!], $pagination: PaginationInput, $sort: TokenSortInput, $where: TokensQueryInput) {
  tokens(
    filter: $filter
    networks: $networks
    pagination: $pagination
    sort: $sort
    where: $where
  ) {
    nodes {
      token {
        collectionAddress
        tokenId
        name
        owner
        image {
          url
        }
        metadata
      }
    }
  }
}
    `;

/**
 * __useMeNfTsQuery__
 *
 * To run a query within a React component, call `useMeNfTsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeNfTsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeNfTsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      networks: // value for 'networks'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMeNfTsQuery(baseOptions?: Apollo.QueryHookOptions<MeNfTsQuery, MeNfTsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeNfTsQuery, MeNfTsQueryVariables>(MeNfTsDocument, options);
      }
export function useMeNfTsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeNfTsQuery, MeNfTsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeNfTsQuery, MeNfTsQueryVariables>(MeNfTsDocument, options);
        }
export type MeNfTsQueryHookResult = ReturnType<typeof useMeNfTsQuery>;
export type MeNfTsLazyQueryHookResult = ReturnType<typeof useMeNfTsLazyQuery>;
export type MeNfTsQueryResult = Apollo.QueryResult<MeNfTsQuery, MeNfTsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "EventProperties": [
      "ApprovalEvent",
      "MintEvent",
      "Sale",
      "TransferEvent",
      "V1MarketEvent",
      "V2AuctionEvent",
      "V3AskEvent"
    ],
    "ImageEncodingTypesVideoEncodingTypesAudioEncodingTypesUnsupportedEncodingTypes": [
      "AudioEncodingTypes",
      "ImageEncodingTypes",
      "UnsupportedEncodingTypes",
      "VideoEncodingTypes"
    ],
    "MarketProperties": [
      "V1Ask",
      "V1BidShare",
      "V1Offer",
      "V2Auction",
      "V3Ask"
    ],
    "TokenCollection": [
      "Collection",
      "Token"
    ],
    "V1MarketEventProperties": [
      "V1MarketAskCreatedEventProperties",
      "V1MarketAskRemovedEventProperties",
      "V1MarketBidShareUpdatedEventProperties",
      "V1MarketOfferCreatedEventProperties",
      "V1MarketOfferFinalizedEventProperties",
      "V1MarketOfferRemovedEventProperties"
    ],
    "V2AuctionEventProperties": [
      "V2AuctionApprovalUpdatedEventProperties",
      "V2AuctionBidEventProperties",
      "V2AuctionCanceledEventProperties",
      "V2AuctionCreatedEventProperties",
      "V2AuctionDurationExtendedEventProperties",
      "V2AuctionEndedEventProperties",
      "V2AuctionReservePriceUpdatedEventProperties"
    ],
    "V3AskEventProperties": [
      "V3AskCanceledEventProperties",
      "V3AskCreatedEventProperties",
      "V3AskFilledEventProperties",
      "V3AskPriceUpdatedEventProperties"
    ]
  }
};
      export default result;
    