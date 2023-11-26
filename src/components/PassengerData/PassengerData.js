import React from 'react';

import styles from './PassengerData.module.scss';

const PassengerData = () => {
    return (
        <div className={styles.passengerData}>
            <h3 className={styles.passengerData_title}>Passenger data</h3>

            <form action="#" className={styles.passengerData_form}>
                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Document number
                    <input
                        className={styles.input}
                        placeholder={'AB1234567'}
                        type="text"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Nationality
                    <input
                        className={styles.input}
                        placeholder={'Romania'}
                        type="text"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Date of birth
                    <input
                        className={styles.input}
                        placeholder={'23.09.1990'}
                        type="date"
                    />
                </label>

            </form>
        </div>
    );
};

export default PassengerData;