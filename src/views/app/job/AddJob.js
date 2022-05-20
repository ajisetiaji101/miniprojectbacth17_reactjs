import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Switch } from "@headlessui/react";
//import redux needed
import { useDispatch, useSelector } from "react-redux";
import {
  doGetJobRequest,
  doAddJobRequest,
  doAddJobSucceed,
} from "../../../redux-saga/actions/Job";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import CreateSuccess from "../../../component/Job/CreateSuccess";
import Page from "../../../component/commons/Page";
import Loader from "../../../component/loader/Loaders";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
// import { RichEditorExample} from './RichEditor';
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
  const [number, setNumber] = useState([]);

  const { userProfile } = useSelector((state) => state.userState);



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
      jobs_start_date: "",
      jobs_end_date: "",
      jobs_upto_salary: 0,
      job_upto_experience: 0,
      jobs_description: "",
      jobs_primary_skill: "",
      jobs_secondary_skill: "",
      jobs_industry_type: "",
      jobs_working_type: "",
      jobs_publish: false,
      jobs_remotely: false,
      jobs_spec_education: "",
      jobs_benefit: "",
      jobs_specification: "",
      jobs_status: "",
      jobs_location: "",
      jobs_city: "",
      jobs_user_id: 0,
      jobs_client_id: 0,
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      const ch = "JOB#";
      const y = startDate.getFullYear();
      const bln = "0" + (startDate.getMonth() + 1);

      const fix = [ch, y, bln];
      

      //ganti format tanggal jadi isoString
      const SDate = startDate.toISOString();
      const EDate = endDate.toISOString();

      const jobs_start_date = SDate;
      const jobs_end_date = EDate;

      const jobs_post_no = fix.join("");
      const jobs_user_id = userProfile.userId;

      // const tglr=()=>{
      //   tgl ? setTgl(false) : setTgl(true);
      // }

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
        jobs_user_id,
        // jobs_publish,
        // tglr,
        // setTgl,
      };
      console.log(test);

      dispatch(
        doAddJobRequest({
          ...values,
          jobs_post_no,
          jobs_start_date,
          jobs_end_date,
          jobs_user_id,
          // jobs_publish,
          // tglr,
          // setTgl,
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
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-7 gap-4">
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
                  </div>

                  <div class="col-start-6 col-end-7">
                    <label class="block text-sm font-medium text-gray-700">
                      Posting Number
                    </label>
                    <input
                      type="text"
                      placeholder="jobs_post_no"
                      id="jobs_post_no"
                      name="jobs_post_no"
                      value={formik.values.jobs_post_no}
                      onChange={formik.handleChange}
                      autocomplete="jobs_post_no"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

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

                  {/* jobs_upto_salary */}
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
                      autocomplete="jobs_upto_salary"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  {/* job_upto_experience */}

                  <div class="col-start-3 col-end-5">
                    <label
                      for="job_upto_experience"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Max Experience
                    </label>
                    <input
                      type="number"
                      placeholder="job_upto_experience"
                      id="job_upto_experience"
                      name="job_upto_experience"
                      value={formik.values.job_upto_experience}
                      onChange={formik.handleChange}
                      autocomplete="job_upto_experience"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  {/* jobs_publish */}
                  <div class="col-start-6 col-end-7">
                    <label class="block text-sm font-medium text-gray-700">
                      Publish ?
                    </label>
                  </div>

                  <div class="col-start-7 col-end-7">
                    <input
                      type="checkbox"
                      placeholder="jobs_publish"
                      id="jobs_publish"
                      name="jobs_publish"
                      value={formik.values.jobs_publish}
                      onChange={formik.handleChange}
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
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

                  {/* <input
                        placeholder="jobs_publish"
                        id="jobs_publish"
                        name="jobs_publish"
                        value={formik.values.jobs_publish}
                        onChange={formik.handleChange}
                      /> */}

                  {/* jobs_primary_skill */}
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

                  {/* jobs_remotely */}

                  <div class="col-start-6 col-end-7">
                    <label class="block text-sm font-medium text-gray-700">
                      Remotely ?
                    </label>
                  </div>
                  <div class="col-start-7 col-end-7">
                    <input
                      type="checkbox"
                      placeholder="jobs_remotely"
                      id="jobs_remotely"
                      name="jobs_remotely"
                      value={formik.values.jobs_remotely}
                      onChange={formik.handleChange}
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  {/* jobs_secondary_skill */}
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

                  {/* jobs_status */}

                  <div class="col-start-6 col-end-7">
                    <label class="block text-sm font-medium text-gray-700">
                      Close Hiring ?
                    </label>
                  </div>

                  <div class="col-start-7 col-end-7">
                    <input
                      type="checkbox"
                      placeholder="jobs_status"
                      id="jobs_status"
                      name="jobs_status"
                      value={formik.values.jobs_status}
                      onChange={formik.handleChange}
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-start-1 col-end-3">
                    <label
                      for="jobs_industry_type"
                      class="block text-sm font-medium text-gray-700"
                    >
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
                      <option value="Telecommunication">
                        Telecomunication
                      </option>
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

                  {/* jobs_user_id */}

                  <input
                    type="hidden"
                    placeholder="jobs_user_id"
                    id="jobs_user_id"
                    name="jobs_user_id"
                    // value={formik.values.jobs_user_id}
                    value={userProfile.userId}
                    onChange={formik.handleChange}
                  />

                  {/* jobs_client_id */}
                  <div>
                    <label>jobs_client_id</label>
                    {/* <select
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
                                    </select> */}
                    <input
                      placeholder="jobs_client_id"
                      id="jobs_client_id"
                      name="jobs_client_id"
                      value={formik.values.jobs_client_id}
                      onChange={formik.handleChange}
                    />
                  </div>

                  <div class="col-start-1 col-end-3">
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
                  </div>

                  {/* jobs_location */}

                  <div>
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

                  <div>
                    <label>jobs_city</label>

                    <input
                      placeholder="jobs_city"
                      id="jobs_city"
                      name="jobs_city"
                      value={formik.values.jobs_city}
                      onChange={formik.handleChange}
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
                      value={formik.values.jobs_description}
                      onChange={formik.handleChange}
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
                  onClick={() => navigate("/app/batch")}
                  className="flex justify-center w-28 py-2 px-4 border border-slate-800 shadow-sm text-sm font-medium  text-slate-900 bg-white hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
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
