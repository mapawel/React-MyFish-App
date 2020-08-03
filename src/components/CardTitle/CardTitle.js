import React from 'react';
import styles from './CardTitle.module.sass';

const CardTitle = ({ children }) => (
    <h2 className={styles.title}>{children}</h2>
);
export default CardTitle;
