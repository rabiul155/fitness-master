import { useGetCartProductQuery } from "@/redux/features/cart/cartApi";
import { CartProductType } from "@/types";
import { useEffect } from "react";
import CheckoutCard from "./CheckoutCard/CheckoutCard";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import Loading from "@/components/shared/Loading/Loading";

function Checkout() {
  const { data, isLoading, refetch } = useGetCartProductQuery(null);

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (data.data.length === 0) {
    return "No data found";
  }

  const totalPrice = data?.data.reduce(
    (sum: number, cartProduct: CartProductType) => {
      return sum + cartProduct.quantity * cartProduct.product.price;
    },
    0
  );

  const products = data.data.map((cartProduct: CartProductType) => {
    return {
      cartId: cartProduct._id,
      product: cartProduct.product,
      quantity: cartProduct.quantity,
    };
  });

  return (
    <div className="lg:grid grid-cols-8 gap-4 px-4 py-12">
      <div className="col-span-5">
        <CheckoutForm products={products} />
      </div>
      <div className="col-span-3">
        <div className="w-full">
          {data.data?.map((cartProduct: CartProductType) => (
            <CheckoutCard
              key={cartProduct._id}
              cartProduct={cartProduct}
            ></CheckoutCard>
          ))}
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <p className=" flex justify-between font-semibold pt-2 pb-1 text-lg">
              <span> Product Cost :</span>
              <span>
                {totalPrice} <small>Bdt</small>
              </span>
            </p>
            <p className="flex justify-between  py-1 ">
              <span> Shipping Cost : </span>
              <span>
                80 <small>Bdt</small>
              </span>
            </p>

            <hr className="border border-gray-500" />
            <p className="flex justify-between font-semibold py-1 text-lg">
              <span>Total Cost : </span>
              <span>
                {totalPrice + 50} <small>Bdt</small>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
