import { SortingOption } from "../common/component/sortingOption";

export interface IProduct {
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
  jewelleryItems:IProduct[]
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

// export interface ISignUp {
//   phoneNumber: string;
//   password: string;
//   name: string;
//   email: string;
//   confirmPassword: string;
//   role?: string;
// }

export interface ICollection {
  jewelleryItems: never[];
  JewelleryCollectionDescription: string;
  JewelleryCollectionName: string;
  _id?: string;
  name: string;
  description?:string;
  products?: IProduct[];
}


export interface ISortingOptionLabel {
  value: SortingOption;
  label: string;
}

export interface IAuthContext {
  user: IUser | null;
  updateUserData: (user: IUser | null) => void;
}


export interface IUser {
  userId: string | null;
  phoneNumber: string | null;
  name: string | null;
}


export interface ILoginResponse {
  data: IUser | null;
  message: string;
  status?: boolean;
}

export interface ISignUp {
  phoneNumber: string | undefined;
  password: string;
  userName: string;
  email?: string;
  confirmPassword: string;
}
