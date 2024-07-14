import { Button } from "@/components/ui/button";
import { useUpdateProductMutation } from "@/redux/features/product/productApi";
import { ProductType } from "@/types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useFormik } from "formik";
import { Fragment } from "react";
import { FaXmark } from "react-icons/fa6";
import { toast } from "sonner";
import InputField from "../InputField/InputField";

type PropsType = {
  show: boolean;
  title: string;
  product: ProductType;
  onConfirm: () => void;
  onClose: () => void;
};

const EditProductModal = (props: PropsType) => {
  const initialValues = {
    name: props.product?.name || "",
    category: props.product?.category || "",
    image: props.product?.image || "",
    price: props.product?.price || "",
    rating: props.product?.rating || "",
    stock: props.product?.stock || "",
    description: props.product?.description || "",
  };

  const [updateProductApi] = useUpdateProductMutation();
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values);
      try {
        await updateProductApi({ id: props.product?._id, data: values });
        toast("Product updated");
        props.onConfirm();
      } catch (err) {
        console.log(err);
        props.onConfirm();
      }
    },
  });

  return (
    <Transition show={props.show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="ease-in duration-200"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full mx-4 sm:w-full sm:max-w-lg sm:p-6">
                <DialogTitle className="font-bold">{props.title}</DialogTitle>

                <button
                  onClick={props.onClose}
                  className="absolute top-2 right-2 p-2 rounded-full text-gray-800 hover:bg-gray-100"
                >
                  <FaXmark size={20} />
                </button>
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col px-2 py-4 gap-4"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <InputField
                      label="Product name"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    <InputField
                      label="Product category"
                      name="category"
                      onChange={formik.handleChange}
                      value={formik.values.category}
                    />

                    <InputField
                      label="Product image"
                      name="image"
                      onChange={formik.handleChange}
                      value={formik.values.image}
                    />
                    <InputField
                      label="Product price"
                      name="price"
                      type="number"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                    />
                    <InputField
                      label="Product rating"
                      name="rating"
                      type="number"
                      onChange={formik.handleChange}
                      value={formik.values.rating}
                    />
                    <InputField
                      label="Product stock"
                      name="stock"
                      type="number"
                      onChange={formik.handleChange}
                      value={formik.values.stock}
                    />
                  </div>
                  <InputField
                    label="Product description"
                    name="description"
                    className="h-12 w-full"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  />
                  <div className="flex justify-end mt-4">
                    <Button
                      variant={"secondary"}
                      className="w-full lg:w-36"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditProductModal;
