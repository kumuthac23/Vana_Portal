export interface Product {
  _id: string;
  posterUrl:string;
  images: string[]; 
  title: string;
  description: string;
  price: number;
}

export interface Collection {
  _id: string;
  name: string;
  description:string;
  products: Product[];
}
