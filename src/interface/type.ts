export interface Product {
  type: string;
  _id: string;
  posterURL:string;
  images: string[]; 
  title: string;
  description: string;
  price: number;
}

export interface Icommonpage{
  JewelleryCollectionDescription: string,
  JewelleryCollectionName: string,
  jewelleryItems:Product[]
}

export interface IProductDetails {
  _id: string;
  title: string;
  price: number;
  images: string[];
  quantity: number;
  posterURL: string;
  description: string;
}
export interface ILogin {
  phoneNumber: string;
  password: string;
}

export interface ISignUp {
  phoneNumber: string | undefined;
  password: string;
  name: string;
  email?: string;
  confirmPassword: string;
  role?: string;
}
export interface Collection {
  jewelleryItems: never[];
  JewelleryCollectionDescription: string;
  JewelleryCollectionName: string;
  _id?: string;
  name: string;
  description?:string;
  products?: Product[];
}




// sorting products

export enum SortingOption {
  Default = "",
  PriceLowToHigh = "Price: Low to High",
  PriceHighToLow = "Price: High to Low",
  NameAZ = "Name: A-Z",
  NameZA = "Name: Z-A",
}

export interface SortingOptionLabel {
  value: SortingOption;
  label: string;
}

export const sortingOptions: SortingOptionLabel[] = [
  { value: SortingOption.Default, label: "Default" },
  { value: SortingOption.PriceLowToHigh, label: "Price: Low to High" },
  { value: SortingOption.PriceHighToLow, label: "Price: High to Low" },
  { value: SortingOption.NameAZ, label: "Name: A-Z" },
  { value: SortingOption.NameZA, label: "Name: Z-A" },
];