export type CategoriesResponse = Category[];

export interface Category {
  Image: Image;
  Name: string;
  SeName: string;
  NumberOfProducts: any;
  IncludeInTopMenu: boolean;
  SubCategories: any[];
  HaveSubCategories: boolean;
  Route: any;
  Id: number;
  CustomProperties: CustomProperties2;
}

export interface Image {
  ImageUrl: string;
  ThumbImageUrl: any;
  FullSizeImageUrl: string;
  Title: string;
  AlternateText: string;
  CustomProperties: CustomProperties;
}

export interface CustomProperties {}

export interface CustomProperties2 {}
