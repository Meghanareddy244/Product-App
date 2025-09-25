import { Metadata } from "next";
import LikeButton from "./LikeButton";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type Props = {
  params: Promise<{ product_id: string }>;
};

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { product_id } = await params;
  const products = await fetchProducts();
  const product = products.find((p: Product) => p.id === parseInt(product_id));

  return {
    title: product ? product.title : "Product Not Found",
    description: product ? product.description : "No description available.",
  };
};

export default async function Product({ params }: Props) {
  const { product_id } = await params;
  const products = await fetchProducts();
  const product = products.find((p: Product) => p.id === parseInt(product_id));

  if (!product) {
    return (
      <div className="py-16 px-6 max-w-5xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <Link
            href="/product"
            className="text-blue-600 text-md hover:text-black"
          >
            Back
          </Link>
          <h1 className="text-xl font-semibold mb-8 mt-5">Product Not Found</h1>
          <p>The product you are looking for does not exist</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <Link
          href="/product"
          className="text-blue-600 text-md hover:text-black"
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
