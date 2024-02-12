import {  Product } from "../interface/type";
import { httpWithoutCredentials } from "../services/http";



const getNewArrivalProductsData = async () => {
  try {
    const response = await httpWithoutCredentials.get<Product[]>("/JewelleryItem/getNewArrivalProducts");
  
    return response.data;
  } catch (error) {
    console.error('Error in getNewArrivalProductsData:', error);
    throw error;
  }
};



export { getNewArrivalProductsData };







