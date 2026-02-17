import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
    return;
  }

  if (request.method === "PUT") {
    const newProductData = request.body;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        newProductData,
      );
      if (!updatedProduct) {
        return response.status(404).json({ error: "Product not found" });
      }
      return response
        .status(200)
        .json({
          status: "Product successfully updated.",
          success: true,
          data: updatedProduct,
        });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  response.status(405).json({ status: "Method not allowed." });
}
