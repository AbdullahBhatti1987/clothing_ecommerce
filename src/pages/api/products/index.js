import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const { category } = req.query;
    const products = await Product.find(category ? { category } : {});
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    // Add product (Admin only - add token verification here)
  }
}
