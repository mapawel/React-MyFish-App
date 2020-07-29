import React from 'react';
import styles from './CatalogListItem.module.sass';
import AppContext from '../../context';
import Button from '../Button/Button';

const CatalogListItem = ({ name, img, generalInfo, lengthLimit, timeLimit, id }) => (
    <AppContext.Consumer>
        {(context) => (
            <li className={styles.wrapper}>
                <h2 className={styles.title}>{name}</h2>
                <div className={styles.imageBox}><div className={styles.imageBubble}><img
                    className={styles.image}
                    src={img}
                    alt={name}
                /></div></div>


                <div className={styles.infoBox}>
                    <h4 className={styles.smallHeader}>Info:</h4>
                    <p className={styles.txt}>{generalInfo}</p>
                    <h4 className={styles.smallHeader}>Wymiar ochronny:</h4>
                    <p className={styles.txt}>{lengthLimit}</p>
                    <h4 className={styles.smallHeader}>Okres ochronny:</h4>
                    <p className={styles.txt}>{timeLimit}</p>
                </div>
                <div className={styles.flexEnter}></div>
                <Button
                    id={id}
                    onClick={context.openFishCard}
                >
                    więcej
                </Button>

            </li>
        )}
    </AppContext.Consumer>



);

export default CatalogListItem;

