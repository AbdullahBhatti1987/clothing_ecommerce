import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-3">
        <Link href="/admin/products" className="hover:underline">Products</Link>
        <Link href="/admin/offers" className="hover:underline">Special Offers</Link>
        <Link href="/admin/orders" className="hover:underline">Orders</Link>
      </nav>
    </aside>
  );
}
