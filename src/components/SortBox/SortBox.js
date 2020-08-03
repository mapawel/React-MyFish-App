import React from 'react';
import styles from './SortBox.module.sass';
import AppContext from '../../context';

class SortBox extends React.Component {
    render() {
        const { onClick, name, children } = this.props

        return (
                <div
                className={styles.sortIconsBox}
                name='myLength'
                >
                    <p className={styles.sortTxt}>{children}</p>
                    <button
                    className={styles.iconUp}
                    name={name}
                    id='1'
                    onClick={onClick}
                    ></button>
                    <button
                    className={styles.iconDown}
                    name={name}
                    id='2'
                    onClick={onClick}
                    ></button>
                </div>
        )
    }
};
SortBox.contextType = AppContext;
export default SortBox;


