"use client";

import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.log(`Error: ${error}`);
  }, [error]);
  return (
    <div className="py-16 px-6 max-w-5xl mx-auto text-center">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-lg text-red-500 font-semibold mb-3 ">
          Product Not Found
        </h1>
      </div>
    </div>
  );
}
