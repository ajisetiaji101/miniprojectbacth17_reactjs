import { faAngleRight, faArrowRight, faCalendarAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CalendarIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../../component/commons/Page";
import DatePicker from "react-datepicker";
import {} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { doGetTalentRequest } from "../../../redux-saga/actions/Settings";
import { doAddProcessBootcampRequest } from "../../../redux-saga/actions/ProcessBootcampConstant";
import { doAddTalentTimelineRequest, doGetTalentTimelineRequest } from "../../../redux-saga/actions/TalentTimelineAction";
import config from "../../../config/config";
import * as Yup from "yup";
import * as moment from "moment";
import { useFormik } from "formik";

export default function Apply() {
  const navigate = useNavigate();
  const [previewImg, setPreviewImg] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();
  const { settings } = useSelector((state) => state.settingState);
  const { userProfile } = useSelector((state) => state.userState);
  const { talenttimeline } = useSelector((state) => state.talenttimelineState);

  useEffect(() => {
    dispatch(doGetTalentRequest(userProfile.userId));
  }, []);

  useEffect(() => {
    dispatch(doGetTalentTimelineRequest(userProfile.userId));
  }, []);

  const uploadOnChangeResume = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      formik.setFieldValue("tale_resume", file);
    };

    reader.readAsDataURL(file);
  };

  const uploadOnChangeImage = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      formik.setFieldValue("tale_photo", file);
      setPreviewImg(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const calculate_age = (dob1) => {
    if (dob1) {
      const today = new Date();
      let birthday = new Date(dob1);
      let year = 0;
      if (today.getMonth() < birthday.getMonth()) {
        year = 1;
      } else if (today.getMonth() == birthday.getMonth() && today.getDate() < birthday.getDate()) {
        year = 1;
      }
      let age = `${today.getFullYear() - birthday.getFullYear() - year} tahun`;

      if (age < 0) {
        age = 0;
      }
      return age;
    }
  };

  const validationSchema = Yup.object().shape({
    tale_fullname: Yup.string("Enter Fullname").required("Fullname is required"),
    tale_education: Yup.string("Tolong isi data pendidikan").required("Pendidikan is required"),
    tale_school_name: Yup.string("Tolong isi data Universitas").required("University is required"),
    tale_major: Yup.string("Tolong isi data jurusan").required("University is required"),
    tale_handphone: Yup.string("Tolong isi data handphone").required("handphone is required"),
    tale_bootcamp: Yup.string("Tolong isi data bootcamp").required("bootcamp is required"),
    tale_motivation: Yup.string("Tolong isi data motivation").required("motivation is required"),
    tale_resume: Yup.string("Tolong upload Your Resume").required("Please Upload Your Resume"),
    tale_photo: Yup.string("Tolong upload Your Photo").required("Please Upload Your Photo"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      tale_fullname: "",
      tale_education: "",
      tale_major: "",
      tale_bootcamp: "",
      tale_resume: "",
      tale_birthdate: "",
      tale_handphone: "",
      tale_school_name: "",
      tale_motivation: "",
      tale_photo: "",
      tale_resume: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      values.tale_birthdate = selectedDate;
      const harini = new Date();
      const tglLahir = moment(selectedDate).format("YYYY-MM-DD");
      const today = moment(harini).format("YYYY-MM-DD");
      const apply = "Apply";
      let payload = new FormData();
      payload.append("tale_fullname", values.tale_fullname);
      payload.append("tale_birthdate", tglLahir);
      payload.append("tale_major", values.tale_major);
      payload.append("tale_school_name", values.tale_school_name);
      payload.append("tale_education", values.tale_education);
      payload.append("tale_handphone", values.tale_handphone);
      payload.append("tale_bootcamp", values.tale_bootcamp);
      payload.append("tale_motivation", values.tale_motivation);
      payload.append("tale_resume", values.tale_resume);
      payload.append("tale_photo", values.tale_photo);
      payload.append("tale_user_id", parseInt(userProfile.userId));
      payload.append("tati_date", today);
      payload.append("tati_tale_id", parseInt(userProfile.userId));
      payload.append("tati_timeline_name", apply);

      await dispatch(doAddProcessBootcampRequest(payload));

      setTimeout(() => {
        dispatch(doAddTalentTimelineRequest(payload));
      }, [1000]);

      setTimeout(() => navigate("/apply/sukses"), [5000]);
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
        <form method="POST" action="#">
          <div className="justify-self-center relative">
            <div className="">
              <img src={previewImg ? previewImg : `${config.domain}/settings/images/tes1.png`} className="h-32 w-32 rounded-full ring-2 ring-red-600" />
            </div>
            <input type="file" accept="image/*" id="tale_photo" name="tale_photo" className="rounded-full p-5 opacity-0 h-44 w-44 absolute top-4 " onChange={uploadOnChangeImage("file")} />
          </div>
          {formik.touched.tale_photo && formik.errors.tale_photo ? <span className="mt-2 text-sm text-red-600">{formik.errors.tale_photo}</span> : null}
        </form>
        <div>
          <div>
            <input
              type="text"
              name="tale_fullname"
              id="tale_fullname"
              value={formik.values.tale_fullname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mb-4"
              disabled={talenttimeline && talenttimeline.length < 1 ? false : true}
              placeholder="Fullname"
            />
            {formik.touched.tale_fullname && formik.errors.tale_fullname ? <span className="mt-2 text-sm text-red-600">{formik.errors.tale_fullname}</span> : null}
          </div>
          <div className="flex mb-4">
            <DatePicker
              name="tale_birthdate"
              id="tale_birthdate"
              onBlur={formik.handleBlur}
              className=" focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholderText="Birthdate"
              onClick={calculate_age(selectedDate)}
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              disabled={talenttimeline && talenttimeline.length < 1 ? false : true}
            />
            <FontAwesomeIcon icon={faCalendarAlt} className="h-8 w-8 mx-2 my-auto text-gray-500" />
            <input type="text" className=" focus:ring-indigo-200 focus:border-indigo-200 w-full shadow-sm sm:text-sm border-gray-300 bg-gray-100 rounded-md" value={calculate_age(selectedDate)} disabled />
          </div>

          {formik.touched.tale_birthdate && formik.errors.tale_birthdate ? <span className="mt-2 text-sm text-red-600">{formik.errors.tale_birthdate}</span> : null}
          <div className="mb-4">
            <select
              id="tale_education"
              name="tale_education"
              value={formik.values.tale_education}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="tale_education"
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              disabled={talenttimeline && talenttimeline.length < 1 ? false : true}
            >
              <option>Pendidikan</option>
              <option>SMA</option>
              <option>D3</option>
              <option>S1</option>
            </select>
            {formik.touched.tale_education && formik.errors.tale_education ? <span className="mt-2 text-sm text-red-600">{formik.errors.tale_education}</span> : null}
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="tale_school_name"
              id="tale_school_name"
              value={formik.values.tale_school_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Sekolah"
              disabled={talenttimeline && talenttimeline.length < 1 ? false : true}
            />
            {formik.touched.tale_school_name && formik.errors.tale_school_name ? <span className="mt-2 text-sm text-red-600">{formik.errors.tale_school_name}</span> : null}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="tale_major"
              id="tale_major"
              value={formik.values.tale_major}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="given-name"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Jurusan"
              disabled={talenttimeline && talenttimeline.length < 1 ? false : true}
            />
            {formik.touched.tale_major && formik.errors.tale_major ? <span className="mt-2 text-sm text-red-600">{formik.errors.tale_major}</span> : null}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="tale_handphone"
              id="tale_handphone"
              value={formik.values.tale_handphone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="given-name"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="No Hp"
              disabled={talenttimeline && talenttimeline.length < 1 ? false : true}
            />
            {formik.touched.tale_handphone && formik.errors.tale_handphone ? <span className="mt-2 text-sm text-red-600">{formik.errors.tale_handphone}</span> : null}
          </div>

          <div className="mb-4">
            <select
              id="tale_bootcamp"
              name="tale_bootcamp"
              value={formik.values.tale_bootcamp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="bootcamp"
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              disabled={talenttimeline && talenttimeline.length < 1 ? false : true}
            >
              <option>NodeJS</option>
              <option>Java</option>
              <option>.NET</option>
            </select>
            {formik.touched.tale_bootcamp && formik.errors.tale_bootcamp ? <span className="mt-2 text-sm text-red-600">{formik.errors.tale_bootcamp}</span> : null}
          </div>

          <div className="mb-4">
            <textarea
              id="tale_motivation"
              name="tale_motivation"
              rows={3}
              value={formik.values.tale_motivation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Motivasi join bootcamp"
              defaultValue={""}
              disabled={talenttimeline && talenttimeline.length < 1 ? false : true}
            />
            {formik.touched.tale_motivation && formik.errors.tale_motivation ? <span className="mt-2 text-sm text-red-600">{formik.errors.tale_motivation}</span> : null}
          </div>
          <div className="col-span-6 sm:col-span-3 mb-4 flex">
            <span className=" text-base font-light my-auto mr-3">Resume </span>
            <input type="file" accept="pdf/*" name="tale_resume" id="tale_resume" className="border-2 flex-1" onChange={uploadOnChangeResume("file")} disabled={talenttimeline && talenttimeline.length < 1 ? false : true} />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={formik.values.tale_resume}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="given-name"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
              placeholder="Your File Automatically Filled"
              disabled
            />
          </div>
          {formik.touched.tale_resume && formik.errors.tale_resume ? <span className="mt-2 text-sm text-red-600">{formik.errors.tale_resume}</span> : null}

          {talenttimeline && talenttimeline.length < 1 ? (
            <div className="pt-4 flex items-center space-x-4">
              <button type="button" className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-700 uppercase font-medium" onClick={formik.handleSubmit}>
                Apply
              </button>
              <button
                type="button"
                className="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-red-500 hover:bg-red-700 uppercase font-medium"
                onClick={() => {
                  navigate("/");
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="pt-4 flex items-center space-x-4">
              <button
                type="button"
                className="flex justify-center uppercase font-medium items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-red-500 hover:bg-red-700"
                onClick={() => {
                  navigate("/");
                }}
              >
                Return
              </button>
            </div>
          )}
        </div>

        <div className="justify-self-center">
          <div className="flex items-center justify-center text-xl font-semibold relative">Step to Join Bootcamp</div>
          <div className="flex items-center justify-center text-xl font-semibold relative">
            <div className="lg:py-6 lg:pr-16 ml-10">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  {talenttimeline && talenttimeline !== undefined ? (
                    <div>
                      {talenttimeline && talenttimeline.length < 1 ? (
                        <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                      ) : talenttimeline[0].tati_timeline_name === "Apply" ? (
                        <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full"></div>
                      ) : (
                        <div className="flex items-center justify-center w-6 h-6 bg-red-500 rounded-full"></div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                  )}
                  <div className="w-px h-full border-2 border-gray-400" />
                </div>
                <div className="pb-8">
                  <p className="mb-2 text-lg -mt-1">Apply Application</p>
                  {talenttimeline && talenttimeline.length !== undefined ? talenttimeline && talenttimeline.length < 1 ? "" : <p className="font-thin text-sm">Applied on {moment(talenttimeline[0].tati_date).format("DD MMMM YYYY")}</p> : ""}
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    {talenttimeline && talenttimeline !== undefined ? (
                      <div>
                        {talenttimeline && talenttimeline.length < 2 ? (
                          <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                        ) : talenttimeline[1].tati_timeline_name === "Filtering Test" ? (
                          <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full"></div>
                        ) : (
                          <div className="flex items-center justify-center w-6 h-6 bg-red-500 rounded-full"></div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                    )}
                  </div>
                  <div className="w-px h-full border-2 border-gray-400" />
                </div>
                <div className="pb-8">
                  <p className="mb-2 text-lg -mt-1">Filtering Test</p>
                  {talenttimeline && talenttimeline.length !== undefined ? (
                    talenttimeline && talenttimeline.length < 2 ? (
                      ""
                    ) : (
                      <p className="font-thin text-sm">Result Pass on {moment(talenttimeline[1].tati_date).format("DD MMMM YYYY")}</p>
                    )
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div>
                      {talenttimeline && talenttimeline !== undefined ? (
                        <div>
                          {talenttimeline && talenttimeline.length < 3 ? (
                            <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                          ) : talenttimeline[2].tati_timeline_name === "Contract" ? (
                            <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full"></div>
                          ) : (
                            <div className="flex items-center justify-center w-6 h-6 bg-red-500 rounded-full"></div>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                      )}
                    </div>
                  </div>
                  <div className="w-px h-full border-2 border-gray-400" />
                </div>
                <div className="pb-8">
                  <p className="mb-2 text-lg -mt-1">Contract</p>
                  {talenttimeline && talenttimeline.length !== undefined ? talenttimeline && talenttimeline.length < 3 ? "" : <p className="font-thin text-sm">Done on {moment(talenttimeline[2].tati_date).format("DD MMMM YYYY")}</p> : ""}
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    {talenttimeline && talenttimeline !== undefined ? (
                      <div>
                        {talenttimeline && talenttimeline.length < 4 ? (
                          <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                        ) : talenttimeline[3].tati_timeline_name === "Briefing Bootcamp" ? (
                          <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full"></div>
                        ) : (
                          <div className="flex items-center justify-center w-6 h-6 bg-red-500 rounded-full"></div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                    )}
                  </div>
                  <div className="w-px h-full border-2 border-gray-400" />
                </div>
                <div className="pb-8">
                  <p className="text-lg mb-2 -mt-1">Briefing Bootcamp</p>
                  {talenttimeline && talenttimeline.length !== undefined ? talenttimeline && talenttimeline.length < 4 ? "" : <p className="font-thin text-sm">Done on {moment(talenttimeline[3].tati_date).format("DD MMMM YYYY")}</p> : ""}
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    {talenttimeline && talenttimeline !== undefined ? (
                      <div>
                        {talenttimeline && talenttimeline.length < 5 ? (
                          <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                        ) : talenttimeline[4].tati_timeline_name === "Join Bootcamp" ? (
                          <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full"></div>
                        ) : (
                          <div className="flex items-center justify-center w-6 h-6 bg-red-500 rounded-full"></div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-6 h-6 border-4 rounded-full border-gray-500"></div>
                    )}
                  </div>
                </div>
                <div className="">
                  <p className="mb-2 text-lg -mt-1">Join Bootcamp</p>
                  {talenttimeline && talenttimeline.length !== undefined ? (
                    talenttimeline && talenttimeline.length < 5 ? (
                      ""
                    ) : (
                      <p className="font-thin text-sm">Already Join on {moment(talenttimeline[4].tati_date).format("DD MMMM YYYY")}</p>
                    )
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
