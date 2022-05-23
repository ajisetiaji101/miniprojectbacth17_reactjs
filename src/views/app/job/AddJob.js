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
} from "../../../redux-saga/actions/Job";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { doGetClientRequest } from "../../../redux-saga/actions/Client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import CreateSuccess from "../../../component/Job/CreateSuccess";
import Page from "../../../component/commons/Page";
import Loader from "../../../component/loader/Loaders";
import * as Yup from "yup";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function AddJob() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobState);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  let [isOpen, setIsOpen] = useState(false);
  const [tgl, setTgl] = useState("close");
  const [bool, setBool] = useState(false);

  const status = useSelector((state) => state.jobState);
  const [Loading, setLoading] = useState(true);
  const [previewImg, setPreviewImg] = useState();
  const [uploaded, setUploaded] = useState(false);
  const { clients } = useSelector((state) => state.clientState);
  const { userProfile } = useSelector((state) => state.userState);
  const [addr, setAddr] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleSubmitOnClick = () => {
    console.log(
      "editor_content ==> ",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

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

  useEffect(() => {
    // dispatch(doGetClientRequest());
    dispatch(doGetClientRequest());
  }, []);

  const chkChange = (e) => {
    if (e.target.checked) {
      setTgl("open");
    } else {
      setTgl("close");
    }
  };

  const validationSchema = Yup.object().shape({
    jobs_title: Yup.string("Enter Job Title").required("Title is required"),
    jobs_primary_skill: Yup.string("Please enter Primary Skill").required(
      "Primary Skill is required"
    ),
    jobs_secondary_skill: Yup.string("Please enter Secondary Skill").required(
      "Secondary Skill is required"
    ),
    jobs_benefit: Yup.string("Please enter Expected Benefit").required(
      "Benefit is required"
    ),
  });

  const formik = useFormik({
    initialValues: {
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
      jobs_client_id: 1,
      jobs_photo: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const SDate = startDate.toISOString();
      const EDate = endDate.toISOString();

      values.jobs_start_date = SDate;
      values.jobs_end_date = EDate;
      values.jobs_user_id = userProfile.userId;
      values.jobs_status = tgl;

      let payload = new FormData();
      payload.append("jobs_title", values.jobs_title);
      payload.append("jobs_start_date", values.jobs_start_date);
      payload.append("jobs_end_date", values.jobs_end_date);
      payload.append("jobs_upto_salary", parseInt(values.jobs_upto_salary));
      payload.append(
        "job_upto_experience",
        parseInt(values.job_upto_experience)
      );
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

      dispatch(doAddJobRequest(payload));
      // navigate("/app/job/success");
      toast.success("Data Berhasil Disimpan");
      navigate("/app/job", { state: { refresh: true } });
    },
  });

  const uploadOnChange = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onload = () => {
      formik.setFieldValue("jobs_photo", file);
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
    setUploaded(true);
  };

  const onClearImage = (event) => {
    event.preventDefault();
    setUploaded(false);
    setPreviewImg(null);
  };

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
                <div class="grid grid-cols-4 gap-6">
                  <div class="col-start-1 col-end-4">
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
                    <div className="mt-1 flex justify-center px-4 pt-4 pb-4 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        {uploaded === false ? (
                          <svg
                            className="h-6 w-6 text-gray-200"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <>
                            <img
                              src={previewImg}
                              center
                              alt="image"
                              className="h-20 w-37"
                            />
                            <div className="flex text-sm text-gray-600 center">
                              <label className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <span className="ml-4" onClick={onClearImage}>
                                  Remove
                                </span>
                              </label>
                            </div>
                          </>
                        )}

                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="jobs_photo"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              type="file"
                              id="jobs_photo"
                              accept="image/*"
                              onChange={uploadOnChange("file")}
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="rows-start-1 col-start-1 col-end-3">
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

                  <div class="col-start-3 col-end-4">
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
                        value={formik.values.jobs_publish}
                        onChange={formik.handleChange}
                        id="jobs_publish"
                        class="sr-only peer"
                      />
                      <div class="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    </label>
                  </div>

                  {/* jobs_primary_skill */}
                  <div class="col-start-1 col-end-4">
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
                    {formik.touched.jobs_primary_skill &&
                    formik.errors.jobs_primary_skill ? (
                      <span className="mt-2 text-sm text-red-600">
                        {formik.errors.jobs_primary_skill}
                      </span>
                    ) : null}
                  </div>

                  {/* jobs_remotely */}

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
                  </div>

                  {/* jobs_secondary_skill */}
                  <div class="col-start-1 col-end-4">
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
                    {formik.touched.jobs_secondary_skill &&
                    formik.errors.jobs_secondary_skill ? (
                      <span className="mt-2 text-sm text-red-600">
                        {formik.errors.jobs_secondary_skill}
                      </span>
                    ) : null}
                  </div>

                  {/* jobs_status */}

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
                        // defaultChecked={setTgl}
                        name="jobs_status"
                        type="checkbox"
                        value={tgl}
                        onChange={chkChange}
                        id="jobs_status"
                        class="sr-only peer"
                      />
                      <div class="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    </label>
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
                      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"                    >
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
                      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

                  <div class="col-start-1 col-end-3">
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
                    {formik.touched.jobs_benefit &&
                    formik.errors.jobs_benefit ? (
                      <span className="mt-2 text-sm text-red-600">
                        {formik.errors.jobs_benefit}
                      </span>
                    ) : null}
                  </div>

                  {/* jobs_client_id */}
                  <div class="col-start-1 col-end-3">
                    <label class="block text-sm font-medium text-gray-700">
                      Client Name
                    </label>
                    <select
                      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  {/* jobs_city */}

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

                    <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                      <div class="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                        <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                          <div class="flex items-center space-x-1 sm:pr-4">
                            <button
                              type="button"
                              class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                              <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                            <button
                              type="button"
                              class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                              <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                            <button
                              type="button"
                              class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                              <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                            <button
                              type="button"
                              class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                              <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                            <button
                              type="button"
                              class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                              <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                            <button
                              type="button"
                              class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                              <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                            <button
                              type="button"
                              class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                              <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                            <button
                              type="button"
                              class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                              <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                            <button
                              type="button"
                              class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                              <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <button
                          type="button"
                          data-tooltip-target="tooltip-fullscreen"
                          class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <div
                          id="tooltip-fullscreen"
                          role="tooltip"
                          class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                        >
                          Show full screen
                          <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                      </div>
                      <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                        <label for="editor" class="sr-only">
                          Publish post
                        </label>
                        <textarea
                          id="editor"
                          rows="8"
                          class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                          placeholder="Write an article..."
                          required
                          name="jobs_description"
                      value={formik.values.jobs_description}
                      onChange={formik.handleChange}
                        ></textarea>
                      </div>
                    </div>
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
