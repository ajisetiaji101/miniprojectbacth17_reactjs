import React from "react";
import { Navigate, useRoutes, Outlet, useNavigate } from "react-router-dom";
import AppLayout from "./component/layout/AppLayout";
import LandingPage from "./component/layout/LandingPage";
import MainLayout from "./component/layout/MainLayout";
import Page404 from "./views/404/Page404";
import Bootcamp from "./views/bootcamp/Bootcamp";
import Signin from "./component/layout/Signin";
import Dashboard from "./views/app/dashboard/Dashboard";
import Candidat from "./views/app/candidat/Candidat";
import Batch from "./views/app/batch/Batch";
import AddBatch from "./views/app/batch/AddBatch";
import Curriculum from "./views/app/curriculum/Curriculum";
import Hiringg from './views/app/hiring/Hiringg'
import Hiring from './views/hiring/Hiring';
import HiringDetail from './views/hiring/HiringDetail';
import HiringDetail2 from './views/hiring/HiringDetail2';
import Setting from "./views/app/setting/Setting";
import Talent from "./views/app/talent/Talent";
import BlankLayout from "./component/layout/BlankLayout";
import Signup from "./component/layout/Signup";
import Placement from "./views/app/placement/Placement";
import Job from "./views/app/job/Job";
import AddJob from "./views/app/job/AddJob";
import Apply from "./views/app/apply/Apply";
import Landing from "./views/components/Landing";
import SignupSuccess from "./component/layout/SignupSuccess";
import EditCurriculum from "./views/app/curriculum/EditCurriculum";
import Applysukses from "./views/app/apply/Applysukses";
export default function Routes(isLoggedIn) {
  return useRoutes([
    {
      path: "/",
      element: <LandingPage />,
      children: [
        { path: "", element: <Landing /> },
        { path: "bootcamp", element: <Bootcamp /> },
        { path: "apply", element: isLoggedIn ? <Apply /> : <Navigate to="/auth/signin" /> },
        { path: "apply/sukses", element: isLoggedIn ? <Applysukses /> : <Navigate to="/auth/signin" /> },
        { path: "404", element: <Page404 /> },
        { path: 'hiring', element: <Hiring/> },
        { path: 'hiring/:id', element: <HiringDetail/> },
        { path: 'hiringg/:id', element: <HiringDetail2/> },
      ],
    },
    {
      path: "/auth",
      element: <BlankLayout/>,
      children: [
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "signup/success", element: <SignupSuccess /> },
      ],
    },

    {
      path: "/app",
      element: <AppLayout />,
      children: [
        {
          path: "dashboard",
          element: isLoggedIn ? <Dashboard /> : <Navigate to="/auth/signin" />,
        },
        {
          path: "candidat",
          element: isLoggedIn ? <Candidat /> : <Navigate to="/auth/signin" />,
        },
        {
          path: "batch",
          element: isLoggedIn ? <Batch /> : <Navigate to="/auth/signin" />,
        },
        {
          path: "batch/new",
          element: isLoggedIn ? <AddBatch /> : <Navigate to="/auth/signin" />,
        },
        {
          path: "placement",
          element: isLoggedIn ? <Placement /> : <Navigate to="/auth/signin" />,
        },
        {
          path: "talent",
          element: isLoggedIn ? <Talent /> : <Navigate to="/auth/signin" />,
        },
        {
          path: "curriculum",
          element: isLoggedIn ? <Curriculum /> : <Navigate to="/auth/signin" />,
        },
        {
          path: "curriculum/edit/:id",
          element: isLoggedIn ? (
            <EditCurriculum />
          ) : (
            <Navigate to="/auth/signin" />
          ),
        },
        {
          path: "hiringg",
          element: isLoggedIn ? <Hiringg /> : <Navigate to="/auth/signin" />,
        },
        {
          path: "job",
          element: isLoggedIn ? <Job /> : <Navigate to="/auth/signin" />,
        },
        {
          path: "job/new",
          element: isLoggedIn ? <AddJob /> : <Navigate to="/auth/signin" />,
        },
        {
          path: "setting",
          element: isLoggedIn ? <Setting /> : <Navigate to="/auth/signin" />,
        },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
