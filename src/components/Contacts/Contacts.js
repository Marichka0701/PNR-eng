import React from 'react';

import styles from './Contacts.module.scss'
import more from "../../assets/images/moduleReceivingData/more.svg";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.contacts_titleContainer}>
                <h3>Contacts</h3>
                <button>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <form className={styles.contacts_form} action="#">
                <label className={styles.contacts_form_label}>
                    Phone number
                    <input
                        className={styles.contacts_form_label_input}
                        placeholder={'+1234567890'}
                        type="number"
                    />
                </label>

                <label className={styles.contacts_form_label}>
                    Place of registration
                    <input
                        className={styles.contacts_form_label_input}
                        placeholder={'Romania, Bucharest'}
                        type="text"
                    />
                </label>

                <label className={styles.contacts_form_label}>
                    Email
                    <input
                        className={styles.contacts_form_label_input}
                        placeholder={'polarolara@gmail.com'}
                        type="email"
                    />
                </label>
            </form>
        </div>
    );
};

export default Contacts;