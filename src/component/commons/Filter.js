import React from "react";
// import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Regular from "./Regular";
// import Berbayar from "./Berbayar";

export default function Fillter(props) {
  const { ...others } = props

    // const dispatch = useDispatch();
    // const { curriculum } = useSelector((state) => state.curriculumState);

    return(
<div>
<div class="flex justify-center mt-5">
  <div class="mb-3 xl:w-96"> 
    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none" placeholder="Java, Nodejs, Golang, Net" aria-label="Search" aria-describedby="button-addon3"/>
      <button class="btn inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mr-5" type="button" id="button-addon3">Search</button>
    </div>
  </div>
  <div class="flex justify-center">
  <div>
    <div class="dropdown relative">
      <button
        class="
          dropdown-toggle
          px-6
          py-2.5
          bg-red-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-red-700 hover:shadow-lg
          focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Choose Payment
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      <ul
        class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <button
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            onClick={() => others.onClick()} 
            >Regular</button>
        </li>
        <li>
          <button
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            onClick={() => others.onClick()} 
            >Berbayar</button>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>

</div>
    );
}