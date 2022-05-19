import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetCurriculumReviewsRequest } from "../../redux-saga/actions/CurriculumReviews";
import config from "../../config/config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StarIcon,  } from "@heroicons/react/solid";
import PrettyRating from "pretty-rating-react";



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

  return (
<div>
  <h1 style={{marginLeft:"90px", fontWeight:'bold', marginTop:"50px"}}>Students Bootcamp</h1>
  <div className="mb-20 text-gray-700 mt-10">
    <div className="grid text-center mb-5">
    {curriculum_reviews && curriculum_reviews.map((data) => (
      <div className="mb-12 md:mb-0">
          <div className="flex justify-center mb-6">
            {data.curr_user.talents && data.curr_user.talents.map((cure)=>(
              <img className="block h-20 w-20 rounded-full ring-2 ring-white" src={`${config.urlImageCure}/${cure.tale_photo}`}  />
            ))} 
        </div>
        <h5 className="text-xl font-semibold mb-4">{data.cure_review}</h5>
        <p className="mb-4">
        <PrettyRating value={data.cure_rating} colors={colors.star} />
        </p>
      </div>
    ))}
    </div>
  </div>
</div>
  )
}
