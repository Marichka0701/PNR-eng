import React, {useState} from 'react';

import styles from './DatabaseSearchPage.module.scss';
import FlightData from "../../components/FlightData/FlightData";
import PassportData from "../../components/PassportData/PassportData";
import VisaData from "../../components/VisaData/VisaData";
import database from "../../assets/images/moduleReceivingData/database-search-white.svg";
import CheckPassengerStateDBPage from "../CheckPassengerStateDBPage/CheckPassengerStateDBPage";

const DatabaseSearchPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModalCheckPassengerStateDB = () => {
        setModalIsOpen(true);
    }

    return (
        <div className={styles.databaseSearchPage_wrapper}>
            {
                modalIsOpen ?
                    <CheckPassengerStateDBPage setModalIsOpen={setModalIsOpen}/> :
                    <div className={styles.databaseSearchPage_wrapper_databaseSearchPage}>
                        <div className={styles.databaseSearchPage_wrapper_databaseSearchPage_container}>
                            <FlightData/>
                            <VisaData direction={'column'}/>
                            <PassportData/>
                        </div>

                        <button
                            onClick={handleOpenModalCheckPassengerStateDB}
                            className={styles.databaseSearchPage_wrapper_databaseSearchPage_button}
                        >
                            <img src={database} alt="database search icon"/>
                            Database search
                        </button>
                    </div>
            }
        </div>
    );
};

export default DatabaseSearchPage;