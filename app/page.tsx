import Image from "next/image";

export const metadata = {
  title: "Home Page",
  description: "Discover amazing products on our Product Showcase app.",
  keywords: ["products", "showcase", "e-commerce"],
};
export default function Home() {
  return (
    <div className="py-16 px-6 max-w-5xl mx-auto bg-white">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Home Page</h1>
        <p className="mb-2 text-gray-600">Welcome to the Home page</p>
      </div>
      <div className="flex md:flex-row flex-col gap-6 mb-7">
        <div className="flex-1">
          <Image
            src="/image2.png"
            alt="Product Image"
            width={500}
            height={500}
            className="mb-10 w-85 h-85 rounded-md object-contain hover:shadow-xl"
          />
        </div>
        <div className="text-start text-lg text-gray-600 max-w-xl ml-5 ">
          <h1 className="text-3xl  mb-4 text-black">special offers →</h1>
          <p className="mb-3 ">
            We have up to 50% off on all our products, more on casual wear for
            both men and women. Do check it out{" "}
          </p>
          <p className="mb-3">
            You can also share feedback with us, and we would love to hear from
            you
          </p>
          <p className="mb-3">
            Enjoy shopping with Product Showcase App. These offers are up to
            Dusherra only.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col gap-6">
        <div className="flex-1">
          <Image
            src="/image1.png"
            alt="Product Image"
            width={500}
            height={500}
            className="mb-10 w-85 h-85 rounded-md object-contain hover:shadow-xl"
          />
        </div>
        <div className="text-start text-lg text-gray-600 max-w-xl mr-5 ">
          <h1 className="text-3xl  mb-4 text-black">special offers →</h1>
          <p className="mb-3 ">
            We have up to 50% off on all our products, more on casual wear for
            both men and women. Do check it out{" "}
          </p>
          <p className="mb-3">
            You can also share feedback with us, and we would love to hear from
            you
          </p>
          <p className="mb-3">
            Enjoy shopping with Product Showcase App. These offers are up to
            Dusherra only.
          </p>
        </div>
      </div>
    </div>
  );
}
