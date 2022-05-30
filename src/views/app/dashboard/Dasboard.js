import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetTalentRequest,
  GetTrainingRequest,
  GetBoardingRequest,
  GetIdleRequest,
} from "../../../redux-saga/actions/DasboardAct";

import BulanChart from "./BulanChart";
import InterestChart from "./Interest";
import BoardIdleChart from "./BoardVsIdle";
import PendidikanChart from "./PendidikanChart";
import UniversitasChart from "./UniversitasChart";
import JurusanChart from "./JurusanChart";

export default function Talent() {
  const dispatch = useDispatch();
  const { talent } = useSelector((state) => state.dasboardStated);
  const { training } = useSelector((state) => state.dasboardStated);
  const { boarding } = useSelector((state) => state.dasboardStated);
  const { idle } = useSelector((state) => state.dasboardStated);

  useEffect(() => {
    dispatch(GetTalentRequest());
  }, []);
  useEffect(() => {
    dispatch(GetTrainingRequest());
  }, []);
  useEffect(() => {
    dispatch(GetBoardingRequest());
  }, []);
  useEffect(() => {
    dispatch(GetIdleRequest());
  }, []);

  return (
    <div>
      <div className="border-b border-gray-200 px-6 py-6 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-bold leading-6 text-gray-900 sm:truncate">
            HOME
          </h1>
        </div>
      </div>

      <div class="min-h-screen w-full p-4">
        <div class="w-full mb-6 pt-3">
          <div class="flex flex-row items-center justify-between mb-4">
            <div class="flex flex-col">
              {/* <div className="text-xs uppercase font-light text-gray-500">
                  Overview
                </div> */}
              <div class="text-xl font-bold">SUMMARY</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
          <tr class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
            <div class="w-full lg:w-1/4">
              <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100  dark:border-gray-800">
                <div class="flex flex-row items-center justify-between">
                  <div class="flex flex-col">
                    <div class="text-xs uppercase font-light text-black">
                      candidate
                    </div>
                    {/* data kandidat */}
                    {talent &&
                      talent.map((tale) => (
                        <div class="text-xl text-black font-bold">
                          {tale.jumlah_kandidat}
                        </div>
                      ))}
                  </div>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="stroke-current text-black"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/4">
              <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100  dark:border-gray-800">
                <div class="flex flex-row items-center justify-between">
                  <div class="flex flex-col">
                    <div class="text-xs uppercase font-light text-black">
                      On Training
                    </div>
                    {/* data training */}
                    {training &&
                      training.map((train) => (
                        <div class="text-xl text-black font-bold">
                          {train.jumlah_trial}
                        </div>
                      ))}
                  </div>

                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewbox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="stroke-current text-black"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/4">
              <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100  dark:border-gray-800">
                <div class="flex flex-row items-center justify-between">
                  <div class="flex flex-col">
                    <div class="text-xs uppercase font-light text-black">
                      On Boarding
                    </div>
                    {/* data kandidat */}
                    {boarding &&
                      boarding.map((boar) => (
                        <div class="text-xl text-black font-bold">
                          {boar.jumlah_boarding}
                        </div>
                      ))}
                  </div>

                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewbox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="stroke-current text-black"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/4">
              <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100  dark:border-gray-800">
                <div class="flex flex-row items-center justify-between">
                  <div class="flex flex-col">
                    <div class="text-xs uppercase font-light text-black">
                      Idle
                    </div>

                    {/* data kandidat */}
                    {idle &&
                      idle.map((idl) => (
                        <div class="text-xl text-black font-bold">
                          {idl.jumlah_idle}
                        </div>
                      ))}
                  </div>

                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewbox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="stroke-current text-black"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
            </div>
          </tr>
        </div>
        {/* month */}
        <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
          <div class="w-full lg:w-1/3">
            <div class="w-full p-4 rounded-lg bg-white border border-gray-100">
              <div class="flex flex-row items-center justify-between mb-6">
                <div class="flex flex-col">
                  <div className="text-sm font-light text-black"></div>
                  <div className="text-sm text-black font-bold">
                    <span>APPLICANT BY MONTH</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-row w-full">
                <div class="w-full h-60">
                  <div class="recharts-responsive-container h-full w-full object-center">
                    <div class="object-center text-black px-14">
                      <BulanChart />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* interse */}
          <div class="w-full lg:w-1/3">
            <div class="w-full p-4 rounded-lg bg-white border border-gray-100">
              <div class="flex flex-row items-center justify-between mb-6">
                <div class="flex flex-col">
                  <div className="text-sm font-light text-black"></div>
                  <div className="text-sm text-black font-bold">
                    <span>INTEREST TECHNOLOGY</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-row w-full">
                <div class="w-full h-60">
                  <div class="recharts-responsive-container h-full w-full object-center">
                    <div class="object-center text-black px-14">
                      <InterestChart />
                    </div>
                    {/* <div class="recharts-wrapper position: relative; cursor: default; w-80 h-60"> */}

                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* versus */}
          <div class="w-full lg:w-1/3">
            <div class="w-full p-4 rounded-lg bg-white border border-gray-100">
              <div class="flex flex-row items-center justify-between mb-6">
                <div class="flex flex-col">
                  <div className="text-sm font-light text-gray-500"></div>
                  <div className="text-sm text-black font-bold">
                    <span>BOARDING VS IDLE</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-row w-full">
                <div class="w-full h-60">
                  <div class="recharts-responsive-container h-full w-full object-center">
                    <div class="object-center text-black px-14">
                      <BoardIdleChart />
                    </div>
                    {/* <div class="recharts-wrapper position: relative; cursor: default; w-80 h-60"> */}

                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pendidikan */}
        <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
          <div class="w-full lg:w-1/3">
            <div class="w-full p-4 rounded-lg bg-white border border-gray-100">
              <div class="flex flex-row items-center justify-between mb-6">
                <div class="flex flex-col">
                  <div className="text-sm font-light text-gray-500"></div>
                  <div className="text-sm text-black font-bold">
                    <span>PENDIDIKAN</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-row w-full">
                <div class="w-full h-60">
                  <div class="recharts-responsive-container h-full w-full object-center">
                    <div class="object-center text-black px-14">
                      <PendidikanChart />
                    </div>
                    {/* <div class="recharts-wrapper position: relative; cursor: default; w-80 h-60"> */}

                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* universitas */}
        <div class="w-full lg:w-1/3">
          <div class="w-full p-4 rounded-lg bg-white border border-gray-100">
            <div class="flex flex-row items-center justify-between mb-6">
              <div class="flex flex-col">
                <div className="text-sm font-light text-gray-500"></div>
                <div className="text-sm text-black font-bold">
                  <span>UNIVERSITAS</span>
                </div>
              </div>
            </div>
            <div class="flex flex-row w-full">
              <div class="w-full h-60">
                <div class="recharts-responsive-container h-full w-full object-center">
                  <div class="object-center text-black px-14">
                    <UniversitasChart />
                  </div>
                  {/* <div class="recharts-wrapper position: relative; cursor: default; w-80 h-60"> */}

                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* jurusan */}
        <div class="w-full lg:w-1/3">
            <div class="w-full p-4 rounded-lg bg-white border border-gray-100">
              <div class="flex flex-row items-center justify-between mb-6">
                <div class="flex flex-col">
                  <div className="text-sm font-light text-black"></div>
                  <div className="text-sm text-black font-bold">
                  <span>JURUSAN</span>
                </div>
              </div>
            </div>
            <div class="flex flex-row w-full">
                <div class="w-full h-60">
                  <div class="recharts-responsive-container h-full w-full object-center">
                    <div class="object-center text-black px-14">
                    <JurusanChart />
                  </div>
                  {/* <div class="recharts-wrapper position: relative; cursor: default; w-80 h-60"> */}

                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
