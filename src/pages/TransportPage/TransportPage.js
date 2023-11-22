import React from 'react';

import styles from './TransportPage.module.scss';
import AnalysisOfFlightsByDestination
    from "../../components/AnalysisOfFlightsByDestination/AnalysisOfFlightsByDestination";
import PassengerTraffic from "../../components/PassengerTraffic/PassengerTraffic";
import Retrospective from "../../components/Retrospective/Retrospective";
import IndustryEvaluationCriteria from "../../components/IndustryEvaluationCriteria/IndustryEvaluationCriteria";

const TransportPage = () => {
    return (
        <div className={styles.transportPage}>
            <div className={styles.transportPage_leftSide}>
                <AnalysisOfFlightsByDestination/>
                <PassengerTraffic/>
            </div>
            <div className={styles.transportPage_rightSide}>
                <Retrospective/>
                <IndustryEvaluationCriteria/>
            </div>
        </div>
    );
};

export default TransportPage;