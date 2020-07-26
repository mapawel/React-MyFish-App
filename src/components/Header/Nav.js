import React from 'react';
import styles from './Nav.module.sass';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className={styles.nav}>
        <div className={styles.wrapper}>
            <button className={styles.addBtn} />
            <ul className={styles.list}>
                <li className={styles.listElement}>
                    <NavLink
                        exact
                        activeClassName={styles.activeLink}
                        className={styles.link}
                        to='/'>
                        katalog
                </NavLink>
                </li>
                <li className={styles.listElement}>
                    <NavLink
                        activeClassName={styles.activeLink}
                        className={styles.link}
                        to='/myfish'>
                        moje okazy
                </NavLink>
                </li>
                <li className={styles.listElement}>
                    <NavLink
                        activeClassName={styles.activeLink}
                        className={styles.link}
                        to='/top'>
                        statystyki
                </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);
export default Nav;
