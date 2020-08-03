import React from 'react';
import styles from './ModalCard.module.sass';

const ModalCard = ({ children }) => (
    <div className={styles.screen}>
        <div className={styles.wrapper}>
            {children}
        </div>
    </div>
);
export default ModalCard;
