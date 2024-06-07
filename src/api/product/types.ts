export interface ProductsByCategoryRes {
  WarningMessage: any;
  NoResultMessage: any;
  PriceRangeFilter: PriceRangeFilter;
  SpecificationFilter: SpecificationFilter;
  ManufacturerFilter: ManufacturerFilter;
  AllowProductSorting: boolean;
  AvailableSortOptions: AvailableSortOption[];
  AllowProductViewModeChanging: boolean;
  AvailableViewModes: AvailableViewMode[];
  AllowCustomersToSelectPageSize: boolean;
  PageSizeOptions: PageSizeOption[];
  OrderBy: any;
  ViewMode: string;
  Products: Product[];
  PageIndex: number;
  PageNumber: number;
  PageSize: number;
  TotalItems: number;
  TotalPages: number;
  FirstItem: number;
  LastItem: number;
  HasPreviousPage: boolean;
  HasNextPage: boolean;
  CustomProperties: CustomProperties11;
}

export interface PriceRangeFilter {
  Enabled: boolean;
  SelectedPriceRange: SelectedPriceRange;
  AvailablePriceRange: AvailablePriceRange;
  CustomProperties: CustomProperties3;
}

export interface SelectedPriceRange {
  From: number;
  To: number;
  CustomProperties: CustomProperties;
}

export interface CustomProperties {}

export interface AvailablePriceRange {
  From: number;
  To: number;
  CustomProperties: CustomProperties2;
}

export interface CustomProperties2 {}

export interface CustomProperties3 {}

export interface SpecificationFilter {
  Enabled: boolean;
  Attributes: any[];
  CustomProperties: CustomProperties4;
}

export interface CustomProperties4 {}

export interface ManufacturerFilter {
  Enabled: boolean;
  Manufacturers: any[];
  CustomProperties: CustomProperties5;
}

export interface CustomProperties5 {}

export interface AvailableSortOption {
  Disabled: boolean;
  Group: any;
  Selected: boolean;
  Text: string;
  Value: string;
}

export interface AvailableViewMode {
  Disabled: boolean;
  Group: any;
  Selected: boolean;
  Text: string;
  Value: string;
}

export interface PageSizeOption {
  Disabled: boolean;
  Group: any;
  Selected: boolean;
  Text: string;
  Value: string;
}

export interface Product {
  Name: string;
  ShortDescription: string;
  FullDescription: string;
  SeName: string;
  Sku: string;
  ProductType: string;
  MarkAsNew: boolean;
  ProductPrice: ProductPrice;
  PictureModels: PictureModel[];
  ProductSpecificationModel: ProductSpecificationModel;
  ReviewOverviewModel: ReviewOverviewModel;
  Id: number;
  CustomProperties: CustomProperties10;
}

export interface ProductPrice {
  OldPrice: any;
  OldPriceValue: any;
  Price: string;
  PriceValue: number;
  BasePricePAngV: any;
  BasePricePAngVValue: number;
  DisableBuyButton: boolean;
  DisableWishlistButton: boolean;
  DisableAddToCompareListButton: boolean;
  AvailableForPreOrder: boolean;
  PreOrderAvailabilityStartDateTimeUtc: any;
  IsRental: boolean;
  ForceRedirectionAfterAddingToCart: boolean;
  DisplayTaxShippingInfo: boolean;
  CustomProperties: CustomProperties6;
}

export interface CustomProperties6 {}

export interface PictureModel {
  ImageUrl: string;
  ThumbImageUrl: any;
  FullSizeImageUrl: string;
  Title: string;
  AlternateText: string;
  CustomProperties: CustomProperties7;
}

export interface CustomProperties7 {}

export interface ProductSpecificationModel {
  Groups: any[];
  CustomProperties: CustomProperties8;
}

export interface CustomProperties8 {}

export interface ReviewOverviewModel {
  ProductId: number;
  RatingSum: number;
  TotalReviews: number;
  AllowCustomerReviews: boolean;
  CanAddNewReview: boolean;
  CustomProperties: CustomProperties9;
}

export interface CustomProperties9 {}

export interface CustomProperties10 {}

export interface CustomProperties11 {}
