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
        Array.isArray(hiring) && hiring.filter(data=>(
            (data.jobs_title.toLowerCase().includes(filter.input.toLowerCase())) 
            ))
        )
}, [hiring]);

  // useEffect(() => {
  //   setPageNumbers(Array.from({ length: Math.ceil(listHiring.length / 10) }, (v, i) => (i + 1 === 1 ? { number: i + 1, active: true } : { number: i + 1, active: false })));
  //   setCurrentPage(1);
  //   setPageRange(0);
  // }, [listHiring]);

  // const handleOnChange = (name) => (event) => {
  //   setFilter({ ...filter, [name]: event.target.value });
  // };

  // const onSearch = (event) => {
  //   event.preventDefault();
  //   setListHiring(
  //     Array.isArray(hiring) &&
  //       hiring.filter(
  //         data =>(
  //         (data.tale_fullname.toLowerCase().includes(filter.input.toLowerCase()) 
  //         || 
  //         data.tale_bootcamp.toLowerCase().includes(filter.input.toLowerCase()
  //         )) &&
  //         (filter.select === 'Status' || data.tale_status_timeline.includes(filter.select))
  //         ))
  //   )
  // };

  return (
  <div>
      <h1  class="text-xl font-serif" style={{marginLeft:"15px", fontWeight:'bold', marginTop:"15px"}}>Our Network</h1>

<Carousel />
<Sidebar />
{/* Card */}
<div className="grid grid-cols-2 justify-items-end ">
  
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

  )
}

