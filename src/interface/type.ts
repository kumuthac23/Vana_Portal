export interface IProductDetail {
  product: IProduct;
}

export interface IProduct {
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