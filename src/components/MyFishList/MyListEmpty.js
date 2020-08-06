import React from 'react';
import styles from './MyListEmpty.module.sass';
import AppContext from '../../context';
import Button from '../Button/Button';

const MyListEmpty = () => (
    <AppContext.Consumer>
        {(context) => {
            let welcomescreen
            if (context.myFish.length === 0) {
                welcomescreen =
                    <div className={styles.welcomeBox}>
                        <h2 className={styles.welcomeInfo}>Nie masz jeszcze żadnych okazów. Dodaj swój pierwszy połów:</h2>
                        <Button onClick={context.openForm}>dodaj</Button>
                    </div>
            } else { welcomescreen = null }

            return (
                welcomescreen
            )
        }
        }

    </AppContext.Consumer>
);
export default MyListEmpty;
