import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetHiringRequest } from "../../redux-saga/actions/Hiring";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ChevronLeftIcon, ChevronRightIcon, PencilAltIcon } from "@heroicons/react/outline";
// import Page from "../../../component/commons/Page";
import config from "../../config/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import Sidebar from "./Sidebar";
import Search from "./Search";

const Har_status = ["It Programmer", "Marketing", "Sales"];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Hiring() {
  let navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const [listHiring, setListHiring] = useState([]);
  const [filter, setFilter] = useState({
    input: "",
    select: "",
  });

  const [pageNumbers, setPageNumbers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState(0);

  const { hiring } = useSelector((state) => state.hiringState);
  // const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    dispatch(doGetHiringRequest());

    if (location.state && location.state.updated) {
      toast.success("Batch has been updated.");
    }
  }, []);

  useEffect(() => {
    setListHiring(
      Array.isArray(hiring) &&
        hiring.filter(
          (data) => (data.jobs_city.toLowerCase().includes(filter.input.toLowerCase()) || data.jobs_title.toLowerCase().includes(filter.input.toLowerCase())) && (filter.select === "All" || data.jobs_specification.includes(filter.select))
        )
    );
  }, [hiring]);

  useEffect(() => {
    setPageNumbers(Array.from({ length: Math.ceil(listHiring.length / 2) }, (v, i) => (i + 1 === 1 ? { number: i + 1, active: true } : { number: i + 1, active: false })));
    setCurrentPage(1);
    setPageRange(0);
  }, [listHiring]);

  const handleOnChange = (name) => (event) => {
    setFilter({ ...filter, [name]: event.target.value });
  };

  const onSearch = (event) => {
    event.preventDefault();
    setListHiring(
      Array.isArray(hiring) &&
        hiring.filter(
          (data) => (data.jobs_city.toLowerCase().includes(filter.input.toLowerCase()) || data.jobs_title.toLowerCase().includes(filter.input.toLowerCase())) && (filter.select === "All" || data.jobs_specification.includes(filter.select))
        )
    );
  };

  return (
    <div>
      <h1 class="text-xl font-serif" style={{ marginLeft: "15px", fontWeight: "bold", marginTop: "15px" }}>
        Our Network
      </h1>
      <Carousel />

      {/* search */}

      <div>
        <div className="w-full">
          <div className="input-group relative flex justify-center items-stretch w-full mb-2">
            <p className="text-sm mx-2 py-1">Search by Category</p>
            <input
              type="search"
              onChange={handleOnChange("input")}
              className="form-control relative w-64 block px-4 py-0.5 ml-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 focus:outline-none"
              placeholder="Jabatan, Kata Kunci, Perusahaan"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <input
              type="search"
              onChange={handleOnChange("input")}
              className="form-control relative w-64 block px-4 py-0.5 mr-2 ml-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 focus:outline-none"
              placeholder="Location"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <select
              name="jobs_specification"
              id="jobs_specification"
              onChange={handleOnChange("select")}
              className="capitalize form-select form-select-sm appearance-none block mx-1 px-2 py-0.5 w-24 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500"
              aria-label=".form-select-sm example"
            >
              <option>All</option>
              {(Har_status || []).map((value, index) => (
                <option className="capitalize" value={value} key={index}>
                  {value}
                </option>
              ))}
            </select>
            <button
              type="submit"
              onClick={onSearch}
              className="btn px-3 py-1 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 transition duration-150 ease-in-out flex items-center"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </div>
        <br></br>
      </div>

      <div className="flex">
        <div>
          <Sidebar />
        </div>

        {/* card */}
        <div className="grid grid-cols-2 ml-80 gap-4 sm:grid-cols-2 bg-slate-50">
          {Array.isArray(listHiring) &&
            listHiring.map((data) => (
              <div className=" flex justify-end col-2 ml-10 mr-10  ">
                <div className="flex flex-wrap bg-white shadow-lg mt-10 ">
                  <div className="grid grid-cols-2">
                    <div className="ml-3 ">
                      <img className="w-20 mb-5 h-10 w-10 rounded-full" src={`${config.domain}/hiring/images/${data.jobs_photo}`} alt={`${data.jobs_id}`} style={{ width: "150px", height: "150px" }} />
                    </div>
                    <div className="w-40 mb-5 ml-3 mr-5">{data.jobs_title}</div>
                    <div className="col-span-2 mb-2 ml-3 ">
                      <FontAwesomeIcon icon={faLocationDot} /> {data.jobs_city}
                    </div>
                    <div className="col-span-2 mb-2 ml-3">
                      <FontAwesomeIcon icon={faSuitcase} /> {data.job_upto_experience} tahun
                    </div>
                    <div className=" mb-2 ml-3">
                      <FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring
                    </div>
                    <div className="ml-8 ">
                      <FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* page */}
      {listHiring.length === 0 && <div className="px-6 py-3 text-center whitespace-nowrap text-sm font-medium text-gray-900"> Data Not Found...</div>}

      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> to <span className="font-medium">{currentPage * 10 < listHiring.length ? currentPage * 10 : listHiring.length}</span> of{" "}
              <span className="font-medium">{listHiring.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => {
                  setCurrentPage(1);
                  setPageNumbers([...pageNumbers].map((val) => (val.number === 1 ? { ...val, active: true } : { ...val, active: false })));
                  setPageRange(0);
                }}
                className="relative inline-flex items-center px-3 py-2 font-medium text-gray-600 hover:text-orange-600"
              >
                <span className="underline">First</span>
              </button>
              <button
                onClick={() => {
                  const min = 0;
                  if (pageRange > min) {
                    setPageRange(pageRange - 1);
                  }
                }}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

              {pageNumbers.slice(pageRange * 4, pageRange * 4 + 4).map((el) => (
                <button
                  onClick={() => {
                    setCurrentPage(el.number);
                    setPageNumbers([...pageNumbers].map((val) => (val.number === el.number ? { ...val, active: true } : { ...val, active: false })));
                  }}
                  aria-current="page"
                  className={classNames(el.active ? "z-20 bg-orange-100 border-orange-600 text-orange-900" : "z-10 bg-white border-gray-300 text-gray-600", "relative inline-flex items-center px-4 py-2 border text-sm font-medium")}
                >
                  {el.number}
                </button>
              ))}
              <button
                onClick={() => {
                  const max = Math.ceil(pageNumbers.length / 4) - 1;
                  if (pageRange < max) {
                    setPageRange(pageRange + 1);
                  }
                }}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => {
                  const max = Math.ceil(pageNumbers.length / 4) - 1;
                  setCurrentPage(pageNumbers.length);
                  setPageNumbers([...pageNumbers].map((val) => (val.number === pageNumbers.length ? { ...val, active: true } : { ...val, active: false })));
                  setPageRange(max);
                }}
                className="relative inline-flex items-center px-3 py-2 font-medium text-gray-600 hover:text-orange-600"
              >
                <span className="underline">Last</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
