import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Page from "../../../component/commons/Page";

export default function Setting() {
  let navigate = useNavigate();
  const location = useLocation();
  return (
    <Page title="Setting Profile" titleButton="Back" onClick={() => navigate("/app/placement/new")}>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <h1 className="p-6 font-light pt-2">This information will be display, so be careful what you share</h1>
            <div className="px-10 py-5 bg-white sm:p-6">
              <div className="sm:flex-1 lg:grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="tale_fullname" className="block text-sm font-medium text-gray-700">
                    Fullname
                  </label>
                  <input
                    type="text"
                    name="tale_fullname"
                    id="tale_fullname"
                    // value={formik.values.tale_fullname}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    autoComplete="tale_fullname"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 row-start-2 sm:col-span-2">
                  <label htmlFor="tale_email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="text"
                    name="tale_email"
                    id="tale_email"
                    // value={formik.values.tale_email}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    autoComplete="tale_email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 row-start-3 sm:col-span-2">
                  <label htmlFor="tale_education" className="block text-sm font-medium text-gray-700">
                    Pendidikan
                  </label>
                  <select
                    name="tale_education"
                    id="tale_education"
                    // value={formik.values.tale_education}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    autoComplete="tale_education"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                    {/* {
                                            listCondition.map((value, index) => (
                                                <option value={value} key={index}>{value}</option>
                                            ))
                                        } */}
                  </select>
                </div>

                <div className="col-span-6 row-start-4 sm:col-span-2">
                  <label htmlFor="tale_major" className="block text-sm font-medium text-gray-700">
                    Jurusan
                  </label>
                  <input
                    type="text"
                    name="tale_major"
                    id="tale_major"
                    // value={formik.values.tale_major}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    autoComplete="tale_major"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 row-start-5 sm:col-span-2">
                  <label htmlFor="tale_city" className="block text-sm font-medium text-gray-700">
                    Kota
                  </label>
                  <input
                    type="text"
                    name="tale_city"
                    id="tale_city"
                    // value={formik.values.tale_city}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    autoComplete="tale_city"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 row-start-6 sm:col-span-2">
                  <label htmlFor="tale_bootcamp" className="block text-sm font-medium text-gray-700">
                    Joint Bootcamp
                  </label>
                  <select
                    name="tale_bootcamp"
                    id="tale_bootcamp"
                    // value={formik.values.tale_bootcamp}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    autoComplete="tale_bootcamp"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                    {/* {
                                            (categories || []).map((value, index) => (
                                                <option value={value.cate_id} key={index}>{value.cate_name}</option>
                                            ))
                                        } */}
                  </select>
                </div>

                <div className="col-span-6 row-start-7 sm:col-span-2">
                  <label htmlFor="tale_resume" className="block text-sm font-medium text-gray-700">
                    Resume
                  </label>
                  <input
                    type="file"
                    name="tale_resume"
                    id="tale_resume"
                    // value={formik.values.tale_resume}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    autoComplete="tale_resume"
                    className="from-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  />
                  {/* {formik.touched.prod_price && formik.errors.prod_price ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_price}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 row-start-7 sm:col-span-2">
                  <label htmlFor="tale_candidat_resume" className="block text-sm font-medium text-gray-700">
                    Cover Letter
                  </label>
                  <input
                    type="file"
                    name="tale_candidat_resume"
                    id="tale_candidat_resume"
                    // value={formik.values.tale_candidat_resume}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    autoComplete="tale_candidat_resume"
                    className="from-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  />
                  {/* {formik.touched.prod_price && formik.errors.prod_price ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_price}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 sm:col-span-1 lg:col-span-2">
                  <label htmlFor="tale_birthdate" className="block text-sm font-medium text-gray-700">
                    Birth Date
                  </label>
                  <input className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" type="date"></input>
                  {/* <DatePicker
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        selected={birthDate}
                                        onChange={(date) => setBirthDate(date)} /> */}
                </div>

                <div className="col-span-6 row-start-2 sm:col-span-2">
                  <label htmlFor="tale_handphone" className="block text-sm font-medium text-gray-700">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="tale_handphone"
                    id="tale_handphone"
                    // value={formik.values.prod_name}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    autoComplete="tale_handphone"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 row-start-3 sm:col-span-2">
                  <label htmlFor="tale_school_name" className="block text-sm font-medium text-gray-700">
                    Pendidikan
                  </label>
                  <input
                    type="text"
                    name="tale_school_name"
                    id="tale_school_name"
                    // value={formik.values.tale_school_name}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    autoComplete="tale_school_name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 row-start-4 sm:col-span-1">
                  <label htmlFor="tale_graduate" className="block text-sm font-medium text-gray-700">
                    Tahun Lulus
                  </label>
                  <input
                    type="text"
                    name="tale_graduate"
                    id="tale_graduate"
                    // value={formik.values.tale_graduate}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    autoComplete="tale_graduate"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 row-start-4 sm:col-span-1">
                  <label htmlFor="tale_gpa" className="block text-sm font-medium text-gray-700">
                    IPK
                  </label>
                  <input
                    type="text"
                    name="tale_gpa"
                    id="tale_gpa"
                    // value={formik.values.tale_gpa}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    autoComplete="tale_gpa"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 row-start-5 sm:col-span-2">
                  <label htmlFor="tale_province" className="block text-sm font-medium text-gray-700">
                    Provinsi
                  </label>
                  <input
                    type="text"
                    name="tale_province"
                    id="tale_province"
                    // value={formik.values.tale_province}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    autoComplete="tale_province"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 row-start-6 sm:col-span-2">
                  <label htmlFor="tale_tag_skill" className="block text-sm font-medium text-gray-700">
                    Skills
                  </label>
                  <textarea
                    id="tale_tag_skill"
                    name="tale_tag_skill"
                    // value={formik.values.tale_tag_skill}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="NodeJS, React, PostgreSQL"
                    defaultValue={""}
                  />
                  {/* {formik.touched.prod_desc && formik.errors.prod_desc ? (
                                        <span className="mt-2 text-sm text-red-600" >{formik.errors.prod_desc}</span>
                                    ) : null} */}
                </div>
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="button"
                // onClick={formik.handleSubmit}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </Page>
  );
}
