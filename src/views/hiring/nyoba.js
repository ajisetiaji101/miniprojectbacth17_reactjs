import React from 'react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Talent() {
  return( 
      <div>

<div class="flex items-stretch ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>
  <div>
  
  <div class="flex justify-center text-3xl mt-7" style={{marginLeft:"390px"}}><b>Similiar jobs for you</b></div>
  <div class="flex justify-end">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mt-4">
  <div class="grid grid-cols-2">
  <div class=""><img class="mb-5" style={{width:"250px", height:"150px"}} src="https://static.republika.co.id/uploads/member/images/news/m7cuvbnbzx.jpg" /></div>
  <div class="flex justify-start text-3xl mt-6">Javacript Developer PT Codeid</div>
  <div class=""><FontAwesomeIcon icon={faLocationDot} /> Jakarta</div>
  <div class="col-span-2"><FontAwesomeIcon icon={faSuitcase} /> 3 - 5 tahun</div>
  <div class=""><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div class="flex justify-end"><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>
  </div>

  <div class="flex justify-end">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mt-10">
  <div class="grid grid-cols-2">
  <div class=""><img class="mb-5" style={{width:"250px", height:"150px"}} src="https://static.republika.co.id/uploads/member/images/news/m7cuvbnbzx.jpg" /></div>
  <div class="flex justify-start text-3xl mt-6">Javacript Developer PT Codeid</div>
  <div class=""><FontAwesomeIcon icon={faLocationDot} /> Jakarta</div>
  <div class="col-span-2"><FontAwesomeIcon icon={faSuitcase} /> 3 - 5 tahun</div>
  <div class=""><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div class="flex justify-end"><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>
  </div>

  <div class="flex justify-end">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mt-10">
  <div class="grid grid-cols-2">
  <div class=""><img class="mb-5" style={{width:"250px", height:"150px"}} src="https://static.republika.co.id/uploads/member/images/news/m7cuvbnbzx.jpg" /></div>
  <div class="flex justify-start text-3xl mt-6">Javacript Developer PT Codeid</div>
  <div class=""><FontAwesomeIcon icon={faLocationDot} /> Jakarta</div>
  <div class="col-span-2"><FontAwesomeIcon icon={faSuitcase} /> 3 - 5 tahun</div>
  <div class=""><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div class="flex justify-end"><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>
  </div>

  <div class="flex justify-end">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mt-10">
  <div class="grid grid-cols-2">
  <div class=""><img class="mb-5" style={{width:"250px", height:"150px"}} src="https://static.republika.co.id/uploads/member/images/news/m7cuvbnbzx.jpg" /></div>
  <div class="flex justify-start text-3xl mt-6">Javacript Developer PT Codeid</div>
  <div class=""><FontAwesomeIcon icon={faLocationDot} /> Jakarta</div>
  <div class="col-span-2"><FontAwesomeIcon icon={faSuitcase} /> 3 - 5 tahun</div>
  <div class=""><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div class="flex justify-end"><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>
  </div>
  
  </div>
  <div class="flex justify-center text-3xl mt-7" style={{marginLeft:"390px"}}><b>Similiar jobs for you</b></div>
  <div class="flex justify-end">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mt-4">
  <div class="grid grid-cols-2">
  <div class=""><img class="mb-5" style={{width:"250px", height:"150px"}} src="https://static.republika.co.id/uploads/member/images/news/m7cuvbnbzx.jpg" /></div>
  <div class="flex justify-start text-3xl mt-6">Javacript Developer PT Codeid</div>
  <div class=""><FontAwesomeIcon icon={faLocationDot} /> Jakarta</div>
  <div class="col-span-2"><FontAwesomeIcon icon={faSuitcase} /> 3 - 5 tahun</div>
  <div class=""><FontAwesomeIcon icon={faCalendarCheck} /> Actively Hiring</div>
  <div class="flex justify-end"><FontAwesomeIcon icon={faClock} /> Dibuat 1 hari lalu</div>
  </div>  
  </div>
  </div>
  <div className="w-full">
            <div className="input-group relative flex justify-center items-stretch w-full mb-2">
              <p className="text-sm mx-2 py-1">Search by Category</p>
              <input
                type="search"
                // onChange={handleOnChange("input")}
                className="form-control relative w-56 block px-4 py-0.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 focus:outline-none"
                placeholder="talent name, technology, trainer"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <select
                name="tale_status_timeline"
                id="tale_status_timeline"
                onChange="select"
                className="capitalize form-select form-select-sm appearance-none block mx-1 px-2 py-0.5 w-24 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500"
                aria-label=".form-select-sm example"
              >
                <option>Status</option>
                {/* {(tal_status || []).map((value, index) => 
                (
                  <option className="capitalize" value={value} key={index}>
                    {value}
                  </option>
                )
                )} */}
              </select>
              <button
                type="submit"
                // onClick={onSearch}
                className="btn px-3 py-1 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 transition duration-150 ease-in-out flex items-center"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>

  </div>
  )
}