export interface Product {
  _id: string;
  images: string[]; 
  title: string;
  description: string;
  price: number;
}

export interface Collection {
  _id: string;
  name: string;
  products: Product[];
}
