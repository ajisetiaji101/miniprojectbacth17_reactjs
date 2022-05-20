import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetHiringRequest } from "../../redux-saga/actions/Hiring";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ChevronLeftIcon, ChevronRightIcon,PencilAltIcon} from "@heroicons/react/outline";
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
    setListHiring(
        Array.isArray(hiring) && hiring.filter(data=> (
        data.jobs_city.toLowerCase().includes(filter.input.toLowerCase()) || 
        data.jobs_title.toLowerCase().includes(filter.input.toLowerCase())) &&
        (filter.select === 'All' || data.jobs_specification.includes(filter.select))
        // (filter.checkbox || data.jobs_working_type.includes(filter.checkbox))
        ))
}, [hiring]);

  useEffect(() => {
    setPageNumbers(Array.from({ length: Math.ceil(listHiring.length / 4) }, (v, i) => (i + 1 === 1 ? { number: i + 1, active: true } : { number: i + 1, active: false })));
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
          data =>(
          (data.jobs_city.toLowerCase().includes(filter.input.toLowerCase()) || 
          data.jobs_title.toLowerCase().includes(filter.input.toLowerCase())) &&
          (filter.select === 'All' || data.jobs_specification.includes(filter.select)) 
          ))
    )
  };

//   const [typeFilter, setTypeFilter] = useState("")
//   const [dataMember, setDataMember] = useState("")

//   useEffect(()=>{
//     const filterCheck = hiring.results.filter(
//       (member) => member.tipe === typeFilter
//     );
//     setListHiring(filterCheck)
//   }, [typeFilter])

//   useEffect(() => {
//     setListHiring(
//         Array.isArray(hiring) && hiring.filter(data=> (
//         data.jobs_city.toLowerCase().includes(filter.input.toLowerCase()) || 
//         data.jobs_title.toLowerCase().includes(filter.input.toLowerCase())) &&
//         (filter.select === 'All' || data.jobs_specification.includes(filter.select))
//         // (filter.checkbox || data.jobs_working_type.includes(filter.checkbox))
//         ))
// }, [hiring]);
//   const checkboxFilterValue = {
//     a : "Magang",
//     b : "full-time",
//     c : "part-time",
//     d : "freelance"
//   }

//   console.log(listHiring)
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
                className="capitalize form-select form-select-sm appearance-none block mx-1 px-2 py-0.5 w-24 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500"
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

<div className="font-medium mx-5 mb-5 font-serif">{listHiring.length} Lowongan Kerja Di Indonesia</div> 
<div className="flex">

{/* sidebar */}
{/* <div>
      <aside className="w-72  h-full shadow-md bg-white absolute" aria-label="Sidebar">
    <div className="overflow-y-auto py-4 px-3 bg-gray-50   rounded dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
      <span className="ml-3">Filter Pencarianmu</span>
              </a>
          </li>
      <li>
      <ul id="dropdown-example" className="hidden py-2 space-y-2">
      <li className="relative">
          <div className="flex space-x-2 justify-center">
            <button type="button" className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Match</button>
            <button type="button" className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Newest</button>
          </div>
        </li>
      </ul>
      </li>
      <li>
      <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example1">
          <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
      <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Tipe Pekerjaan</span>
          <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <ul id="dropdown-example1" className="hidden py-2 space-y-2">
      <li className="relative ml-12">
      <div className="form-check">
      <input className="form-check-input appearance-none h-3.5 w-3.5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
      type="checkbox" 
      value={checkboxFilterValue.a}
      checked={typeFilter === checkboxFilterValue.a}
      onClick={({ target }) => setTypeFilter(target.value)}
      id="flexCheckDefault"/>
      <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault" style={{fontSize:"12.5px"}}>
      Magang
      </label>
      </div >
        </li>
        </ul>
      </li>
        </ul>
        </div>
      </aside>

    </div> */}

{/* card */}
<div className="grid grid-cols-2 ml-80 gap-4 sm:grid-cols-2 bg-slate-50">
  
{Array.isArray(listHiring)&&listHiring.slice((currentPage-1)*4,currentPage*4).map((data) => (
                    
        <div className=" flex justify-end col-2 ml-10 mr-10  " >
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

  )
}

