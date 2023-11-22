import React from 'react';
import {styled} from '@mui/material/styles';
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';

import styles from './DetailedInfoAboutFlight.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import passenger from "../../assets/images/moduleReceivingData/passenger-photo.svg";
import TextDBWrapperItem from "../TextDBWrapperItem/TextDBWrapperItem";

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#EBECF0',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#DE350B',
    },
}));

const DetailedInfoAboutFlight = () => {
    return (
        <div className={styles.detailedInfoAboutFlight}>
            <div className={styles.detailedInfoAboutFlight_titleContainer}>
                <h3>Flight PQ573/SQP573</h3>
                <button>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div className={styles.detailedInfoAboutFlight_info}>
                <div className={styles.detailedInfoAboutFlight_info_leftSide}>
                    <TextDBWrapperItem label={'Full flight cycle'} textDb={'3066 км'}/>
                    <TextDBWrapperItem label={'Flight time'} textDb={'01:20'}/>
                    <TextDBWrapperItem label={'Airline'} textDb={'Belavia'}/>
                    <TextDBWrapperItem label={'Transfers'} textDb={'3'}/>
                </div>

                <div className={styles.detailedInfoAboutFlight_info_divider}></div>

                <div className={styles.detailedInfoAboutFlight_info_rightSide}>
                    <div className={styles.detailedInfoAboutFlight_info_rightSide_hours}>
                        <TextDBWrapperItem label={'Departure'} textDb={'11:30'}/>
                        <TextDBWrapperItem label={'Arrival'} textDb={'12:50'}/>
                    </div>

                    <div className={styles.detailedInfoAboutFlight_info_rightSide_destination}>
                        <div className={styles.detailedInfoAboutFlight_info_rightSide_destination_item}>
                            <p>Bishkek, Kyrgyzstan</p>
                            <p>FRU</p>
                        </div>
                        <div className={styles.detailedInfoAboutFlight_info_rightSide_destination_item}>
                            <p>Tashkent, Uzbekistan</p>
                            <p>TAS</p>
                        </div>
                    </div>

                    <BorderLinearProgress variant="determinate" value={36}/>

                    <div className={styles.detailedInfoAboutFlight_info_rightSide_flight}>
                        <TextDBWrapperItem label={'Aircraft'} textDb={'Airbus А320'}/>
                        <TextDBWrapperItem label={'serial number'} textDb={'40146'}/>
                    </div>

                    <TextDBWrapperItem label={'registration'} textDb={'UR-SQS'}/>
                </div>
            </div>
        </div>
    );
};

export default DetailedInfoAboutFlight;