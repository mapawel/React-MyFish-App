import React from 'react';
import styles from './Nav.module.sass';
import { NavLink } from 'react-router-dom';
import AppContext from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import ButtonAdd from './ButtonAdd/ButtonAdd'
import ButtonBurger from './ButtonBurger/ButtonBurger'

class Nav extends React.Component {
    state = {
        isNavExpanded: false
    }

    expandNav = () => {
        this.setState({
            isNavExpanded: this.state.isNavExpanded ? false : true
        })
    }

    handleMenuClick = () => {
        this.context.scrollTop()
        this.setState({
            isNavExpanded: this.state.isNavExpanded ? false : true
        })
    }

    render() {
        const classNav = this.state.isNavExpanded ? styles.navExpand : styles.nav;
        return (
            <>
                <div className={styles.wrapperBtns}>
                    <div className={styles.buttonsBox}>
                        <ButtonAdd
                            onClick={this.context.openForm}
                            // id='addBtn'
                        />
                        <ButtonBurger
                            expand={this.state.isNavExpanded ? 'expand' : null}
                            onClick={this.expandNav}
                        >
                        </ButtonBurger>
                    </div>
                </div>
                <nav className={classNav}>
                    <div className={styles.wrapper}>
                        <ButtonAdd
                            onClick={this.context.openForm}
                            // id='addBtn'
                        />
                        <ul className={styles.list}>
                            <li className={styles.listElement}>
                                <NavLink
                                    exact
                                    activeClassName={styles.activeLink}
                                    className={styles.link}
                                    to='/'
                                    onClick={this.handleMenuClick}>
                                    katalog
                            </NavLink>
                            </li>
                            <li className={styles.listElement}>
                                <NavLink
                                    activeClassName={styles.activeLink}
                                    className={styles.link}
                                    to='/myfish'
                                    onClick={this.handleMenuClick}>
                                    moje okazy
                            </NavLink>
                            </li>
                            <li className={styles.listElement}>
                                <NavLink
                                    activeClassName={styles.activeLink}
                                    className={styles.link}
                                    to='/top'
                                    onClick={this.handleMenuClick}>
                                    statystyki
                            </NavLink>
                            </li>
                            <li className={styles.listElement}
                            onClick={this.context.openInfo}>
                                <FontAwesomeIcon
                                    className={styles.icon}
                                    icon={faQuestion}
                                />
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
};
Nav.contextType = AppContext;
export default Nav;
