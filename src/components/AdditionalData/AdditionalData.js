import React from 'react';

import styles from './AdditionalData.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";

const AdditionalData = () => {
    return (
        <div className={styles.additionalData}>
            <div className={styles.additionalData_titleContainer}>
                <h3>Additional data</h3>

                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <form action="#" className={styles.additionalData_form}>
                <div className={styles.additionalData_form_container}>
                    <label className={`${styles.label} ${styles.fixedWidth}`}>
                        Type of luggage
                        <input
                            className={styles.input}
                            placeholder={'Hand luggage'}
                            type="text"
                        />
                    </label>

                    <label className={styles.label}>
                        luggage weight
                        <input
                            className={styles.input}
                            placeholder={'3.5'}
                            type="text"
                        />
                    </label>
                </div>

                <p className={styles.additionalData_form_statistics}>Total flights: Aeroflot - 23</p>
                <p className={styles.additionalData_form_statistics}>Total points: 404</p>
            </form>
        </div>
    );
};

export default AdditionalData;