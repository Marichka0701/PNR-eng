import React, {useState} from 'react';
import Modal from 'react-modal';

import styles from './PlaceOnBoard.module.scss';
import plane from "../../assets/images/place-on-board.svg";

const PlaceOnBoard = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className={styles.placeOnBoard}>
            <img
                src={plane}
                alt="place on board"
                onClick={() => setModalIsOpen(true)}
            />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
            >
                <img
                    src={plane}
                    alt="place on board"
                />
            </Modal>
        </div>
    );
};

export default PlaceOnBoard;