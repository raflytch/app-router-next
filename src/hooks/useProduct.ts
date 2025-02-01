import { useQuery } from "@tanstack/react-query";
import { getData, getDataById } from "@/services/products.service";
import { Product } from "@/types/product";

export const useAllProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: () => getData(),
  });
};

export const useProductById = (id: string) => {
  return useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () => getDataById(id),
    enabled: !!id,
  });
};
