import React from 'react';
import Abouts from './Abouts';
import Brands from './Brands';
import Carousel from './Carousel';
import Instructor from './Instructor';
import Partner from './Partner';
import Testimoni from './Testimoni';


export default function Landing(){
    return (
        <div>
              <Carousel/>
              <Brands />
              <Testimoni/>
              <Instructor />
              <Partner/>
              <Abouts/>
        </div>
      )
}