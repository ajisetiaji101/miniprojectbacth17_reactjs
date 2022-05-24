import React, { Fragment, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import {
  Transition,
  Listbox,
  Combobox,
  Disclosure,
  Dialog,
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  SelectorIcon,
} from "@heroicons/react/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  doGetByIdCurriculumRequest,
  doUpdateCurriculumRequest,
  doAddCurriculumMateriRequest,
} from "../../../redux-saga/actions/CurriculumAction";
import { doGetInstructorRequest } from "../../../redux-saga/actions/Instructor";

import Page from "../../../component/commons/Page";
import apiCurriculum from "../../../api/api-curriculum";

// static
const payment = ["Regular", "Pay"];
const learning = ["Offline", "Online"];
const category = ["Programming", "Database", "Machine Learning", "DevOps"];
const language = ["Bahasa", "English"];
const attachment = ["Video", "Image", "Script", "Link"];

// component
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-3">
      <label
        className="form-label inline-block mb-2 text-gray-700 text-sm"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className="w-full border border-gray-200 py-2 text-sm bg-white rounded-lg shadow-md focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
        {...field}
        {...props}
        value={field.value || ""}
      />
      {meta.touched && meta.error ? (
        <div className="py-2 text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-3">
      <label
        className="form-label inline-block mb-2 text-gray-700 text-sm"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <textarea
        className="w-full border border-gray-200 py-2 text-sm bg-white rounded-lg shadow-md focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
        {...field}
        {...props}
        value={field.value || ""}
      />
      {meta.touched && meta.error ? (
        <div className="py-2 text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyListbox = ({ label, ...props }) => {
  const { data } = props.data;
  const [field, meta, helpers] = useField(props);
  const [selected, setSelected] = useState();

  useEffect(() => {
    setSelected(() => data.filter((value) => value === field.value)[0]);
  }, [field.value]);

  return (
    <div className="mb-3">
      <Listbox
        value={selected}
        onChange={(value) => {
          setSelected(value);
          helpers.setValue(value);
        }}
      >
        <div className="relative">
          <Listbox.Label className="form-label inline-block mb-2 text-gray-700 text-sm">
            {label}
          </Listbox.Label>
          <Listbox.Button className="relative w-full border border-gray-200 py-2 pl-3 pr-10 text-sm text-left bg-white rounded-lg shadow-md focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500">
            <span className="block truncate">
              {selected === "" || selected === undefined
                ? `Select ${label.toLowerCase()}`
                : selected}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full max-h-60 border border-gray-200 mt-1 py-1 text-base overflow-auto z-10 bg-white rounded-md shadow-lg focus:outline-none">
              {data.map((value, index) => (
                <Listbox.Option
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`
                  }
                  key={index}
                  value={value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate text-sm ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {value}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                          <CheckIcon className="w-h h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      {meta.touched && meta.error ? (
        <div className="py-2 text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const Instructor = (props) => {
  const [field, , helpers] = useField(props);
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");

  useEffect(() => {
    setSelected(
      () => props.data.filter((person) => person.inst_id === field.value)[0]
    );
  }, [props.data, field.value]);

  return (
    <div className="mb-3">
      {props.children({
        ...props,
        selected,
        setSelected,
        query,
        setQuery,
        helpers,
      })}
    </div>
  );
};
const InstructorPhoto = (props) => {
  const [field] = useField(props);
  const [url, setUrl] = useState();

  useEffect(() => {
    props.data.length &&
      field.value &&
      apiCurriculum
        .base64url(
          props.data.filter((inst) => inst.inst_id === field.value)[0]
            .inst_photo
        )
        .then((data) => {
          setUrl(() => data);
        })
        .catch((error) => console.log(error));
  }, [props.data, field.value]);

  return <div className="mb-3">{props.children({ ...props, url })}</div>;
};
const SectionModal = ({ isOpen, setIsOpen, initialValues, handleSubmit }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className="fixed inset-0 p-4 pt-[25vh] overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
      <div className="relative flex flex-col justify-center mx-auto max-w-md p-2 bg-white rounded-xl shadow-2xl ring-1 ring-black/5 space-y-1">
        <Dialog.Title className="px-4">Section</Dialog.Title>
        <Dialog.Description as="div" className="border rounded-lg py-2 text-sm">
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              cuma_section: Yup.string().max(155, "Too long!").nullable(),
            })}
            onSubmit={(values) => handleSubmit(values)}
            enableReinitialize={true}
          >
            {() => (
              <Form className="px-4 text-sm">
                <MyInput
                  label="Section Name"
                  name="cuma_section"
                  type="text"
                  placeholder="Section Name"
                />
                <div className="flex justify-end mt-2 space-x-2">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Dialog.Description>
      </div>
    </Dialog>
  );
};
const SubSectionModal = ({
  isOpen,
  setIsOpen,
  initialValues,
  handleSubmit,
  cuma_cuma_id,
}) => {
  initialValues = {
    ...initialValues,
    cuma_cuma_id,
  };

  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className="fixed inset-0 p-4 pt-[25vh] overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
      <div className="relative flex flex-col justify-center mx-auto max-w-md p-2 bg-white rounded-xl shadow-2xl ring-1 ring-black/5 space-y-1">
        <Dialog.Title className="px-4">Sub Section</Dialog.Title>
        <Dialog.Description as="div" className="border rounded-lg py-2 text-sm">
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              cuma_subsection: Yup.string().max(155, "Too long!").nullable(),
            })}
            onSubmit={(values) => handleSubmit(values)}
            enableReinitialize={true}
          >
            {({ setFieldValue }) => (
              <Form className="px-4 text-sm">
                <MyInput
                  label="Subsection"
                  name="cuma_subsection"
                  type="text"
                  placeholder="Subsection"
                />
                <div className="mb-3">
                  <label className="form-label inline-block mb-2 text-gray-700 text-sm">
                    Duration
                  </label>
                  <div className="flex space-x-1">
                    <input
                      type="number"
                      name="hours"
                      placeholder="0"
                      onChange={(e) => setFieldValue("hours", e.target.value)}
                      className="w-[10vw] border border-gray-200 py-2 text-sm bg-white rounded-lg shadow-md focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />
                    <input
                      type="number"
                      name="minutes"
                      placeholder="0"
                      onChange={(e) => setFieldValue("minutes", e.target.value)}
                      className="w-[10vw] border border-gray-200 py-2 text-sm bg-white rounded-lg shadow-md focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div className="flex items-end space-x-5">
                  <MyListbox
                    label="Attachment"
                    name="cuma_attachment_type"
                    data={{
                      data: attachment,
                    }}
                  />
                  <input
                    type="file"
                    name="cuma_attachment"
                    onChange={(e) =>
                      setFieldValue("cuma_attachment", e.target.files[0])
                    }
                    className="m-0 mb-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                </div>
                <div className="flex justify-end mt-2 space-x-2">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Dialog.Description>
      </div>
    </Dialog>
  );
};

export default function EditCurriculum({ match }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { curriculum } = useSelector((state) => state.curriculumState1);
  const { instructor } = useSelector((state) => state.instructorState);

  const [refresh, setRefresh] = useState(false);
  const [cuma, setCuma] = useState();
  // const [success, setSuccess] = useState(false);

  const [previewImg, setPreviewImg] = useState();
  const [uploaded, setUploaded] = useState(false);

  const [isOpenSection, setIsOpenSection] = useState(false);
  const [isOpenSubSection, setIsOpenSubSection] = useState(false);

  const [cumaId, setCumaId] = useState();

  useEffect(() => {
    const payload = { curr_id: id };

    dispatch(doGetByIdCurriculumRequest(payload));
    dispatch(doGetInstructorRequest());

    setIsOpenSection(false);
    setIsOpenSubSection(false);

    setRefresh(false);
  }, [id, dispatch, refresh]);

  useEffect(() => {
    if (curriculum.curr_logo) {
      apiCurriculum
        .base64url(curriculum.curr_logo)
        .then((data) => {
          setPreviewImg(() => data);
        })
        .catch((error) => console.log(error));
    }
  }, [curriculum.curr_logo]);

  useEffect(() => {
    if (curriculum.curriculum_materis)
      setCuma(() => {
        const section = curriculum.curriculum_materis.filter(
          (c) => c.cuma_cuma_id === null
        );
        const subSection = curriculum.curriculum_materis.filter(
          (c) => c.cuma_cuma_id !== null
        );

        section.map((s, i) => {
          section[i].subSection = [];
          section[i].durrInMinute = 0;

          subSection.map((ss) => {
            if (s.cuma_id === ss.cuma_cuma_id) {
              section[i].subSection.push(ss);

              const time = ss.cuma_duration.split(":");
              if (time.length > 1) {
                const hour = parseInt(time[0].trim());
                const min = parseInt(time[1].trim().split(" ")[0]);
                section[i].durrInMinute += hour * 60 + min;
              }
            }
            return true;
          });
          return true;
        });

        return [...section];
      });
  }, [curriculum.curriculum_materis]);

  // initial values
  const curriculumValues = {
    curr_category: curriculum.curr_category,
    curr_createdon: curriculum.curr_createdon,
    curr_description: curriculum.curr_description,
    curr_duration:
      curriculum.curr_duration &&
      Number(curriculum.curr_duration.split(" ")[0]) / 30,
    curr_headline: curriculum.curr_headline,
    curr_id: curriculum.curr_id,
    curr_inst_id: curriculum.curr_inst_id,
    curr_language: curriculum.curr_language,
    curr_lastupdate: curriculum.curr_lastupdate,
    curr_learning_type: curriculum.curr_learning_type,
    curr_logo: curriculum.curr_logo,
    curr_min_score: curriculum.curr_min_score,
    curr_name: curriculum.curr_name,
    curr_price: curriculum.curr_price,
    curr_rating: curriculum.curr_rating,
    curr_roadmap_materi: curriculum.curr_roadmap_materi,
    curr_tag_skill: curriculum.curr_tag_skill,
    curr_title: curriculum.curr_title,
    curr_total_batch: curriculum.curr_total_batch,
    curr_total_talents: curriculum.curr_total_talents,
    curr_type_payment: curriculum.curr_type_payment,
    curr_user_id: curriculum.curr_user_id,
  };
  const sectionValues = {
    cuma_section: "",
    cuma_curr_id: curriculum.curr_id,
  };
  const subSectionValues = {
    cuma_section: "",
    cuma_subsection: "",
    cuma_attachment: "",
    cuma_attachment_type: "",
    cuma_duration: "",
    cuma_curr_id: curriculum.curr_id,
    cuma_cuma_id: "",
    hours: 0,
    minutes: 0,
  };

  // handle submit
  const handleSubmitCurriculum = async (values) => {
    const payload = {
      ...values,
      curr_duration: `${values.curr_duration * 30} hari`,
    };
    dispatch(doUpdateCurriculumRequest(payload));

    toast.success("Curriculum has been updated.");

    setRefresh(true);
  };
  const handleSubmitSection = async (values) => {
    dispatch(doAddCurriculumMateriRequest(values));

    toast.success("Section has been added.");

    setRefresh(true);
  };
  const handleSubmitSubSection = async (values) => {
    const payload = {
      cuma_section: values.cuma_section,
      cuma_subsection: values.cuma_subsection,
      cuma_attachment: values.cuma_attachment,
      cuma_attachment_type: values.cuma_attachment_type,
      cuma_duration: `${values.hours} : ${values.minutes} minutes`,
      cuma_curr_id: values.cuma_curr_id,
      cuma_cuma_id: values.cuma_cuma_id,
    };
    dispatch(doAddCurriculumMateriRequest(payload));

    toast.success("Sub section has been added.");

    setRefresh(true);
  };

  const uploadOnChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onload = () => {
      setPreviewImg(() => reader.result);
    };

    reader.readAsDataURL(file);
    setUploaded(() => true);
  };

  return (
    <Page
      title="Edit Curriculum"
      titleButton="Back"
      onClick={() => navigate("/app/curriculum")}
    >
      <Formik
        initialValues={curriculumValues}
        validationSchema={Yup.object({
          curr_headline: Yup.string().max(155, "Too long!").nullable(),
          curr_title: Yup.string().max(55, "Too long!").nullable(),
          curr_duration: Yup.number().min(1, "Must be gt 1!").nullable(),
          curr_category: Yup.string().max(15, "Too long!").nullable(),
          curr_price: Yup.number().min(1, "Must be gt 1!").nullable(),
          curr_min_score: Yup.number().min(1, "Must be gt 1!").nullable(),
          curr_tag_skill: Yup.string().max(255, "Too long!").nullable(),
          curr_description: Yup.string().max(255, "Too long!").nullable(),
        })}
        onSubmit={handleSubmitCurriculum}
        enableReinitialize={true}
      >
        {({ setFieldValue, initialValues }) => {
          return (
            <Form className="space-y-2">
              <div className="flex">
                <div className="flex-1 px-4">
                  <MyInput
                    label="Headline"
                    name="curr_headline"
                    type="text"
                    placeholder="Headline"
                  />

                  <MyInput
                    label="Title"
                    name="curr_title"
                    type="text"
                    placeholder="Title"
                  />

                  <div className="md:flex md:justify-between md:space-x-5">
                    <MyListbox
                      label="Payment"
                      name="curr_type_payment"
                      data={{
                        data: payment,
                      }}
                    />

                    <MyListbox
                      label="Learning"
                      name="curr_learning_type"
                      data={{
                        data: learning,
                      }}
                    />

                    <div className="md:flex-none md:w-[15vw]">
                      <MyInput
                        label="Duration in month"
                        name="curr_duration"
                        type="number"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  <div className="md:flex md:justify-between md:space-x-5">
                    <MyListbox
                      label="Category"
                      name="curr_category"
                      data={{
                        data: category,
                      }}
                    />

                    <MyListbox
                      label="Language"
                      name="curr_language"
                      data={{
                        data: language,
                      }}
                    />

                    <div className="md:flex-none md:w-[15vw]">
                      <MyInput
                        label="Price"
                        name="curr_price"
                        type="number"
                        placeholder="Rp. 0"
                      />
                    </div>
                  </div>

                  <div className="md:flex md:justify-between md:space-x-5">
                    <MyInput
                      label="Tags Skill"
                      name="curr_tag_skill"
                      type="text"
                      placeholder="Tags Skill"
                    />

                    <div className="md:flex-none md:w-[10vw]">
                      <MyInput
                        label="Min. Scoring"
                        name="curr_min_score"
                        type="number"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  <div className="md:flex md:items-center md:justify-between md:space-x-5 md:pt-3 md:pr-8">
                    <Instructor name="curr_inst_id" data={instructor}>
                      {({
                        selected,
                        setSelected,
                        query,
                        setQuery,
                        helpers,
                        data,
                      }) => {
                        const filteredInstructor =
                          query === ""
                            ? data
                            : data.filter((inst) =>
                                inst.inst_name
                                  .toLowerCase()
                                  .includes(query.toLowerCase())
                              );

                        return (
                          <Combobox
                            value={selected}
                            onChange={(instructor) => {
                              setSelected(() => instructor);
                              helpers.setValue(instructor.inst_id);
                            }}
                          >
                            <div className="relative">
                              <Combobox.Label className="form-label inline-block mb-2 text-gray-700 text-sm">
                                Instructor
                              </Combobox.Label>
                              <Combobox.Input
                                className="relative w-full border border-gray-200 py-2 pl-3 pr-10 text-sm text-left bg-white rounded-lg shadow-md focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                onChange={(e) => setQuery(e.target.value)}
                                displayValue={(instructor) =>
                                  instructor && instructor.inst_name
                                }
                                autoComplete="off"
                              />
                              <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                afterLeave={() => setQuery("")}
                              >
                                <Combobox.Options className="absolute w-full max-h-60 border border-gray-200 mt-1 py-1 text-base overflow-auto z-10 bg-white rounded-md shadow-lg focus:outline-none">
                                  {filteredInstructor.map((inst) => (
                                    <Combobox.Option
                                      className={({ active }) =>
                                        `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700"
                                        }`
                                      }
                                      key={inst.inst_id}
                                      value={inst}
                                    >
                                      {({ selected }) => (
                                        <>
                                          <span
                                            className={`block truncate text-sm ${
                                              selected
                                                ? "font-medium"
                                                : "font-normal"
                                            }`}
                                          >
                                            {inst.inst_name}
                                          </span>
                                          {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                              <CheckIcon
                                                className="w-h h-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Combobox.Option>
                                  ))}
                                </Combobox.Options>
                              </Transition>
                            </div>
                          </Combobox>
                        );
                      }}
                    </Instructor>
                    <div className="md:flex-none">
                      <InstructorPhoto
                        name="curr_inst_id"
                        data={instructor.length && instructor}
                      >
                        {({ url }) => (
                          <img
                            className="mx-auto h-28 w-28 rounded-full object-cover"
                            src={url}
                            alt="Instructor avatar"
                          />
                        )}
                      </InstructorPhoto>
                    </div>
                  </div>

                  <MyTextarea
                    label="Descriptions"
                    name="curr_description"
                    placeholder="Descriptions"
                  />
                </div>

                <div className="px-10 space-y-5">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="block text-sm font-medium text-gray-700">
                      Curriculum Register No
                    </span>
                    <span className="block py-1 px-2 border border-gray-300 bg-gray-600 text-sm font-medium text-white rounded-lg shadow-md">
                      {initialValues.curr_name}
                    </span>
                  </div>

                  <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      {uploaded || previewImg ? (
                        <>
                          <img
                            className="mx-auto h-48 w-48 object-cover"
                            src={previewImg}
                            alt="Curriculum logo"
                          />
                          <div className="flex justify-center text-sm text-gray-600">
                            <label className="relative cursor-pointer font-medium text-orange-600 hover:text-indigo-500">
                              <span
                                onClick={() => {
                                  setUploaded(() => false);
                                  setPreviewImg(() => null);
                                  setFieldValue("curr_logo", null);
                                }}
                              >
                                Remove
                              </span>
                            </label>
                          </div>
                        </>
                      ) : (
                        <div className="text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-48 w-48"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      )}

                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          <span>Upload a file</span>
                          <input
                            className="sr-only"
                            type="file"
                            onChange={(e) => {
                              setFieldValue("curr_logo", e.target.files[0]);
                              uploadOnChange(e);
                            }}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-2 px-4 py-2 space-x-2 bg-black/5 md:pr-10">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/app/curriculum")}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                >
                  Cancel
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>

      <div className="mt-8 mb-3 space-y-2">
        <div className="px-4 space-y-2 md:pr-10">
          <h1>Materi (Add Section & Sub Section Materi)</h1>
          <div className="flex justify-end px-4 text-gray-700">
            <button onClick={() => setIsOpenSection(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          {cuma &&
            cuma.map((section) => (
              <Disclosure key={section.cuma_id}>
                {({ open }) => (
                  <>
                    <div className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{section.cuma_section}</span>
                      <div className="flex items-center space-x-2 text-xs">
                        <span>
                          Duration : {parseInt(section.durrInMinute / 60)} hours
                        </span>
                        <button
                          onClick={() => {
                            setCumaId(section.cuma_id);
                            setIsOpenSubSection(true);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                        <Disclosure.Button>
                          <ChevronDownIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-gray-700`}
                          />
                        </Disclosure.Button>
                      </div>
                    </div>
                    {section.subSection &&
                      section.subSection.map((ss, i) => (
                        <Disclosure.Panel
                          key={i}
                          className="px-4 pt-2 pb-1 text-sm text-gray-500"
                        >
                          <div className="flex justify-between">
                            <div className="underline">
                              {ss.cuma_subsection || ss.cuma_section}
                            </div>
                            <div className="flex space-x-2">
                              <div>
                                <span>
                                  {ss.cuma_duration || "0 : 0 minutes"}
                                </span>
                              </div>
                              <div>
                                {ss.cuma_attachment_type === "Video" ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                                    />
                                  </svg>
                                ) : ss.cuma_attachment_type === "Image" ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    />
                                  </svg>
                                )}
                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      ))}
                  </>
                )}
              </Disclosure>
            ))}
        </div>
      </div>

      <SectionModal
        isOpen={isOpenSection}
        setIsOpen={setIsOpenSection}
        initialValues={sectionValues}
        handleSubmit={handleSubmitSection}
      />

      <SubSectionModal
        cuma_cuma_id={cumaId}
        isOpen={isOpenSubSection}
        setIsOpen={setIsOpenSubSection}
        initialValues={subSectionValues}
        handleSubmit={handleSubmitSubSection}
      />

      <ToastContainer className="z-50 absolute" autoClose={2000} />
    </Page>
  );
}
