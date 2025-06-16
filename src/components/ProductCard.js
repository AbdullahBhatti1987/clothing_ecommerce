import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
        <Link
          href={`/products/${product._id}`}
          className="inline-block mt-2 bg-black text-white px-3 py-1 rounded"
        >
          View
        </Link>
      </div>
    </div>
  );
}
