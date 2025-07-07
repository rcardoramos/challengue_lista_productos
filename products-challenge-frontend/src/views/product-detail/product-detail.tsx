import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { fetchProducts, fetchProductsById } from "@/services/product-services";
import { Product } from "@/interfaces/product.interface";

const ProductDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);

  const getProducts = async () => {
    try {
      setLoading(true);
      const result = await fetchProductsById(id || "");
      console.log(result);
      setProduct(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Detalle del Producto</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center py-10 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
              Desempaquetando producto...
            </div>
          ) : product ? (
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-semibold">Nombre:</span> {product.name}
              </p>
              <p>
                <span className="font-semibold">Descripción:</span>{" "}
                {product.description}
              </p>
              <p>
                <span className="font-semibold">Categoría:</span>{" "}
                {product.category}
              </p>
              <p>
                <span className="font-semibold">Precio:</span> ${product.price}
              </p>
              <p>
                <span className="font-semibold">Fecha de creación:</span>{" "}
                {product.createdAt}
              </p>
            </div>
          ) : (
            <p className="text-red-600">Producto no encontrado.</p>
          )}
          <div className="mt-6">
            <Button onClick={() => navigate(-1)}>← Volver</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
