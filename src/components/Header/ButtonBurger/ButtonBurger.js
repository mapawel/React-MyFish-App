import React from 'react';
import styles from './ButtonBurger.module.sass';

const ButtonBurger = ({ expand, id, onClick, ...props }) => {
    const burgerBtnClass = expand ? styles.burgerBtnExpand : styles.burgerBtn;
    return (
        <button
            className={burgerBtnClass}
            id={id}
            onClick={onClick}
            {...props}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
};
export default ButtonBurger;


