import React from 'react';

import styles from './IndustryEvaluationCriteria.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";

const IndustryEvaluationCriteria = () => {

    return (
        <div className={styles.industryEvaluationCriteria}>
            <div className={styles.industryEvaluationCriteria_titleContainer}>
                <h3>Industry evaluation criteria</h3>
                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div>

            </div>
        </div>
    );
};

export default IndustryEvaluationCriteria;