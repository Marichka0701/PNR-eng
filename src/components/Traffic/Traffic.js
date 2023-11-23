import React from 'react';

import styles from './Traffic.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import {traffic} from "../../assets/data/traffic";
import TextDBWrapperItem from "../TextDBWrapperItem/TextDBWrapperItem";

const Traffic = () => {
    return (
        <div className={styles.traffic}>
            <div className={styles.traffic_titleContainer}>
                <h3>Traffic</h3>

                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div className={styles.traffic_data}>
                {traffic.map((item, index) =>
                    <TextDBWrapperItem key={index} textDb={item?.textDb} label={item?.label}/>)}
            </div>
        </div>
    );
};

export default Traffic;