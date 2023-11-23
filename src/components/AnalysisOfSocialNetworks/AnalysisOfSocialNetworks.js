import React from 'react';

import styles from './AnalysisOfSocialNetworks.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import analysis from "../../assets/images/analysis-of-social-networks.svg";

const AnalysisOfSocialNetworks = () => {
    return (
        <div className={styles.analysisOfSocialNetworks}>
            <div className={styles.analysisOfSocialNetworks_titleContainer}>
                <h3>Analysis of social networks</h3>
                <button>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div>
                <img src={analysis} alt="analysis of social networks"/>
            </div>
        </div>
    );
};

export default AnalysisOfSocialNetworks;