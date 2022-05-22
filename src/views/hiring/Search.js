import React from 'react'

export default function Search() {
  return (
    <div>
                  <div className="w-full">
            <div className="input-group relative flex justify-center items-stretch w-full mb-2">
              <p className="text-sm mx-2 py-1">Search by Category</p>
              <input
                type="search"
                // onChange={handleOnChange("input")}
                className="form-control relative w-64 block px-4 py-0.5 ml-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 focus:outline-none"
                placeholder="Jabatan, Kata Kunci, Perusahaan"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
                            <input
                type="search"
                // onChange={handleOnChange("input")}
                className="form-control relative w-64 block px-4 py-0.5 mr-2 ml-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 focus:outline-none"
                placeholder="Location"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <select
                name="tale_status_timeline"
                id="tale_status_timeline"
                // onChange={handleOnChange("select")}
                className="capitalize form-select form-select-sm appearance-none block mx-1 px-2 py-0.5 w-24 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500"
                aria-label=".form-select-sm example"
              >
                <option>Status</option>
                {/* {(tal_status || []).map((value, index) => 
                (
                  <option className="capitalize" value={value} key={index}>
                    {value}
                  </option>
                )
                )} */}
              </select>
              <button
                type="submit"
                // onClick={onSearch}
                className="btn px-3 py-1 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 transition duration-150 ease-in-out flex items-center"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
          <br></br>

    </div>
  )
}
