import React, {useState} from 'react';

import styles from './SocialNetworks.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import instagramProfile from "../../assets/images/instagram-profile.svg";

const SocialNetworks = () => {
    const [selectedOption, setSelectedOption] = useState('Instagram');

    const handleSelectOption = (option) => {
        setSelectedOption(option);
    }

    return (
        <div className={styles.socialNetworks}>
            <div className={styles.socialNetworks_titleContainer}>
                <h3>Social networks</h3>
                <button>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <ul className={styles.socialNetworks_options}>
                <li
                    className={`${styles.socialNetworks_options_item} ${selectedOption === 'Instagram' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Instagram')}
                >Instagram
                </li>
                <li
                    className={`${styles.socialNetworks_options_item} ${selectedOption === 'Facebook' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Facebook')}
                >Facebook
                </li>
                <li
                    className={`${styles.socialNetworks_options_item} ${selectedOption === 'Twitter' ? styles.active : ''}`}
                    onClick={() => handleSelectOption('Twitter')}
                >Twitter
                </li>
            </ul>

            {
                selectedOption === 'Instagram' &&
                <div className={styles.socialNetworks_content}>
                    <iframe
                        scrolling={'no'}
                        width="100%"
                        height="100%"
                        src="https://www.instagram.com/art.sample/embed/"
                        frameBorder="0"
                    ></iframe>
                </div>
            }
        </div>
    );
};

export default SocialNetworks;