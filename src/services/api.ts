import { Collection} from "../interface/type";
import { httpWithoutCredentials } from "./http";
import {  Product } from "../interface/type";

 const getAllItemsByCollectionName = async (collectionName:string) => {
    try {
      const response = await httpWithoutCredentials.get<Collection>(
        `/JewelleryItem/getJewelleryItemsByJewelleryCollectionId/${collectionName}`
      );
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };



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

export { getNewArrivalProductsData,getAllItemsByCollectionName };







