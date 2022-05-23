import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons"

export default function CreateSuccess(props) {
  let navigate = useNavigate();
  return (
    <div>
      <Transition appear show={true} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0"
          onClose={() => null}
        >
          <div className="ml-64 mt-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex justify-center mt-0 items-center w-full h-screen p-2 overflow-hidden align-middle transition-all transform bg-white-300 backdrop-brightness-50 bg-white/10 shadow-lg">
                <div className="flex z-50 p-5 bg-white justify-center items-center flex-col w-3/5 h-3/5 rounded-2xl shadow-2xl">
                <FontAwesomeIcon icon={faCircleCheck} className="h-20 w-20 text-blue-500 mb-5" />
                  <Dialog.Title
                    as="h3"
                    className="flex justify-center text-lg font-medium leading-6 text-gray-900"
                  >
                    Penyimpanan data batch baru telah berhasil!
                  </Dialog.Title>
                  <div className="flex justify-center mt-2">
                    Silahkan klik tombol OK untuk menuju ke halaman batch
                  </div>
                  <div className="flex mt-10 space-x-52">
                    <button
                      type="button"
                      className="inline-flex justify-center w-28 py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-slate-900 bg-white border-slate-800 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      // onClick={() => navigate("/app/batch/new")}
                      onClick={props.closeModal}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center w-28 py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      onClick={() => navigate("/app/batch")}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
