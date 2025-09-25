import { Metadata } from "next";
import LikeButton from "./LikeButton";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { product_id: string };
};

const products = await fetch("https://fakestoreapi.com/products").then((res) =>
  res.json()
);

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id =  params.product_id;
  const product = products.find((p: any) => p.id === parseInt(id));
  return {
    title: product ? product.title : "Product Not Found",
    description: product ? product.description : "No description available.",
  };
};

export default async function Product({
  params,
}: {
  params: { product_id: string };
}) {
  const id = params.product_id;
  const product = products.find((p: any) => p.id === parseInt(id));

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <Link
          href="/product"
          className="text-blue-600 text-md  hover:text-black"
        >
          Back
        </Link>
        <h1 className="text-xl font-semibold mb-8 mt-5">{product.title}</h1>
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="mb-6 w-1/4 h-auto object-contain"
        />
        <p className="mb-3">
          Price: &#8377; <strong>{product.price}</strong>
        </p>
        <p className="mb-3">Category: {product.category}</p>
        <p className="mb-3">Description: {product.description}</p>
        <p className="mb-4">
          Rating: ⭐{product.rating.rate} ({product.rating.count})
        </p>

        <LikeButton product_id={product.id} />
      </div>
    </div>
  );
}
