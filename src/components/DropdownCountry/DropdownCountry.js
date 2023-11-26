import React, {useState} from 'react';
import dropdown from "../../assets/images/header/dropdown-icon.svg";

import styles from './DropdownCountry.module.scss';
import {countries} from "../../assets/data/countries";

const DropdownCountry = () => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
    }

    const sortedCountries = [selectedCountry, ...countries.filter(country => country !== selectedCountry)];

    return (
        <div className={styles.dropdownCountry}>
            <div className={styles.dropdownCountry_selected}>
                <span>{selectedCountry}</span>
                <img src={dropdown} alt="dropdown icon"/>
            </div>

            <ul className={styles.dropdownCountry_content}>
                {sortedCountries.map((item, index) =>
                <li
                    key={index}
                    className={selectedCountry === item ? styles.isAlreadySelected : ''}
                    onClick={() => handleSelectCountry(item)}
                >{item}</li>)}
            </ul>
        </div>
    );
};

export default DropdownCountry;