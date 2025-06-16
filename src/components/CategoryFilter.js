"use client";
import Link from "next/link";

const categories = ["men", "women", "kids"];

export default function CategoryFilter() {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-4">
      {categories.map((cat) => (
        <Link
          href={`/products?category=${cat}`}
          key={cat}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          {cat.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
