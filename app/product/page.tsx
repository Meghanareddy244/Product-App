import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Products Page",
  description: "List of Products",
};

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

export default async function FetchData() {
  const data = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  const products = await data.json();
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-xl font-semibold mb-5 px-2">List of Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-8 m-2 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-lg font-semibold mb-8">{product.title}</h2>
              <Image
                src={product.image}
                alt={product.title}
                width={1000}
                height={1000}
                className="mb-10 w-30 h-40 object-contain"
              />
              <p className="mb-3">
                Price: &#8377; <strong>{product.price}</strong>
              </p>
              <Link
                href={`/product/${product.id}`}
                className="text-blue-600 hover:underline mb-0"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
