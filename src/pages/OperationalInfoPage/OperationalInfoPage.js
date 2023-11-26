import React from 'react';

import styles from './OperationalInfoPage.module.scss';
import Profile from "../../components/Profile/Profile";
import Contacts from "../../components/Contacts/Contacts";
import AnalysisOfOperationalInformation
    from "../../components/AnalysisOfOperationalInformation/AnalysisOfOperationalInformation";
import AdditionalInformation from "../../components/AdditionalInformation/AdditionalInformation";

const OperationalInfoPage = () => {
    return (
        <div className={styles.operationalInfoPage}>
            <div className={styles.operationalInfoPage_column}>
                <Profile/>
                <Contacts/>
            </div>

            <div className={styles.operationalInfoPage_row}>
                <div className={styles.operationalInfoPage_row_item}>
                    <AnalysisOfOperationalInformation/>
                </div>
                <div className={styles.operationalInfoPage_row_item}>
                    <AdditionalInformation/>
                </div>
            </div>
        </div>
    );
};

export default OperationalInfoPage;