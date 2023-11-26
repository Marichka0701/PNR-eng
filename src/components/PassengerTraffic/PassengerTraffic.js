import React from 'react';

import styles from './PassengerTraffic.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import CircleProgressBar from "../CircleProgressBar";
import MarkingChart from "../MarkingChart/MarkingChart";

const PassengerTraffic = () => {
    return (
        <div className={styles.passengerTraffic}>
            <div className={styles.passengerTraffic_titleContainer}>
                <h3>Passenger traffic</h3>
                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div className={styles.passengerTraffic_chart}>
                <div className={styles.passengerTraffic_chart_marking}>
                    <MarkingChart fill={'#56628C'} name={'Air'}/>
                    <MarkingChart fill={'#DE350B'} name={'Rail'}/>
                    <MarkingChart fill={'#DFE1E6'} name={'Bus'}/>
                </div>

                <div className={styles.passengerTraffic_chart_filled}>
                    <div className={styles.passengerTraffic_chart_filled_content}>
                        <CircleProgressBar progress={64} fill={'#56628C'}/>
                        <CircleProgressBar progress={32} fill={'#DE350B'}/>
                        <CircleProgressBar progress={4} fill={'#DFE1E6'}/>
                    </div>

                    <p>Bishkek - Tashkent, thousand people in March, April and May 2018</p></div>
            </div>
        </div>
    );
};

export default PassengerTraffic;