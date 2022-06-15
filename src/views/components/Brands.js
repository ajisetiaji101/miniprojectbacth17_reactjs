import React from "react";

export const Dataimage = [
  {
    image: "./assets/images/smartfren.jpg",
  },
  {
    image: "./assets/images/bukalapak.jpg",
  },
  {
    image: "./assets/images/Jago.jpg",
  },
  {
    image: "./assets/images/Grab.jpg",
  }
];

export default function Brands() {
  return (
    <div className="bg-red-500">
      <div className="container mx-auto flex">
        <div className="mx-auto my-auto py-3 flex-none">
          <h2 className="text-white text-xl subpixel-antialiased font-medium tracking-wide">Trusted By Leading</h2>
          <h2 className="text-white text-xl subpixel-antialiased font-medium tracking-wide">Brands & Startup</h2>
        </div>
        <div className="flex-1">
          <div className="flex justify-around">
            {Dataimage.map((data, index) => {
              return (
                <div className="flex-none py-2">
                  <img className="h-24 w-24 rounded-full overflow-hidden" src={data.image} key={index} width={120} alt="Large Pizza" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
