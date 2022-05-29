import { useFormik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import * as moment from "moment";
import Page from "../../../component/commons/Page";
import config from "../../../config/config";
import DatePicker from "react-datepicker";
import { doGetTalentRequest, doUpdateSettingsRequest, doUpdateTalentNoFileRequest, doUpdateTalentRequest } from "../../../redux-saga/actions/Settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCalendarAlt, faCalendarDay, faCalendarTimes, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

export default function Setting() {
  const [previewImg, setPreviewImg] = useState();
  const [uploaded, setUploaded] = useState(false);

  const [fileResume, setFileResume] = useState(false);
  const [fileCoverLetter, setFileCoverLetter] = useState(false);

  const listEducations = ["D3", "S1", "S2", "S3"];
  const listBootcamps = ["NodeJS", "Golang", ".NET"];

  const dispatch = useDispatch();

  const { settings } = useSelector((state) => state.settingState);
  const { userProfile } = useSelector((state) => state.userState);

  const onClearImage = (event) => {
    event.preventDefault();
    setUploaded(false);
    setPreviewImg(null);
  };

  useEffect(() => {
    dispatch(doGetTalentRequest(userProfile.userId));
  }, []);

  useEffect(() => {
    let img = `${config.domain}/settings/images/${settings.tale_photo}`;
    setPreviewImg(img);
  }, [settings]);

  // useEffect(() => {
  //   if (settings) {
  //     setAttrb({
  //       tale_id: settings.tale_id,
  //       tale_fullname: settings.tale_fullname,
  //       tale_email: settings.tale_email,
  //       tale_education: settings.tale_education,
  //       tale_major: settings.tale_major,
  //       tale_city: settings.tale_city,
  //       tale_bootcamp: settings.tale_bootcamp,
  //       tale_resume: settings.tale_resume,
  //       tale_candidat_resume: settings.tale_candidat_resume,
  //       tale_birthdate: settings.tale_birthdate,
  //       tale_handphone: settings.tale_handphone,
  //       tale_school_name: settings.tale_school_name,
  //       tale_year_graduate: settings.tale_year_graduate,
  //       tale_gpa: settings.tale_gpa,
  //       tale_province: settings.tale_province,
  //       tale_tag_skill: settings.tale_tag_skill,
  //     });
  //     let img = `${config.domain}/settings/images/${settings.tale_photo}`;
  //     setPreviewImg(img);
  //     setUploaded(true);
  //   }
  // }, [settings]);

  const validationSchema = Yup.object().shape({
    tale_fullname: Yup.string("Enter Fullname").required("Fullname is required"),
    tale_email: Yup.string("Please enter your email").required("Email is required"),
    tale_major: Yup.string("Tolong isi data jurusan").required("Jurusan is required"),
    tale_city: Yup.string("Tolong isi data kota").required("City is required"),
    tale_school_name: Yup.string("Tolong isi data Universitas").required("University is required"),
    tale_year_graduate: Yup.number().min(1997).default(0),
    tale_gpa: Yup.number().min(1).default(0),
    tale_province: Yup.string("Tolong isi data Daerah").required("Province is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      tale_fullname: settings.tale_fullname,
      tale_education: settings.tale_education,
      tale_major: settings.tale_major,
      tale_city: settings.tale_city,
      tale_bootcamp: settings.tale_bootcamp,
      tale_resume: settings.tale_resume,
      tale_cover_letter: settings.tale_cover_letter,
      tale_birthdate: settings.tale_birthdate && new Date(settings.tale_birthdate),
      tale_handphone: settings.tale_handphone,
      tale_school_name: settings.tale_school_name,
      tale_year_graduate: settings.tale_year_graduate,
      tale_gpa: settings.tale_gpa,
      tale_province: settings.tale_province,
      tale_tag_skill: settings.tale_tag_skill,
      tale_email: settings.tale_email,
      tale_photo: settings.tale_photo,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const tglLahir = moment(formik.values.tale_birthdate).format("YYYY-MM-DD");
      let payload = new FormData();
      if (fileResume === true || fileCoverLetter === true || uploaded === true) {
        payload.append("tale_fullname", values.tale_fullname);
        payload.append("tale_birthdate", tglLahir);
        payload.append("tale_education", values.tale_education);
        payload.append("tale_major", values.tale_major);
        payload.append("tale_school_name", values.tale_school_name);
        payload.append("tale_handphone", values.tale_handphone);
        payload.append("tale_bootcamp", values.tale_bootcamp);
        payload.append("tale_year_graduate", parseInt(values.tale_year_graduate));
        payload.append("tale_gpa", parseInt(values.tale_gpa));
        payload.append("tale_city", values.tale_city);
        payload.append("tale_province", values.tale_province);
        payload.append("tale_tag_skill", values.tale_tag_skill);
        payload.append("tale_email", values.tale_email);
        payload.append("tale_resume", values.tale_resume);
        payload.append("tale_cover_letter", values.tale_cover_letter);
        payload.append("tale_photo", values.tale_photo);
        payload.append("tale_user_id", parseInt(userProfile.userId));
        dispatch(doUpdateTalentRequest(payload));
      } else if (fileResume === true) {
        payload.append("tale_fullname", values.tale_fullname);
        payload.append("tale_birthdate", tglLahir);
        payload.append("tale_education", values.tale_education);
        payload.append("tale_major", values.tale_major);
        payload.append("tale_school_name", values.tale_school_name);
        payload.append("tale_handphone", values.tale_handphone);
        payload.append("tale_bootcamp", values.tale_bootcamp);
        payload.append("tale_year_graduate", parseInt(values.tale_year_graduate));
        payload.append("tale_gpa", parseInt(values.tale_gpa));
        payload.append("tale_city", values.tale_city);
        payload.append("tale_province", values.tale_province);
        payload.append("tale_tag_skill", values.tale_tag_skill);
        payload.append("tale_email", values.tale_email);
        payload.append("tale_resume", values.tale_resume);
        payload.append("tale_user_id", parseInt(userProfile.userId));
        dispatch(doUpdateTalentRequest(payload));
      } else if (fileCoverLetter === true) {
        payload.append("tale_fullname", values.tale_fullname);
        payload.append("tale_birthdate", tglLahir);
        payload.append("tale_education", values.tale_education);
        payload.append("tale_major", values.tale_major);
        payload.append("tale_school_name", values.tale_school_name);
        payload.append("tale_handphone", values.tale_handphone);
        payload.append("tale_bootcamp", values.tale_bootcamp);
        payload.append("tale_year_graduate", parseInt(values.tale_year_graduate));
        payload.append("tale_gpa", parseInt(values.tale_gpa));
        payload.append("tale_city", values.tale_city);
        payload.append("tale_province", values.tale_province);
        payload.append("tale_tag_skill", values.tale_tag_skill);
        payload.append("tale_email", values.tale_email);
        payload.append("tale_cover_letter", values.tale_cover_letter);
        payload.append("tale_user_id", parseInt(userProfile.userId));
        dispatch(doUpdateTalentRequest(payload));
      } else if (uploaded === true) {
        payload.append("tale_fullname", values.tale_fullname);
        payload.append("tale_birthdate", tglLahir);
        payload.append("tale_education", values.tale_education);
        payload.append("tale_major", values.tale_major);
        payload.append("tale_school_name", values.tale_school_name);
        payload.append("tale_handphone", values.tale_handphone);
        payload.append("tale_bootcamp", values.tale_bootcamp);
        payload.append("tale_year_graduate", parseInt(values.tale_year_graduate));
        payload.append("tale_gpa", parseInt(values.tale_gpa));
        payload.append("tale_city", values.tale_city);
        payload.append("tale_province", values.tale_province);
        payload.append("tale_tag_skill", values.tale_tag_skill);
        payload.append("tale_email", values.tale_email);
        payload.append("tale_photo", values.tale_photo);
        payload.append("tale_user_id", parseInt(userProfile.userId));
        dispatch(doUpdateTalentRequest(payload));
      } else {
        const payload = {
          tale_fullname: values.tale_fullname,
          tale_birthdate: tglLahir,
          tale_education: values.tale_education,
          tale_major: values.tale_major,
          tale_school_name: values.tale_school_name,
          tale_handphone: values.tale_handphone,
          tale_bootcamp: values.tale_bootcamp,
          tale_year_graduate: parseInt(values.tale_year_graduate),
          tale_gpa: parseInt(values.tale_gpa),
          tale_city: values.tale_city,
          tale_province: values.tale_province,
          tale_tag_skill: values.tale_tag_skill,
          tale_email: values.tale_email,
          tale_user_id: parseInt(userProfile.userId),
        };
        dispatch(doUpdateTalentNoFileRequest(payload));
      }
      navigate("/", { state: { refresh: true } });
    },
  });

  const uploadOnChangeResume = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      formik.setFieldValue("tale_resume", file);
    };

    reader.readAsDataURL(file);
    setFileResume(true);
  };

  const uploadOnChangeCover = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      formik.setFieldValue("tale_cover_letter", file);
    };

    reader.readAsDataURL(file);
    setFileCoverLetter(true);
  };

  const uploadOnChangeImage = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      formik.setFieldValue("tale_photo", file);
      setPreviewImg(reader.result);
    };

    reader.readAsDataURL(file);
    setUploaded(true);
  };

  let navigate = useNavigate();
  const location = useLocation();
  return (
    <Page title="Setting Profile" titleButton="Back" onClick={() => navigate(-1)}>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form method="POST" action="#">
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
                    value={formik.values.tale_fullname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="tale_fullname"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {formik.touched.tale_fullname && formik.errors.tale_fullname ? <span className="mt-2 text-sm text-red-600">{formik.errors.tale_fullname}</span> : null}
                </div>

                <div className="col-span-6 row-start-2 sm:col-span-2">
                  <label htmlFor="tale_email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="text"
                    name="tale_email"
                    id="tale_email"
                    value={formik.values.tale_email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="tale_email"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    value={formik.values.tale_education}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="tale_education"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                    {listEducations.map((value, index) => (
                      <option value={value} key={index}>
                        {value}
                      </option>
                    ))}
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
                    value={formik.values.tale_major}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="tale_major"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    value={formik.values.tale_city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="tale_city"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {formik.touched.tale_city && formik.errors.tale_city ? <span className="mt-2 text-sm text-red-600">{formik.errors.tale_city}</span> : null}
                </div>

                <div className="col-span-6 row-start-6 sm:col-span-2">
                  <label htmlFor="tale_bootcamp" className="block text-sm font-medium text-gray-700">
                    Joint Bootcamp
                  </label>
                  <select
                    name="tale_bootcamp"
                    id="tale_bootcamp"
                    value={formik.values.tale_bootcamp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="tale_bootcamp"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                    {listBootcamps.map((value, index) => (
                      <option value={value} key={index}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6 row-start-7 sm:col-span-2">
                  <label htmlFor="tale_resume" className="block text-sm font-medium text-gray-700">
                    Resume
                  </label>
                  <div className="flex">
                    <input
                      type="file"
                      name="tale_resume"
                      id="tale_resume"
                      // value={formik.values.tale_resume}
                      onChange={uploadOnChangeResume("file")}
                      onBlur={formik.handleBlur}
                      autoComplete="tale_resume"
                      className="from-control block px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none flex-initial w-60"
                    />
                    <input
                      type="text"
                      value={formik.values.tale_resume}
                      className="from-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded-r-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none flex-1 bg-gray-300"
                      disabled
                    />
                  </div>
                  {/* {formik.touched.prod_price && formik.errors.prod_price ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_price}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 row-start-7 sm:col-span-2">
                  <label htmlFor="tale_cover_letter" className="block text-sm font-medium text-gray-700">
                    Cover Letter
                  </label>
                  <div className="flex">
                    <input
                      type="file"
                      name="tale_cover_letter"
                      id="tale_cover_letter"
                      onChange={uploadOnChangeCover("file")}
                      onBlur={formik.handleBlur}
                      autoComplete="tale_cover_letter"
                      className="from-control block px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none flex-initial w-60"
                    />
                    <input
                      type="text"
                      value={formik.values.tale_cover_letter}
                      className="from-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded-r-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none flex-1 bg-gray-300"
                      disabled
                    />
                  </div>
                  {/* {formik.touched.prod_price && formik.errors.prod_price ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_price}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 sm:col-span-1 lg:col-span-2">
                  <label htmlFor="tale_birthdate" className="block text-sm font-medium text-gray-700">
                    Birth Date
                  </label>
                  <div className="flex">
                    <DatePicker
                      className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      selected={formik.values.tale_birthdate}
                      onChange={(date) => formik.setFieldValue("tale_birthdate", date)}
                    />
                    <span className="my-auto mx-2 text-red-600 hover:text-red-700">
                      <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
                    </span>
                  </div>
                </div>

                <div className="col-span-6 row-start-2 sm:col-span-2">
                  <label htmlFor="tale_handphone" className="block text-sm font-medium text-gray-700">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="tale_handphone"
                    id="tale_handphone"
                    value={formik.values.tale_handphone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="tale_handphone"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 row-start-3 sm:col-span-2">
                  <label htmlFor="tale_school_name" className="block text-sm font-medium text-gray-700">
                    Universitas
                  </label>
                  <input
                    type="text"
                    name="tale_school_name"
                    id="tale_school_name"
                    value={formik.values.tale_school_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="tale_school_name"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {/* {formik.touched.prod_name && formik.errors.prod_name ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.prod_name}</span>
                                    ) : null} */}
                </div>

                <div className="col-span-6 row-start-4 sm:col-span-1">
                  <label htmlFor="tale_year_graduate" className="block text-sm font-medium text-gray-700">
                    Tahun Lulus
                  </label>
                  <input
                    type="text"
                    name="tale_year_graduate"
                    id="tale_year_graduate"
                    value={formik.values.tale_year_graduate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="tale_year_graduate"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    value={formik.values.tale_gpa}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="tale_gpa"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    value={formik.values.tale_province}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="tale_province"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    value={formik.values.tale_tag_skill}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    rows={3}
                    className="shadow-sm focus:ring-red-500 focus:border-red-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="NodeJS, React, PostgreSQL"
                    defaultValue={""}
                  />
                  {/* {formik.touched.prod_desc && formik.errors.prod_desc ? (
                                        <span className="mt-2 text-sm text-red-600" >{formik.errors.prod_desc}</span>
                                    ) : null} */}
                </div>
                <div className="col-span-6 sm:col-span-2 row-span-3 justify-self-center py-4 relative">
                  <div className="">
                    <img src={previewImg} className="h-44 w-44 rounded-full ring-2 ring-red-600" />
                  </div>
                  <input type="file" accept="image/*" id="tale_photo" name="tale_photo" className="rounded-full p-5 opacity-0 h-44 w-44 absolute top-4 " onChange={uploadOnChangeImage("file")} />
                </div>
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="button"
                onClick={formik.handleSubmit}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
