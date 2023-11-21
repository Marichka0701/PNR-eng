import React from 'react';

import styles from './MonthlyPassengerLoad.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import {monthlyPassengerLoad} from "../../assets/data/monthlyPassengerLoad";
import TextDBWrapperItem from "../TextDBWrapperItem/TextDBWrapperItem";

const MonthlyPassengerLoad = () => {
    return (
        <div className={styles.monthlyPassengerLoad}>
            <div className={styles.monthlyPassengerLoad_titleContainer}>
                <h3>Analysis of mobile operators</h3>

                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div className={styles.monthlyPassengerLoad_data}>
                <div className={styles.monthlyPassengerLoad_data_leftSide}>
                    {monthlyPassengerLoad.slice(0, 4).map((item, index) =>
                        <TextDBWrapperItem key={index} label={item.label} textDb={item.textDb}/>)}
                </div>
                <div className={styles.monthlyPassengerLoad_data_rightSide}>
                    {monthlyPassengerLoad.slice(4, ).map((item, index) =>
                        <TextDBWrapperItem key={index} label={item.label} textDb={item.textDb}/>)}
                </div>
            </div>
        </div>
    );
};

export default MonthlyPassengerLoad;