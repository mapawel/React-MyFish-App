import React from 'react';
import styles from './Header.module.sass';
import Title from './Title';
import Nav from './Nav';


const Header = () => (
    <header className={styles.header}>
        <Nav />
        <Title></Title>
    </header>
);
export default Header;
