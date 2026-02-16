import Product from "@/db/models/Product";
import dbConnect from "@/db/connect";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  if (req.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      res.status(404).json({ status: "Not Found" });
      return;
    }
    res.status(200).json(product);
  }
}
