import React from 'react';
import Pagination from '@mui/material/Pagination';

import './Pagination.scss'
import styles from './CheckPassengerStateDBPage.module.scss';
import arrow from "../../assets/images/arrow.svg";
import more from "../../assets/images/moduleReceivingData/more.svg";
import search from "../../assets/images/search.svg";
import PassengerInfoItem from "../../components/PassengerInfoItem/PassengerInfoItem";
import Checkbox from "@mui/material/Checkbox";

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

const CheckPassengerStateDBPage = ({setModalIsOpen}) => {
    const handleCloseModalCheckPassengerStateDB = () => {
        setModalIsOpen(false);
    }

    return (
        <div className={styles.checkPassengerStateDb}>
            <div className={styles.checkPassengerStateDb_titleContainer}>
                <div className={styles.checkPassengerStateDb_titleContainer_navigation}>
                    <button onClick={handleCloseModalCheckPassengerStateDB}>
                        <img src={arrow} alt="arrow icon"/>
                    </button>

                    <h3>Search results</h3>
                </div>
                <div className={styles.checkPassengerStateDb_titleContainer_buttons}>
                    <button className={styles.clear}>Clear</button>
                    <button className={styles.more}>
                        <img src={more} alt="more info icon"/>
                    </button>
                </div>
            </div>

            <div className={styles.checkPassengerStateDb_options}>
                <div className={styles.checkPassengerStateDb_options_search}>
                    <input className={styles.checkPassengerStateDb_options_search_input} type="text"/>
                    <img className={styles.checkPassengerStateDb_options_search_icon} src={search} alt="search icon"/>
                </div>
            </div>

            <div className={styles.checkPassengerStateDb_passengers}>
                <div className={styles.checkPassengerStateDb_passengers_heading}>
                    <Checkbox {...label} />

                    <div className={styles.checkPassengerStateDb_passengers_heading_content}>
                        <p>Surname</p>
                        <p>Name</p>
                        <p>Given name</p>
                        <p>Sex</p>
                        <p>Date of birth</p>
                        <p>Nationality</p>
                        <p>Status</p>
                    </div>
                </div>

                <div className={styles.checkPassengerStateDb_passengers_list}>
                    <PassengerInfoItem/>
                    <PassengerInfoItem/>
                    <PassengerInfoItem/>
                    <PassengerInfoItem/>
                    <PassengerInfoItem/>
                    <PassengerInfoItem/>
                </div>

                <Pagination count={10} shape="rounded" />
            </div>
        </div>
    );
};

export default CheckPassengerStateDBPage;