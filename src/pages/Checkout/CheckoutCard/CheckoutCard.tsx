import { CartProductType } from "@/types";

import img from "@/assets/benefit-2.jpg";

type PropsType = {
  cartProduct: CartProductType;
};

function CheckoutCard(props: PropsType) {
  const {
    cartProduct: { product, quantity },
  } = props;

  const totalPrice = product.price * quantity;
  return (
    <div className=" my-4">
      <div className="  border-b p-2 lg:flex justify-between ">
        <div className=" flex items-center">
          <div className="">
            <div className="w-24 rounded-xl">
              <img className=" object-cover object-center" alt="" src={img} />
            </div>
          </div>
          <div className="px-6">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <h2 className=" ">Category : {product.category}</h2>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4 ">
          <h2 className=" mx-4">Tk {totalPrice}</h2>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
