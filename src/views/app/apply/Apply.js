import { faAngleRight, faArrowRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../../component/commons/Page";

export default function Apply() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-10 bg-red-300">
      <div className="py-4">
        <FontAwesomeIcon icon={faHome} />
        <span className=" font-medium"> Home</span>
        <span>
          {"   "}
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <span className=" font-medium"> Detail</span>
      </div>
      <h1 className="font-bold text-2xl text-center">Bootcamp Application Process</h1>
      <div className="grid grid-cols-3 mx-auto bg-slate-700">
        <div>
          <h1>tes</h1>
        </div>
        <div>
          <h1>tes2</h1>
        </div>
        <div>
          <h1>tes3</h1>
        </div>
      </div>
    </div>
  );
}
