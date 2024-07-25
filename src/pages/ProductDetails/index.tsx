import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import Loading from "@/components/shared/Loading/Loading";

function ProductDetails() {
  const [quantity, setQuantity] = useState("1");
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleProductQuery(id);
  const [addToCartProduct, results] = useAddToCartMutation();
  if (isLoading) {
    return <Loading />;
  }

  if (results.isSuccess) {
    toast("Product added to cart successfully", {
      description: `Date : ${new Date(Date.now()).toLocaleString()}`,
    });
  }
  if (isError) return <div>Something went wrong</div>;

  const addToCart = () => {
    const payload = {
      product: data.data._id,
      quantity: Number(quantity),
    };
    addToCartProduct(payload);
  };

  return (
    <div className="text-gray-700 grid grid-cols-1 lg:grid-cols-8 gap-6 m-6">
      <div className=" hidden lg:block">
        <div className=" mb-3 p-3 border ">
          <img src={data.data.image} alt="none" />
        </div>
        <div className=" mb-3 p-3 border ">
          <img src={data.data.image} alt="none" />
        </div>
        <div className=" mb-3 p-3 border ">
          <img src={data.data.image} alt="none" />
        </div>
      </div>
      <div className=" lg:col-span-3">
        <div className=" mb-3 p-4 border">
          <img src={data.data.image} alt="none" />
        </div>
      </div>
      <div className=" lg:col-span-4">
        <div className="flex flex-col gap-2">
          <h3 className=" font-bold text-3xl">{data.data.name}</h3>
          <h3 className=" font-semibold text-lg">
            Category : {data.data.category}
          </h3>
          <div className="mt-2 mb-4 flex items-center gap-[2px] ">
            {Array.from({ length: data.data.rating }).map((i, index) => (
              <FaStar key={index} className="text-yellow-500 size-4" />
            ))}
            <small className=" text-gray-500 mt-[2px] mx-2">
              ({data.data.rating})
            </small>
          </div>
        </div>
        <hr />
        <small className="my-4 inline-block">{data.data.description}</small>
        <hr />

        <h6 className="my-4 font-semibold text-lg">
          Price :{" "}
          <span>
            {data.data.price} <small>BDT</small>
          </span>
        </h6>
        <form className=" flex justify-start items-center gap-2.5">
          <small className=" font-semibold">Quantity : </small>
          <input
            name="quantity"
            onChange={(e) => setQuantity(e.target.value)}
            className="w-12 text-gray-700 text-sm rounded py-0.5 pl-2 border "
            min="0"
            max="100"
            defaultValue={1}
            type="number"
          />
          <button
            type="button"
            onClick={addToCart}
            className="hover:bg-sky-600 duration-300 px-2.5 py-1 bg-slate-700 text-white rounded-md text-xs"
          >
            Add To Cart
          </button>
          <button className="hover:bg-sky-600 duration-300 bg-slate-600 p-1.5 pt-1.5 pb-1 text-white rounded-full">
            <FaRegHeart />
          </button>
        </form>

        <div className=" text-sm my-4">
          {data.data.stock} items
          <span className=" inline-block hover:bg-sky-600 duration-300 mx-4 px-2 py-1 bg-green-600 text-white rounded-md ">
            In stock
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
