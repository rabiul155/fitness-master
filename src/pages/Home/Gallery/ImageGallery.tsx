import React from "react";
import g1 from "@/assets/gallery/g-1.jpg";
import g2 from "@/assets/gallery/g-2.jpg";
import g4 from "@/assets/gallery/g-4.jpg";
import g5 from "@/assets/gallery/g-5.jpg";
import g6 from "@/assets/gallery/g-6.jpg";
import g7 from "@/assets/gallery/g-7.jpg";
import g11 from "@/assets/gallery/g-11.jpg";
import g12 from "@/assets/gallery/g-12.jpg";
import g13 from "@/assets/gallery/g-13.jpg";
import g14 from "@/assets/gallery/g-14.jpg";
import g15 from "@/assets/gallery/g-15.jpg";

const imageGallery = [
  {
    id: 14,
    img: g14,
  },
  {
    id: 15,
    img: g15,
  },
  {
    id: 1,
    img: g1,
  },
  {
    id: 2,
    img: g2,
  },

  {
    id: 5,
    img: g5,
  },
  {
    id: 6,
    img: g6,
  },
  {
    id: 7,
    img: g7,
  },
  {
    id: 11,
    img: g11,
  },
  {
    id: 12,
    img: g12,
  },
  {
    id: 13,
    img: g13,
  },
  {
    id: 4,
    img: g4,
  },
];

function ImageGallery() {
  return (
    <div className="flex flex-col bg-inherit">
      <h2 className="text-2xl font-bold text-center pt-4">Image Gallery</h2>
      <div className="rounded-md p-4 columns-1 md:columns-4 gap-3 space-y-3 max-w-[1200px] mx-auto ">
        {imageGallery.map((image) => (
          <img
            key={image.id}
            src={image.img}
            alt="image"
            className="bg-gray-200 break-inside-avoid w-full object-cover object-center"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
