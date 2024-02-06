export interface Product {
  _id: string;
  posterUrl:string;
  images: string[]; 
  title: string;
  description: string;
  price: number;
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
  _id: string;
  name: string;
  description:string;
  products: Product[];
}

export interface ISearchProduct {
  _id: string;
  posterURL: string;
  images: string[];
  title: string;
  description: string;
  price: number;
}

