import React from 'react';

import styles from './AnalysisOfPassenger.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import map from "../../assets/images/map.svg";

const AnalysisOfPassenger = () => {
    return (
        <div className={styles.analysisOfPassenger}>
            <div className={styles.analysisOfPassenger_titleContainer}>
                <h3>Analysis of mobile operators</h3>

                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div className={styles.analysisOfPassenger_map}>
                <img src={map} alt="map icon"/>
            </div>
        </div>
    );
};

export default AnalysisOfPassenger;