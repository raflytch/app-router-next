import axiosInstance from "../lib/axiosInstance";
import { Product } from "@/types/product";

export const getData = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get("/products");
  return data;
};

export const getDataById = async (id: string): Promise<Product> => {
  const { data } = await axiosInstance.get(`/products/${id}`);
  return data;
};
