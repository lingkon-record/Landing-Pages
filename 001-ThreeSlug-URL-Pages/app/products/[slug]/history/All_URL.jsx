import Link from "next/link";

const pranFoodImages = [
  {
    url: "https://d1l8km4g5s76x5.cloudfront.net/Production/exb_doc/2018/26009/2018_26009_25575_5617.png/fit-in/500x500",
    alt: "PRAN Foods Limited - Gulfood 2025",
    caption: "PRAN Foods exhibited at Gulfood 2025 showcasing their iconic products.",
  },
  {
    url: "https://www.pranfoods.net/sites/default/files/jhatpot-products_750x750_03.png",
    alt: "Jhatpot Products",
    caption: "Jhatpot plain paratha — a quick and delicious frozen paratha by PRAN.",
  },
  {
    url: "https://www.pranfoods.net/sites/default/files/jhatpat_web_porota_page-03-min-min.png",
    alt: "PRAN Paratha",
    caption: "Freshly made PRAN paratha, perfect for fast meals and snacks.",
  },
];

export default function PranFoodHistoryBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-4">
          A Journey Through the Legacy of PRAN Foods at Gulfood 2025
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
          PRAN Foods Limited has long been a pioneer in frozen food innovation, bringing
          delicious and convenient products to kitchens worldwide. Their participation at
          Gulfood 2025 highlighted their commitment to quality and expanding their global
          footprint, especially with products like the popular Jhatpot plain paratha.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {pranFoodImages.map(({ url, alt, caption }, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={url}
                alt={alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-gray-100 text-center">
                <p className="text-sm text-gray-600 italic">{caption}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          From showcasing at major international expos to winning hearts with every bite,
          PRAN Foods continues to shape the future of convenient, tasty meals. Their Jhatpot
          plain paratha has become a household favorite, blending tradition with modern
          convenience.
        </p>

        <p className="text-gray-700 leading-relaxed text-justify">
          This legacy is a testament to innovation, quality, and dedication — making PRAN a
          name synonymous with trust and delicious food products worldwide.
        </p>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-block px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition"
          >
            ← Back to All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
