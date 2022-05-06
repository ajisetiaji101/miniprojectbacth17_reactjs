import React from "react";

export const Dataimage = [
  {
    image: "./assets/images/bootcamp.jpg",
  },
  {
    image: "./assets/images/talent.jpg",
  },
  {
    image: "./assets/images/hiring.jpg",
  },
];

export default function Brands() {
  return (
    <div className="bg-red-500">
      <div className="container mx-auto flex">
        <div className="mx-auto py-3 flex-none px-2">
          <h2 className="text-white text-xl subpixel-antialiased font-medium tracking-wide">Trusted By Leading</h2>
          <h2 className="text-white text-xl subpixel-antialiased font-medium tracking-wide">Brands & Startup</h2>
        </div>
        <div className="flex-1">
          <div className="flex justify-around">
            {Dataimage.map((data, index) => {
              return (
                <div className="flex-none py-2">
                  <img className="px-2" src={data.image} key={index} width={120} height={120} alt="Large Pizza" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}