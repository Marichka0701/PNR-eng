import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import styles from './FlightData.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";

const FlightData = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        reset,
        setValue
    } = useForm({
        // resolver: joiResolver(registrationCustomerValidator),
        mode: 'all',
    });

    // useEffect(() => {
    //     reset({
    //         date_of_booking: '25.10.2021',
    //         departure_time: '04.11.2021',
    //         departure_airport: 'Bishkek, Kyrgyzstan (FRU)',
    //         seat_number: 'Б43',
    //         place_of_following: 'Samarkand',
    //         agent_data: 'POLAN DAVID',
    //         date_of_ticket_purchase: '25.10.2021',
    //         ticket_purchase_method: 'Internet',
    //         payment_method: 'Bank card',
    //     });
    // }, [])

    const handleResetForm = () => {
        reset();
    }

    return (
        <div className={styles.flightData}>
            <div className={styles.flightData_titleContainer}>
                <h3>Flight data</h3>
                <div className={styles.flightData_titleContainer_buttons}>
                    <button
                        onClick={handleResetForm}
                        className={styles.clear}
                    >Clear
                    </button>
                    <button className={styles.more}>
                        <img src={more} alt="more info icon"/>
                    </button>
                </div>
            </div>

            <form className={styles.flightData_form} action="#">
                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Date of booking/purchase of the ticket
                    <input
                        {...register('date_of_booking')}
                        className={styles.input}
                        // placeholder={'25.10.2021'}
                        type="date"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Departure time and date
                    <input
                        {...register('departure_time')}
                        className={styles.input}
                        // placeholder={'04.11.2021'}
                        type="date"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Departure airport
                    <input
                        {...register('departure_airport')}
                        className={styles.input}
                        // placeholder={'Bishkek, Kyrgyzstan (FRU)'}
                        type="text"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Seat number
                    <input
                        {...register('seat_number')}
                        className={styles.input}
                        // placeholder={'Б43'}
                        type="text"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    The place of further following
                    <input
                        {...register('place_of_following')}
                        className={styles.input}
                        // placeholder={'Samarkand'}
                        type="text"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Agent data
                    <input
                        {...register('agent_data')}
                        className={styles.input}
                        // placeholder={'POLAN DAVID'}
                        type="text"
                    />
                </label>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Date of ticket purchase
                    <input
                        {...register('date_of_ticket_purchase')}
                        className={styles.input}
                        // placeholder={'25.10.2021'}
                        type="date"
                    />
                </label>

                <div className={styles.flightData_form_container}>
                    <label className={styles.label}>
                        Ticket purchase method
                        <input
                            {...register('ticket_purchase_method')}
                            className={styles.input}
                            // placeholder={'Internet'}
                            type="text"
                        />
                    </label>

                    <label className={styles.label}>
                        Payment method
                        <input
                            {...register('payment_method')}
                            className={styles.input}
                            // placeholder={'Bank card'}
                            type="text"
                        />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default FlightData;