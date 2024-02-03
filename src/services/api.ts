// import {  Product } from "../interface/type";
// import { httpWithoutCredentials } from "./http";

// const getNewArrivalProductsData = async () => {
//   try {
//     const response = await httpWithoutCredentials.get<Product[]>(
//       "/JewelleryItem/getNewArrivalProducts"
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };


// export { getNewArrivalProductsData };


import axios from "axios";

const httpWithoutCredentials = axios.create({
  baseURL: "http://localhost:3000", 
});

const getNewArrivalProductsData = async () => {
  try {
    const response = await httpWithoutCredentials.get(
      "/JewelleryItem/getNewArrivalProducts"
    );
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export { getNewArrivalProductsData };


