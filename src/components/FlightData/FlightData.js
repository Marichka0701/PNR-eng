import React from 'react';

import styles from './FlightData.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";

const FlightData = () => {
    return (
        <div className={styles.flightData}>
            <div className={styles.flightData_titleContainer}>
                <h3>Flight data</h3>
                <div className={styles.flightData_titleContainer_buttons}>
                    <button className={styles.clear}>Clear</button>
                    <button className={styles.more}>
                        <img src={more} alt="more info icon"/>
                    </button>
                </div>
            </div>

            <form className={styles.flightData_form} action="#">
                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Date of booking/purchase of the ticket
                    <input
                        className={styles.input}
                        placeholder={'25.10.2021'}
                        type="text"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Departure time and date
                    <input
                        className={styles.input}
                        placeholder={'04.11.2021'}
                        type="text"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Departure airport
                    <input
                        className={styles.input}
                        placeholder={'Bishkek, Kyrgyzstan (FRU)'}
                        type="text"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Seat number
                    <input
                        className={styles.input}
                        placeholder={'Б43'}
                        type="text"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    The place of further following
                    <input
                        className={styles.input}
                        placeholder={'Samarkand'}
                        type="text"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Agent data
                    <input
                        className={styles.input}
                        placeholder={'POLAN DAVID'}
                        type="text"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Date of ticket purchase
                    <input
                        className={styles.input}
                        placeholder={'25.10.2021'}
                        type="text"
                    />
                </label>

                <div className={styles.flightData_form_container}>
                    <label className={styles.label}>
                        Ticket purchase method
                        <input
                            className={styles.input}
                            placeholder={'Internet'}
                            type="text"
                        />
                    </label>

                    <label className={styles.label}>
                        Payment method
                        <input
                            className={styles.input}
                            placeholder={'Bank card'}
                            type="text"
                        />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default FlightData;