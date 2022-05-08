import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../../component/commons/Page";

export default function Placement() {
  let navigate = useNavigate();
  return (
    <Page title="Placement" titleButton="Create" onClick={() => navigate("/app/batch/new")}>
      <div className="mt-6 mx-24 flex justify-center">
        <div className="w-full">
          <div className="input-group relative flex justify-center items-stretch w-full mb-2">
            <p className="text-sm mx-2 py-1">Search by Category</p>
            <input
              type="search"
              className="form-control relative w-56 block px-4 py-0.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 focus:outline-none"
              placeholder="client, recruiter, po number"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <select
              name="batch_status"
              id="batch_status"
              className="capitalize form-select form-select-sm appearance-none block mx-1 px-2 py-0.5 w-24 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500"
              aria-label=".form-select-sm example"
            >
              <option>Status</option>
            </select>
            <button
              type="submit"
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
                <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-900 uppercase">
                  <span className="">CONTRACT NO.</span>
                </th>
                <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-900 uppercase">
                  <span className="">CLIENT</span>
                </th>
                <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-900 uppercase">
                  <span className="">TALENTS</span>
                </th>
                <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-900 uppercase">
                  <span className="">PERIODE</span>
                </th>
                <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-900 uppercase">
                  <span className="">CREATED BY</span>
                </th>
                <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-900 uppercase">
                  <span className="">STATUS</span>
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-900 uppercase tracking-wider" />
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-2 text-center whitespace-nowrap text-sm text-gray-900">PO#202202-01</td>
                <td className="px-6 py-2 text-center whitespace-nowrap text-sm text-gray-900">Artaka</td>
                <td className="px-6 py-2 flex justify-center whitespace-nowrap text-sm text-gray-900">Fadlur, Afif</td>
                <td className="px-6 py-2 text-center whitespace-nowrap text-xs text-gray-900">
                  <div>March 18,2020</div>
                  <div>June 18, 2020</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-center">Novelina Ayang</td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-center capitalize">
                  <div>Placement</div>
                  <div>Feb 18, 2021</div>
                </td>
                <td className="pr-6">
                  <Menu as="div" className="relative flex justify-end items-center">
                    {({ open }) => (
                      <>
                        <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-600 rounded-full hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ">
                          <span className="sr-only">Open options</span>
                          <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
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
                          <Menu.Items
                            static
                            className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-gray-100 ring-1 ring-gray-900 ring-opacity-5 divide-y divide-gray-300 focus:outline-none"
                          ></Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Page>
  );
}
