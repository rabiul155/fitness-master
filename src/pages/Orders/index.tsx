import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Order confirmed</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <img
            className=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfz3upZJUzgki4bn27faJf6gPIIo7Yo5HxZg&s"
            alt=""
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={() => navigate("/products")} variant={"outline"}>
            Go To Product
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Orders;
