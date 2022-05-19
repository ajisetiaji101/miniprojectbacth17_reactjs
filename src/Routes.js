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
import Hiring from "./views/app/hiring/Hiring";
import Setting from "./views/app/setting/Setting";
import Talent from "./views/app/talent/Talent";
import BlankLayout from "./component/layout/BlankLayout";
import Signup from "./component/layout/Signup";
import Placement from "./views/app/placement/Placement";
import Job from "./views/app/job/Job";
import AddJob from "./views/app/job/AddJob";
import Landing from "./views/components/Landing";
export default function Routes(isLoggedIn) {
  return useRoutes([
    {
      path: "/",
      element: <LandingPage />,
      children: [
        { path: "", element: <Landing /> },
        { path: "signin", element: <Navigate to="/auth/signin" /> },
        { path: "signup", element: <Navigate to="/auth/signup" /> },
        { path: "bootcamp", element: <Bootcamp /> },
        { path: "404", element: <Page404 /> },
      ],
    },
    {
      path: "/auth",
      element: <BlankLayout />,
      children: [
        { path: "signin", element: <Signin /> },
        { path: "signup", element: <Signup /> },
      ],
    },
    {
      path: "/app",
      element: <AppLayout />,
      children: [
        { path: "dashboard", element: isLoggedIn ? <Dashboard /> : <Navigate to="/auth/signin" /> },
        { path: "candidat", element: isLoggedIn ? <Candidat /> : <Navigate to="/auth/signin" /> },
        { path: "batch", element: isLoggedIn ? <Batch /> : <Navigate to="/auth/signin" /> },
        { path: "batch/new", element: isLoggedIn ? <AddBatch /> : <Navigate to="/auth/signin" /> },
        { path: "placement", element: isLoggedIn ? <Placement /> : <Navigate to="/auth/signin" /> },
        { path: "talent", element: isLoggedIn ? <Talent /> : <Navigate to="/auth/signin" /> },
        { path: "curriculum", element: isLoggedIn ? <Curriculum /> : <Navigate to="/auth/signin" /> },
        { path: "hiring", element: isLoggedIn ? <Hiring /> : <Navigate to="/auth/signin" /> },
        { path: "job", element: isLoggedIn ? <Job /> : <Navigate to="/auth/signin" /> },
        {
          path: "job/new",
          element: isLoggedIn ? <AddJob /> : <Navigate to="/auth/signin" />,
        },
        { path: "setting", element: isLoggedIn ? <Setting /> : <Navigate to="/auth/signin" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
