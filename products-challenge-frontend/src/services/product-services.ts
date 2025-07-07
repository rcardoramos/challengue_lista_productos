import { Product } from "@/interfaces/product.interface";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5183/api";

export async function fetchProducts() {
  console.log(API_URL);
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) throw new Error("Error fetching products");
  return response.json();
}

export async function addProduct(product: Product) {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error("Error adding product");
  return response.json();
}

export async function fetchProductsById(id: string) {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) throw new Error("Error fetching products");
  return response.json();
}
