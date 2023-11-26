import React from 'react';

import styles from './VisaData.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";

const VisaData = ({direction}) => {
    return (
        <div className={styles.visaData}>
            <div className={styles.visaData_titleContainer}>
                <h3>Visa data</h3>

                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <form action="#" className={styles.visaData_form}>
                <div className={`${styles.visaData_form_container} ${styles[direction]}`}>
                    <label className={`${styles.label} ${styles.fixedWidth}`}>
                        Visa Number
                        <input
                            className={styles.input}
                            placeholder={'1234567'}
                            type="text"
                        />
                    </label>

                    <label className={`${styles.label} ${styles.fixedWidth}`}>
                        Date of issue
                        <input
                            className={styles.input}
                            placeholder={'23.09.2022'}
                            type="text"
                        />
                    </label>
                </div>

                <div className={`${styles.visaData_form_container} ${styles[direction]}`}>
                    <label className={`${styles.label} ${styles.fixedWidth}`}>
                        Visa type
                        <input
                            className={styles.input}
                            placeholder={'D'}
                            type="date"
                        />
                    </label>

                    <label className={`${styles.label} ${styles.fixedWidth}`}>
                        Date of expiry
                        <input
                            className={styles.input}
                            placeholder={'23.09.2021'}
                            type="date"
                        />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default VisaData;