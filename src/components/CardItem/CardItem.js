import React from 'react';
import styles from './CardItem.module.sass'

const CardItem = ({ children, narrow, extraNarrow }) => {
    let classWrapper = styles.wrapperWide
    if (narrow) {classWrapper = styles.wrapperNarrow}
    if (extraNarrow) {classWrapper = styles.wrapperExtraNarrow}
    
    return (
    <li className={classWrapper}>
        {children}
    </li>
    )
};
export default CardItem;