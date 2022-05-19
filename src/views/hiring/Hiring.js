import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetHiringRequest } from "../../redux-saga/actions/Hiring";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
// import Page from "../../../component/commons/Page";
import config from "../../config/config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import Carousel from './Carousel'
import Sidebar from './Sidebar'
import Search from './Search'


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
        Array.isArray(hiring) && hiring.filter(data=> (
          data.jobs_city.toLowerCase().includes(filter.input.toLowerCase()) 
        // || 
        // data.tale_bootcamp.toLowerCase().includes(filter.input.toLowerCase()
        // )
        ) 
                  // &&
          // (filter.select === 'Status' || data.tale_status_timeline.includes(filter.select))
        ))
}, [hiring]);

  // useEffect(() => {
  //   setPageNumbers(Array.from({ length: Math.ceil(listHiring.length / 10) }, (v, i) => (i + 1 === 1 ? { number: i + 1, active: true } : { number: i + 1, active: false })));
  //   setCurrentPage(1);
  //   setPageRange(0);
  // }, [listHiring]);

  const handleOnChange = (name) => (event) => {
    setFilter({ ...filter, [name]: event.target.value });
  };

  const onSearch = (event) => {
    event.preventDefault();
    setListHiring(
      Array.isArray(hiring) &&
        hiring.filter(
          data =>(
          (data.jobs_city.toLowerCase().includes(filter.input.toLowerCase()) 
          // || 
          // data.tale_bootcamp.toLowerCase().includes(filter.input.toLowerCase()
          // )
          ) 
          // &&
          // (filter.select === 'Status' || data.tale_status_timeline.includes(filter.select))
          ))
    )
  };

  return (
  <div>
      <h1  class="text-xl font-serif" style={{marginLeft:"15px", fontWeight:'bold', marginTop:"15px"}}>Our Network</h1>
<Carousel />

{/* search */}

<div>
                  <div className="w-full">
            <div className="input-group relative flex justify-center items-stretch w-full mb-2">
              <p className="text-sm mx-2 py-1">Search by Category</p>
              <input
                type="search"
                // onChange={handleOnChange("input")}
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
                name="tale_status_timeline"
                id="tale_status_timeline"
                // onChange={handleOnChange("select")}
                className="capitalize form-select form-select-sm appearance-none block mx-1 px-2 py-0.5 w-24 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500"
                aria-label=".form-select-sm example"
              >
                <option>Status</option>
                {/* {(tal_status || []).map((value, index) => 
                (
                  <option className="capitalize" value={value} key={index}>
                    {value}
                  </option>
                )
                )} */}
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


{/* Card */}
<div className="flex">
  <div>
  <Sidebar />
</div>
<div className="grid grid-cols-2 ml-80 gap-4 sm:grid-cols-2 ">
  
{Array.isArray(listHiring)&&listHiring.map((data) => (
                    
        <div className=" flex justify-end col-2 ml-10 mr-10 " >
  <div className="flex flex-wrap bg-white shadow-lg mt-10 ">
  <div className="grid grid-cols-2">
  <div className="ml-3 "><img className="w-20 mb-5 h-10 w-10 rounded-full" src={`${config.domain}/hiring/images/${data.jobs_photo}`} alt={`${data.jobs_id}`} style={{width:"150px", height:"150px"}}/></div>
  <div className="w-40 mb-5 ml-3 mr-5">{data.jobs_title}</div>
  <div className="col-span-2 mb-2 ml-3 "><FontAwesomeIcon icon={faLocationDot}/> {data.jobs_city}</div>
  <div className="col-span-2 mb-2 ml-3"><FontAwesomeIcon icon={faSuitcase} /> {data.job_upto_experience} tahun</div>
  <div className=" mb-2 ml-3"><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div className="ml-8 "><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>

  
  </div>



))}

            </div>
</div>


</div>

  )
}

