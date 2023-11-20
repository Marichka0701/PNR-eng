import React from 'react';

import styles from './Header.module.scss';
import separator from '../../assets/images/header/separator.svg';
import question from '../../assets/images/header/question-circle.svg';
import user from '../../assets/images/header/avatar.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_leftSide}>
                <div className={styles.header_leftSide_logo}>
                    <div>
                        <h2>T1 PNR GOV</h2>
                        <p>Uzbekistan</p>
                    </div>
                    <img src={separator} alt="separator icon"/>
                </div>

                <nav className={styles.header_leftSide_nav}>
                    <ul className={styles.header_leftSide_nav_options}>
                        <li>Flights</li>
                        <li>Passengers</li>
                        <li>Aircraft</li>
                        <li>Airports</li>
                    </ul>
                </nav>
            </div>

            <div className={styles.header_rightSide}>
                <img src={question} alt="question-circle icon"/>
                <img src={user} alt="user icon"/>
            </div>
        </header>
    );
};

export default Header;