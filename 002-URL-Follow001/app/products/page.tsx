"use client";

import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Friday Sell</h1>
      <ul className="space-y-6">
        {products.map(({ name, date, images, slug }) => (
          <li
            key={slug}
            className="flex items-center space-x-6 border p-4 rounded shadow-sm"
          >
            <img
              src={images[0]}
              alt={name}
              className="w-24 h-24 object-contain rounded"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-gray-500">{date}</p>
            </div>
            <Link
              href={`/products/${slug}`}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
