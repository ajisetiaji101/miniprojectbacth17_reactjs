import React, { Component,Fragment, useState, useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink, Link, useLocation } from 'react-router-dom';
// import Testimonial from "./Testimonial";
import { doGetBootcampIdRequest, doGetBootcampTypeRequest } from '../../redux-saga/actions/Bootcamp'
import Slider from './Slider';
import config from '../../config/config';
import PrettyRating from "pretty-rating-react";
import { doGetCurriculumReviewsRequest } from "../../redux-saga/actions/CurriculumReviews";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Sliderr from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const curr_type_payment =['Regular','Berbayar']

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Regular() {
  let navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const [listCurriculums, setListCurriculums] = useState([]);
  const [listBerbayar, setListBerbayar] = useState([]);
  const [filter, setFilter] = useState({
    input: "",
    select: "",
  });

  const colors = {
    star: ['#d9ad26', '#d9ad26', '#434b4d'],
    heart: ['#9b111e', '#a83f39'],
   };

  const { regular,berbayar } = useSelector((state) => state.curriculumState);
  const { curriculum_reviews } = useSelector((state) => state.curriculumreviewsState);
  const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    dispatch(doGetBootcampIdRequest());
    dispatch(doGetBootcampTypeRequest());
    dispatch(doGetCurriculumReviewsRequest());

  }, []);

  useEffect(() => {
    setListCurriculums(
      Array.isArray(regular) &&
        regular.filter(
          (data) =>
            // (data.curr_name.toLowerCase().includes(filter.input.toLowerCase()) ||
            // data.curr_type_payment === "Regular".toLowerCase().includes(filter.input.toLowerCase())) &&
            (filter.select === "Status" || data.curr_type_payment.includes(filter.select))
        )
    );
  }, [regular]);

  useEffect(() => {
    setListBerbayar(
      Array.isArray(berbayar) &&
        berbayar.filter(
          (data) =>
            // (data.curr_name.toLowerCase().includes(filter.input.toLowerCase()) ||
            // data.curr_type_payment === "Regular".toLowerCase().includes(filter.input.toLowerCase())) &&
            (filter.select === "Status" || data.curr_type_payment.includes(filter.select))
        )
    );
  }, [berbayar]);

  const handleOnChange = (name) => (event) => {
    setFilter({ ...filter, [name]: event.target.value });
  };

  const onSearch = (event) => {
    event.preventDefault();
    setListCurriculums(
      Array.isArray(regular) &&
        regular.filter(
          (data) =>
          (data.curr_name.toLowerCase().includes(filter.input.toLowerCase()) ||
          data.curr_type_payment.toLowerCase().includes(filter.input.toLowerCase())) &&
            (filter.select === "Status" || data.curr_type_payment.includes(filter.select))
        )
    );
    setListBerbayar(
      Array.isArray(berbayar) &&
        berbayar.filter(
          (data) =>
          (data.curr_name.toLowerCase().includes(filter.input.toLowerCase()) ||
          data.curr_type_payment.toLowerCase().includes(filter.input.toLowerCase())) &&
            (filter.select === "Status" || data.curr_type_payment.includes(filter.select))
        )
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: "5px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
  };
  
  return( 
<div>

<Slider/>
<div class="flex justify-center mt-3">
<form class="flex items-center">
<div class="relative w-full">
<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
  <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
</div>
<input type="text" 
id="voice-search"
onChange={handleOnChange("input")}
class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Java, Nodejs, Golang, NET" required="" style={{width:"300px"}}/>
</div>
<button 
type="submit"
onClick={onSearch}
class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"><svg class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search</button>
</form>

<select id="countries" 
onChange={handleOnChange('select')}
class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 ml-3" 
style={{width:"180px", backgroundColor:"red", color:"white"}}>
<option selected="">Choose Type Payment</option>
{
  (curr_type_payment || []).map((value, index) => (
      <option className="capitalize" value={value} key={index}>{value}</option>
  ))
}
</select>

</div>

<h1 style={{marginLeft:"90px", fontWeight:'bold'}}>Results Bootcamp Regular</h1>

<div class="flex justify-center mt-3">
<div class="flex flex-wrap w-3/3 justify-center">
{ Array.isArray(listCurriculums) && listCurriculums.map((data) => (
<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ml-5">
<img class="rounded-t-lg" src={`${config.urlImageRegular}/${data.curr_logo}`} alt="" style={{width:"400px", height:"400px"}}/>
<div class="p-5">
<a href="#">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.curr_name}</h5>
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.curr_title}</p>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Durasi : {data.curr_duration}</p>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Pembelajaran : {data.curr_learning_type}</p>
<div style={{textAlign: "right"}}>
<Link to={"/auth/signin"} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
Curriculum
<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</Link>
</div>
</div>
</div>
))}
</div>
</div>

<h1 style={{marginLeft:"90px", fontWeight:'bold'}}>Results Bootcamp Berbayar</h1>

<div class="flex justify-center mt-3">
<div class="flex flex-wrap w-3/3 justify-center">
{ Array.isArray(listBerbayar) && listBerbayar.map((data) => (
<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ml-5">
<img class="rounded-t-lg" src={`${config.urlImageRegular}/${data.curr_logo}`} alt="" style={{width:"400px", height:"400px"}}/>
<div class="p-5">
<a href="#">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.curr_name}</h5>
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.curr_title}</p>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Durasi : {data.curr_duration}</p>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Pembelajaran : {data.curr_learning_type}</p>
<table className='table-auto'>
  <tbody>
    <tr>
      <td><PrettyRating value={data.curr_rating} colors={colors.star}/></td>
      <td>{data.curr_total_talents} Peserta</td>
    </tr>
  </tbody>
</table>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>Rp. {data.curr_price}</b></p>
<div style={{textAlign: "right"}}>
<Link to={"/auth/signin"} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
Add To Card
<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</Link>
</div>
</div>
</div>
))}
</div>
</div>

<h1 style={{marginLeft:"15px", fontWeight:'bold', marginTop:"50px",fontSize:"18px"}} >Top Bootcamp Student</h1>
<h1 style={{marginLeft:"90px", fontWeight:'bold', marginTop:"50px"}}>Testimonial</h1>
<Sliderr {...settings}>
            {curriculum_reviews && curriculum_reviews.map((data) => (
                    <div>
                      <div className="w-64 h-80 bg-slate-100 rounded-2xl border-slate-100 border-2 pt-5 mx-auto">
                      {data.curr_user.talents && data.curr_user.talents.map((cure)=>(
                        <img src={`${config.urlImageCure}/${cure.tale_photo}`}  className="h-24 w-24 mx-auto overflow-hidden rounded-full"/>
                      ))}
                        <div className=" py-1">
                        {data.curr_user.talents && data.curr_user.talents.map((cure)=>(
                        <h5 className="text-xl font-bold mb-4 text-center">{cure.tale_fullname}</h5>
                        ))}
                        </div>
                        <h5 className="text-md font-semibold mb-4 text-center">{data.cure_review}</h5>
                        <p className="mb-4 text-center">
                        <PrettyRating value={data.cure_rating} colors={colors.star} />
                        </p>
                      </div>
                    </div>
                ))
                
            }
            </Sliderr>
    <div className='flex justify-end mr-10 mt-4'>
    <Link to={"/testi"} class="inline-flex items-end py-2 px-3 text-sm font-medium text-end text-black" style={{fontSize:"15px"}}>
      View All
    </Link>
    </div>


</div>
  )}
