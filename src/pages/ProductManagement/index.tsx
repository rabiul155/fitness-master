import Loading from "@/components/shared/Loading/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "@/redux/features/product/productApi";
import { ProductType } from "@/types";
import { FaEdit } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from "@/components/shared/Modal/Modal";
import { useState } from "react";
import { toast } from "sonner";
import EditProductModal from "@/components/shared/Modal/EditProductModal";

function ProductManagement() {
  const [deleteProduct, setDeleteProduct] = useState("");
  const [editProduct, setEditProduct] = useState<ProductType | null>();
  const { data, isLoading } = useGetProductQuery({});
  const [deleteProductApi] = useDeleteProductMutation();

  if (isLoading) {
    return <Loading />;
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProductApi(deleteProduct);

      setDeleteProduct("");
      toast(" Product deleted successfully ");
    } catch (err) {
      toast("Could not delete this product");
      setDeleteProduct("");
    }
  };

  return (
    <div className="mx-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px]">Index</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="">Price</TableHead>
            <TableHead className="">Stock</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((product: ProductType, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="font-medium">
                <img className="h-12 w-16 rounded" src={product.image} alt="" />
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell className="font-medium">{product.category}</TableCell>
              <TableCell className="font-medium">{product.price}</TableCell>
              <TableCell className="font-medium">{product.stock}</TableCell>
              <TableCell className="font-medium ">
                <div className="flex gap-2 ">
                  <div>
                    <FaEdit
                      onClick={() => setEditProduct(product)}
                      className="size-4 mt-0.5 cursor-pointer text-gray-500"
                    />
                  </div>
                  <div>
                    <HiOutlineTrash
                      onClick={() => setDeleteProduct(product._id)}
                      className="cursor-pointer text-red-500 size-5"
                    />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {!!editProduct && (
        <EditProductModal
          title={"Edit Product"}
          product={editProduct}
          onClose={() => setEditProduct(null)}
          show={!!editProduct}
          onConfirm={() => setEditProduct(null)}
        ></EditProductModal>
      )}

      {!!deleteProduct && (
        <Modal
          title={"Delete Product"}
          variant="delete"
          onClose={() => setDeleteProduct("")}
          show={!!deleteProduct}
          onConfirm={handleDeleteProduct}
        >
          <div>Are You sure to delete this product</div>
        </Modal>
      )}
    </div>
  );
}

export default ProductManagement;
