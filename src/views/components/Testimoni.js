import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetTestimoniRequest } from "../../redux-saga/actions/Testimoni";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import config from '../../config/config';


function Testimoni(){
    const dispatch = useDispatch();
    const { testi } = useSelector((state) => state.testimoniState);
    useEffect(() => {
        dispatch(doGetTestimoniRequest());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <AiOutlineRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <AiOutlineLeft />
          </div>
        );
      };
    
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

    return(
        <div>
            <Slider{...settings}>
            {
                testi.map((ripiw) =>(
                    <div>
                        <img src={`${config.urlImage}/${ripiw.cure_photo}`} alt={ripiw.cure_photo} />
                    </div>
                ))
                
            }
            </Slider>  
        </div>

    )

}

export default Testimoni;