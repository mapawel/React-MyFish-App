import React from 'react';
import styles from './SortBox.module.sass';
import AppContext from '../../context';

class SortBox extends React.Component {
    render() {
        const { onClick, name, children } = this.props
        const { sort } = this.context

        let upClass;
        if (sort.id*1 === 1 && name === sort.name) {
            upClass = styles.iconUpActive
        } else {
            upClass = styles.iconUp
        }
        
        let downClass;
        if (sort.id*1 === 2 && name === sort.name) {
            downClass = styles.iconDownActive
        } else {
            downClass = styles.iconDown
        }

        return (
                <div
                className={styles.sortIconsBox}
                name='myLength'
                >
                    <p className={styles.sortTxt}>{children}</p>
                    <button
                    className={upClass}
                    name={name}
                    id='1'
                    onClick={onClick}
                    ></button>
                    <button
                    className={downClass}
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


