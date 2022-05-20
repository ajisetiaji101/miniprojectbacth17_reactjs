import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto flex justify-between py-9">
        <div>
          <h1 className="text-xl font-medium mb-2">Contact Us</h1>
          <p className="text-sm font-light">
            APL Tower 30th Floor, Jl. Letjen S. Parman<p></p> Kav. 28 Jakarta, 11470, Indonesia
          </p>
          <p className="text-sm font-light">+6221 2933 9528</p>
        </div>
        <div>
          <h1 className="text-xl font-medium mb-2">FAQ</h1>
          <p className="text-sm font-light">About Bootcamp Regular</p>
          <p className="text-sm font-light">About Bootcamp Berbayar</p>
          <p className="text-sm font-light">Training On Site</p>
          <p className="text-sm font-light">Partnering Bootcamp</p>
        </div>
        <div>
          <h1 className="text-xl font-medium mb-2">Social Media</h1>
          <div className="flex mb-2">
            <FontAwesomeIcon icon={faFacebook} className="mr-2 text-2xl" />
            <FontAwesomeIcon icon={faInstagram} className="mr-2 text-2xl" />
            <FontAwesomeIcon icon={faYoutube} className="mr-2 text-2xl" />
            <FontAwesomeIcon icon={faTelegramPlane} className="mr-2 text-2xl" />
          </div>
          <div className="flex">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-1" placeholder="Enter Email ..." />
            <button className="shadow bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
