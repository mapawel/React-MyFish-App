import React from 'react';
import styles from './ButtonAdd.module.sass';

const ButtonAdd = ({ id, onClick, ...props }) => (
    <button
        className={styles.addBtn}
        id={id}
        onClick={onClick}
        {...props}
    />
);
export default ButtonAdd;


