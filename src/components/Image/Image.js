import React from 'react';
import styles from './Image.module.sass';

const Image = ({src, alt}) => (
    <div className={styles.imageBox}>
        <div className={styles.imageBubble}>
            <img
                className={styles.image}
                src={src}
                alt={alt}
            />
        </div>
    </div>
);
export default Image
