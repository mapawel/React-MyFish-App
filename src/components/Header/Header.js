import React from 'react';
import styles from './Header.module.sass';
import Title from './Title';
import Nav from './Nav';
import AppContext from '../../context'

const Header = () => (
    <AppContext.Consumer>
        {(context) => (
            <header className={styles.header}>
                <Nav />
                <Title></Title>
            </header>
        )}
    </AppContext.Consumer>

);
export default Header;
