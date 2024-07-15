import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import image1 from "@/assets/customer1.jpg";
import image2 from "@/assets/customer2.jpg";
import image3 from "@/assets/customer3.jpg";
import image4 from "@/assets/customer4.jpg";

const customersData = [
  {
    id: 1,
    name: "Amir khan",
    image: image1,
    description:
      "I am thoroughly impressed with the quality of the products on this site! The fitness accessories I purchased have greatly enhanced my workout routine. Highly recommend!",
  },
  {
    id: 2,
    name: "Mr Basil Kubi",
    image: image2,
    description:
      "Fantastic customer service and fast shipping! I received my order within two days, and everything was exactly as described. Will definitely shop here again",
  },
  {
    id: 3,
    name: "Alex Bean",
    image: image3,
    description:
      "The selection of fitness gear is amazing, and the prices are unbeatable. I found everything I needed to set up my home gym in one place. Very satisfied!",
  },
  {
    id: 4,
    name: "Mirza Hasan",
    image: image4,
    description:
      "User-friendly website with detailed product descriptions and reviews. It made my shopping experience smooth and hassle-free. Keep up the great work!",
  },
];

function Customer() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full px-16"
    >
      <CarouselContent className="flex">
        {customersData.map((customer) => (
          <CarouselItem key={customer.id} className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent className="relative flex aspect-square items-center justify-center p-0 rounded-md bg-slate-100 overflow-hidden">
                <div className="absolute top-8 hidden lg:flex justify-center ">
                  <img
                    src={customer?.image}
                    className="h-36 w-36 rounded-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div className="absolute text-gray-800 bottom-4 lg:bottom-12 flex justify-center">
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-center">
                      {customer.name}
                    </h4>
                    <p className="text-sm text-center my-2">
                      {customer.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
        &#9664;
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
        &#9654;
      </CarouselNext>
    </Carousel>
  );
}

export default Customer;
