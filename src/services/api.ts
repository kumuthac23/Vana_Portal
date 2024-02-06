import { Collection} from "../interface/type";
import { httpWithoutCredentials } from "./http";

export const getAllItemsByCollectionName = async (collectionName:string) => {
    try {
      const response = await httpWithoutCredentials.get<Collection>(
        `/JewelleryItem/getJewelleryItemsByJewelleryCollectionId/${collectionName}`
      );
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };



