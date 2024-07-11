import { ProductType } from "@/types";
import { FaRegStar, FaStar } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

import image from "@/assets/benefit-2.jpg";
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";
import { toast } from "sonner";

type PropsType = {
  product: ProductType;
};

function ProductCard(props: PropsType) {
  const [addToCartProduct, results] = useAddToCartMutation();

  if (results.isSuccess) {
    console.log("hit");
    toast("Product added to cart successfully", {
      description: `Date : ${new Date(Date.now()).toLocaleString()}`,
    });
  }

  console.log(results);

  const addToCart = () => {
    const payload = {
      product: props.product._id,
      quantity: 1,
    };
    addToCartProduct(payload);
  };
  return (
    <div className="flex justify-center items-center">
      <Card className=" rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <Link className="cursor-pointer" to={`/products/${props.product._id}`}>
          <CardHeader className="p-0 rounded-t-lg overflow-hidden">
            <img
              src={image}
              className="h-[280px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
              alt={props.product?.image}
            />
          </CardHeader>
        </Link>
        <CardContent className="grid p-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {Array.from({ length: props.product.rating }).map((i, index) => (
                <FaStar key={index} className="text-yellow-500 size-5" />
              ))}
            </div>
            <p className="text-lg text-gray-800 ">({props.product?.rating})</p>
          </div>
          <CardTitle className="my-2 text-2xl text-gray-800 font-bold">
            {props.product?.name}
          </CardTitle>
          <div className="text-gray-800 text-lg font-semibold">
            Category : {props.product.category}
          </div>
        </CardContent>

        <CardFooter>
          <button
            type="button"
            onClick={addToCart}
            className="w-full cursor-pointer text-center py-2 font-semibold border-2 text-lg border-gray-800 rounded-full transition-all duration-300 hover:bg-gray-800 hover:text-white"
          >
            Add To Cart
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProductCard;
