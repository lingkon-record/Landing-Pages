import Link from "next/link";
import { products } from "@/lib/products";

interface Params {
  params: {
    slug: string;
  };
}

export default function ProductHistoryPage({ params }: Params) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold text-red-600">History Not Found</h1>
        <p className="text-gray-500 mt-2">Sorry, the requested product history is unavailable.</p>
        <Link href="/products" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
          History of {product.name}
        </h1>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
          The <span className="font-semibold text-gray-800">Jhatpot Plain Paratha</span> by PRAN
          is part of a legacy of frozen food innovations. It gained global attention at expos like
          <span className="font-semibold text-gray-800"> Gulfood 2025</span> — representing Bangladeshi quality worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Start from index 1 to skip main image */}
          {product.images.slice(1).map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
              <img
                src={img}
                alt={`${product.name} history image ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/products/${product.slug}`}
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            ← Back to Product Details
          </Link>
        </div>
      </div>
    </div>
  );
}
