import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetHiringRequest } from "../../redux-saga/actions/Hiring";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ChevronLeftIcon, ChevronRightIcon,PencilAltIcon} from "@heroicons/react/outline";
// import Page from "../../../component/commons/Page";
import config from "../../config/config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import Carousel from './Carousel'
import Moment from "react-moment";





const Har_status =['It Programmer','Marketing','Sales']
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
    checkbox:""
  });

  const [checkbox, setCheckbox] = useState({
    input: ""
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
    window.scrollTo(0,0)
}, []);


  useEffect(() => {
    setListHiring(
        Array.isArray(hiring) && hiring.filter(data=> (
        data.jobs_city.toLowerCase().includes(filter.input.toLowerCase()) || 
        data.jobs_title.toLowerCase().includes(filter.input.toLowerCase())) &&
        (filter.select === 'All' || data.jobs_specification.includes(filter.select))&&
        (data.jobs_working_type.toLowerCase().includes(filter.input.toLowerCase())
        )
        // (filter.checkbox || data.jobs_working_type.includes(filter.checkbox))
        ))
}, [hiring]);

// useEffect(() => {
//   setListHiring(
//       Array.isArray(hiring) && hiring.filter(data=> 
//       (data.jobs_working_type.toLowerCase().includes(filter.input.toLowerCase()))
//       ))
//       onSearch( )
// }, [hiring]);



  useEffect(() => {
    setPageNumbers(Array.from({ length: Math.ceil(listHiring.length / 4) }, (v, i) => (i + 1 === 1 ? { number: i + 1, active: true } : { number: i + 1, active: false })));
    setCurrentPage(1);
    console.log (hiring)
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
          data =>(
          (data.jobs_city.toLowerCase().includes(filter.input.toLowerCase()) || 
          data.jobs_title.toLowerCase().includes(filter.input.toLowerCase())) &&
          // data.jobs_working_type.toLowerCase().includes(filter.input.toLowerCase())&&
          (filter.select === 'All' || data.jobs_specification.includes(filter.select)) 
          ))
    )
  };

///////Filter Sidebar///////////////////////////////////////////////////////////////////////////////////////

const mat_status =["NEWEST"]
const handleChecked1 = (e) => {
  console.log(e.target.value);
    const now = new Date()
    console.log(now.getDate());
    if (e.target.value == "NEWEST") {
      const rows = hiring.filter((row)=>new Date(row.jobs_start_date).getTime() <= now.getTime() && 
                                        new Date(row.jobs_start_date).getTime() >= now.getTime()-86400000);
      setListHiring(rows);
  } else {
    setListHiring(hiring);
  }
};

// const handleChecked1 = (e) => {
//   console.log(e.target);
//   if (e.target) {
//     const rows = hiring.filter((row) => row.jobs_working_type === e.target);
//     setListHiring(rows);
//   } else {
//     setListHiring(hiring);
//   }
// };


///////Filter Tipe Pekerjaan////////
const pek_status =['Magang','Full-time','Part-time','Freelance']
const handleChecked2 = (e) => {
    console.log(e.target.value);
    if (e.target.checked) {
      const rows = hiring.filter((row) => row.jobs_working_type === e.target.value);
      setListHiring(rows);
    } else {
      setListHiring(hiring);
    }
  };

//untuk filter pengalaman///////////////
const peng_status = [
  "Kurang 1 Tahun",
  "1-3 Tahun",
  "5-10 Tahun",
  "Kurang 10 Tahun",
];
const handleChecked3 = (e) => {
  console.log(e.target.value);
  if (e.target.checked) {
    if (e.target.value == "Kurang 1 Tahun") {
      const rows = hiring.filter((row) => row.job_upto_experience < 1);
      setListHiring(rows);
    } else if (e.target.value == "1-3 Tahun") {
      const rows = hiring.filter(
        (row) => row.job_upto_experience >= 1 && row.job_upto_experience <= 3
      );
      setListHiring(rows);
    } else if (e.target.value == "5-10 Tahun") {
      const rows = hiring.filter(
        (row) => row.job_upto_experience >= 5 && row.job_upto_experience <= 10
      );
      setListHiring(rows);
    } else {
      const rows = hiring.filter((row) => row.job_upto_experience <= 10);
      setListHiring(rows);
    }
  } else {
    setListHiring(hiring);
  }
};

///////Filter Remotly/////////////
const rem_status =[false,true]
const ToggleSwitch = (e)=>{
  console.log(e.target.value);
  if (e.target.checked) {
    const rows = hiring.filter((row) => row.jobs_remotely === e.target.checked)
    setListHiring(rows);
  }
  else {
    const rows = hiring.filter((row) => row.jobs_remotely === e.target.checked)
    setListHiring(rows);
  }
};

//Untuk Filter Update//////////////
const up_status = [
  "24Jam Terakhir",
  "Seminggu Terakhir",
  "Sebulan Terakhir",
  "Kapan pun",
];
const handleChecked5 = (e) => {
  console.log(e.target.value);
  if (e.target.checked) {
    const now = new Date()
    console.log(now.getDate());
    if (e.target.value == "24Jam Terakhir") {
      const rows = hiring.filter((row)=>new Date(row.jobs_start_date).getTime() <= now.getTime() && 
                                        new Date(row.jobs_start_date).getTime() >= now.getTime()-86400000);
      setListHiring(rows);
    } else if (e.target.value == "Seminggu Terakhir") {
      const rows = hiring.filter(
        (row) => new Date(row.jobs_start_date).getTime() < now.getTime()-86400000 &&
        new Date(row.jobs_start_date).getTime() >= now.getTime()-604800000
      );
      setListHiring(rows);
    } else if (e.target.value == "Sebulan Terakhir") {
      const rows = hiring.filter(
        (row)=>new Date(row.jobs_start_date).getTime() < now.getTime()-604800000 &&
        new Date(row.jobs_start_date).getTime() >= now.getTime()-2592000000
      );
      setListHiring(rows);
    } else {
      setListHiring(hiring);
    }
  } else {
    setListHiring(hiring);
  }
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
                className="capitalize form-select  mr-5 form-select-sm appearance-none block mx-1 px-2 py-0.5 w-32 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500"
                aria-label=".form-select-sm example"
              >
                <option>All</option>
                {(Har_status || []).map((value, index) => 
                (
                  <option className="capitalize" value={value} key={index}>
                    {value}
                  </option>
                )
                )}
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

    
<div className="font-medium  mx-5 font-serif">{listHiring.length} Lowongan Kerja Di Indonesia</div>
<div className="flex ">

{/* sidebar */}

<aside className=" rounded-lg  mt-5  w-72  h-full shadow-md  absolute " aria-label="Sidebar">
    <div className="overflow-y-auto  px-3 bg-gray-50 rounded">
        <ul className="space-y-2">
          <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-300 ">
              <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
      <span className="ml-3">Filter Pencarianmu</span>
              </a>
          </li>
      <li>
        <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-400 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
          <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
          <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Tampilkan Berdasarkan</span>
          <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        {mat_status.map((value) => (
      <ul id="dropdown-example" className="hidden py-2 space-y-2">
      <li className="relative">
      
          <div className="flex space-x-2 justify-center">
          <button 
                onClick={handleChecked1} type="button"  value={value} className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{value}</button>
            <button 
                onClick={handleChecked1} type="button"   className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">MATCH</button>
                
                </div>
                
        </li>
      </ul>
        ))}           
      </li>
      <li>
      <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-400 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example1">
          <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
      <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Tipe Pekerjaan</span>
          <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <ul id="dropdown-example1" className="hidden py-2 space-y-2"> 
      {pek_status.map((value, index) =>
                  (
                    <li key={index} className="relative ml-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          onChange={handleChecked2}
                          value={value}
                          className="form-check-input appearance-none h-3.5 w-3.5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="flexCheckDefault" />
                        <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault" style={{ fontSize: "12.5px" }}>
                          {value}
                        </label>
                      </div>
                    </li>
                  )
                  )}
        </ul>
        
      </li>
      <li>
      <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-400 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example2">
          <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
      <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Pengalaman</span>
          <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <ul id="dropdown-example2" className="hidden py-2 space-y-2"> 
      {peng_status.map((value, index) => (
                    <li key={index} className="relative ml-12">
                      <div className="form-check">
                        <input
                          className="form-check-input appearance-none h-3.5 w-3.5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          onChange={handleChecked3}
                          value={value}
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          for="flexCheckDefault"
                          style={{ fontSize: "12.5px" }}
                        >
                          {value}
                        </label>
                      </div>
                    </li>
                  ))}
                  </ul>
        
      </li>

      <li>
      <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-400 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example4">
          <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
      <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Remotely</span>
          <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      {rem_status.map((value, index) =>
                  (
      <ul id="dropdown-example4" className="hidden py-2 space-y-2">
      <li className="relative ml-12">
      <label for="default-toggle" className="inline-flex relative items-center cursor-pointer ml-10">
  <input onClick={ToggleSwitch} type="checkbox" value={value} id="default-toggle" className="sr-only peer"/>
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
        </li>
        </ul>
                  ))}
      </li>
      <li>
      <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-400 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example5">
          <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
      <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Terupdate</span>
          <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <ul id="dropdown-example5" className="hidden py-2 space-y-2"> 
      {up_status.map((value, index) => (
                    <li key={index} className="relative ml-12">
                      <div className="form-check">
                        <input
                          className="form-check-input appearance-none h-3.5 w-3.5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value={value}
                          onChange={handleChecked5}
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          for="flexCheckDefault"
                          style={{ fontSize: "12.5px" }}
                        >
                          {value}
                        </label>
                      </div>
                    </li>
                  ))}
        </ul>
        
      </li>


        </ul>
        </div>
      </aside>
{/* card */}

<div className="grid grid-cols-2 ml-80 gap-4 sm:grid-cols-2 mt-5  ">
  
{Array.isArray(listHiring)&&listHiring.slice((currentPage-1)*4,currentPage*4).map((data) => (
                    
        <div className=" flex justify-end col-2 ml-10 mr-10 mb-8 " >
    <button className="" onClick={() => navigate('/hiring/' + data.jobs_id)}>     
  <div className="rounded-lg flex flex-wrap  shadow-lg font-normal text-black bg-gradient-to-r from-gray-200 to-white-500 hover:from-gray-200 hover:to-gray-200 hover:text-black">
  <div className="grid grid-cols-2">
  <div className="ml-4 mt-3 "><img className="w-20 mb-5 h-10 w-10 rounded-full" src={`${config.domain}/hiring/images/${data.jobs_photo}`} alt={`${data.jobs_id}`} style={{width:"150px", height:"150px"}}/></div>
  <div className="w-40 mb-5 ml-3 mr-5 mt-12 text-base"><b> {data.jobs_title} </b></div>
  <div className=" col-end-2 mb-2  mr-20  "><FontAwesomeIcon className="mr-1" icon={faLocationDot}/> {data.jobs_city}</div>
  <div className="col-span-2 mb-2 ml-3 mr-72"><FontAwesomeIcon className="mr-1"icon={faSuitcase} /> {data.job_upto_experience} tahun</div>
  <div className="mb-2 mr-8"><FontAwesomeIcon className="mr-1"icon={faCalendarCheck} /> Actively Hiring</div>
  <div className="mb-5 ml-5 "><FontAwesomeIcon className="mr-1.5" icon={faClock}/><Moment fromNow>{data.jobs_start_date}</Moment></div>
  </div>  
  
  </div>
  </button>

  
  </div>



))}

            </div>
            
</div>

{/* page */}
{listHiring.length === 0 && <div className="px-6 py-3 text-center whitespace-nowrap text-sm font-medium text-gray-900"> Data Not Found...</div>}
<div className="bg-white ml-80 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-5">
              <div className="hidden ml-8 sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{(currentPage - 1) * 2 + 1}</span> to <span className="font-medium">{currentPage * 2 < listHiring.length ? currentPage * 2 : listHiring.length}</span> of{" "}
                    <span className="font-medium">{listHiring.length}</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button
                      onClick={() => {
                        setCurrentPage(1);
                        setPageNumbers([...pageNumbers].map((val) => (val.number === 1 ? { ...val, active: true } : { ...val, active: false })));
                        setPageRange();
                      }}
                      className="relative inline-flex items-center px-3 py-2 font-medium text-gray-600 hover:text-orange-600 "
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
                    >
                      <span className="sr-only">Previous</span>
                      
                    </button>
                    {pageNumbers.slice(pageRange * 10, pageRange * 4 + 10).map((el) => (
                      <button
                        onClick={() => {
                          window.scrollTo(0,200)
                          setCurrentPage(el.number);
                          setPageNumbers([...pageNumbers].map((val) => (val.number === el.number ? { ...val, active: true } : { ...val, active: false })));
                        }}
                        aria-current="page"
                        className={classNames(el.active ? "z-20 bg-orange-100 border-orange-600 text-orange-900" : "z-10 bg-white border-gray-300 text-gray-600", "relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded ")}
                      >
                        {el.number}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        const max = Math.ceil(pageNumbers.length / 10) - 1;
                        if (pageRange < max) {
                          setPageRange(pageRange + 1);
                        }
                      }}
                    >
                      <span className="sr-only">Next</span>
                      
                    </button>
                    <button
                      onClick={() => {
                        const max = Math.ceil(pageNumbers.length / 10) - 1;
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

  )
}

