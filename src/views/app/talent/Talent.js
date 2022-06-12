import { Menu, Transition } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon,PencilAltIcon} from "@heroicons/react/outline";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetTalentRequest } from "../../../redux-saga/actions/Talent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Page from "../../../component/commons/Page";
import config from "../../../config/config";

const columns = [{ name: "FULL NAME" }, { name: "TECHNOLOGY" }, { name: "BATCH" }, { name: "PERIODE" }, { name: "TRAINER" }, { name: "STATUS" }];
const tal_status = ["On Bootcamp", "Idle", "Trial", "Placement"];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Talent() {
  let navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const [listTalents, setListTalents] = useState([]);
  const [filter, setFilter] = useState({
    input: "",
    select: "",
  });

  const [pageNumbers, setPageNumbers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState(0);

  const { talent } = useSelector((state) => state.talentState);
  const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    dispatch(doGetTalentRequest());

    if (location.state && location.state.updated) {
      toast.success("Batch has been updated.");
    }
  }, []);

  useEffect(() => {
    setListTalents(
      Array.isArray(talent) &&
        talent.filter(
          (data) =>
            (data.tale_fullname.toLowerCase().includes(filter.input.toLowerCase()) || data.tale_bootcamp.toLowerCase().includes(filter.input.toLowerCase())) &&
            (filter.select === "Status" || data.tale_status_timeline.includes(filter.select))
        )
    );
  }, [talent]);

  useEffect(() => {
    setPageNumbers(Array.from({ length: Math.ceil(listTalents.length / 10) }, (v, i) => (i + 1 === 1 ? { number: i + 1, active: true } : { number: i + 1, active: false })));
    setCurrentPage(1);
    setPageRange(0);
  }, [listTalents]);

  const handleOnChange = (name) => (event) => {
    setFilter({ ...filter, [name]: event.target.value });
  };

  const onSearch = (event) => {
    event.preventDefault();
    setListTalents(
      Array.isArray(talent) &&
        talent.filter(
          (data) =>
            (data.tale_fullname.toLowerCase().includes(filter.input.toLowerCase()) || data.tale_bootcamp.toLowerCase().includes(filter.input.toLowerCase())) &&
            (filter.select === "Status" || data.tale_status_timeline.includes(filter.select))
        )
    );
  };

  return (
    <>
      <Page title="Talent" titleButton="Create" onClick={() => navigate("/app/talent/new")}>
        <div className="mt-6 mx-24 flex justify-center">
          <div className="w-full">
            <div className="input-group relative flex justify-center items-stretch w-full mb-2">
              <p className="text-sm mx-2 py-1">Search by Category</p>
              <input
                type="search"
                onChange={handleOnChange("input")}
                className="form-control relative w-56 block px-4 py-0.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 focus:outline-none"
                placeholder="talent name, technology"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <select
                name="tale_status_timeline"
                id="tale_status_timeline"
                onChange={handleOnChange("select")}
                className="capitalize form-select form-select-sm appearance-none block mx-1 px-2 py-0.5 w-24 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500"
                aria-label=".form-select-sm example"
              >
                <option>Status</option>
                {(tal_status || []).map((value, index) => (
                  <option className="capitalize" value={value} key={index}>
                    {value}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                onClick={onSearch}
                className="btn px-3 py-1 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 transition duration-150 ease-in-out flex items-center"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="sm:block">
          <div className="align-middle inline-block min-w-full border-b border-gray-200 ">
            <table className="min-w-full">
              <thead className="border-y border-gray-200">
                <tr key="col_names">
                  {(columns || []).map((column) => (
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs font-bold text-gray-900 uppercase">
                      <span className="">{column.name}</span>
                    </th>
                  ))}
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-900 uppercase tracking-wider" />
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {Array.isArray(listTalents) &&
                  listTalents.slice((currentPage - 1) * 10, currentPage * 10).map((data) => (
                    <tr key={data.tale_id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img
                                                                className="h-10 w-10 rounded-full"
                                                                src={`${config.domain}/talent/images/${data.tale_photo}`}
                                                                alt={`${data.tale_id}`}
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-normal text-gray-900">
                                                                {
                                                                    data.tale_fullname
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                      <td className="px-6 py-2 text-start font-normal whitespace-nowrap text-left text-gray-900">{data.tale_bootcamp}

                    </td>

                      <td className="px-6 py-2 text-start font-normal whitespace-nowrap text-left text-gray-900">
                        {data.talent_batches.map((talent) => (
                          <p>{talent.taba_batch.batch_name}</p>
                        ))}
                      </td>

                      <td className="px-6 py-2 font-normal text-start whitespace-nowrap text-left text-gray-900">
                        {data.talent_batches.map((talent) => (
                          <p>{talent.taba_batch.batch_start_date}</p>
                        ))}
                        {data.talent_batches.map((talent) => (
                          <p>{talent.taba_batch.batch_end_date}</p>
                        ))}
                      </td>
                      <td className="px-6 py-2 font-normal whitespace-nowrap text-left text-gray-900 text-start">
                        {data.talent_batches.map((talent) => (
                          <p>{talent.taba_batch.batch_inst.inst_name}</p>
                        ))}
                      </td>
                      <td className="px-6 py-2 font-normal whitespace-nowrap text-left text-gray-900 text-start capitalize">
                        <div>{data.tale_status_timeline}</div>
                        {/* {data.talent_placements.map((talent, i) => {
                          if (i === 0) {
                            return <p>{talent.tapl_drop_date}</p>;
                          }
                        })} */}
                        <div>{console.log(data)}</div>
                      </td>
                      <td className="pr-6">
                        <Menu as="div" className="relative flex justify-end items-center">
                          {({ open }) => (
                            <>
                              <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-600 rounded-full hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ">
                                <span className="sr-only">Open options</span>
                                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                              </Menu.Button>
                              <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items static className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-gray-100 ring-1 ring-gray-900 ring-opacity-5 divide-y divide-gray-300 focus:outline-none">
                                  {userProfile.userRoles === "administrator" && (
                                    <div className="py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <Link to={"/app/batch/edit/" + data.place_id} className={classNames(active ? "bg-gray-300 text-gray-700" : "text-gray-900", "group flex items-center px-4 py-2 text-sm")}>
                                            <PencilAltIcon className="mr-3 h-5 w-5 text-gray-700 group-hover:text-gray-500" aria-hidden="true" />
                                            Talent detail
                                          </Link>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  )}
                                </Menu.Items>
                              </Transition>
                            </>
                          )}
                        </Menu>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {listTalents.length === 0 && <div className="px-6 py-3 text-center whitespace-nowrap text-sm font-medium text-gray-900"> Data Not Found...</div>}

            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> to <span className="font-medium">{currentPage * 10 < listTalents.length ? currentPage * 10 : listTalents.length}</span> of{" "}
                    <span className="font-medium">{listTalents.length}</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button
                      onClick={() => {
                        setCurrentPage(1);
                        setPageNumbers([...pageNumbers].map((val) => (val.number === 1 ? { ...val, active: true } : { ...val, active: false })));
                        setPageRange(0);
                      }}
                      className="relative inline-flex items-center px-3 py-2 font-medium text-gray-600 hover:text-orange-600"
                    >
                      <span className="underline">First</span>
                    </button>
                    <button
                      onClick={() => {
                        const min = 0;
                        if (pageRange > min) {
                          setPageRange(pageRange - 1);
                        }
                      }}
                      >
                      <span className="sr-only">Previous</span>
                      {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
                    </button>
                    {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

                    {pageNumbers.slice(pageRange * 4, pageRange * 4 + 4).map((el) => (
                      <button
                        onClick={() => {
                          setCurrentPage(el.number);
                          setPageNumbers([...pageNumbers].map((val) => (val.number === el.number ? { ...val, active: true } : { ...val, active: false })));
                        }}
                        aria-current="page"
                        className={classNames(el.active ? "z-20 bg-orange-100 border-orange-600 rounded text-orange-900" : "z-10 bg-white border-gray-300 text-gray-600 rounded", "relative inline-flex items-center px-4 py-2 border text-sm font-medium")}
                      >
                        {el.number}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        const max = Math.ceil(pageNumbers.length / 4) - 1;
                        if (pageRange < max) {
                          setPageRange(pageRange + 1);
                        }
                      }}
                      >
                      <span className="sr-only">Next</span>
                      {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
                    </button>
                    <button
                      onClick={() => {
                        const max = Math.ceil(pageNumbers.length / 4) - 1;
                        setCurrentPage(pageNumbers.length);
                        setPageNumbers([...pageNumbers].map((val) => (val.number === pageNumbers.length ? { ...val, active: true } : { ...val, active: false })));
                        setPageRange(max);
                      }}
                      className="relative inline-flex items-center px-3 py-2 font-medium text-gray-600 hover:text-orange-600"
                    >
                      <span className="underline">Last</span>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
}
