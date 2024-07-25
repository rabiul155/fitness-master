import InputField from "@/components/shared/InputField/InputField";
import SelectCategory from "@/components/shared/SelectCategory/SelectCategory";
import { Button } from "@/components/ui/button";
import { useCreateProductMutation } from "@/redux/features/product/productApi";
import { imageHostToImgBB } from "@/utils/imageHostToImgBB";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const category = [
  {
    label: "Dumbbells",
    value: "Dumbbells",
  },
  {
    label: "Treadmills",
    value: "Treadmills",
  },
  {
    label: "Weight Plates",
    value: "Weight Plates",
  },
  {
    label: "Exercise Bike",
    value: "Exercise Bike",
  },
];

function AddProduct() {
  const [createProductApi] = useCreateProductMutation();
  const navigate = useNavigate();

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
      const image = await imageHostToImgBB(values.image);
      values.image = image;
      try {
        await createProductApi(values);
        toast("Product created successfully.");
        formik.resetForm();
        navigate("/products");
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
          <SelectCategory
            label="Product category"
            name="category"
            items={category}
            placeholder="Select Category"
            handleValueChange={(val) => formik.setFieldValue("category", val)}
          />
          <div className="flex flex-col gap-1">
            <label className="mx-1 text-sm" htmlFor="image">
              Image
            </label>
            <input
              className="w-full border rounded-md p-1"
              type="file"
              onChange={(event) => {
                if (event.target.files) {
                  formik.setFieldValue("image", event.target.files[0]);
                }
              }}
            />
          </div>
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
