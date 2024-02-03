import {  Product } from "../interface/type";
import { httpWithoutCredentials } from "./http";

const getNewArrivalProductsData = async () => {
  try {
    const response = await httpWithoutCredentials.get<Product[]>(
      "/JewelleryItem/getNewArrivalProducts"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};


export { getNewArrivalProductsData };







