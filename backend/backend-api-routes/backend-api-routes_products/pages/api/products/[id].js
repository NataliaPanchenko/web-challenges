import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;

  if (request.method === "GET") {
    const product = getProductById(id);

    if (!product) {
      return response.status(404).json({ status: "Not found" });
    }

    response.status(200).json(product);
  }
}
