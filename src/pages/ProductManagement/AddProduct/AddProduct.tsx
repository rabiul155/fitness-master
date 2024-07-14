import InputField from "@/components/shared/InputField/InputField";
import { Button } from "@/components/ui/button";
import { useCreateProductMutation } from "@/redux/features/product/productApi";
import { ProductType } from "@/types";
import { useFormik } from "formik";
import { toast } from "sonner";

function AddProduct() {
  const [createProductApi] = useCreateProductMutation();

  const initialValues = {
    name: "",
    category: "",
    image: "",
    price: "",
    rating: "",
    stock: "",
    description: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values);
      try {
        await createProductApi(values);
        toast("Product created");
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div className="mx-4 my-8">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
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
        <div className="flex justify-center mt-4 lg:mt-8">
          <Button className="w-full lg:w-36" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
