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
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="mb-4 w-full max-w-md" />
      <p className="text-gray-600 mb-4">Date: {product.date}</p>

      <Link
        href={`/products/${product.slug}/history`}
        className="inline-block px-4 py-2 mt-4 bg-green-600 text-white rounded hover:bg-green-700"
      >
        View History
      </Link>
    </div>
  );
}
