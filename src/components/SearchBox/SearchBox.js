import React from 'react';
import styles from './SearchBox.module.sass';
import AppContext from '../../context';

class SearchBox extends React.Component {
    render() {
        const { children, id, onChange, value, labelTxt, crossOnClock, select } = this.props
        const Tag = select ? 'select' : 'input'
        const options = select ? select.map((sel) => <option key={sel} value={sel[0]}>{sel[1]}</option>) : null
        

        return (
            <>
                <h4 className={styles.inputHeader}>
                    {children}
                </h4>

                <div className={styles.inputContainer}>
                    <Tag
                        className={styles.inputElement}
                        type='text'
                        id={id}
                        placeholder=' '
                        autoComplete='off'
                        onChange={onChange}
                        value={value}
                    >
                        {select && options}
                    </Tag>
                    <label
                        className={styles.label}
                        htmlFor={id}
                    >
                        {labelTxt}
                    </label>
                    {
                        value &&
                        <button
                            className={styles.button}
                            onClick={crossOnClock}>
                        </button>
                    }
                </div>
            </>
        )
    }



};
SearchBox.contextType = AppContext;

export default SearchBox;