import React from 'react';
import styles from './TxtWhHead.module.sass';

const TxtWhHead = ( {headTxt, children}) => (
    <>
        <h4 className={styles.smallHeader}>{headTxt}</h4>
        <p className={styles.txt}>{children}</p>
    </>
);
export default TxtWhHead;
