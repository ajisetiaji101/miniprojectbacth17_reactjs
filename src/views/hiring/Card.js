import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';


export default function Card() {
  return (  
    <div>
        <div className="flex justify-end ml-24 mr-24 " >
{/* <div className="flex flex-wrap w-3/3 justify-center"> */}
{/* { Array.isArray(listCurriculums) && listCurriculums.map((data) => ( */}
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mt-10">
  <div className="grid grid-cols-2">
  <div className="ml-3"><img className="w-20 mb-5" src='./assets/images/grab.png' alt="" style={{width:"150px", height:"150px"}}/></div>
  <div className="w-40 mb-5 ml-3 mr-5">Javacript Developer PT Grab</div>
  <div className="col-span-2 mb-2 ml-3"><FontAwesomeIcon icon={faLocationDot} />  Jakarta</div>
  <div className="col-span-2 mb-2 ml-3"><FontAwesomeIcon icon={faSuitcase} /> 3-5 tahun</div>
  <div className=" mb-2 ml-3"><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div className="ml-8 "><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>


  <div className="rounded-lg shadow-lg bg-white max-w-sm ml-8 mr-8 "></div>
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mt-10">
  <div className=" grid grid-cols-2">
  <div className="ml-3"><img className="w-20 mb-5" src='./assets/images/gojek.webp' alt="" style={{width:"150px", height:"150px"}}/></div>
  <div className="w-40 ml-3 mr-5 mb-3 ">Full Stack Developer Pt Gojek</div>
  <div className="col-span-2 mb-2 ml-3"><FontAwesomeIcon icon={faLocationDot} />  Jakarta</div>
  <div className="col-span-2 mb-2 ml-3"><FontAwesomeIcon icon={faSuitcase} /> 3-5 tahun</div>
  <div className=" mb-2 ml-3"><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div className="ml-8 "><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>

            {/* ))
                    } */}
  {/* </div> */}
  </div>

  <div className="flex justify-end ml-24 mr-24"  >
{/* <div className="flex flex-wrap w-3/3 justify-center"> */}
{/* { Array.isArray(listCurriculums) && listCurriculums.map((data) => ( */}
<div className="rounded-lg shadow-lg bg-white max-w-sm ml-8 mr-8 "></div>
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mt-10">
  <div className="grid grid-cols-2">
  <div className="ml-3"><img className="w-20 mb-5" src='./assets/images/tokopedia.jpg' alt="" style={{width:"150px", height:"150px"}}/></div>
  <div className="w-40 mb-5 ml-3 mr-5">Javacript Developer PT Codeid</div>
  <div className="col-span-2 mb-2 ml-3"><FontAwesomeIcon icon={faLocationDot} />  Jakarta</div>
  <div className="col-span-2 mb-2 ml-3"><FontAwesomeIcon icon={faSuitcase} /> 3-5 tahun</div>
  <div className=" mb-2 ml-3"><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div className="ml-8 "><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>

  <div className="rounded-lg shadow-lg bg-white max-w-sm ml-8 mr-8 "></div>
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mt-10">
  <div className="grid grid-cols-2">
  <div className="ml-3"><img className="w-20 mb-5" src='./assets/images/shopee.webp' alt="" style={{width:"150px", height:"150px"}}/></div>
  <div className="w-40 mb-5 ml-3 mr-5">Javacript Developer PT Shopee</div>
  <div className="col-span-2 mb-2 ml-3"><FontAwesomeIcon icon={faLocationDot} />  Jakarta</div>
  <div className="col-span-2 mb-2 ml-3"><FontAwesomeIcon icon={faSuitcase} /> 3-5 tahun</div>
  <div className=" mb-2 ml-3"><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div className="ml-8 "><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>

            {/* ))
                    } */}
  {/* </div> */}
  </div>


  
            </div>
  )
}
