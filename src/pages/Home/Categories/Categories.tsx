import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import image1 from "@/assets/dumbbles.jpg";
import image2 from "@/assets/treadmills.jpg";
import image3 from "@/assets/weight-plate.jfif";
import image4 from "@/assets/cycle.jpg";
import { Link } from "react-router-dom";

const categoriesData = [
  {
    id: 1,
    name: "Dumbbells",
    image: image1,
    link: "products?category=Dumbbells",
  },
  {
    id: 2,
    name: "Treadmills",
    image: image2,
    link: "products?category=Treadmills",
  },
  {
    id: 3,
    name: "Weight Plates",
    image: image3,
    link: "products?category=Weight+Plates",
  },
  {
    id: 4,
    name: "Exercise Bike",
    image: image4,
    link: "products?category=Exercise+Bike",
  },
];

function Categories() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full px-16"
    >
      <CarouselContent className="flex">
        {categoriesData.map((category) => (
          <CarouselItem key={category.id} className="md:basis-1/2 lg:basis-1/3">
            <Link to={category.link} className="p-1 cursor-pointer">
              <Card>
                <CardContent className="relative flex aspect-square items-center justify-center p-0 rounded-md overflow-hidden">
                  <img
                    src={category?.image}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    alt=""
                  />
                  <div className="absolute text-white bottom-8 left-8">
                    <h4 className="text-3xl font-bold">{category.name}</h4>
                  </div>
                </CardContent>
              </Card>
            </Link>
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

export default Categories;
