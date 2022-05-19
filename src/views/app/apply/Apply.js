import { faAngleRight, faArrowRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CalendarIcon } from "@heroicons/react/outline";
import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../../component/commons/Page";
import DatePicker from "react-datepicker";

export default function Apply() {
  const navigate = useNavigate();
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
      <div className="grid grid-cols-3 my-8">
        <div>
          <h1>tes</h1>
        </div>
        <div>
          <div>
            <input
              type="text"
              name="tale_fullname"
              id="tale_fullname"
              // value={formik.values.tale_fullname}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Fullname"
            />
          </div>
          <div className="flex">
            <DatePicker
              name="tale_birthdate"
              id="tale_birthdate"
              // onBlur={formik.handleBlur}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholderText="Birthdate"
              // selected={selectedDate}
              // onChange={(date) => setselectedDate(date)}
            />
            <CalendarIcon htmlFor="batch_start_date" className="mx-1 w-8 h-8 text-gray-600" />
            <input type="text" name="tale_fullname" id="tale_fullname" className="mt-1 focus:ring-indigo-200 focus:border-indigo-200 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
          </div>
          <select
            id="tale_education"
            name="tale_education"
            // value={formik.values.tale_education}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            autoComplete="tale_education"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Pendidikan</option>
            <option>SMA</option>
            <option>D3</option>
            <option>S1</option>
          </select>
          <div>
            <input
              type="text"
              name="tale_school_name"
              id="tale_school_name"
              // value={formik.values.tale_school_name}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Sekolah"
            />
          </div>

          <div>
            <input
              type="text"
              name="tale_major"
              id="tale_major"
              // value={formik.values.tale_major}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              autoComplete="given-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Jurusan"
            />
          </div>

          <div>
            <input
              type="text"
              name="tale_handphone"
              id="tale_handphone"
              // value={formik.values.tale_handphone}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              autoComplete="given-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="No Hp"
            />
          </div>

          <div>
            <select
              id="tale_bootcamp"
              name="tale_bootcamp"
              // value={formik.values.tale_bootcamp}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              autoComplete="bootcamp"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>NodeJS</option>
              <option>Golang</option>
            </select>
          </div>

          <div className="mt-1">
            <textarea
              id="tale_motivation"
              name="tale_motivation"
              rows={3}
              // value={formik.values.tale_motivation}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Motivasi join bootcamp"
              defaultValue={""}
            />
          </div>
          <div className="col-span-6 sm:col-span-3 py-2 flex">
            <span className=" text-base font-light my-auto mr-3">Resume </span>
            <input
              type="file"
              accept="pdf/*"
              className="border-2 flex-1"
              // onChange={uploadOnChange('file')}
            />
          </div>
          <div className="pt-4 flex items-center space-x-4">
            <button
              type="button"
              className="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-red-500"
              // onClick={()=>{navigate("/")}}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
              // onClick={formik.handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
        <div>
          <h1>tes3</h1>
        </div>
      </div>
    </div>
  );
}
