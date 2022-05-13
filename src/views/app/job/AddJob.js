import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Switch } from '@headlessui/react'
//import redux needed
import { useDispatch, useSelector } from "react-redux";
import { doGetJobRequest, doAddJobRequest, doAddJobSucceed } from "../../../redux-saga/actions/Job";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import CreateSuccess from "../../../component/Job/CreateSuccess";
import Page from "../../../component/commons/Page";
import Loader from "../../../component/loader/Loaders";
import Toggle from "../../../component/Job/Toggle";
// 
export default function AddJob() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobState);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  let [isOpen, setIsOpen] = useState(false);
  const status = useSelector((state) => state.jobState);
  const [Loading, setLoading] = useState(true);
  const [tgl, setTgl] = useState(false);

  useEffect(() => {
    dispatch(doGetJobRequest());
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (status.status === "success") {
      // navigate("/app/batch/success");
      setIsOpen(true);
    } else {
    }
  }, [status]);

  // const validationSchema = Yup.object().shape({
  //   jobs_title: Yup.string("Enter jobs_title").required(
  //     "jobs_title is required"
  //   ),
  // });

  const formik = useFormik({
    initialValues: {
      jobs_post_no: "",
      jobs_title: "",
      jobs_start_date:"",
      jobs_end_date:"",
      jobs_upto_salary: 0,
      job_upto_experience: 0,
      jobs_description:"",
      jobs_primary_skill:"",
      jobs_secondary_skill:"",
      jobs_industry_type:"",
      jobs_working_type:"",
      jobs_publish:false,
      jobs_remotely:false,
      jobs_spec_education:"",
      jobs_benefit:"",
      jobs_specification:"",
      jobs_status:"",
      jobs_location:"",
      jobs_city:"",
      jobs_user_id:0,
      jobs_client_id:0
    
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      const ch='JOB#'
      const y=startDate.getFullYear()
      const bln="0"+(startDate.getMonth() + 1)
      const fix=[
        ch,
        y,
        bln
      ]

      //ganti format tanggal jadi isoString
      const SDate =startDate.toISOString()
      const EDate = endDate.toISOString()

      const jobs_start_date = SDate;
      const jobs_end_date = EDate;
    
      const jobs_post_no=fix.join("");

      //selisih
      // const diffMonth = ((endDate.getFullYear()*12 + endDate.getMonth()) - (startDate.getFullYear()*12 + startDate.getMonth()))
    //   const selisihMiliSecond = new Date(endDate) - new Date(startDate);
    //   const miliSecondPerDay = 60 * 60 * 24 * 1000;
    //   const selisihPerHari = selisihMiliSecond / miliSecondPerDay;
    //   const diffDay = Math.round(selisihPerHari + 1);
      const test = {
        ...values,
        jobs_post_no,
        jobs_start_date,
        jobs_end_date,
        
      };
      console.log(test);

      dispatch(
        doAddJobRequest({
          ...values,
          jobs_post_no,
          jobs_start_date,
          jobs_end_date,

        })
      );
    },
  });

  return (
      
    <Page
      title="Create Job"
      titleButton="Back"
      onClick={() => navigate("/app/job")}
    >
      {Loading === true ? (
        <Loader />
      ) : (
   
        <form action="#" method="POST">
        
                

                    <div >
                      <label>Posting Number</label>
                      <label>{formik.values.jobs_post_no}</label>
                      
                      <label
                        
                        placeholder="jobs_post_no"
                        id="jobs_post_no"
                        name="jobs_post_no"
                        value={formik.values.jobs_post_no}
                        onChange={formik.handleChange}
                      />
                    </div>

                {/* title */}
              
                    <div >
                      <label>jobs_title</label>
                
                      <input
                        placeholder="jobs_title"
                        id="jobs_title"
                        name="jobs_title"
                        value={formik.values.jobs_title}
                        onChange={formik.handleChange}
                      />
                    </div>



                    <div>
                      <label>
                        Periode
                      </label>
                      <div className="relative flex  items-end">
                        <DatePicker
                          className=" mt-1 w-full text-gray-800 rounded-lg bg-white appearance-none border hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none"
                          selected={startDate}
                          name="jobs_start_date"
                          id="jobs_start_date"
                          onChange={(date) => setStartDate(date)}
                          autoComplete="jobs_start_date"
                        />
                        <div className="bg-blue-100  border border-gray-400 shadow-lg rounded-lg w-14 h-11 flex items-center justify-center text-gray-600 text-xs font-medium ">
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="w-6 h-6 shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    <h1 className="flex w-2/12 items-center justify-center mt-7">
                      to
                    </h1>

                    <div className="flex-1 flex m-auto mt-7 ">
                      <div className="relative flex  items-end">
                        <DatePicker
                          className="mt-1 w-full text-gray-800 rounded-lg bg-white appearance-none border hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none"
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          name="jobs_end_date"
                          id="jobs_end_date"
                          value={endDate}
                          autoComplete="jobs_end_date"
                        />
                        <div className="bg-blue-100  border border-gray-400 shadow-lg rounded-lg w-14 h-11 flex items-center justify-center text-gray-600 text-xs font-medium ">
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="w-6 h-6 shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>
                

                {/* jobs_upto_salary */}
           
                    <div >
                      <label>jobs_upto_salary</label>
                
                      <input
                        placeholder="jobs_upto_salary"
                        id="jobs_upto_salary"
                        name="jobs_upto_salary"
                        value={formik.values.jobs_upto_salary}
                        onChange={formik.handleChange}
                      />
                    </div>
              

                    {/* job_upto_experience */}
                 
                    <div >
                      <label>job_upto_experience</label>
                
                      <input
                        placeholder="job_upto_experience"
                        id="job_upto_experience"
                        name="job_upto_experience"
                        value={formik.values.job_upto_experience}
                        onChange={formik.handleChange}
                      />
                    </div>
                 

                   {/* jobs_description */}
                   <div>
                 
                      <label>jobs_description</label>
                
                      <input
                        placeholder="jobs_description"
                        id="jobs_description"
                        name="jobs_description"
                        value={formik.values.jobs_description}
                        onChange={formik.handleChange}
                      />
                    </div>
                


                 {/* jobs_primary_skill */}
                
                    <div >
                      <label>jobs_primary_skill</label>
                
                      <input
                        placeholder="jobs_primary_skill"
                        id="jobs_primary_skill"
                        name="jobs_primary_skill"
                        value={formik.values.jobs_primary_skill}
                        onChange={formik.handleChange}
                      />
                    </div>
                 

                {/* jobs_secondary_skill */}
               
                    <div >
                      <label>jobs_secondary_skill</label>
                
                      <input
                        placeholder="jobs_secondary_skill"
                        id="jobs_secondary_skill"
                        name="jobs_secondary_skill"
                        value={formik.values.jobs_secondary_skill}
                        onChange={formik.handleChange}
                      />
                    </div>
                  


                {/* jobs_industry_type */}
                <div className="flex flex-1 justify-between space-x-20 mb-8">
                  <div className="flex-1">
                    <div class="w-full md:mb-0">
                      <label
                        class="block tracking-wide text-gray-800 font-semibold mb-2"
                        for="grid-state"
                      >
                        jobs_industry_type
                      </label>
                      <div class="relative">
                        <select
                          class="block w-full rounded-lg text-gray-800 bg-white appearance-none border hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none"
                          name="jobs_industry_type"
                          id="jobs_industry_type"
                          value={formik.values.jobs_industry_type}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="jobs_industry_type"
                        >
                          <option>Industry Type</option>
                          <option value="Telecomunication">Telecomunication</option>
                          <option value="Retail">Retail</option>
                          <option value="Bank">Bank</option>
                          <option value="Oil & Gas">Oil & Gas</option>
                          <option value="E-Commerce">E-Commerce</option>
                          <option value="Manufacture">Manufacture</option>

                        </select>
                      </div>
                    </div>
                  </div>
                
                </div>


                {/* jobs_working_type */}
                <div className="flex flex-1 justify-between space-x-20 mb-8">
                  <div className="flex-1">
                    <div class="w-full md:mb-0">
                      <label
                        class="block tracking-wide text-gray-800 font-semibold mb-2"
                        for="grid-state"
                      >
                        jobs_working_type
                      </label>
                      <div class="relative">
                        <select
                          class="block w-full rounded-lg text-gray-800 bg-white appearance-none border hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none"
                          name="jobs_working_type"
                          id="jobs_working_type"
                          value={formik.values.jobs_working_type}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="jobs_working_type"
                        >
                          <option value="Full-Time">Full-Time</option>
                          <option value="Contract">Contract</option>
                          <option value="Permanent">Permanent</option>
                          <option value="Part-Time">Part-Time</option>
                          <option value="Freelance">Freelance</option>

                        </select>
                      </div>
                    </div>
                  </div>
                
                </div>

                {/* jobs_publish */}
                <label>jobs_publish</label>
                    <div >
                        <Toggle onChange={(event)=>setTgl(event.target.checked)}></Toggle>
                     <input 
                     name="jobs_publish"
                     value={tgl ? "true" : "false"}
                     onChange={formik.handleChange}></input>
                      
                    {/* <Switch checked={isEnabled} onChange={setIsEnabled} name="jobs_publish"
                        value={formik.values.jobs_publish}>
          <span className="block bg-white rounded shadow p-2 h-10 w-56 flex">
            <span
              className={`block h-full w-1/2 rounded transition duration-300 ease-in-out transform ${
                isEnabled ? "bg-green-500 translate-x-full" : "bg-grey-500"
              }`}
            ></span>
          </span>
          
        </Switch> */}
                      {/* <input
                        placeholder="jobs_publish"
                        id="jobs_publish"
                        name="jobs_publish"
                        value={formik.values.jobs_publish}
                        onChange={formik.handleChange}
                      /> */}
                    </div>
              

                {/* jobs_remotely */}
               
                    <div >
                      <label>jobs_remotely</label>
                
                      <input
                        placeholder="jobs_remotely"
                        id="jobs_remotely"
                        name="jobs_remotely"
                        value={formik.values.jobs_remotely}
                        onChange={formik.handleChange}
                      />
                    </div>


                <div className="flex flex-1 justify-between space-x-20 mb-8">
                  <div className="flex-1">
                    <div class="w-full md:mb-0">
                      <label
                        class="block tracking-wide text-gray-800 font-semibold mb-2"
                        for="grid-state"
                      >
                        jobs_spec_education
                      </label>
                      <div class="relative">
                        <select
                          class="block w-full rounded-lg text-gray-800 bg-white appearance-none border hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none"
                          name="jobs_spec_education"
                          id="jobs_spec_education"
                          value={formik.values.jobs_spec_education}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="jobs_spec_education"
                        >
                          <option value="SMA">SMA</option>
                          <option value="SMK">SMK</option>
                          <option value="D1">D1</option>
                          <option value="D2">D2</option>
                          <option value="D3">D3</option>
                          <option value="D4">D4</option>
                          <option value="S1">S1</option>
                          <option value="S2">S2</option>
                          <option value="S3">S3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                
                </div>


            {/* jobs_benefit */}

                    <div >
                      <label>jobs_benefit</label>
                
                      <input
                        placeholder="jobs_benefit"
                        id="jobs_benefit"
                        name="jobs_benefit"
                        value={formik.values.jobs_benefit}
                        onChange={formik.handleChange}
                      />
                    </div>
 

                
            {/* jobs_specification */}
            <div className="flex flex-1 justify-between space-x-20 mb-8">
                  <div className="flex-1">
                    <div class="w-full md:mb-0">
                      <label
                        class="block tracking-wide text-gray-800 font-semibold mb-2"
                        for="grid-state"
                      >
                        jobs_specification
                      </label>
                      <div class="relative">
                        <select
                          class="block w-full rounded-lg text-gray-800 bg-white appearance-none border hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none"
                          name="jobs_specification"
                          id="jobs_specification"
                          value={formik.values.jobs_specification}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="jobs_specification"
                        >
                          <option value="Software Engineering">Software Engineering</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Sales">Sales</option>
                        </select>
                      </div>
                    </div>
                  </div>
                
                </div>

            {/* jobs_status */}
  
                    <div >
                      <label>jobs_status</label>
                
                      <input
                        placeholder="jobs_status"
                        id="jobs_status"
                        name="jobs_status"
                        value={formik.values.jobs_status}
                        onChange={formik.handleChange}
                      />
                    </div>


                {/* jobs_location */}

                    <div >
                      <label>jobs_location</label>
                
                      <input
                        placeholder="jobs_location"
                        id="jobs_location"
                        name="jobs_location"
                        value={formik.values.jobs_location}
                        onChange={formik.handleChange}
                      />
                    </div>


                 {/* jobs_city */}

                    <div >
                      <label>jobs_city</label>
                
                      <input
                        placeholder="jobs_city"
                        id="jobs_city"
                        name="jobs_city"
                        value={formik.values.jobs_city}
                        onChange={formik.handleChange}
                      />
                    </div>


                 {/* jobs_user_id */}

                    <div >
                      <label>jobs_user_id</label>
                
                      <input
                        placeholder="jobs_user_id"
                        id="jobs_user_id"
                        name="jobs_user_id"
                        value={formik.values.jobs_user_id}
                        onChange={formik.handleChange}
                      />
                    </div>
 

          {/* jobs_client_id */}

                    <div >
                      <label>jobs_client_id</label>
                
                      <input
                        placeholder="jobs_client_id"
                        id="jobs_client_id"
                        name="jobs_client_id"
                        value={formik.values.jobs_client_id}
                        onChange={formik.handleChange}
                      />
                    </div>


           <div className="flex justify-end mt-10 py-3 text-right mr-14">
              <button
                type="button"
                onClick={formik.handleSubmit}
                className="flex mr-4 w-28 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => navigate("/app/job")}
                className="flex justify-center w-28 py-2 px-4 border border-slate-800 shadow-sm text-sm font-medium  text-slate-900 bg-white hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Cancel
              </button>
         
        
          </div>
        </form>
     )}
     <ToastContainer autoClose={5000} />
      {isOpen ? (
        <CreateSuccess
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          // onRefresh={() => setRefresh(true)}
        />
      ) : null}
   
    </Page>
  );

}
