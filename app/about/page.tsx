export const metadata = {
  title: "About Us ",
  description: "Learn more about our Product Showcase app and mission.",
  keywords: ["about", "mission", "vision"],
};
export default function About() {
  return (
    <div className="py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-xl font-bold text-black mb-3">Our Story</h1>
        <p className="text-gray-600">
          At Aamili, we're not just a brand – we're a commitment to a lifestyle
          that values sustainability, ethics, individuality, comfort, and
          craftsmanship. Our garments reflect excellence through meticulously
          curated materials, sustainable practices, and premium tailoring. From
          dynamic silhouettes to 100% cotton comfort, each piece tells a story
          of style with a positive impact. Join us on this journey where fashion
          meets responsibility, and every garment is a testament to our
          commitment to excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl ">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">
            Mission
          </h3>
          <p className="text-gray-700">
            Our mission is to provide a platform for users to buy and sell
            products.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">Vision</h3>
          <p className="text-gray-700">
            Our vision is to become the leading e-commerce platform in the
            world.
          </p>
        </div>
      </div>
    </div>
  );
}
