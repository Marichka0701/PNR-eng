import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './StateRegister.module.scss';
import more from "../../assets/images/moduleReceivingData/more.svg";
import error from "../../assets/images/moduleReceivingData/error-icon.svg";
import interpol from "../../assets/images/moduleReceivingData/interpol.svg";

const StateRegister = () => {
    return (
        <div className={styles.stateRegister}>
            <div className={styles.stateRegister_titleContainer}>
                <h3>Flight data</h3>

                <button className={styles.more}>
                    <img src={more} alt="more info icon"/>
                </button>
            </div>

            <div className={styles.stateRegister_interpol}>
                <div>
                    <img src={error} alt="error icon"/>
                </div>

                <div className={styles.stateRegister_interpol_description}>
                    <div className={styles.stateRegister_interpol_description_notice}>
                        <p>INTERPOL</p>
                        <p>1 RED NOTICE</p>
                    </div>

                    <div className={styles.stateRegister_interpol_description_noticeDescription}>
                        <p>POLAR OLARA</p>
                        <button>1 resolution</button>
                    </div>
                </div>
            </div>

            <Accordion style={{backgroundColor: 'transparent', 'boxShadow': 'none', 'margin:': '0'}}>
                <AccordionSummary
                    style={{'padding': '0', 'display:': 'flex', 'gap': '10px', 'alignItems': 'center'}}
                    expandIcon={<ExpandMoreIcon style={{'padding': '0px 10px', 'fontSize': '48px', 'color': '#56628C'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div style={{'display': 'flex', 'gap': '10px', 'alignItems': 'center'}}>
                        <img src={interpol} alt="interpol icon"/>
                        <Typography style={{'textAlign': 'justify', 'color': '#172B4D'}}>
                            Department for the Execution of Court Decisions, Material, Technical and Financial
                            Support of the Courts under the Ministry of Justice of the Republic of Uzbekistan
                        </Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails style={{'padding': '0 0 0 66px'}}>
                    <Typography>
                        Additional information
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default StateRegister;