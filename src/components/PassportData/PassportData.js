import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import {FormControl, FormControlLabel, FormLabel, RadioGroup} from '@material-ui/core';
import {useForm} from "react-hook-form";

import styles from './PassportData.module.scss';
import more from '../../assets/images/moduleReceivingData/more.svg';
import location from '../../assets/images/iconsForInput/location.svg';

const PassportData = () => {
    const BlueRadio = withStyles({
        root: {
            color: '#DFE1E6',
            '&$checked': {
                color: '#1976d2',
            },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        reset,
        setValue
    } = useForm({
        // resolver: joiResolver(registrationCustomerValidator),
        mode: 'all',
    });

    const [startDate, setStartDate] = useState(new Date());

    // useEffect(() => {
    //     reset({
    //         date_of_booking: '25.10.2021',
    //         departure_time: '04.11.2021',
    //         departure_airport: 'Bishkek, Kyrgyzstan (FRU)',
    //         seat_number: 'Б43',
    //         place_of_following: 'Samarkand',
    //         agent_data: 'POLAN DAVID',
    //         date_of_ticket_purchase: '25.10.2021',
    //         ticket_purchase_method: 'Internet',
    //         payment_method: 'Bank card',
    //     });
    // }, [])

    const handleResetForm = () => {
        reset();
    }


    return (
        <div className={styles.passportData}>
            <div className={styles.passportData_titleContainer}>
                <h3>Passport data</h3>
                <div className={styles.passportData_titleContainer_buttons}>
                    <button
                        className={styles.clear}
                        onClick={handleResetForm}
                    >Clear
                    </button>
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
                                {...register('document_type')}
                                className={styles.input}
                                // placeholder={'National Passport'}
                                type="text"
                            />
                        </label>

                        <label className={styles.label}>
                            Surname
                            <input
                                {...register('surname')}
                                className={styles.input}
                                // placeholder={'POLAR'}
                                type="text"
                            />
                        </label>

                        <label className={styles.label}>
                            Name
                            <input
                                {...register('name')}
                                className={styles.input}
                                // placeholder={'OLARA'}
                                type="text"
                            />
                        </label>

                        <label className={styles.label}>
                            Given name
                            <input
                                {...register('given_name')}
                                className={styles.input}
                                // placeholder={''}
                                type="text"
                            />
                        </label>
                    </div>
                    <div className={styles.passportData_form_top_rightSide}>
                        <label className={styles.label}>
                            Document number
                            <input
                                {...register('document_number')}
                                className={styles.input}
                                // placeholder={'ab1234567'}
                                type="text"
                            />
                        </label>

                        <label className={styles.label}>
                            ID
                            <input
                                {...register('id')}
                                className={styles.input}
                                // placeholder={'ab1234567'}
                                type="number"
                            />
                        </label>

                        <label className={styles.label}>
                            Nationality
                            <input
                                {...register('nationality')}
                                className={styles.input}
                                // placeholder={'Romania'}
                                type="text"
                            />
                        </label>
                    </div>
                </div>

                <div className={styles.passportData_form_container_fullWidth}>
                    <label className={`${styles.label} ${styles.fixedWidth}`}>
                        Date of birth
                        <input
                            {...register('date_of_birth')}
                            className={styles.input}
                            // placeholder={'23.09.1990'}
                            type="date"
                        />
                    </label>

                    <FormControl style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <FormLabel style={{color: '#7A869A', fontSize: '10px'}}
                                   id="demo-radio-buttons-group-label">SEX</FormLabel>
                        <RadioGroup
                            style={{flexWrap: 'nowrap', flexDirection: 'row', gap: '20px'}}
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                style={{margin: '0', color: '#7A869A', fontSize: '14px', display: 'flex', gap: '10px'}}
                                value="female"
                                control={<BlueRadio style={{padding: '0'}}/>} label="Female"/>
                            <FormControlLabel
                                style={{margin: '0', color: '#7A869A', fontSize: '14px', display: 'flex', gap: '10px'}}
                                value="male"
                                control={<BlueRadio style={{padding: '0'}}/>} label="Male"/>
                            <FormControlLabel
                                style={{margin: '0', color: '#7A869A', fontSize: '14px', display: 'flex', gap: '10px'}}
                                value="unchecked"
                                control={<BlueRadio style={{padding: '0'}}/>} label="Unchecked"/>
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className={styles.inputContainer}>
                    <label>
                        Place of birth
                        <input
                            {...register('place_of_birth')}
                            className={styles.input}
                            // placeholder={'Romania, Bucharest'}
                            type="text"
                        />
                    </label>
                    <img src={location} alt="geo location icon"/>
                </div>

                <div className={styles.passportData_form_container_fullWidth}>
                    <label className={`${styles.label} ${styles.fixedWidth}`}>
                        Date of issue
                        <input
                            {...register('date_of_issue')}
                            className={styles.input}
                            // placeholder={'23.09.2015'}
                            type="date"
                        />
                    </label>

                    <label className={`${styles.label} ${styles.fixedWidth}`}>
                        Date of expiry
                        <input
                            {...register('date_of_expiry')}
                            className={styles.input}
                            // placeholder={'23.09.2025'}
                            type="date"
                        />
                    </label>
                </div>

                <label className={`${styles.label} ${styles.fixedWidth}`}>
                    Place of issue
                    <input
                        {...register('place_of_issue')}
                        className={styles.input}
                        // placeholder={'Passport Issuing Department'}
                        type="text"
                    />
                </label>
            </form>
        </div>
    );
};

export default PassportData;