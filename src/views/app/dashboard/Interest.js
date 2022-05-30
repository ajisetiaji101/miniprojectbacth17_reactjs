import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBootcampRequest } from "../../../redux-saga/actions/DasboardAct";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from 'faker';
// import faker from 'faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function InterestChart() {
  const dispatch = useDispatch();

  const { bootcamp } = useSelector((state) => state.dasboardStated);
  //const { interest } = Bebas;
  //console.log(interest);

  useEffect(() => {
    dispatch(GetBootcampRequest());
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = bootcamp.map((data) => data.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Interest",
        data: bootcamp.map((data) => data.count),
        backgroundColor: "rgb(255,69,0)",
      },
    ],
  };

  return (
    <div className="position:relative h-60 w-96 m-2">
      <Bar options={options} data={data} />
    </div>
  )
  
  
}
