import axiosInstance from "../lib/axiosInstance";
import { Product } from "@/types/product";

export const getData = async (): Promise<Product[]> => {
  const response = await axiosInstance.get("/products");
  return response.data;
};

export const getDataById = async (id: number): Promise<Product> => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};
