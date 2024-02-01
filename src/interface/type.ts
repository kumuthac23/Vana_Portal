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
