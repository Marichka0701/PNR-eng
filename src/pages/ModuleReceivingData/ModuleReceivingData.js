import React, {useState} from 'react';

import styles from './ModuleReceivingData.module.scss';
import passenger from '../../assets/images/moduleReceivingData/passenger-photo.svg';
import database from '../../assets/images/moduleReceivingData/database-search-white.svg';
import more from '../../assets/images/moduleReceivingData/more.svg';
import PassportData from "../../components/PassportData/PassportData";
import FlightData from "../../components/FlightData/FlightData";
import VisaData from "../../components/VisaData/VisaData";
import AdditionalData from "../../components/AdditionalData/AdditionalData";
import CheckPassengerDB from "../../components/CheckPassengerDB/CheckPassengerDB";

const ModuleReceivingData = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModalCheckPassengerDB = () => {
        setModalIsOpen(true);
    }

    return (
        <>
            {modalIsOpen && <CheckPassengerDB setModalIsOpen={setModalIsOpen}/>}

            <div className={styles.moduleReceivingData}>
                <div className={styles.moduleReceivingData_passengerInfo}>
                    <img src={passenger} alt="passenger icon"/>

                    <button
                        onClick={handleOpenModalCheckPassengerDB}
                        className={`${styles.moduleReceivingData_passengerInfo_button} ${styles.database}`}
                    >
                        <img src={database} alt="database search icon"/>
                        Database search
                    </button>

                    <button className={`${styles.moduleReceivingData_passengerInfo_button} ${styles.analysisNetworks}`}>
                        Analysis of social networks
                    </button>

                    <button className={`${styles.moduleReceivingData_passengerInfo_button} ${styles.analysisInfo}`}>
                        Analysis of operational information
                    </button>

                    <div className={styles.moduleReceivingData_passengerInfo_contacts}>
                        <div className={styles.moduleReceivingData_passengerInfo_contacts_titleContainer}>
                            <h3>Contacts</h3>
                            <button>
                                <img src={more} alt="more info icon"/>
                            </button>

                        </div>
                        <form className={styles.moduleReceivingData_passengerInfo_contacts_form} action="#">
                            <label className={styles.moduleReceivingData_passengerInfo_contacts_form_label}>
                                Phone number
                                <input
                                    className={styles.moduleReceivingData_passengerInfo_contacts_form_label_input}
                                    placeholder={'+1234567890'}
                                    type="number"
                                />
                            </label>

                            <label className={styles.moduleReceivingData_passengerInfo_contacts_form_label}>
                                Place of registration
                                <input
                                    className={styles.moduleReceivingData_passengerInfo_contacts_form_label_input}
                                    placeholder={'Romania, Bucharest'}
                                    type="text"
                                />
                            </label>

                            <label className={styles.moduleReceivingData_passengerInfo_contacts_form_label}>
                                Email
                                <input
                                    className={styles.moduleReceivingData_passengerInfo_contacts_form_label_input}
                                    placeholder={'polarolara@gmail.com'}
                                    type="email"
                                />
                            </label>
                        </form>
                    </div>
                </div>

                <div className={styles.moduleReceivingData_container}>
                    <div className={styles.moduleReceivingData_container_leftSide}>
                        <PassportData/>
                        <VisaData/>
                    </div>

                    <div className={styles.moduleReceivingData_container_rightSide}>
                        <FlightData/>
                        <AdditionalData/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModuleReceivingData;