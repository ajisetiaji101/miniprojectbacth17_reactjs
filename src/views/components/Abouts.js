import React from "react";

export const gambar = [
  { images: "./assets/images/mandiri2.png"},
  { images: "./assets/images/btn2.png" },
  { images: "./assets/images/uob2.png" },
  { images: "./assets/images/prudential.png" },
  { images: "./assets/images/ali.png" },
  { images: "./assets/images/bankmega.png" },
];

export default function Abouts() {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex pt-4 pb-1">
        <div className="flex-1 mr-20 my-auto">
          <h1 className="font-normal text-5xl mb-8 font-sans">About Us</h1>
          <p className="font-light leading-relaxed">
            The companies we invest in are neighbors. We call the American West home, and we’re committed to advancing the well-being of our partner companies as well as the communities where they operate. We focus on sectors we know well:
            Industrials, Technology & Business Services, Consumer, and Healthcare.
          </p>
          <div className="mt-5">
            <button className="shadow bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">You are hiring</button>
          </div>
        </div>
        <div className="flex-auto">
          <h4 className="ml-2 text-lg font-bold underline underline-offset-2">Portofolio</h4>
          <div className="grid gap-y-20 grid-cols-3">
            {gambar.map((e) => {
              return <img src={e.images} width="137px" height="137px" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
