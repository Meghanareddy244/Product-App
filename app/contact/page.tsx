import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "Get in touch with us for inquiries or support.",
  keywords: ["contact", "support", "feedback"],
};
export default function Contact() {
  return (
    <div className="py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Page</h1>
        <p className="mb-2 text-gray-600">Get in touch with us for inquiries or support.</p>
      </div>
            <div className="flex md:flex-row flex-col gap-10 mb-8">
              <div className="flex-1">
                <Image
                  src="/contact3.png"
                  alt="Product Image"
                  width={1000}
                  height={1000}
                  className="mb-10 w-full h-auto rounded-md object-contain"
                />
              </div>
              <div className="text-start text-lg text-gray-600 max-w-xl ml-5 ">
                <h1 className="text-2xl  mb-6 text-black">Contact Us →</h1>
                <p className="mb-3 ">
                  Get in touch with us for inquiries or support.
                </p>
                <p className="mb-4">
                  You can also share feedback with us, and we would love to hear from
                  you
                </p>
                <p className="mb-1">Mail : <strong>abcd@gmail.com</strong></p>
                <p className="mb-1">Phone : <strong>1234567890</strong></p>
                <p className="mb-1">Address : <strong>123 Main Street, City, Country</strong></p>
              </div>
            </div>
    </div>
  );
}
