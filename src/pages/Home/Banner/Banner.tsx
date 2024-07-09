import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sliderImage1 from "@/assets/slider-image-1.jpg";
import sliderImage2 from "@/assets/slider-image-2.jpg";
import sliderImage3 from "@/assets/slider-image-3.jpg";

type SliderDataType = {
  id: number;
  image: string;
  heading: string;
  description: string;
};

function Banner() {
  const sliderData: SliderDataType[] = [
    {
      id: 1,
      image: sliderImage1,
      heading: "Custom Workout Plans",
      description:
        "Get tailored workout routines designed by experts to meet your specific fitness goals.",
    },
    {
      id: 2,
      image: sliderImage2,
      heading: "Balanced Nutrition Advice",
      description:
        "Receive personalized nutrition plans to complement your workouts and enhance your results.",
    },
    {
      id: 3,
      image: sliderImage3,
      heading: "Supportive Fitness Community",
      description:
        "Join a community of fitness enthusiasts for motivation, support, and shared achievements.",
    },
  ];

  return (
    <div className="relative w-full h-[550px] ">
      <Carousel
        className=" overflow-hidden  shadow-lg"
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="flex">
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id} className="min-w-full">
              <Card className="bg-transparent">
                <CardContent className="relative flex items-center justify-center h-[550px] p-0">
                  <img
                    src={slider?.image}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    alt=""
                  />
                  <div className="absolute text-white bottom-16 flex items-center justify-center max-w-lg p-4">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h4 className="text-3xl font-bold">{slider.heading}</h4>
                      <div className="font-semibold text-center">
                        {slider.description}
                      </div>
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
    </div>
  );
}

export default Banner;
