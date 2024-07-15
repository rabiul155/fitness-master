import InputField from "@/components/shared/InputField/InputField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useCreateCheckoutMutation } from "@/redux/features/checkout/checkoutApi";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "sonner";

type PropsType = {
  products: {
    _id: string;
    quantity: number;
  }[];
};

function CheckoutForm(props: PropsType) {
  const [active, setActive] = useState(false);
  const [createCheckoutApi] = useCreateCheckoutMutation();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const payload = {
        user: values,
        products: props.products,
      };
      try {
        await createCheckoutApi(payload);
        toast("Order confirm");
      } catch (err) {
        toast("Failed");
      }
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
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <InputField
        label="Phone"
        name="phone"
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
