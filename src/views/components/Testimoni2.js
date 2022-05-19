import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetInstructorRequest } from "../../redux-saga/actions/Instructor";
import { Carousel } from 'react-responsive-carousel'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import config from '../../config/config';


function Testimoni2(){
    const dispatch = useDispatch();
    const { instructor } = useSelector((state) => state.instructorState);
    useEffect(() => {
        dispatch(doGetInstructorRequest());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [current, setCurrent] = useState(0)
    const length = instructor.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };

      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };

    if (!Array.isArray(instructor) || instructor.length <= 0) {
        return null;
      }

    return (
        <div className="flex relative justify-center shadow">
            {
                instructor.map((riviw, index) =>{
                    return (
                        <div>
                            {
                            index === current && <img className="h-10 w-10 rounded-full" src={`${config.urlImageInst}/${riviw.inst_photo}`} alt={riviw.inst_photo}/>
                            }
                        </div>
                    )
                })
            }
            <AiOutlineLeft onClick={prevSlide} className="absolute left-4 text-3xl inset-y-1/2 text-black cursor-pointer" />
            <AiOutlineRight onClick={nextSlide} className="absolute right-9 text-3xl inset-y-1/2 text-black cursor-pointer" />
        </div>
    )

}

export default Testimoni2;