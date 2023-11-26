import React from 'react';

import styles from './AdditionalInformation.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import additionalInfo from "../../assets/images/additional-information.svg";

const AdditionalInformation = () => {
    return (
        <div className={styles.additionalInformation}>
            <div className={styles.additionalInformation_titleContainer}>
                <h3>Additional Information</h3>
                <button>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div className={styles.additionalInformation_info}>
                <img src={additionalInfo} alt="additional info"/>
            </div>
        </div>
    );
};

export default AdditionalInformation;