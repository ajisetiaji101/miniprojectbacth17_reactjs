import React, { Fragment, useState, useEffect } from 'react'
import Page from '../../../component/commons/Page';
import { useNavigate, NavLink, Link, useLocation } from 'react-router-dom';

// import config from '../../config/config';

import { useDispatch, useSelector } from 'react-redux';
import { doDeleteCurriculumRequest, doGetCurriculumRequest } from '../../../redux-saga/actions/AppCurriculum';

import { Menu, Transition } from '@headlessui/react'
//theming toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import {
    DotsVerticalIcon,
    DuplicateIcon,
    PhotographIcon,
    PencilAltIcon,
    TrashIcon,
    UserAddIcon,
    LockClosedIcon,
    RefreshIcon,
    ChevronRightIcon,
    ChevronLeftIcon
} from '@heroicons/react/solid'
import config from '../../../config/config';

const columns = [
    { name: 'NAME' },
    { name: 'TITLE' },
    { name: 'DURATION' },
    { name: 'TOTAL' },
    { name: 'TYPE' },
    { name: 'RATING' }
]

const curr_status =['Online','Offline']

// const Rating = () =>{
//     const [rating, setRating] = useState(0);
//     const [rating2, setRating2] = useState(0);
// }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Curiculum() {
    let navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();

    const [listCurriculums, setListCurriculums] = useState([])
    const [filter, setFilter] = useState({
        input:'',
        select:''
    })

    const [pageNumbers, setPageNumbers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageRange, setPageRange] = useState(0)

    //1.create state curriculum

    const {curriculums} = useSelector((state) => state.curriculumAppState)

    //2.declare useEffect, non dependency
    useEffect(() => {
        dispatch(doGetCurriculumRequest())
        
        if(location.state && location.state.updated){toast.success('Curriculum has been updated.')}
    }, []);

    useEffect(() => {
        setListCurriculums(
            Array.isArray(curriculums) && curriculums.filter(data=>(
                (data.curr_name.toLowerCase().includes(filter.input.toLowerCase()) || 
                data.curr_title.toLowerCase().includes(filter.input.toLowerCase())) &&
                (filter.select === 'Status' || data.curr_learning_type.includes(filter.select))))
            )
    }, [curriculums]);

    useEffect(()=>{
        setPageNumbers(Array.from({length: Math.ceil(listCurriculums.length/10)}, (v, i) => (i+1 === 1 ? {number: i+1, active: true} : {number: i+1, active: false})))
        setCurrentPage(1)
        setPageRange(0)
    },[listCurriculums])

    const handleOnChange = (name) => (event) => {
        setFilter({ ...filter, [name]: event.target.value });
      };

    const onSearch = event =>{
        event.preventDefault();
        setListCurriculums(
            Array.isArray(curriculums) && curriculums.filter(data=>(
                (data.curr_name.toLowerCase().includes(filter.input.toLowerCase()) || 
                data.curr_title.toLowerCase().includes(filter.input.toLowerCase())) &&
                (filter.select === 'Status' || data.curr_learning_type.includes(filter.select))))
            )
    }


    const onDelete = async(id)=>{
        dispatch(doDeleteCurriculumRequest(id));
        toast.success('Data has been deleted.')
    }

    return (
        <>
        <Page title='Curriculum' titleButton='Create' onClick={() => navigate('/app/curriculum/new')}>
            <div className="mt-6 mx-24 flex justify-center">
                <div className="w-full">
                    <div className="input-group relative flex justify-center items-stretch w-full mb-2">
                        <p className="text-xs mx-2 py-1">Search by Category</p>
                        <input 
                            type="search" 
                            onChange={handleOnChange('input')}
                            className="form-control relative w-48 block px-2 py-0.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 focus:outline-none" placeholder="name, title" aria-label="Search" aria-describedby="button-addon2"/>
                        <select 
                            name="curr_learning_type"
                            id="curr_learning_type"
                            onChange={handleOnChange('select')}
                            className="capitalize form-select form-select-sm appearance-none block mx-1 px-2 py-0.5 w-24 text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:border-transparent focus:text-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500" aria-label=".form-select-sm example"
                        >
                            <option>Status</option>
                            {
                                (curr_status || []).map((value, index) => (
                                    <option className="capitalize" value={value} key={index}>{value}</option>
                                ))
                            }
                        </select>
                        <button 
                            type="submit"
                            onClick={onSearch}
                            className="btn px-3 py-1 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple-500 transition duration-150 ease-in-out flex items-center" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="sm:block">
                <div className="align-middle inline-block min-w-full border-b border-gray-200 ">
                        <table className="min-w-full">
                            <thead className="border-y border-gray-200">
                                <tr key="col_names">
                                    {(columns || []).map(column => (
                                        <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-900 uppercase">
                                            <span className="">{column.name}</span>
                                        </th>
                                    ))}

                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-900 uppercase tracking-wider" />
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                { Array.isArray(listCurriculums) && listCurriculums.slice((currentPage-1)*10,currentPage*10).map((data) => (
                                        <tr key={data.curr_id}>
                                            <td className="px-6 py-2 text-center whitespace-nowrap text-sm text-gray-900">{data.curr_name}</td>
                                            <td className="px-6 py-2 text-center whitespace-nowrap text-sm text-gray-900">{data.curr_title}</td>
                                            <td className="px-6 py-2 text-center whitespace-nowrap text-sm text-gray-900">{data.curr_duration}</td>
                                            <td className="px-6 py-2 text-center whitespace-nowrap text-xs text-gray-900">
                                            <div>{data.curr_total_talents} members</div>
                                            <div>{data.curr_total_batch} batchs</div>
                                            </td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-center">{data.curr_learning_type}</td>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 text-center capitalize">{data.curr_rating}</td>
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
                                                                >
                                                                    
                                                                    <div className="py-1">
                                                                        <Menu.Item>
                                                                            {({ active }) => (
        
                                                                                <Link 
                                                                                to={'/app/curriculum/edit/' + data.curr_id}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                                                    'group flex items-center px-4 py-2 text-sm'
                                                                                )}>
        
                                                                                    <PencilAltIcon
                                                                                        className="mr-3 h-5 w-5 text-gray-700 group-hover:text-gray-500"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                    Edit
                                                                                </Link>
                                                                            )}
                                                                        </Menu.Item>
        
                                                                    </div>
                                                                    
                                                                    <div className="py-1">
                                                                        <Menu.Item>
                                                                            {({ active }) => (
                                                                                <Link
                                                                                    to="#"
                                                                                    onClick={() => {
                                                                                        if (window.confirm("Delete this Batch ?"))
                                                                                            onDelete(data.curr_id)
                                                                                    }}
                                                                                    className={classNames(
                                                                                    active ? 'bg-gray-300 text-gray-700' : 'text-gray-900',
                                                                                    'group flex items-center px-4 py-2 text-sm'
                                                                                    )}
                                                                                >
                                                                                    <TrashIcon
                                                                                        className="mr-3 h-5 w-5 text-gray-700 group-hover:text-gray-500"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                    Delete
                                                                                </Link>
                                                                            )}
                                                                        </Menu.Item>
                                                                    </div>
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
                        {listCurriculums.length === 0 && 
                        <div className='px-6 py-3 text-center whitespace-nowrap text-sm font-medium text-gray-900'> Data Not Found...</div>}
                        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">{(currentPage-1)*10+1}</span> to <span className="font-medium">{(currentPage)*10<listCurriculums.length ? (currentPage)*10 : listCurriculums.length}</span> of{' '}
                                        <span className="font-medium">{listCurriculums.length}</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <button
                                            onClick={()=>{
                                                setCurrentPage(1)
                                                setPageNumbers([...pageNumbers].map(val=>(val.number === 1 ? {...val,active:true} : {...val,active:false})))
                                                setPageRange(0)
                                            }}
                                            className="relative inline-flex items-center px-3 py-2 font-medium text-gray-600 hover:text-orange-600"
                                            >
                                            <span className="underline">First</span>
                                        </button>
                                        <button
                                        onClick={()=>{
                                            const min = 0
                                            if (pageRange>min) {
                                                setPageRange(pageRange-1)
                                            }
                                        }}
                                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                        >
                                        <span className="sr-only">Previous</span>
                                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

                                        {pageNumbers.slice(pageRange*4, pageRange*4+4).map(el=>(
                                            <button
                                                onClick={()=>{
                                                    setCurrentPage(el.number)
                                                    setPageNumbers([...pageNumbers].map(val=>(val.number === el.number ? {...val,active:true} : {...val,active:false})))
                                                }}
                                                aria-current="page"
                                                className={classNames(el.active ? "z-20 bg-orange-100 border-orange-600 text-orange-900" : "z-10 bg-white border-gray-300 text-gray-600",
                                                "relative inline-flex items-center px-4 py-2 border text-sm font-medium")}
                                                >
                                                {el.number}
                                            </button>
                                        ))}
                                        <button
                                        onClick={()=>{
                                            const max = Math.ceil(pageNumbers.length/4)-1
                                            if (pageRange<max) {
                                                setPageRange(pageRange+1)
                                            }
                                        }}
                                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                        >
                                        <span className="sr-only">Next</span>
                                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                        <button
                                            onClick={()=>{
                                                const max = Math.ceil(pageNumbers.length/4)-1
                                                setCurrentPage(pageNumbers.length)
                                                setPageNumbers([...pageNumbers].map(val=>(val.number === pageNumbers.length ? {...val,active:true} : {...val,active:false})))
                                                setPageRange(max)
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
            <div className='z-30' >
                <ToastContainer autoClose={2000}/>
            </div>
            </>
        )
    }
