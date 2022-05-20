import { faAngleRight, faArrowRight, faCalendarAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CalendarIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../../component/commons/Page";
import DatePicker from "react-datepicker";
import {} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { doGetTalentRequest } from "../../../redux-saga/actions/Settings";
import config from "../../../config/config";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function Apply() {
  const navigate = useNavigate();
  const [previewImg, setPreviewImg] = useState();

  const { settings } = useSelector((state) => state.settingState);
  const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    doGetTalentRequest(userProfile.userId);
  }, []);

  useEffect(() => {
    let img = `${config.domain}/settings/images/${settings.tale_photo}`;
    setPreviewImg(img);
  }, [settings]);

  const validationSchema = Yup.object().shape({
    tale_fullname: Yup.string("Enter Fullname").required("Fullname is required"),
    tale_birthdate: Yup.string("Please enter birthdate").required("Birthdate is required"),
    tale_education: Yup.string("Tolong isi data pendidikan").required("Pendidikan is required"),
    tale_school_name: Yup.string("Tolong isi data Universitas").required("University is required"),
    tale_major: Yup.string("Tolong isi data jurusan").required("University is required"),
    tale_handphone: Yup.string("Tolong isi data handphone").required("handphone is required"),
    tale_bootcamp: Yup.string("Tolong isi data bootcamp").required("bootcamp is required"),
    tale_province: Yup.string("Tolong isi data Daerah").required("Province is required"),
    tale_motivation: Yup.string("Tolong isi data motivation").required("motivation is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      tale_fullname: settings.tale_fullname,
      tale_education: settings.tale_education,
      tale_major: settings.tale_major,
      tale_bootcamp: settings.tale_bootcamp,
      tale_resume: settings.tale_resume,
      tale_birthdate: settings.tale_birthdate && new Date(settings.tale_birthdate),
      tale_handphone: settings.tale_handphone,
      tale_school_name: settings.tale_school_name,
      tale_motivation: settings.tale_motivation,
      tale_photo: settings.tale_photo,
      tale_resume: settings.tale_resume,
    },
  });

  return (
    <div className="container mx-auto px-10">
      <div className="py-4">
        <FontAwesomeIcon icon={faHome} />
        <span className=" font-medium"> Home</span>
        <span>
          {"   "}
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <span className="font-medium"> Detail</span>
      </div>
      <h1 className="font-bold text-2xl text-center">Bootcamp Application Process</h1>
      <div className="grid grid-cols-3 my-8 gap-12">
        <div className="justify-self-center relative">
          <div className="">
            <img src={previewImg} className="h-32 w-32 rounded-full ring-2 ring-red-600" />
          </div>
          <input
            type="file"
            accept="image/*"
            id="tale_photo"
            name="tale_photo"
            className="rounded-full p-5 opacity-0 h-44 w-44 absolute top-4 "
            //  onChange={uploadOnChangeImage("file")}
          />
        </div>
        <div>
          <div>
            <input
              type="text"
              name="tale_fullname"
              id="tale_fullname"
              value={formik.values.tale_fullname}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mb-4"
              placeholder="Fullname"
            />
          </div>
          <div className="flex mb-4">
            <DatePicker
              name="tale_birthdate"
              id="tale_birthdate"
              // onBlur={formik.handleBlur}
              className=" focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholderText="Birthdate"
              // selected={selectedDate}
              // onChange={(date) => setselectedDate(date)}
            />
            <FontAwesomeIcon icon={faCalendarAlt} className="h-8 w-8 mx-2 my-auto text-gray-500" />
            <input type="text" name="tale_fullname" id="tale_fullname" className=" focus:ring-indigo-200 focus:border-indigo-200 w-full shadow-sm sm:text-sm border-gray-300 bg-gray-100 rounded-md" placeholder="Age" disabled />
          </div>
          <div className="mb-4">
            <select
              id="tale_education"
              name="tale_education"
              value={formik.values.tale_education}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              autoComplete="tale_education"
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>Pendidikan</option>
              <option>SMA</option>
              <option>D3</option>
              <option>S1</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="tale_school_name"
              id="tale_school_name"
              value={formik.values.tale_school_name}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Sekolah"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="tale_major"
              id="tale_major"
              value={formik.values.tale_major}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              autoComplete="given-name"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Jurusan"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="tale_handphone"
              id="tale_handphone"
              value={formik.values.tale_handphone}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              autoComplete="given-name"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="No Hp"
            />
          </div>

          <div className="mb-4">
            <select
              id="tale_bootcamp"
              name="tale_bootcamp"
              value={formik.values.tale_bootcamp}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              autoComplete="bootcamp"
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>NodeJS</option>
              <option>Golang</option>
            </select>
          </div>

          <div className="mb-4">
            <textarea
              id="tale_motivation"
              name="tale_motivation"
              rows={3}
              value={formik.values.tale_motivation}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Motivasi join bootcamp"
              defaultValue={""}
            />
          </div>
          <div className="col-span-6 sm:col-span-3 mb-4 flex">
            <span className=" text-base font-light my-auto mr-3">Resume </span>
            <input
              type="file"
              accept="pdf/*"
              className="border-2 flex-1"
              // onChange={uploadOnChange('file')}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="tale_resume"
              id="tale_resume"
              value={formik.values.tale_resume}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              autoComplete="given-name"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
              placeholder="Your File Automatically Filled"
              disabled
            />
          </div>
          <div className="pt-4 flex items-center space-x-4">
            <button
              type="button"
              className="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-red-500 hover:bg-red-700"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-700"
              // onClick={formik.handleSubmit}
            >
              Apply
            </button>
          </div>
        </div>
        <div className="justify-self-center">
          <div className="flex items-center justify-center text-xl font-semibold relative">Step to Join Bootcamp</div>
          <div className="flex items-center justify-center text-xl font-semibold relative">
            <div className="lg:py-6 lg:pr-16 ml-10">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="w-px h-full border-2 border-gray-400" />
                </div>
                <div className="pb-8">
                  <p className="mb-2 text-lg -mt-1">Apply Application</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                  </div>
                  <div className="w-px h-full border-2 border-gray-400" />
                </div>
                <div className="pb-8">
                  <p className="mb-2 text-lg -mt-1">Filtering Test</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                  </div>
                  <div className="w-px h-full border-2 border-gray-400" />
                </div>
                <div className="pb-8">
                  <p className="mb-2 text-lg -mt-1">Contract</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                  </div>
                  <div className="w-px h-full border-2 border-gray-400" />
                </div>
                <div className="pb-8">
                  <p className="text-lg mb-2 -mt-1">Briefing Bootcamp</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                </div>
                <div className="">
                  <p className="mb-2 text-lg -mt-1">Join Bootcamp</p>
                  <p className="text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
