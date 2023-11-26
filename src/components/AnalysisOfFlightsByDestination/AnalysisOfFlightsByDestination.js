import React from 'react';
import { BarChart, Bar, XAxis, Legend, Tooltip } from 'recharts';

import './Bar.css';
import styles from './AnalysisOfFlightsByDestination.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";

const data = [
    { name: 'March 18', 'Turkish Airlines': '4', 'Aeroflot': '1', 'Pegasus Airlines': '2' },
    { name: 'April,18', 'Turkish Airlines': 3, 'Aeroflot': 6, 'Pegasus Airlines': 5 },
    { name: 'May,18', 'Turkish Airlines': 5, 'Aeroflot': 3, 'Pegasus Airlines': 6 },
];

const AnalysisOfFlightsByDestination = () => {
    return (
        <div className={styles.analysisOfFlightsByDestination}>
            <div className={styles.analysisOfFlightsByDestination_titleContainer}>
                <h3>Analysis of flights by destination</h3>
                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <BarChart style={{background: 'white', padding: '10px', minWidth: '100%', height: 'auto'}} width={400} height={300} data={data}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Turkish Airlines" fill="#56628C" barSize={18} radius={[15, 15, 15, 15]} />
                <Bar dataKey="Aeroflot" fill="#DE350B" barSize={18} radius={[15, 15, 15, 15]} />
                <Bar dataKey="Pegasus Airlines" fill="#DFE1E6" barSize={18} radius={[15, 15, 15, 15]} />
            </BarChart>
        </div>
    );
};

export default AnalysisOfFlightsByDestination;