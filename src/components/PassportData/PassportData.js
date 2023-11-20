import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import styles from './PassportData.module.scss';
import more from '../../assets/images/moduleReceivingData/more.svg';

const PassportData = () => {
    return (
        <div className={styles.passportData}>
            <div className={styles.passportData_titleContainer}>
                <h3>Passport data</h3>
                <div className={styles.passportData_titleContainer_buttons}>
                    <button className={styles.clear}>Clear</button>
                    <button className={styles.more}>
                        <img src={more} alt="more info icon"/>
                    </button>
                </div>
            </div>

            <form className={styles.passportData_form} action="#">
                <div className={styles.passportData_form_top}>
                    <div className={styles.passportData_form_top_leftSide}>
                        <label className={`${styles.label} ${styles.fixedWidth}`}>
                            Document type
                            <input
                                className={styles.input}
                                placeholder={'National Passport'}
                                type="text"
                            />
                        </label>

                        <label className={styles.label}>
                            Surname
                            <input
                                className={styles.input}
                                placeholder={'POLAR'}
                                type="text"
                            />
                        </label>

                        <label className={styles.label}>
                            Name
                            <input
                                className={styles.input}
                                placeholder={'OLARA'}
                                type="text"
                            />
                        </label>

                        <label className={styles.label}>
                            Given name
                            <input
                                className={styles.input}
                                placeholder={''}
                                type="text"
                            />
                        </label>
                    </div>
                    <div className={styles.passportData_form_top_rightSide}>
                        <label className={styles.label}>
                            Document number
                            <input
                                className={styles.input}
                                placeholder={'ab1234567'}
                                type="text"
                            />
                        </label>

                        <label className={styles.label}>
                            ID
                            <input
                                className={styles.input}
                                placeholder={'ab1234567'}
                                type="number"
                            />
                        </label>

                        <label className={styles.label}>
                            Nationality
                            <input
                                className={styles.input}
                                placeholder={'Romania'}
                                type="text"
                            />
                        </label>
                    </div>
                </div>

                <div className={styles.passportData_form_container_fullWidth}>
                    <label className={`${styles.label} ${styles.fixedWidth}`}>
                        Date of birth
                        <input
                            className={styles.input}
                            placeholder={'23.09.1990'}
                            type="text"
                        />
                    </label>
                    <FormControl>
                        <FormLabel style={{color: '#7A869A', fontSize: '14px'}}
                                   id="demo-radio-buttons-group-label">Sex</FormLabel>
                        <RadioGroup
                            style={{flexWrap: 'nowrap', flexDirection: 'row', gap: '20px'}}
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel style={{margin: '0', color: '#7A869A', fontSize: '14px', display: 'flex', gap: '10px'}}
                                              control={<Radio style={{padding: '0'}}/>} label="Female"/>
                            <FormControlLabel style={{margin: '0', color: '#7A869A', fontSize: '14px', display: 'flex', gap: '10px'}} value="male"
                                              control={<Radio style={{padding: '0'}}/>} label="Male"/>
                            <FormControlLabel style={{margin: '0', color: '#7A869A', fontSize: '14px', display: 'flex', gap: '10px'}}
                                              value="unchecked" control={<Radio style={{padding: '0'}}/>} label="Unchecked"/>
                        </RadioGroup>
                    </FormControl>
                </div>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Place of birth
                    <input
                        className={styles.input}
                        placeholder={'Romania, Bucharest'}
                        type="text"
                    />
                </label>

                <div className={styles.passportData_form_container_fullWidth}>
                    <label className={`${styles.label} ${styles.fixedWidth}`}>
                        Date of issue
                        <input
                            className={styles.input}
                            placeholder={'23.09.2015'}
                            type="text"
                        />
                    </label>

                    <label className={`${styles.label} ${styles.fixedWidth}`}>
                        Date of expiry
                        <input
                            className={styles.input}
                            placeholder={'23.09.2025'}
                            type="text"
                        />
                    </label>
                </div>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Place of issue
                    <input
                        className={styles.input}
                        placeholder={'Passport Issuing Department'}
                        type="text"
                    />
                </label>
            </form>
        </div>
    );
};

export default PassportData;