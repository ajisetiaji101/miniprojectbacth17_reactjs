import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetCurriculumReviewsRequest } from "../../redux-saga/actions/CurriculumReviews";
import config from "../../config/config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StarIcon,  } from "@heroicons/react/solid";
import PrettyRating from "pretty-rating-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Testimonial() {
  let navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const { curriculum_reviews } = useSelector((state) => state.curriculumreviewsState);
  const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    dispatch(doGetCurriculumReviewsRequest());

  }, []);

  const colors = {
    star: ['#d9ad26', '#d9ad26', '#434b4d'],
    heart: ['#9b111e', '#a83f39'],
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

  return (
<div className="py-8" >
          <h1 className="mb-2 font-medium text-xl ml-9">Top Bootcamp Batch#16</h1>
            <Slider {...settings}>
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
            </Slider>

            <h1 className="mb-2 font-medium text-xl ml-9">Top Bootcamp Batch#17</h1>
            <Slider {...settings}>
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
            </Slider>  

            <h1 className="mb-2 font-medium text-xl ml-9">Top Bootcamp Batch#18</h1>
            <Slider {...settings}>
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
            </Slider>
        </div>
  )
}
