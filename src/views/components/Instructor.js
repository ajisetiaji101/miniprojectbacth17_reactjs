import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetInstructorRequest } from "../../redux-saga/actions/Instructor";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import config from '../../config/config';


function Instructor(){
    const dispatch = useDispatch();
    const { instructor } = useSelector((state) => state.instructorState);
    useEffect(() => {
        dispatch(doGetInstructorRequest());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const NextArrow = ({ onClick }) => {
    //     return (
    //       <div className="absolute right-1 text-3xl inset-y-1/2 text-black cursor-pointer" onClick={onClick}>
    //         <AiOutlineRight/>
    //       </div>
    //     );
    //   };
    
    //   const PrevArrow = ({ onClick }) => {
    //     return (
    //       <div className="absolute z-10 left-1 text-3xl inset-y-1/2 text-black cursor-pointer"onClick={onClick}>
    //         <AiOutlineLeft/>
    //       </div>
    //     );
    //   };
    
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
        <div className="pb-12" >
          <h1 className="mb-2 font-medium text-xl ml-9">Instructors</h1>
            <Slider {...settings}>
            {
                instructor.map((itr) =>(
                    <div>
                      <div className="w-64 h-80 bg-slate-100 rounded-2xl border-slate-100 border-2 pt-5 mx-auto">
                        <img src={`${config.urlImageInst}/${itr.inst_photo}`} alt={itr.inst_photo} className="h-24 w-24 mx-auto overflow-hidden rounded-full"/>
                        <div className=" py-1">
                          <h4 className="text-black text-center text-lg">{itr.inst_name}</h4>
                          <p className="text-black text-center text-sm">Teacher of {itr.inst_bootcamp} Learning Path</p>
                        </div>
                        <p className="text-black text-sm text-center pb-3 px-3 font-semibold">{itr.inst_about}</p>
                      </div>
                    </div>
                ))
                
            }
            </Slider>  
        </div>

    )

}

export default Instructor;