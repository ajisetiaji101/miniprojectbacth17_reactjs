import React from "react";
import Page from "../../../component/commons/Page";

export default function Placement() {
  return (
    <Page title="Placement" titleButton="Create Placement">
      <div className="text-center">
        <span>Search by category </span>
        <input className="border rounded-full px-4" placeholder="client, recruiter, phone number" />
      </div>
    </Page>
  );
}
