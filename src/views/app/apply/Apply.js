import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../../component/commons/Page";

export default function Apply() {
  const navigate = useNavigate();
  return <Page title="Setting Profile" titleButton="Back" onClick={() => navigate(-1)}></Page>;
}
