import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetTestimoniRequest } from "../../redux-saga/actions/Testimoni";
import { Carousel } from 'react-responsive-carousel'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


function Testimoni2(){
    const dispatch = useDispatch();
    const { testi } = useSelector((state) => state.testimoniState);
    useEffect(() => {
        dispatch(doGetTestimoniRequest());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [current, setCurrent] = useState(0)
    const length = testi.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };

      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };

    if (!Array.isArray(testi) || testi.length <= 0) {
        return null;
      }

    return (
        <div className="flex relative justify-center shadow">
            {
                testi.map((riviw, index) =>{
                    return (
                        <div>
                            {index === current && (
                            <div>
                                <div>
                                    <p>{riviw.cure_review}</p>
                                    <p>{riviw.curr_user.user_name}</p>   
                                </div> 
                            </div>    
                         )}
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