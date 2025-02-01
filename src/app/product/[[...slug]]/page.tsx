/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useProductById, useAllProducts } from "@/hooks/useProduct";
import { Product, ProductParams } from "@/types/product";
import Image from "next/image";
import { use } from "react";

export default function DetailProductPage({
  params,
}: {
  params: Promise<ProductParams>;
}) {
  const promisedParams = use(params);
  const { slug } = promisedParams;
  const [id = ""] = Array.isArray(slug) ? slug : [];
  const {
    data: product,
    isLoading,
    isError,
  } = id ? useProductById(id) : useAllProducts();

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (isError) return <p className="text-center text-lg text-red-500">Error</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        {slug ? "Detail Product" : "Product Page"}
      </h1>

      {id && product && !Array.isArray(product) ? (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="w-full h-64 object-contain p-4"
          />
          <div className="p-6">
            <p className="text-gray-500 text-sm uppercase">
              {product.category}
            </p>
            <p className="text-lg font-semibold mt-2">{product.title}</p>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <p className="text-xl font-bold mt-4">${product.price}</p>
            <div className="mt-4">
              <span className="text-yellow-500">
                {"★".repeat(Math.round(product.rating.rate))}
              </span>
              <span className="text-gray-400">
                {"★".repeat(5 - Math.round(product.rating.rate))}
              </span>
              <span className="ml-2 text-gray-500">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(product) &&
            product.map((item: Product) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="w-full h-48 object-contain p-4"
                />
                <div className="p-4">
                  <p className="text-gray-500 text-sm uppercase">
                    {item.category}
                  </p>
                  <p className="text-lg font-semibold mt-2">{item.title}</p>
                  <p className="text-gray-700 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-xl font-bold mt-4">${item.price}</p>
                  <div className="mt-4">
                    <span className="text-yellow-500">
                      {"★".repeat(Math.round(item.rating.rate))}
                    </span>
                    <span className="text-gray-400">
                      {"★".repeat(5 - Math.round(item.rating.rate))}
                    </span>
                    <span className="ml-2 text-gray-500">
                      ({item.rating.count} reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
