import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
//import redux needed
import { useDispatch, useSelector } from "react-redux";
import { doGetBatchRequest } from "../../../redux-saga/actions/BatchAction";
import { doAddBatchRequest } from "../../../redux-saga/actions/BatchAction";
import { doAddBatchSucceed } from "../../../redux-saga/actions/BatchAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import apiBatch from "../../../api/ApiBatch";
import CreateSuccess from "../../../component/batch/CreateSuccess";
import Page from "../../../component/commons/Page";

export default function Batch() {
  let navigate = useNavigate();
  const [totalTalent, setTotalTalent] = useState(0);
  const [talentCheck, setTalentCheck] = useState([]);
  const dispatch = useDispatch();
  const { batch } = useSelector((state) => state.batchState);
  const status = useSelector((state) => state.batchState);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  let [isOpen, setIsOpen] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(doGetBatchRequest());
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (status.status === "error") {
      toast.error("Batch sudah ada. Silahkan gunakan nama baru");
    } else if (status.status === "success") {
      // navigate("/app/batch/success");
      setIsOpen(true);
    } else {
    }
  }, [status]);

  const onCheckTalent = (item) => (event) => {
    let status = event.target.checked;
    let tampung = [status, item];

    if (tampung[0] === true) {
      setTalentCheck([...talentCheck, item]);
      setTotalTalent(totalTalent + 1);
    } else {
      const filterdTalent = talentCheck.filter(
        (talent) => talent.tale_id !== item.tale_id
      );
      setTalentCheck([...filterdTalent]);
      setTotalTalent(totalTalent - 1);
    }
  };

  const validationSchema = Yup.object().shape({
    batch_name: Yup.string("Enter Batch Name").required(
      "batch name is required"
    ),
  });

  const formik = useFormik({
    initialValues: {
      batch_name: "",
      batch_technology: "",
      batch_type: "",
      batch_inst_id: 1,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      //ganti format tanggal jadi YYYY-MM-DD
      const mergeStartDate = [
        startDate.getFullYear(),
        startDate.getMonth() + 1,
        startDate.getDate(),
      ];
      const mergeEndDate = [
        endDate.getFullYear(),
        endDate.getMonth() + 1,
        endDate.getDate(),
      ];
      const start_date = mergeStartDate.join("-");
      const end_date = mergeEndDate.join("-");
      const batch_start_date = start_date;
      const batch_end_date = end_date;

      //selisih
      // const diffMonth = ((endDate.getFullYear()*12 + endDate.getMonth()) - (startDate.getFullYear()*12 + startDate.getMonth()))
      const selisihMiliSecond = new Date(endDate) - new Date(startDate);
      const miliSecondPerDay = 60 * 60 * 24 * 1000;
      const selisihPerHari = selisihMiliSecond / miliSecondPerDay;
      const diffDay = Math.round(selisihPerHari + 1);
      const test = {
        ...values,
        batch_start_date,
        batch_end_date,
        totalTalent,
        diffDay,
        talentCheck,
      };
      console.log(test);

      dispatch(
        doAddBatchRequest({
          ...values,
          batch_start_date,
          batch_end_date,
          totalTalent,
          diffDay,
          talentCheck,
        })
      );
    },
  });

  return (
    <Page
      title="Create Batch"
      titleButton="Back"
      onClick={() => navigate("/app/batch")}
    >
        <form action="#" method="POST">
          <div
            className=" bg-white px-5 border rounded-xl border-gray-400"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div class="flex justify-between">
              <div className="flex w-8/12 flex-col ml-8 pt-10 pb-12">
                <div className=" w-full ">
                  <div className="flex-1 mt-5 mb-8">
                    <div class="w-full mb-6  md:mb-0 ">
                      <label
                        class="block tracking-wide text-gray-800 font-semibold mb-2"
                        for="grid-first-name"
                      >
                        Batch Name
                      </label>

                      <input
                        class="block w-full text-gray-800 rounded-lg bg-white appearance-none border border-gray-500 hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none focus:shadow-outline"
                        placeholder="Batch Name"
                        id="batch_name"
                        name="batch_name"
                        value={formik.values.batch_name}
                        onChange={formik.handleChange}
                      />
                    </div>

                    {formik.touched.batch_name && formik.errors.batch_name ? (
                      <span className="error text-red-600 italic text-sm ml-4">
                        {formik.errors.batch_name}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-1 justify-between space-x-20 mb-8">
                  <div className="flex-1">
                    <div class="w-full md:mb-0">
                      <label
                        class="block tracking-wide text-gray-800 font-semibold mb-2"
                        for="grid-state"
                      >
                        Tipe
                      </label>
                      <div class="relative">
                        <select
                          class="block w-full rounded-lg text-gray-800 bg-white appearance-none border hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none"
                          name="batch_type"
                          id="batch_type"
                          value={formik.values.batch_type}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="batch_type"
                        >
                          <option value="offline">Offline</option>
                          <option value="online">Online</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 mr-5">
                    <div class="w-full mb-6 md:mb-0  ">
                      <label
                        class="block tracking-wide text-gray-800 font-semibold mb-2"
                        for="grid-state"
                      >
                        Technology
                      </label>
                      <div class="relative">
                        <select
                          class="block w-full text-gray-800 rounded-lg bg-white appearance-none border hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none"
                          name="batch_technology"
                          id="batch_technology"
                          value={formik.values.batch_technology}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="batch_technology"
                        >
                          {batch.curriculum &&
                            batch.curriculum.map((items) => (
                              <option value={items.curr_name}>
                                {items.curr_name}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex-1">
                      <div class="w-full mb-6 md:mb-0 ">
                        <label
                          class="block tracking-wide text-gray-800 font-semibold mb-2"
                          for="grid-state"
                        >
                          Trainer
                        </label>
                        <div class="relative">
                          <select
                            class="block w-full text-gray-800 rounded-lg bg-white appearance-none border hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none"
                            name="batch_inst_id"
                            id="batch_inst_id"
                            value={formik.values.prod_cate_id}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="batch_inst_id"
                          >
                            {batch.instructor &&
                              batch.instructor.map((items) => (
                                <option value={items.inst_id}>
                                  {items.inst_name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 justify-betwee mb-8 ">
                  <div className="flex flex-1 justify-between">
                    <div className="flex-1 flex m-auto flex-col ">
                      <label
                        class="block tracking-wide text-gray-800 text-sm mb-2"
                        for="grid-zip"
                      >
                        Periode
                      </label>
                      <div className="relative flex  items-end">
                        <DatePicker
                          className=" mt-1 w-full text-gray-800 rounded-lg bg-white appearance-none border hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none"
                          selected={startDate}
                          name="batch_start_date"
                          id="batch_start_date"
                          onChange={(date) => setStartDate(date)}
                          autoComplete="batch_start_date"
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
                          name="batch_end_date"
                          id="batch_end_date"
                          value={endDate}
                          autoComplete="batch_end_date"
                        />
                        <div className="bg-blue-100  border border-gray-400 shadow-lg rounded-lg w-14 h-11 flex items-center justify-center text-gray-600 text-xs font-medium ">
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="w-6 h-6 shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-4/12 flex items-center justify-center my-10 flex-col">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="h-32 w-32 text-red-600"
                />
                <h1 className="text-gray-800 font-bold text-4xl">
                  {totalTalent}
                </h1>
              </div>
            </div>
            {/* sini */}

            <h1 class="block tracking-wide text-gray-500 text-2xl font-bold mt-5 ml-8">
              Recommeded Bootcamp Members
            </h1>

            <div className="flex flex-wrap justify-between  py-2 ">
              {batch.talent &&
                batch.talent.map((items) => (
                  <label class="relative flex w-72 mt-12 mb-10 bg-none items-center py-5 hover:scale-105">
                    <input
                      type="checkbox"
                      class="left-0 top-0 w-72 h-full hidden sr-only peer rounded-md"
                      name="talent_batch"
                      id="talent_batch"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="talent_batch"
                      onClick={onCheckTalent(items)}
                    />
                    <div class="absolute ml-7 p-5 flex items-center drop-shadow-lg border border-gray-400 bg-amber-100  w-11/12 duration-300 ease-in-out rounded-xl peer-checked:bg-emerald-200">
                      <div className="flex w-3/4 ml-20 items-end">
                        <div className="w-full">
                          <h1 className="font-bold mb-1 truncate w-28 text-gray-800">
                            {" "}
                            {items.tale_fullname}
                          </h1>
                          <p className="truncate text-xs w-32 text-teal-900">
                            {items.tale_school_name}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute flex flex-1 justify-end ml-64 peer-checked:rotate-45 duration-300 peer-checked:block items-center">
                      <div className="w-full ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 "
                          viewBox="0 0 20 20"
                          fill="#8a8a8a"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute ml-8 mr-2 w-20 h-20 border border-gray-400 rounded-full duration-300 ease-in-out bg-orange-300 flex items-center justify-center peer-checked:bg-emerald-400">
                      <img
                        className=" w-16 h-16 border border-gray-400 rounded-full"
                        src={`/assets/images/yuri.jpg`}
                        alt=""
                      />
                    </div>
                  </label>
                ))}
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
