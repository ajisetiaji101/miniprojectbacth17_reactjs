import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetHiringCityRequest, doGetHiringIdRequest } from "../../redux-saga/actions/Hiring";
import { Link } from "react-router-dom";
import config from "../../config/config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSuitcase, faClock, faCalendarCheck, faDollarSign, faBuilding, faHourglassStart, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";


export default function HiringDetail() {

const dispatch = useDispatch();

const [pageNumbers, setPageNumbers] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [pageRange, setPageRange] = useState(0);

const { city, hirings } = useSelector((state) => state.hiringState);

const { id } = useParams()

useEffect(() => {
    dispatch(doGetHiringIdRequest(id));
  }, []);

useEffect(() => {
    dispatch(doGetHiringCityRequest(id));
  }, []);

useEffect(() => {
    setPageNumbers(Array.from({ length: Math.ceil(city.length / 4) }, (v, i) => (i + 1 === 1 ? { number: i + 1, active: true } : { number: i + 1, active: false })));
    setCurrentPage(1);
    console.log (city)
    setPageRange(0);
  }, [city]);

return ( 
    <div style={{height:"1600px"}}>
  
  
    {/* Kolom Kanan */}
    <div className=" flex justify-end text-lg mt-5 mb-4" style={{marginRight:"255px"}}><b> Similiar Jobs For You </b></div>
    { city && city.slice((currentPage-1)*4,currentPage*4).map((data) => (
    <Link to={"/hiringg/" + data.jobs_id}> 
    <div className=" flex justify-end mr-12">
    <div className="flex flex-wrap bg-slate-50 shadow-xl mb-6">
    <div className="grid grid-cols-2">
    <div className="ml-4 mt-3 "><img className="w-20 mb-5 h-10 w-10 rounded-full" src={`${config.domain}/hiring/images/${data.jobs_photo}`} style={{width:"150px", height:"150px"}}/></div>
    <div className="w-40 mb-5 ml-3 mr-5 mt-8 text-lg"><b> {data.jobs_title} </b></div>
    <div className="col-span-2 mb-2 ml-1"><FontAwesomeIcon className="mr-1" icon={faLocationDot}/> {data.jobs_city} </div>
    <div className="col-span-2 mb-2 ml-1"><FontAwesomeIcon className="mr-1"icon={faSuitcase} /> {data.job_upto_experience} tahun</div>
    <div className="mb-2 ml-1"><FontAwesomeIcon className="mr-1"icon={faCalendarCheck} /> Actively Hiring</div>
    <div className="mb-5 ml-5 "><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
    </div>  
    </div>
    </div>
    </Link>
    ))}  


    {/* Kolom Kiri */}
    {/* {Array.isArray(listHiring)&&listHiring.slice((currentPage-1)*4,currentPage*4).map((data) => ( */}      
    <div className="absolute top-6 ml-5" style={{marginTop:"100px"}}>
    <div className="grid grid-cols-2 md:max-w-xl">
    <div className="ml-4 mt-3 "><img className="mb-5 h-10 w-10" src={`${config.domain}/hiring/images/${hirings.jobs_photo}`} style={{width:"250px", height:"200px"}}/></div>
    <div className=" ml-2 mt-4 text-2xl"><b> {hirings.jobs_title} </b> <br/> 
    <div className=" mt-2 text-base"> <FontAwesomeIcon className="mr-1" icon={faDollarSign}/> IDR {hirings.jobs_upto_salary} / month <br/> </div>
    <div className=" mt-2 text-base"> <FontAwesomeIcon className="mr-1" icon={faBuilding}/> Software Engineer <br/> </div>
    <div className=" mt-3 text-base"> <FontAwesomeIcon className="mr-1" icon={faHourglassStart}/> {hirings.jobs_working_type} <FontAwesomeIcon className="ml-4 mr-1" icon={faSuitcase}/> {hirings.job_upto_experience} tahun pengalaman<br/> </div> 
    <div className=" mt-2 text-base"> <FontAwesomeIcon className="mr-1" icon={faLocationDot}/> {hirings.jobs_city} <FontAwesomeIcon className="ml-8 mr-1" icon={faClock}/> Dibuat 1 hari lalu <br/> </div> 
    <div className=" mt-7 text-base font-semibold"> Apply <FontAwesomeIcon className="mr-1" style={{marginLeft:"90px"}} icon={faClock}/> Share <FontAwesomeIcon className="ml-4 mr-1" icon={faAngleRight}/> </div> </div> 
    </div>
    </div>
    {/* ))} */}  


    <div className="absolute top-6 ml-5 text-slate-600 text-4xl" style={{marginTop:"400px"}}><b> _________________________________________________</b> </div>


    {/* Deskripsi */}
    <div className="absolute top-6 ml-10 text-2xl" style={{marginTop:"470px"}}><b> Description </b> </div>
    <div className="absolute top-6 ml-10 text-base" style={{marginTop:"520px", width:"700px"}}> jfdnaknfads dkjdndf kjndfjk dfkj nfdkj fdkj ndfaskjndfakj ndfkj ndfk jnfdkj nfdkj nfdakj nfdaskj nfdaskj nfdkjndf kj nfdkj ndfkjnf daskjndf askjndf askjf nadskjnf dakjf ndasjk nfadkjn fdkjn fdajkn fdkjn fdkjn fdkjn fdasjkn dfaskj nadskjfndaskjfnadsjkf nadsjk ndfasjn afdskj nfadkj nfdaskjn fdas </div>


    {/* Primary */}
    <div className="absolute top-6 ml-10 text-2xl" style={{marginTop:"750px"}}><b> Primary Skills </b> </div>
    <div className="absolute top-6 text-lg" style={{marginTop:"805px", marginLeft:"70px"}}>
    <div className="border-2 border-slate-500 rounded-xl mr-2"> 
    <p class="ml-2 mr-2 mt-1 mb-1"> Javascript </p> 
    </div> 
    </div>


    {/* Secondary */}
    <div className="absolute top-6 ml-10 text-2xl" style={{marginTop:"880px"}}><b> Secondary Skills </b> </div>
    <div className="absolute top-6 text-lg" style={{marginTop:"935px", marginLeft:"70px"}}> 
    <div className="border-2 border-slate-500 rounded-xl mr-2"> 
    <p class="ml-2 mr-2 mt-1 mb-1"> Javascript </p> 
    </div> 
    </div>


    {/* Tentang Perusahaan */}
    <div className="absolute top-6 ml-5" style={{marginTop:"1050px"}}>
    <div className="grid grid-cols-3 border-2 border-slate-500" style={{width:"700px"}}>
    <div className="col-span-3 ml-4 mt-2 mb-3 mt-3 text-2xl"><b> Tentang Perusahaan </b></div> 
    <div className="mt-3 ml-7"><img className="mb-5" src={`${config.domain}/hiring/images/${hirings.jobs_photo}`} style={{width:"180px", height:"130px"}}/></div>
    <div className="col-span-2 mt-4 text-xl"><b> Web Developer Jakarta Utara Mantap</b> <br/> 
    <div className="mt-2 text-base"> Information Technology & Service <br/> </div>
    <div className="mt-2 text-base"> 50 - 200 Karyawan <br/> </div> </div>
    <div className="col-span-3 ml-4 mt-2 mr-4 text-base"> jdnafkjna djkdndakjd fkjdfnkjdf nfdajkndfakj ndfakjndfkj ndfakjn dfak jdnafk djfnadkjf anfdakj ndfkj ndfakj ndfakjndfakj nfadk jndfakj ndfkj ndfkj nfadkj dfakdsmoskam salkfdsalkmfasdlkfmasdlkfm laskdf mlskaf mlkasd flksda flksd amflks admflk asdmlkf masdlkf msladkf msladkf mskj ndfas sdafkjbnadsk jndfskj ndfkj ndsfkj ndfskjdnsf kjasdfn kjdfasn jkdfasn jkfdas nkjdfa snkjdfns djkfasnkdjfaskjsdf an </div>
    <div className="col-span-3 ml-4 mt-4 mr-4 text-2xl"><b> Address </b></div>
    <div className="col-span-3 ml-4 mt-4 mr-4 mb-5 text-base"> dajskdjksnd jidjnsdakjnsda ksdajnjksda nkjsda njkasd njkasd nkjasdnjkasd shb indij ndfij ndfsijnd sfijdf nasidjf ndifj ndifj ndifj ndij ndij ndafijd nasijd nasijf naidjnfijnfidjnfdijfn ia sdfindj fidjnfadijf nadijfnd asfij n </div>
    </div>
    </div>





    </div>
    

   
    
  
    )
  }