import React from "react";

export const dataTestimonial = [
  { name: "Aji Setiaji", text: "Sangat baik pelatihannya dari yang lain" },
  { name: "Iqsan", text: "Sangat super pelatihannya dari yang lain" },
  { name: "Afif", text: "Sangat good pelatihannya dari yang lain" },
  { name: "fadlur", text: "mantul mantul" },
  { name: "ibnu", text: "mantap mantap" },
];

export default function Testimonials() {
  return (
    <div className="py-9">
      <div className="container mx-auto">
        <h1 className="mb-2 font-medium text-xl">Testimonials</h1>
        <div className="flex">
          {dataTestimonial.map((e, index) => {
            return (
              <div className="border-2 rounded-lg flex-1 text-center mr-2">
                <div className="flex justify-center">
                  <img src="./assets/images/talent.jpg" width="120px" className="rounded-full py-2" />
                </div>
                <div className="py-3 px-3">
                  <p className="font-normal text-lg">{e.name}</p>
                  <p className="font-light text-base">{e.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
