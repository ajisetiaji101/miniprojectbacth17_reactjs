import { Pie } from 'react-chartjs-2';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPendidikanRequest, } from "../../../redux-saga/actions/DasboardAct";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from "chartjs-plugin-datalabels"
ChartJS.register(ArcElement, Tooltip, Legend);


const color = [
    "#ff4945",
    "#57423F",
    "#BFA6A2",
    "#008AFF",
    "#005ADC",
    "#FF7538",
    "#E83383",
    "#E85033",
    "#FF38F4",
    "#802422",
    "#FF9391",
    "#804A49",
    "#CC3A37",
    "#B3211E",
    "#FFFF5E",
    "#2BA7FF",
    "#2779B3",
    "#FF615E",
    "#0CB341",
    "#45FF80",
    "#65B342",
    "#87FF52",
    "#1EB3A1",
    "#38FFE7",
    "#FF2F2B",
    "#FFDE5E",
    "#2BFF6E",
    "#3844FF",
    "#85FF89"
]


export default function PendidikanChart() {
    const dispatch = useDispatch();

    const { pendidikan } = useSelector((state) => state.dasboardStated);


    useEffect(() => {
        dispatch(GetPendidikanRequest());
      }, []);
    const data = {
        labels: pendidikan.map((value) => value.name),
        datasets: [
            {
                label: '# of Votes',
                data: pendidikan.map((value) => value.count),
                backgroundColor: color,
                borderColor: ["#FFFFFF"],
                borderWidth: 1,
            },
        ],
    };



    const set = {
        responsive: false,
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    let datasets = ctx.chart.data.datasets;

                    if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                        let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                        let percentage = Math.round((value / sum) * 100) + "%";
                        return percentage;
                    } else {
                    }
                },
                color: "black"
            },
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 6,
                    usePointStyle: true,
                    render: 'percentage',
                    fontColor: ['green', 'white', 'red'],
                    precision: 2
                }
            }
        }
    };



    return (
        <div className="position:relative h-60 w-96 m-2">
            <Pie options={set} data={data} plugins={[ChartDataLabels]} />
        </div>



    )
}