import React from 'react';

import styles from './AnalysisOfMobileOperators.module.scss';
import {mobileOperators} from "../../assets/data/mobileOperators";
import AnalysisOfMobileOperatorsItem from "./AnalysisOfMobileOperatorsItem/AnalysisOfMobileOperatorsItem";
import more from "../../assets/images/moduleReceivingData/more.svg";

const AnalysisOfMobileOperators = () => {
    return (
        <div className={styles.analysisOfMobileOperators}>
            <div className={styles.analysisOfMobileOperators_titleContainer}>
                <h3>Analysis of mobile operators</h3>

                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div className={styles.analysisOfMobileOperators_operators}>
                {mobileOperators.map((operator, index) =>
                <AnalysisOfMobileOperatorsItem key={index} operator={operator}/>)}
            </div>
        </div>
    );
};

export default AnalysisOfMobileOperators;