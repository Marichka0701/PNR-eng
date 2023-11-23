import React, {useState} from 'react';

import styles from './ContactsSocialNetworks.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import ContactPersonItem from "../ContactPersonItem/ContactPersonItem";

const ContactsSocialNetworks = () => {
    const [selectedOption, setSelectedOption] = useState('Instagram');

    const handleSelectOption = (option) => {
        setSelectedOption(option);
    }

    return (
        <div className={styles.contactsSocialNetworks}>
            <div className={styles.contactsSocialNetworks_titleContainer}>
                <h3>Contacts</h3>
                <button>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <ul className={styles.contactsSocialNetworks_options}>
                <li
                    className={`${styles.contactsSocialNetworks_options_item} ${selectedOption === 'Instagram' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Instagram')}
                >Instagram
                </li>
                <li
                    className={`${styles.contactsSocialNetworks_options_item} ${selectedOption === 'Facebook' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Facebook')}
                >Facebook
                </li>
                <li
                    className={`${styles.contactsSocialNetworks_options_item} ${selectedOption === 'Twitter' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Twitter')}
                >Twitter
                </li>
            </ul>

            {
                selectedOption === 'Instagram' &&
                <div className={styles.contactsSocialNetworks_followers}>
                    <ContactPersonItem/>
                    <ContactPersonItem/>
                    <ContactPersonItem/>
                    <ContactPersonItem/>
                    <ContactPersonItem/>
                </div>
            }

            {
                selectedOption === 'Facebook' &&
                <div className={styles.contactsSocialNetworks_followers}>
                    <ContactPersonItem/>
                    <ContactPersonItem/>
                    <ContactPersonItem/>
                </div>
            }

            {
                selectedOption === 'Twitter' &&
                <div className={styles.contactsSocialNetworks_followers}>
                    <ContactPersonItem/>
                    <ContactPersonItem/>
                    <ContactPersonItem/>
                    <ContactPersonItem/>
                </div>
            }
        </div>
    );
};

export default ContactsSocialNetworks;