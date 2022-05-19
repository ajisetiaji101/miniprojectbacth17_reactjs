import React from "react";

export const gambar = [
  { images: "./assets/images/mercubuana.png" },
  { images: "./assets/images/pakuan.png" },
  { images: "./assets/images/untar.png" },
  { images: "./assets/images/itb.png" },
  { images: "./assets/images/upn.png" },
  { images: "./assets/images/telkom.png" },
];

export default function Partner() {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto flex pt-9 pb-14">
        <div className="flex-1 mr-20 my-auto">
          <h1 className="font-normal text-5xl mb-8 font-sans">Our Partner</h1>
          <p className="font-light leading-relaxed">
            The companies we invest in are neighbors. We call the American West home, and we’re committed to advancing the well-being of our partner companies as well as the communities where they operate. We focus on sectors we know well:
            Industrials, Technology & Business Services, Consumer, and Healthcare.
          </p>
        </div>
        <div className="flex-auto">
          <div className="grid gap-y-20 grid-cols-3 mr-2">
            {gambar.map((e) => {
              return <img src={e.images} width="137px" height="137px" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
