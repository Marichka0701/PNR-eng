import React, {useState} from 'react';

import styles from './AnalysisOfOperationalInformation.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import DrugTraffic from "../DrugTraffic/DrugTraffic";

const AnalysisOfOperationalInformation = () => {
    const [selectedOption, setSelectedOption] = useState('Drug traffic');

    const handleSelectOption = (option) => {
        setSelectedOption(option);
    }

    return (
        <div className={styles.analysisOfOperationalInformation}>
            <div className={styles.analysisOfOperationalInformation_titleContainer}>
                <h3>Analysis of operational information</h3>
                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <ul className={styles.analysisOfOperationalInformation_options}>
                <li
                    className={`${styles.analysisOfOperationalInformation_options_item} ${selectedOption === 'Drug traffic' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Drug traffic')}
                >Drug traffic
                </li>
                <li
                    className={`${styles.analysisOfOperationalInformation_options_item} ${selectedOption === 'Money laundering' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Money laundering')}
                >Money laundering
                </li>
                <li
                    className={`${styles.analysisOfOperationalInformation_options_item} ${selectedOption === 'Human traffic' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Human traffic')}
                >Human traffic
                </li>
                <li
                    className={`${styles.analysisOfOperationalInformation_options_item} ${selectedOption === 'Terrorism' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Terrorism')}
                >Terrorism
                </li>
            </ul>

            {selectedOption === 'Drug traffic' && <DrugTraffic/>}
        </div>
    );
};

export default AnalysisOfOperationalInformation;