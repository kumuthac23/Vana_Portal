import { useMutation, useQuery } from "@tanstack/react-query";
import {  getAllItemsByCollectionName, loginCredentials, signUpCredentials } from "../services/api";


export const useGetAllItemsByCollectionName = (collectionName:string) => {
    return useQuery({
     queryKey:["getAllItems"],
     queryFn:() => getAllItemsByCollectionName(collectionName),
      refetchOnWindowFocus: false,
    });
  };


  export const useSignUp = () => {
    return useMutation ({
      mutationKey: ["signUp"],
      mutationFn: signUpCredentials,
    });
  };
 
  export const useLogin = () => {
    return useMutation ({
      mutationKey: ["login"],
      mutationFn:loginCredentials,
    });
  };