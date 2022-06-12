import { useFormik } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Page from "../../../component/commons/Page";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Editor } from "react-draft-wysiwyg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateSuccess from "../../../component/Job/CreateSuccess";
import { Switch } from "@headlessui/react";
import {
  doGetJobRequest,
  doEditJobRequest,
  doGetJobIdRequest,
} from "../../../redux-saga/actions/Job";

import { doGetClientRequest } from "../../../redux-saga/actions/Client";
import config from "../../../config/config";

export default function EditJob() {
  let navigate = useNavigate();
  const [ck, setCk] = useState(false);
  const { clients } = useSelector((state) => state.clientState);
  const [uploaded, setUploaded] = useState(false);
  const [previewImg, setPreviewImg] = useState();
  const onClearImage = (event) => {
    event.preventDefault();
    setUploaded(false);
    setPreviewImg(null);
  };
  const [tgl, setTgl] = useState("close");
 
  const uploadOnChangeImage = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      formik.setFieldValue("jobs_photo", file);
      setPreviewImg(reader.result);
    };

    reader.readAsDataURL(file);
    setUploaded(true);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [enabled, setEnabled] = useState(false);
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true);
  let [isOpen, setIsOpen] = useState(false);

  const { id } = useParams();

  const { jobs } = useSelector((state) => state.jobState);
  //   const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    dispatch(doGetJobIdRequest(id));
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    // dispatch(doGetClientRequest());
    dispatch(doGetClientRequest());
  }, []);

  useEffect(() => {
    let img = `${config.domain}/settings/images/${jobs.jobs_photo}`;
    setPreviewImg(img);
  });

  const uploadOnChange = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      formik.setFieldValue("jobs_photo", file);
      setPreviewImg(reader.result);
    };

    reader.readAsDataURL(file);
    setUploaded(true);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      

      
      jobs_title: jobs.jobs_title,
      jobs_start_date: jobs.jobs_start_date,
      jobs_end_date: jobs.jobs_end_date,
      jobs_upto_salary: jobs.jobs_upto_salary,
      job_upto_experience: jobs.job_upto_experience,
      jobs_description: jobs.jobs_description,
      jobs_primary_skill: jobs.jobs_primary_skill,
      jobs_secondary_skill: jobs.jobs_secondary_skill,
      jobs_industry_type: jobs.jobs_industry_type,
      jobs_working_type: jobs.jobs_working_type,
      jobs_publish: jobs.jobs_publish,
      jobs_remotely: jobs.jobs_remotely,
      jobs_spec_education: jobs.jobs_spec_education,
      jobs_benefit: jobs.jobs_benefit,
      jobs_specification: jobs.jobs_specification,
      jobs_status: jobs.jobs_status,
      jobs_location: jobs.jobs_location,
      jobs_city: jobs.jobs_city,
      jobs_user_id: jobs.jobs_user_id,
      jobs_client_id: jobs.jobs_client_id,
      jobs_photo: jobs.jobs_photo,
 
    },
    onSubmit: async (values) => {
      //
      let payload = new FormData();
  
      payload.append("jobs_title", values.jobs_title);
      payload.append("jobs_start_date", values.jobs_start_date);
      payload.append("jobs_end_date", values.jobs_end_date);
      payload.append("jobs_upto_salary", parseInt(values.jobs_upto_salary));
      payload.append("job_upto_experience", values.job_upto_experience);
      payload.append("jobs_description", values.jobs_description);
      payload.append("jobs_primary_skill", values.jobs_primary_skill);
      payload.append("jobs_secondary_skill", values.jobs_secondary_skill);
      payload.append("jobs_industry_type", values.jobs_industry_type);
      payload.append("jobs_working_type", values.jobs_working_type);
      payload.append("jobs_publish", values.jobs_publish);
      payload.append("jobs_remotely", values.jobs_remotely);
      payload.append("jobs_spec_education", values.jobs_spec_education);
      payload.append("jobs_benefit", values.jobs_benefit);
      payload.append("jobs_specification", values.jobs_specification);
      payload.append("jobs_status", values.jobs_status);
      payload.append("jobs_location", values.jobs_location);
      payload.append("jobs_city", values.jobs_city);
      payload.append("jobs_user_id", parseInt(values.jobs_user_id));
      payload.append("jobs_client_id", parseInt(values.jobs_client_id));
      payload.append("jobs_photo", values.jobs_photo);

      // console.log(payload);
      dispatch(doEditJobRequest(payload));
      // navigate("/app/job", { state: { updated: true } });
    },
  });

  return (
    <Page
      title="Edit Jobs"
      titleButton="Back"
      onClick={() => navigate("/app/job")}
    >
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-7 gap-2">
                <div class="col-start-1 col-end-5">
                  <label class="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    id="jobs_title"
                    name="jobs_title"
                    value={formik.values.jobs_title}
                    onChange={formik.handleChange}
                    autocomplete="jobs_title"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {formik.touched.jobs_title && formik.errors.jobs_title ? (
                    <span className="mt-2 text-sm text-red-600">
                      {formik.errors.jobs_title}
                    </span>
                  ) : null}
                </div>
                
                <div class="col-start-6 col-end-8 row-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Job Photo
                  </label>
                  <div className="col-span-6 sm:col-span-2 row-span-3 justify-self-center py-4 relative">
                    <div className="">
                      <img
                        src={previewImg}
                        className="h-44 w-44 rounded-full ring-2 ring-red-600"
                      />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      id="jobs_photo"
                      name="jobs_photo"
                      className="rounded-full p-5 opacity-0 h-44 w-44 absolute top-4 "
                      onChange={uploadOnChangeImage("file")}
                    />
                  </div>
                </div>

                {/* <div class="col-start-6 col-end-7">
                  <label class="block text-sm font-medium text-gray-700">
                    Posting Number
                  </label>
                  <input
                    type="text"
                    placeholder="Posting Number"
                    id="jobs_post_no"
                    name="jobs_post_no"
                    value={formik.values.jobs_post_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autocomplete="jobs_post_no"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div> */}
                <div class="col-start-1 col-end-5">
                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                      Periode Posting
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
                  <label class="block text-sm font-medium text-gray-700">
                    To
                  </label>
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
                    <div className="bg-blue-100 border border-gray-400 shadow-lg rounded-lg w-14 h-11 flex items-center justify-center text-gray-600 text-xs font-medium ">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="w-6 h-6 shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-start-1 col-end-3">
                  <label
                    for="jobs_upto_salary"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Up To Salary
                  </label>
                  <input
                    type="number"
                    placeholder="IDR"
                    id="jobs_upto_salary"
                    name="jobs_upto_salary"
                    value={formik.values.jobs_upto_salary}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autocomplete="jobs_upto_salary"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-start-3 col-end-5">
                  <label
                    for="job_upto_experience"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Max Experience
                  </label>
                  <input
                    type="number"
                    placeholder="Max Experience"
                    id="job_upto_experience"
                    name="job_upto_experience"
                    value={formik.values.job_upto_experience}
                    onChange={formik.handleChange}
                    autocomplete="job_upto_experience"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-start-6 col-end-7">
                  <label class="block text-sm font-medium text-gray-700">
                    Publish ?
                  </label>
                </div>

                <div class="col-start-7 col-end-7">
                  <label
                    for="jobs_publish"
                    class="inline-flex relative items-center cursor-pointer"
                  >
                    <input
                      name="jobs_publish"
                      type="checkbox"
                      checked={formik.jobs_publish === !ck}
                      value={formik.values.jobs_publish}
                      onChange={formik.handleChange}
                      id="jobs_publish"
                      class="sr-only peer"
                    />
                    <div class="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                  {/* <input
                    type="checkbox"
                    placeholder="jobs_publish"
                    checked={formik.jobs_publish === !ck}
                    name={formik.jobs_publish}
                    id="jobs_publish"
                    value={formik.values.jobs_publish}
                    onChange={formik.handleChange}
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  /> */}
                  {/* <Switch
                    // type="checkbox"
                      checked={tgl}
                      onChange={setTgl}
                      name="jobs_publish"
                      value={formik.values.jobs_publish}
                    >
                      <span className="block bg-black rounded shadow p-2 h-8 w-56">
                        <span
                          className={`block h-full w-1/2 rounded transition duration-300 ease-in-out transform ${
                            tgl
                              ? "bg-green-500 translate-x-full"
                              : "bg-red-500"
                          }`}
                        ></span>
                      </span>
                    </Switch> */}
                  {/* <Toggle
                      onChange={(event) => setTgl(event.target.checked)}

                    ></Toggle> */}
                  {/* <p>hasil {tgl ? "true" : "false"}</p> */}
                  {/* <input
                      name="jobs_publish"
                      value={tgl ? "true" : "false"}
                      onChange={formik.handleChange}
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    ></input> */}
                </div>
                <div class="col-start-1 col-end-5">
                  <label class="block text-sm font-medium text-gray-700">
                    Primary Skill
                  </label>
                  <input
                    type="text"
                    placeholder="Java, springboot, oracle, pl/sql"
                    id="jobs_primary_skill"
                    name="jobs_primary_skill"
                    value={formik.values.jobs_primary_skill}
                    onChange={formik.handleChange}
                    autocomplete="jobs_primary_skill"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div class="col-start-6 col-end-7">
                  <label class="block text-sm font-medium text-gray-700">
                    Remotely ?
                  </label>
                </div>
                <div class="col-start-7 col-end-7">
                  <label
                    for="jobs_remotely"
                    class="inline-flex relative items-center cursor-pointer"
                  >
                    <input
                      name="jobs_remotely"
                      type="checkbox"
                      value={formik.values.jobs_remotely}
                      onChange={formik.handleChange}
                      id="jobs_remotely"
                      class="sr-only peer"
                    />
                    <div class="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                  {/* <input
                    type="checkbox"
                    checked={formik.jobs_remotely === !ck}
                    name={formik.jobs_remotely}
                    value={formik.values.jobs_remotely}
                    onChange={formik.handleChange}
                    id="jobs_remotely"
                    class="sr-only peer"
                  /> */}
                </div>
                <div class="col-start-1 col-end-5">
                  <label class="block text-sm font-medium text-gray-700">
                    Secondary Skill
                  </label>
                  <input
                    type="text"
                    placeholder="SDLC, HTML/CSS, Javascript"
                    id="jobs_secondary_skill"
                    name="jobs_secondary_skill"
                    value={formik.values.jobs_secondary_skill}
                    onChange={formik.handleChange}
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div class="col-start-6 col-end-7">
                  <label class="block text-sm font-medium text-gray-700">
                    Close Hiring ?
                  </label>
                </div>

                <div class="col-start-7 col-end-7">
                  <label
                    for="jobs_status"
                    class="inline-flex relative items-center cursor-pointer"
                  >
                    <input
                      name="jobs_status"
                      type="checkbox"
                      value={tgl}
                      onChange={(e)=>formik.values.jobs_status.values.checked}
                      id="jobs_status"
                      class="sr-only peer"
                    />
                    <div class="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                  {/* <input
                    type="checkbox"
                    placeholder="jobs_status"
                    id="jobs_status"
                    name="jobs_status"
                    value={formik.values.jobs_status}
                    onChange={formik.handleChange}
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  /> */}
                </div>

                <div class="col-start-1 col-end-3">
                  <label
                    for="jobs_industry_type"
                    class="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Industry Type
                  </label>
                  <select
                    name="jobs_industry_type"
                    id="jobs_industry_type"
                    value={formik.values.jobs_industry_type}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="jobs_industry_type"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="" selected disabled hidden>
                      Select an Option
                    </option>
                    <option value="Telecommunication">Telecomunication</option>
                    <option value="Retail">Retail</option>
                    <option value="Bank">Bank</option>
                    <option value="Oil & Gas">Oil & Gas</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Manufacture">Manufacture</option>
                  </select>
                </div>
                <div class="col-start-3 col-end-5">
                  <label
                    for="jobs_industry_type"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Specification Role
                  </label>
                  <select
                    name="jobs_specification"
                    id="jobs_specification"
                    value={formik.values.jobs_specification}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="jobs_specification"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="" selected disabled hidden>
                      Select an Option
                    </option>
                    <option value="Software Engineering">
                      Software Engineering
                    </option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                  </select>
                </div>
                <div class="col-start-1 col-end-3">
                  <label
                    for="jobs_working_type"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Working Type
                  </label>
                  <select
                    name="jobs_working_type"
                    id="jobs_working_type"
                    value={formik.values.jobs_working_type}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="jobs_working_type"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    {" "}
                    <option value="" selected disabled hidden>
                      Select an Option
                    </option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </div>

                <div class="col-start-3 col-end-5">
                  <label
                    for="jobs_spec_education"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Education
                  </label>
                  <select
                    name="jobs_spec_education"
                    id="jobs_spec_education"
                    value={formik.values.jobs_spec_education}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="jobs_spec_education"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="" selected disabled hidden>
                      Select an Option
                    </option>

                    <option value="SMK">SMK</option>
                    <option value="Diploma 3">Diploma 3</option>
                    <option value="Diploma 4">Diploma 4</option>
                    <option value="S1">S1</option>
                    <option value="S2">S2</option>
                    <option value="S3">S3</option>
                  </select>
                </div>

                <div class="col-start-1 col-end-5">
                  <label class="block text-sm font-medium text-gray-700">
                    Benefit
                  </label>
                  <input
                    type="text"
                    placeholder="THR, BPJS, Bonus"
                    id="jobs_benefit"
                    name="jobs_benefit"
                    value={formik.values.jobs_benefit}
                    onChange={formik.handleChange}
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                {/* <div>
                  <label>jobs_client_id</label>
                  <select
                                        name="jobs_client_id"
                                        id="jobs_client_id"
                                        value={formik.values.jobs_client_id }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="jobs_client_id"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        {client && client.filter(el=>el.client_id === formik.values.jobs_client_id).map((value, index) =>
                                            <option value={value.client_id} key={index} >{value.client_id}</option>
                                        )}
                                    </select>
                  <input
                    placeholder="jobs_client_id"
                    id="jobs_client_id"
                    name="jobs_client_id"
                    value={formik.values.jobs_client_id}
                    onChange={formik.handleChange}
                  />
                </div> */}
                <div class="col-start-1 col-end-5">
                  <label class="block text-sm font-medium text-gray-700">
                    Client Name
                  </label>
                  <select
                    class="block w-full text-gray-800 rounded-lg bg-white appearance-none border hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none"
                    name="jobs_client_id"
                    id="jobs_client_id"
                    value={formik.values.jobs_client_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="jobs_client_id"
                  >
                    {clients.map((cli) => (
                      <option key={cli.client_id} value={cli.client_id}>
                        {cli.client_name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* <div class="col-start-1 col-end-3">
                  <label class="block text-sm font-medium text-gray-700">
                    Location City
                  </label>
                  <input
                    //           type="text"
                    //           placeholder="jobs_description"
                    // id="jobs_description"
                    // name="jobs_description"
                    // value={formik.values.jobs_description}
                    // onChange={formik.handleChange}
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div> */}

                {/* <div>
                  <label>jobs_location</label>

                  <input
                    placeholder="jobs_location"
                    id="jobs_location"
                    name="jobs_location"
                    value={formik.values.jobs_location}
                    onChange={formik.handleChange}
                  />
                </div> */}

                {/* <div>
                  <label>jobs_city</label>

                  <input
                    placeholder="jobs_city"
                    id="jobs_city"
                    name="jobs_city"
                    value={formik.values.jobs_city}
                    onChange={formik.handleChange}
                  />
                </div> */}
                <div class="col-start-1 col-end-3">
                  <label class="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    name="jobs_location"
                    placeholder="Location"
                    id="jobs_location"
                    value={formik.values.jobs_location}
                    onChange={formik.handleChange}
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-start-3 col-end-5">
                  <label class="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="jobs_city"
                    placeholder="City"
                    id="jobs_city"
                    value={formik.values.jobs_city}
                    onChange={formik.handleChange}
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div class="col-start-1 col-end-5">
                  <label class="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <Editor
                    // editorState={desc}
                    id="jobs_description"
                    name="jobs_description"
                    // value={formik.values.jobs_description}
                    // onChange={formik.handleChange}
                    // editorState={editorState}
                    // onEditorStateChange={onEditorStateChange}

                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    wrapperStyle={{ width: 450, border: "1px solid black" }}
                  />
                  {/* <input
                      type="text"
                      placeholder="jobs_description"
                      id="jobs_description"
                      name="jobs_description"
                      value={formik.values.jobs_description}
                      onChange={formik.handleChange}
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    /> */}
                </div>
              </div>
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
          </div>
        </form>
      </div>
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