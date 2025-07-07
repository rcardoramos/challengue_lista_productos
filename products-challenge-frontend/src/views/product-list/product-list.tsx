import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "@/interfaces/product.interface";
import { fetchProducts } from "@/services/product-services";
import { EyeIcon, PackagePlus } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList: FC = () => {
  const navigate = useNavigate();

  const [listProducts, setListProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const result = await fetchProducts();
      setListProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleViewProduct = (id: string) => {
    navigate(`/product/${id}`);
  };

  const handleCreateProduct = () => {
    navigate(`/product/new`);
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-4 mb-5">
        <h1 className="text-2xl font-semibold">Lista de Productos</h1>
        <PackagePlus
          onClick={handleCreateProduct}
          className="text-blue-900 cursor-pointer over:scale-110 active:scale-95 transition-transform duration-150"
          size={25}
        />
      </div>
      <Table>
        {listProducts.length === 0 && (
          <TableCaption>No hay productos disponibles</TableCaption>
        )}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead>Fecha de creación</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className="text-right">${product.price}</TableCell>
              <TableCell>{product.createdAt}</TableCell>
              <TableCell>
                <EyeIcon
                  onClick={() => handleViewProduct(product.id)}
                  size={19}
                  className="text-blue-900 cursor-pointer over:scale-110 active:scale-95 transition-transform duration-150"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total Products</TableCell>
            <TableCell className="text-right" colSpan={2}>
              {listProducts.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ProductList;
