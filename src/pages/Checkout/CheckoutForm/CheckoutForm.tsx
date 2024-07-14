import InputField from "@/components/shared/InputField/InputField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormik } from "formik";
import { useState } from "react";

type PropsType = {
  products: {
    _id: string;
    quantity: number;
  }[];
};

function CheckoutForm(props: PropsType) {
  const [active, setActive] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    address: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const payload = {
        user: values,
        products: props.products,
      };
      console.log(payload);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      <InputField
        label="Name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <InputField
        label="Email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <InputField
        label="Address"
        name="address"
        className={"h-14"}
        onChange={formik.handleChange}
        value={formik.values.address}
      />

      <div className="flex items-center space-x-2">
        <Checkbox
          onCheckedChange={(checked) => setActive(checked as boolean)}
          id="cash-on-delivery"
        />
        <label
          htmlFor="cash-on-delivery"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Cash On Delivery
        </label>
      </div>

      <Button disabled={!active} type="submit">
        Confirm Order
      </Button>
    </form>
  );
}

export default CheckoutForm;