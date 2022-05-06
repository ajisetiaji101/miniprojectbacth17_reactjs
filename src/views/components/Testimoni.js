import React, { useEffect, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetTestimoniRequest } from "../../redux-saga/actions/Testimoni";
import { Carousel } from 'react-responsive-carousel'


function Testimoni(){
    const dispatch = useDispatch();
    const { testi } = useSelector((state) => state.testimoniState);
    useEffect(() => {
        dispatch(doGetTestimoniRequest());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div class="carousel-wrapper">
            <Carousel useKeyboardArrows>
            {
                testi && testi.map((ripiw) =>(
                    <div>
                        <p>{ripiw.cure_id}</p>
                    </div>
                ))
                
            }
            </Carousel>
        </div>

    )

}

export default Testimoni;