import { useMutation, useQuery } from "@tanstack/react-query";
import {  getAllItemsByCollectionName, loginCredentials } from "../services/api";


export const useGetAllItemsByCollectionName = (collectionName:string) => {
    return useQuery({
     queryKey:["getAllItems"],
     queryFn:() => getAllItemsByCollectionName(collectionName),
      refetchOnWindowFocus: false,
    });
  };


 
  export const useLogin = () => {
    return useMutation ({
      mutationKey: ["login"],
      mutationFn:loginCredentials,
    });
  };