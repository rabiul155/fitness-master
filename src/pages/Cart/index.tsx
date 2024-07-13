import React, { useEffect, useState } from "react";
import {
  useDeleteCartProductMutation,
  useGetCartProductQuery,
} from "@/redux/features/cart/cartApi";
import CartProduct from "./CartProduct/CartProduct";
import { CartProductType } from "@/types";
import Modal from "@/components/shared/Modal/Modal";
import { toast } from "sonner";

function Cart() {
  const { data, isLoading, refetch } = useGetCartProductQuery(null);
  const [deleteProduct, setDeleteProduct] = useState<CartProductType | null>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteCartProduct] = useDeleteCartProductMutation();

  const handleConfirm = async () => {
    if (deleteProduct) {
      try {
        await deleteCartProduct(deleteProduct._id as string);
        toast("Product deleted successfully");
      } catch (error) {
        toast("Error deleting product");
        console.error("Failed to delete the cart product:", error);
      }
    }
  };

  useEffect(() => {
    if (deleteProduct) {
      setShowDeleteModal(true);
    }
  }, [deleteProduct]);

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className="p-4">
      {data.data?.length === 0 && (
        <>
          <h2 className=" text-xl mt-12 font-bold text-center text-yellow-400 ">
            You haven't Order Yet. Please, Order First
          </h2>
        </>
      )}

      {data.data?.map((cartProduct: CartProductType) => (
        <CartProduct
          key={cartProduct._id}
          cartProduct={cartProduct}
          setDeleteProduct={setDeleteProduct}
        ></CartProduct>
      ))}

      {showDeleteModal && (
        <Modal
          title="Delete Modal"
          show={showDeleteModal}
          setShow={setShowDeleteModal}
          onConfirm={handleConfirm}
        >
          Are you sure delete this product?
        </Modal>
      )}
    </div>
  );
}

export default Cart;
