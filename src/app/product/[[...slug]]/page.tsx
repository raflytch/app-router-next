type ProductParams = {
  slug: string[];
};

export default async function DetailProductPage({
  params,
}: {
  params: Promise<ProductParams>;
}) {
  const { slug } = await params;

  const [category = "", gender = "", id = ""] = Array.isArray(slug) ? slug : [];
  return (
    <div>
      <h1>{slug ? "Detail Product" : "Product Page"}</h1>
      {slug && (
        <>
          <p>Category: {category}</p>
          <p>Gender: {gender}</p>
          <p>Id: {id}</p>
        </>
      )}
    </div>
  );
}
