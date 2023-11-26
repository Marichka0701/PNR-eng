import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    PointElement,
    LineElement,
} from 'chart.js';


import styles from './IndustryEvaluationCriteria.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";

ChartJS.register(
    PointElement,
    LineElement,
);

const IndustryEvaluationCriteria = () => {
    const data = {
        labels: ['Mar 02', 'Mar 04', 'Mar 06', 'Mar 08'],
        datasets: [
            {
                label: 'First dataset',
                data: [33, 53, 1, 41],
                fill: true,
                backgroundColor: '#56628C',
                borderColor: '#56628C',
            },
            {
                label: 'Second dataset',
                data: [33, 17, 35, 51],
                fill: true,
                backgroundColor: '#DE350B',
                borderColor: '#DE350B',
            }
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div className={styles.industryEvaluationCriteria}>
            <div className={styles.industryEvaluationCriteria_titleContainer}>
                <h3>Industry evaluation criteria</h3>
                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div className={styles.industryEvaluationCriteria_chart}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default IndustryEvaluationCriteria;