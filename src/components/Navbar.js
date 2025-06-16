"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">Clothing Store</Link>
      <div className="flex gap-4">
        <Link href="/products">Shop</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
