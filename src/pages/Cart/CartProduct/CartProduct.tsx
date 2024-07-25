import { CartProductType } from "@/types";
import { FaTrashAlt } from "react-icons/fa";
import { useUpdateCartProductMutation } from "@/redux/features/cart/cartApi";
import { toast } from "sonner";

type PropsType = {
  cartProduct: CartProductType;
  setDeleteProduct: (val: CartProductType) => void;
};

function CartProduct(props: PropsType) {
  const {
    cartProduct: { product, quantity },
  } = props;

  const [updateCart, data] = useUpdateCartProductMutation();

  const totalPrice = product.price * quantity;

  const handleDecrease = async () => {
    try {
      await updateCart({
        id: props.cartProduct._id,
        payload: { quantity: props.cartProduct.quantity - 1 },
      });
    } catch (error) {
      toast("Something wrong please try again");
    }
  };
  const handleIncrease = async () => {
    try {
      await updateCart({
        id: props.cartProduct._id,
        payload: { quantity: props.cartProduct.quantity + 1 },
      });
    } catch (error) {
      toast("Something wrong please try again");
    }
  };
  return (
    <div className=" my-4">
      <div className=" bg-base-100 border rounded-lg shadow-md p-2 lg:flex justify-between ">
        <div className=" flex items-center">
          <div className="">
            <div className="w-24 rounded-xl">
              <img
                className=" object-cover object-center"
                alt=""
                src={product.image}
              />
            </div>
          </div>
          <div className="px-6">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <h2 className="text-lg font-semibold">
              Category : {product.category}
            </h2>
          </div>
        </div>
        <div className="flex items-center mt-4 lg:mt-0">
          <table className="border bg-base-200 border-collapse">
            <tbody>
              <tr className="">
                <td
                  onClick={() => handleDecrease()}
                  className="cursor-pointer px-[11px] text-xl pb-1 font-bold border-2"
                >
                  <span>-</span>
                </td>
                <td className="px-3 text-xl font-semibold border-2">
                  {quantity}
                </td>
                <td
                  onClick={() => handleIncrease()}
                  className="cursor-pointer px-2 text-xl pb-1 font-bold border-2"
                >
                  <span>+</span>
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className=" mx-4">Tk {totalPrice}</h2>
          <button
            onClick={() => props.setDeleteProduct(props.cartProduct)}
            className=""
          >
            <FaTrashAlt className=" text-red-600 size-5 mx-6"></FaTrashAlt>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
