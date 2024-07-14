import React, { useEffect, useState } from "react";
import {
  useDeleteCartProductMutation,
  useGetCartProductQuery,
} from "@/redux/features/cart/cartApi";
import CartProduct from "./CartProduct/CartProduct";
import { CartProductType } from "@/types";
import Modal from "@/components/shared/Modal/Modal";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Loading from "@/components/shared/Loading/Loading";

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
        setDeleteProduct(null);
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
    return <Loading />;
  }

  const totalPrice = data?.data.reduce(
    (sum: number, cartProduct: CartProductType) => {
      return sum + cartProduct.quantity * cartProduct.product.price;
    },
    0
  );

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-4">
      {data.data?.length === 0 && (
        <>
          <h2 className=" text-xl mt-12 font-bold text-center text-yellow-400 ">
            You haven't Order Yet. Please, Order First
          </h2>
        </>
      )}

      <div className="w-full">
        {data.data?.map((cartProduct: CartProductType) => (
          <CartProduct
            key={cartProduct._id}
            cartProduct={cartProduct}
            setDeleteProduct={setDeleteProduct}
          ></CartProduct>
        ))}
      </div>

      {totalPrice && (
        <div className="mt-4 w-full mx-auto  duration-300 lg:w-80">
          <div className=" w-full lg:w-80  rounded border bg-base-200 shadow-xl">
            <div className="p-8 flex flex-col gap-2">
              <h2 className=" text-2xl font-bold text-center pb-2">Checkout</h2>
              <hr className="border border-gray-500" />
              <p className=" flex justify-between font-bold pt-2 pb-1 text-xl">
                <span> Product Cost :</span> {totalPrice} <small>Bdt</small>
              </p>
              <p className="flex justify-between font-semibold py-1 text-lg">
                <span> Shipping Cost : </span>
                <span>
                  80 <small>Bdt</small>
                </span>
              </p>

              <hr className="border border-gray-500" />
              <p className="flex justify-between font-bold py-1 text-xl">
                <span>Total Cost : </span>
                <span>
                  {totalPrice + 50} <small>Bdt</small>
                </span>
              </p>
              <div className="card-actions justify-end mt-4">
                <Link to={"/checkout"}>
                  <Button className="w-full">Proceed To Checkout</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

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
