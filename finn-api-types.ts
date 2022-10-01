export interface FinnResponse {
  docs: Doc[];
  filters: Filter[];
  metadata: Metadata;
  mapUrl: string;
  pageMetadata: PageMetadata;
  resultHeading: string;
  promotedAd: PromotedAd;
}

export interface Doc {
  type: string;
  ad_id: number;
  main_search_key: string;
  heading: string;
  location: string;
  image: Image;
  flags: string[];
  styling: string[];
  timestamp: number;
  logo: Logo;
  price_suggestion: PriceSuggestion;
  price_total: PriceTotal;
  price_shared_cost: PriceSharedCost;
  area_range: AreaRange;
  area_plot: AreaPlot;
  organisation_name: string;
  local_area_name?: string;
  number_of_bedrooms: number;
  owner_type_description: string;
  property_type_description: string;
  viewing_times: string[];
  coordinates: Coordinates;
  ad_type: number;
  image_urls: string[];
  ad_link: string;
}

export interface Image {
  url: string;
  path: string;
  height: number;
  width: number;
  aspect_ratio: number;
}

export interface Logo {
  url: string;
  path: string;
}

export interface PriceSuggestion {
  amount: number;
  currency_code: string;
}

export interface PriceTotal {
  amount: number;
  currency_code: string;
}

export interface PriceSharedCost {
  amount: number;
  currency_code: string;
}

export interface AreaRange {
  size_from: number;
  size_to: number;
  unit: string;
  description: string;
}

export interface AreaPlot {
  size: number;
  unit: string;
  description: string;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface Filter {
  display_name: string;
  name: string;
  filter_items: FilterItem[];
  type: string;
  min_value?: number;
  max_value?: number;
  step?: number;
  unit?: string;
  name_from?: string;
  name_to?: string;
  is_year?: boolean;
  value_from?: number;
  value_to?: number;
  item_display_count?: number;
}

export interface FilterItem {
  display_name: string;
  name: string;
  value: string;
  hits: number;
  filter_items: FilterItem2[];
  selected: boolean;
}

export interface FilterItem2 {
  display_name: string;
  name: string;
  value: string;
  hits: number;
  filter_items: FilterItem3[];
  selected: boolean;
}

export interface FilterItem3 {
  display_name: string;
  name: string;
  value: string;
  hits: number;
  filter_items: any[];
  selected: boolean;
}

export interface Metadata {
  params: Params;
  search_key: string;
  selected_filters: SelectedFilter[];
  num_results: number;
  quest_time: number;
  solr_time: number;
  solr_elapsed_time: number;
  result_size: ResultSize;
  paging: Paging;
  title: string;
  is_savable_search: boolean;
  search_key_description: string;
  vertical: string;
  vertical_description: string;
  sort: string;
  uuid: string;
  tracking: Tracking;
  guided_search: GuidedSearch;
  actions: any[];
  is_end_of_paging: boolean;
}

export interface Params {
  price_collective_from: string[];
  price_collective_to: string[];
  "stored-id": string[];
  sort: string[];
  location: string[];
}

export interface SelectedFilter {
  parameters: Parameter[];
  filter_name: string;
  display_name: string;
  prefix: string;
}

export interface Parameter {
  parameter_name: string;
  parameter_value: string;
}

export interface ResultSize {
  match_count: number;
  group_count: number;
}

export interface Paging {
  param: string;
  current: number;
  last: number;
}

export interface Tracking {
  object: Object;
  vertical: Vertical;
}

export interface Object {
  selectionFilters: SelectionFilter[];
  sortingType: string;
  numItems: number;
  pageNumber: number;
  layout: string;
  type: string;
}

export interface SelectionFilter {
  name: string;
  value: string;
  valueId?: string;
}

export interface Vertical {
  name: string;
  subVertical: string;
}

export interface GuidedSearch {
  suggestions: any[];
  tracking: Tracking2;
}

export interface Tracking2 {
  search: Search;
  vertical: Vertical2;
  name: string;
  intent: string;
  type: string;
}

export interface Search {
  items: any[];
  "@type": string;
  "@id": string;
}

export interface Vertical2 {
  name: string;
  subVertical: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  indexDirective: string;
  canonicalUrl: string;
  openGraphUrl: string;
}

export interface PromotedAd {
  ad_id: number;
  ad_type: number;
  label: string;
  adUrl: string;
  bodyRow: string[];
  bottomRow1: string;
  bottomRow2: string;
  bottomRow3: string;
  disallowImageCropping: boolean;
  fusClickUrl: string;
  fusViewUrl: string;
  hasImg: boolean;
  imageRatio: string;
  imageSrcSet: string;
  imageUrl: string;
  landscapeFormat: boolean;
  logoUrl: string;
  portraitFormat: boolean;
  promoted: boolean;
  showDistance: boolean;
  squareFormat: boolean;
  titleRow: string;
  topRowCenter: string;
  topRowLeft: TopRowLeft;
  topRowRight: string;
}

export interface TopRowLeft {
  displayDeadline: boolean;
  displayFullText: string;
  displayStatusOrPublished: boolean;
  disposed: boolean;
}
