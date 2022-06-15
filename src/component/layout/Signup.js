import React from 'react'
import { useFormik } from "formik";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { doSignupRequest } from '../../redux-saga/actions/User'
import * as Yup from 'yup';
import { Link } from "react-router-dom";

export default function Signup() {
  
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      handphone: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup
      .string()
      .min(5)
      .max(15)
      .required(),
      handphone: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Number phone is required')
    }),
    

    onSubmit: async (values) => {
      let payload = {
        username: values.username,
        email: values.email,
        password: values.password,
        handphone : values.handphone
      };
      dispatch(doSignupRequest(payload));
      
      setTimeout(() => {
          navigate("/auth/signup/success");
        }, 7000);
    }
  });

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
            <img
              className="mx-auto h-12 w-auto"
              src="../assets/images/codeid.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-none shadow-sm -space-y-px">
            <div className="pb-5">
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="username"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
                {formik.touched.username && formik.errors.username ? (
                  <span className="mt-2 text-sm text-red-600">{formik.errors.username}</span>
                ) : null}
              </div>
              <div className="pb-5">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className="mt-2 text-sm text-red-600">{formik.errors.email}</span>
                ) : null}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <span className="mt-2 text-sm text-red-600">{formik.errors.password}</span>
                ) : null}
              </div>
            </div>
            <div>
                <label htmlFor="handphone" className="sr-only">
                  Number Phone
                </label>
                <input
                  id="handphone"
                  name="handphone"
                  type="text"
                  value={formik.values.handphone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="handphone"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                  placeholder="Handphone"
                />
                {formik.touched.handphone && formik.errors.handphone ? (
                  <span className="mt-2 text-sm text-red-600">{formik.errors.handphone}</span>
                ) : null}
              </div>
              <div className="flex">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="group relative w-1/2 flex justify-center py-2 px-4 ml-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={formik.handleSubmit}
                  className="group relative w-1/2 flex justify-center py-2 px-4 ml-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Sign Up
                </button>
              </div>
          </form>
      </div>
      {/* <h1>Add Users</h1>
        <form>
            <div>
                <label>
                    Username :
                </label>
                <input type='text' placeholder='Username' name='username' id='username' onChange={formik.handleChange} value={formik.values.username} />
            </div>
            <div>
                <label>
                    Email :
                </label>
                <input type='text' placeholder='Email address' name='email' id='email-address' onChange={formik.handleChange} value={formik.values.email} />
              </div>
              <div>
                <label>
                    Password :
                </label>
                <input type='text' placeholder='Password' name='password' id='password' onChange={formik.handleChange} value={formik.values.password} />
              </div>
              <div>
                <label>
                    Handphone :
                </label>
                <input type='text' placeholder='Handphone' name='handphone' id='handphone' onChange={formik.handleChange} value={formik.values.handphone} />
              </div>
        </form>
        <div>
          <button type='button' onClick={formik.handleSubmit}>
            Submit
          </button>
        </div> */}
    </div>
  )
}

