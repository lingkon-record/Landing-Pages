import { products } from "@/lib/products";
import Link from "next/link";

interface Params {
  params: {
    slug: string;
  };
}

export default function ProductHistoryPage({ params }: Params) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-xl font-semibold text-red-600">History Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-blue-500 range-600 mb-4">
          History of {product.name}
        </h1>

        <p className="text-gray-600 text-base mb-6">
          PRAN FOODS LIMITED has been a proud exhibitor at Gulfood for years. In 2025, they launched
          new product lines and highlighted Bangladesh's culinary innovation to the world.
        </p>

        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl shadow-md mx-auto w-full max-w-md h-64 object-cover mb-4"
        />

        <p className="text-sm text-gray-500">📍 Featured at Gulfood 2025, Dubai</p>

        <Link
          href={`/products/${product.slug}`}
          className="inline-block mt-6 px-5 py-2 bg-green-700 text-white rounded hover:bg-orange-600 transition"
        >
          ← Back to Details
        </Link>
      </div>
    </div>
  );
}
