import Link from "next/link";
import { products } from "@/lib/products";

interface Params {
  params: { slug: string };
}

export default function ProductDetailsPage({ params }: Params) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link
          href="/products"
          className="inline-block mt-6 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
     

      <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
      <p className="text-gray-700 text-lg mb-4">{product.description}</p>
      <p className="text-gray-500 mb-8">Launch Date: {product.date}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${product.name} image ${idx + 1}`}
            className="w-full h-64 object-cover rounded shadow"
          />
        ))}
      </div>

       {/* Back button */}
      <Link
        href="/products"
        className="inline-block mb-6 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
      >
        ← Back to Products page
      </Link>
      <br />

      <Link
        href={`/products/${product.slug}/history`}
        className="inline-block px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        View History
      </Link>
    </div>
  );
}
