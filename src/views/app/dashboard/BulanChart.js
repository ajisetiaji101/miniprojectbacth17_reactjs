import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMonthRequest } from "../../../redux-saga/actions/DasboardAct";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ApplicantChart() {
  const dispatch = useDispatch();

  const { month } = useSelector((state) => state.dasboardStated);

  useEffect(() => {
    dispatch(GetMonthRequest());
  }, []);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const labels = month.map((value) => value.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Applicant By Month",
        data: month.map((value) => value.count),
        borderColor: "rgb(255,69,0)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div classname="wrapper position:relative h-48 w-96 m-auto">
      <Line options={options} data={data} />
    </div>
  );
}
