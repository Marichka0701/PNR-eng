import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import styles from './PassengerTraffic.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";

ChartJS.register(ArcElement, Tooltip, Legend);

const PassengerTraffic = () => {
    const data = {
        labels: ['Air', 'Rail', 'Bus'],
        datasets: [
            {
                // label: '# of Votes',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(86,97,140,0.3)',
                    'rgba(222,53,11,0.3)',
                    'rgba(223,225,230,0.3)',
                ],
                borderColor: [
                    'rgba(86,97,140, 1)',
                    'rgba(222,53,11, 1)',
                    'rgba(223,225,230, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className={styles.passengerTraffic}>
            <div className={styles.passengerTraffic_titleContainer}>
                <h3>Passenger traffic</h3>
                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div className={styles.passengerTraffic_chart}>
                <Pie data={data} />

                <p>Bishkek - Tashkent, thousand people in March, April and May 2018</p>
            </div>
        </div>
    );
};

export default PassengerTraffic;