import React from 'react';
import {BarChart} from '@mui/x-charts/BarChart';

import styles from './AnalysisOfFlightsByDestination.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";

const AnalysisOfFlightsByDestination = () => {
    return (
        <div className={styles.analysisOfFlightsByDestination}>
            <div className={styles.analysisOfFlightsByDestination_titleContainer}>
                <h3>Passport data</h3>
                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <BarChart
                xAxis={[{scaleType: 'band', data: ['group A', 'group B', 'group C']}]}
                series={[{data: [4, 3, 5]}, {data: [1, 6, 3]}, {data: [2, 5, 6]}]}
                width={500}
                height={300}
            />
        </div>
    );
};

export default AnalysisOfFlightsByDestination;