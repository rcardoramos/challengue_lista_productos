import { FC, FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Product } from "@/interfaces/product.interface";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { addProduct } from "@/services/product-services";

const initialState: Product = {
  id: "",
  name: "",
  description: "",
  category: "",
  price: 0,
  createdAt: "",
};

const CATEGORIES = ["Tecnología", "Hardware", "Alimentos", "Hogar", "Otros"];

const ProductCreate: FC = () => {
  const [formProduct, setFormProduct] = useState<Product>(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof Product, string>>>(
    {}
  );

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormProduct({ ...formProduct, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleCategoryChange = (value: string) => {
    setFormProduct({ ...formProduct, category: value });
    setErrors({ ...errors, category: "" });
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof Product, string>> = {};

    if (!formProduct.name?.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!formProduct.category?.trim()) {
      newErrors.category = "La categoría es obligatoria";
    }

    const price = Number(formProduct.price);
    if (isNaN(price) || price <= 0) {
      newErrors.price = "El precio debe ser mayor a 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    await addProduct(formProduct);

    console.log("Producto creado:", formProduct);
    setLoading(false);
    setFormProduct(initialState);

    toast.success("Producto creado", {
      description: "El producto fue registrado exitosamente.",
    });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Crear Producto</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                name="name"
                value={formProduct.name}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="description">Descripción</Label>
              <Input
                id="description"
                name="description"
                value={formProduct.description}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.description && (
                <p className="text-sm text-red-500">{errors.description}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label>Categoría</Label>
              <Select
                value={formProduct.category}
                onValueChange={handleCategoryChange}
                disabled={loading}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-sm text-red-500">{errors.category}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="price">Precio</Label>
              <Input
                id="price"
                name="price"
                value={formProduct.price}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.price && (
                <p className="text-sm text-red-500">{errors.price}</p>
              )}
            </div>
            <div className="flex items-center justify-between mt-6">
              <Button onClick={() => navigate(-1)} variant={"ghost"}>
                ← Volver
              </Button>

              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Crear Producto
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCreate;
