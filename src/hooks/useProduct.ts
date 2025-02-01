import { useQuery } from "@tanstack/react-query";
import { getData, getDataById } from "@/services/products.service";

export const useAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getData,
  });
};

export const useProductById = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getDataById(id),
  });
};
