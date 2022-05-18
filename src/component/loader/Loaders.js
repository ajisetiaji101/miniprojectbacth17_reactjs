import React from "react";
import "./Loader.css";

function Loader(props) {
    return (
        <div className="flex h-screen">
            <div className=" absolute w-[100%] top-[50%] mt-[-50px] h-[100px] items-center justify-center flex flex-col ">
                <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className=" text-red-600 mt-8 ">Loading, Please Wait</div>
            </div>
        </div>
    );
}

export default Loader;
