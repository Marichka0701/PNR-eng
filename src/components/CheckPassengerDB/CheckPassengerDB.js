import React from 'react';

import styles from './CheckPassengerDB.module.scss';
import passenger from '../../assets/images/moduleReceivingData/passenger-photo.svg';
import StateRegister from "../StateRegister/StateRegister";
import PassengerData from "../PassengerData/PassengerData";

const CheckPassengerDb = ({setModalIsOpen}) => {
    const handleCloseModal = () => {
        setModalIsOpen(false);
    }

    const handleClickOnModalContent = (event) => {
        // don`t close modal if click on modal content
        event.stopPropagation();
    }

    return (
        <div
            onClick={handleCloseModal}
            className={styles.checkPassengerDb_wrapper}
        >
            <div
                onClick={handleClickOnModalContent}
                className={styles.checkPassengerDb_wrapper_checkPassengerDb}
            >
                <div>
                    <img className={styles.checkPassengerDb_wrapper_checkPassengerDb_photo} src={passenger} alt="passenger`s photo"/>
                </div>

                <StateRegister/>

                <PassengerData/>
            </div>
        </div>
    );
};

export default CheckPassengerDb;