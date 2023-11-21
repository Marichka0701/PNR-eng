import React from 'react';

import styles from './MobileOperatorsPage.module.scss';
import AnalysisOfMobileOperators from "../../components/AnalysisOfMobileOperators/AnalysisOfMobileOperators";
import MonthlyPassengerLoad from "../../components/MonthlyPassengerLoad/MonthlyPassengerLoad";
import Traffic from "../../components/Traffic/Traffic";
import AnalysisOfPassenger from "../../components/AnalysisOfPassenger/AnalysisOfPassenger";

const MobileOperatorsPage = () => {
    return (
        <div className={styles.mobileOperatorsPage}>
            <div className={styles.mobileOperatorsPage_leftSide}>
                <AnalysisOfPassenger/>
            </div>
            <div className={styles.mobileOperatorsPage_rightSide}>
                <AnalysisOfMobileOperators/>
                <MonthlyPassengerLoad/>
                <Traffic/>
            </div>
        </div>
    );
};

export default MobileOperatorsPage;