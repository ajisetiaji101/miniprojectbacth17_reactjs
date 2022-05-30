import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  AddPlacementsRequest,
  GetPlacementsRequest,
  GetClientRequest,
} from "../../../redux-saga/actions/AddPlacementsAct";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import config from '../../../config/config'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Page from "../../../component/commons/Page";
import ReactPaginate from "react-paginate";

export default function AddPlacement(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalTalent, setTotalTalent] = useState(0);
  const [talentCheck, setTalentCheck] = useState({
    batch_user: [],
    response: [],
  });
  
  let [refresh, setRefresh] = useState(false);
  const { placements } = useSelector((state) => state.addplacementsStated);
  const { client } = useSelector((state) => state.addplacementsStated);

//search
const [searchTerm, setSearchTerm] = useState("");
  const onCheckTalent = (item) => (event) => {
    let { value, checked } = event.target;
    let { batch_user } = talentCheck;

    if (checked) {
      setTalentCheck({
        batch_user: [...batch_user, value],
        response: [...batch_user, value],
      });
      setTotalTalent(totalTalent + 1);
    } else {
      setTalentCheck({
        batch_user: batch_user.filter((e) => e !== value),
        response: batch_user.filter((e) => e !== value),
      });
      setTotalTalent(totalTalent - 1);
    }
  };

  //add data
  const formik = useFormik({
    initialValues: {
      place_id: "",
      place_contract_no: "",
      place_created: "",
      place_start_date: "",
      place_end_date: "",
      place_status: "",
      place_note: "",
      place_client_id: null,
    },
    onSubmit: async (values) => {
      dispatch(AddPlacementsRequest(values));
      navigate("/app/placement", { state: "" });
      window.alert("Data Succesfully Insert");
    },
  });

  useEffect(() => {
    dispatch(GetPlacementsRequest());
    setRefresh(false);
  }, [refresh]);

  useEffect(() => {
    dispatch(GetClientRequest());
    setRefresh(false);
  }, [refresh]);

  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;
  //const pageCount= Math.ceil(searchTerm.length / usersPerPage)
  const pageCount = Math.ceil(placements.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Page
      title="Create Placement"
      titleButton="Back"
      onClick={() => navigate("/App/placement")}
    >
      <form action="#" method="POST">
        <div
          className=" bg-white px-5 border rounded-xl border-gray-400"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div class="flex justify-between">
            <div className="flex w-8/12 flex-col ml-8 pt-10 pb-12">
              
              {/* contract&create&status */}
              <div className="flex flex-1 justify-between space-x-20">
                <div className="flex-1">
                  <div class="w-full md:mb-0">
                    <label
                      class="block tracking-wide text-gray-800 font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Contract Number
                    </label>
                    <div class="relative">
                      <input
                        class="block w-full text-gray-800 rounded-lg bg-white appearance-none border border-gray-500 hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none focus:shadow-outline"
                        type="text"
                        name="place_contract_no"
                        id="place_contract_no"
                        value={formik.values.place_contract_no}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="place_contract_no"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 justify-betwee mb-8 ">
                  <div className="flex flex-1 justify-between">
                    <div className="flex-1 flex m-auto flex-col ">
                      <label
                        className="block tracking-wide text-gray-800 font-semibold mb-2"
                        for="grid-first-name"
                      >
                        Create On
                      </label>
                      <div class="relative flex  items-end">
                        <input
                          className=" block w-full text-gray-800 rounded-lg bg-white appearance-none border border-gray-500 hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none focus:shadow-outline"
                          type="date"
                          name="place_created"
                          id="place_created"
                          value={formik.values.place_created}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="place_created"
                        />
                      </div>
                    </div>
                    <h1 className="flex w-2/12 items-center font-semibold justify-center mt-7"></h1>
                    <div className="flex flex-1 justify-between ">
                      <div className="flex-1 flex m-auto flex-col">
                        <label
                          className="block tracking-wide text-gray-800 font-semibold mb-2"
                          for="grid-first-name"
                        >
                          Status
                        </label>
                        <div class="relative flex  items-end">
                          <select
                            class="block w-full text-gray-800 rounded-lg bg-white appearance-none border border-gray-500 hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none focus:shadow-outline"
                            name="place_status"
                            id="place_status"
                            value={formik.values.place_status}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="place_status"
                          >
                            <option value="trial">Trial </option>
                            <option value="placement">Placement</option>
                            <option value="canceled">Canceled</option>
                            <option value="closed">Closed</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* client&periode */}
              <div className="flex flex-1 justify-between space-x-20">
                <div className="flex-1">
                  <div class="w-full md:mb-0">
                    <label
                      className="block tracking-wide text-gray-800 font-semibold mb-2"
                      for="grid-first-name"
                    >
                      Client
                    </label>
                    {/* <select options={client}/> */}
                    <div class="relative">
                      <select
                        className="block w-full text-gray-800 rounded-lg bg-white appearance-none border hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none"
                        name="place_client_id"
                        id="place_client_id"
                        value={formik.values.place_client_id}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="place_client_id"
                      >
                        {client.map((cli) => (
                          <option value={cli.client_id}>
                            {cli.client_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 justify-betwee mb-8 ">
                  <div className="flex flex-1 justify-between">
                    <div className="flex-1 flex m-auto flex-col ">
                      <label
                        className="block tracking-wide text-gray-800 font-semibold mb-2"
                        for="grid-first-name"
                      >
                        Start Period
                      </label>
                      <div className="relative flex  items-end">
                        <input
                          className="block w-full text-gray-800 rounded-lg bg-white appearance-none border border-gray-500 hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none focus:shadow-outline"
                          type="date"
                          name="place_start_date"
                          id="place_start_dateplace_start_date"
                          value={formik.values.place_start_date}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoComplete="place_start_date"
                        />
                      </div>
                    </div>

                    <h1 className="flex w-2/12 items-center font-semibold justify-center mt-7">to</h1>
                    
                    <div className="flex flex-1 justify-between ">
                      <div className="flex-1 flex m-auto flex-col">
                        <label className="block tracking-wide text-gray-800 font-semibold mb-2"
                          for="grid-first-name">
                            End Period
                        </label>
                          <div className="relative flex  items-end">
                            <input
                              className="block w-full text-gray-800 rounded-lg bg-white appearance-none border border-gray-500 hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none focus:shadow-outline"
                              type="date"
                              name="place_end_date"
                              id="place_end_date"
                              value={formik.values.place_end_date}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              autoComplete="place_end_date"
                            />
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="flex flex-1 justify-between space-x-20">
                <div className="flex-1">
                    <label
                      className="block tracking-wide text-gray-800 font-semibold mb-2"
                      for="grid-first-name"
                    >
                        Notes
                      </label>
                      <textarea
                        class="block w-full text-gray-800 rounded-lg bg-white appearance-none border border-gray-500 hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none focus:shadow-outline"
                        size="md"
                        name="place_note"
                        id="place_note"
                        value={formik.values.place_note}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="place_note"
                      />
                  </div>
                </div>
              </div>


            <div class="w-4/12 flex items-center justify-center my-10 flex-col">
              <FontAwesomeIcon
                icon={faUsers}
                className="h-40 w-40 text-red-600"
              />
              <h1 className="text-gray-800 font-bold text-4xl">
                {totalTalent}
              </h1>
            </div>
          </div>

          {/*area search */}
          <h1 class="block tracking-wide text-gray-500 text-2xl font-bold ml-8">
            RECOMENDED BOOTCAMP TALENTS
          </h1>
          <div className=" w-full ">
            <div className="flex-1 mt-5 ">
              <div class="w-full mb-6  md:mb-0 ">
                <div className="flex justify-start mt-auto py-3 text-right ml-8">
                  <input
                    class="block w-70 text-gray-800 rounded-lg bg-white appearance-none border border-gray-500 hover:border-gray-500 px-4 py-2 focus:bg-blue-100 focus:outline-none focus:shadow-outline"
                    type="text"
                    name="filter"
                    id="filter"
                    value={searchTerm}
                    placeholder="Search Batch#"
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* area checkbox */}
            <div className="flex flex-wrap content-start py-2 mr-14">
              {placements &&
                placements
                  .filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.batch_name
                        .toLowerCase()
                        .includes(searchTerm.toLocaleLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  .map((pla) => (
                    <label class="relative flex w-1/3 mt-12 mb-16 bg-none items-center py-5 hover:scale-105">
                      <input
                        type="checkbox"
                        class="left-0 top-0 w-1/3 h-full hidden sr-only peer rounded-md"
                        name="place_user_id"
                        id="place_user_id"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={pla.tale_id}
                        autoComplete="place_user_id"
                        onClick={onCheckTalent(pla)}
                      />
                      {/* kotak button */}
                      <div class="absolute ml-7 p-5 h-32 flex items-center drop-shadow-lg border border-gray-400 bg-amber-100  w-11/12 duration-300 ease-in-out rounded-xl peer-checked:bg-emerald-200">
                        <div className="flex w-3/4 ml-40 items-end">
                          <div className="w-full">
                            <h1 className="font-bold mb-1 truncate w-28 text-gray-800">
                              {" "}
                              {pla.tale_fullname}
                            </h1>
                            <p className="truncate text-base w-32 text-teal-900">
                              {pla.batch_name}
                              <b> {pla.batch_technology}</b>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* logo + */}
                      <div className="absolute flex flex-1 justify-end ml-96 peer-checked:rotate-45 duration-300 peer-checked:block items-center">
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

                      {/* gambar */}
                      <div className="absolute ml-24 mr-2 w-24 h-24 border border-gray-400 rounded-full duration-300 ease-in-out bg-orange-300 flex items-center justify-center peer-checked:bg-emerald-400">
                        <img
                          className=" w-20 h-20 border border-gray-400 rounded-full"
                          src={`${config.urlImageTalent}/${pla.tale_photo}`}
                          alt={`${pla.tale_id}`}
                        />
                      </div>
                    </label>
                  ))}
            </div>
          </div>

          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={
              " bg-white px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6"
            }
            previousLinkClassName={
              "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            }
            nextLinkClassName={
              "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            }
            pageClassName={
              "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            }
            disabledClassName={""}
            activeClassName={
              "z-20 bg-orange-100 border-orange-600 text-orange-900"
            }
          />

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
              onClick={() => navigate("/")}
              className="flex justify-center w-28 py-2 px-4 border border-slate-800 shadow-sm text-sm font-medium  text-slate-900 bg-white hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </Page>
  );
}
