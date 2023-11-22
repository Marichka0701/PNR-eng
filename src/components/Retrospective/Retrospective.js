import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import faker from 'faker';

import styles from './Retrospective.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        // title: {
        //     display: true,
        //     text: 'Chart.js Bar Chart',
        // },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'С1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#56628C',
        },
        {
            label: 'С2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#DE350B',
        },
    ],
};

const Retrospective = () => {
    return (
        <div className={styles.retrospective}>
            <div className={styles.retrospective_titleContainer}>
                <h3>Retrospective</h3>
                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <Bar
                style={{'width': '100%', 'background': 'white', 'padding': '20px'}}
                options={options}
                data={data}
            />
        </div>
    );
};

export default Retrospective;