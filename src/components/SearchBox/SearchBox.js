import React from 'react';
import styles from './SearchBox.module.sass';
import AppContext from '../../context';
import Button from '../Button/Button';

class SearchBox extends React.Component {
    render() {
        const { children, id, onChange, value, labelTxt, crossOnClock, select, textarea, ...props } = this.props
        let Tag = select ? 'select' : 'input'
        Tag = textarea ? 'textarea' : Tag
        const classInput = textarea ? styles.inputElementArea : styles.inputElement
        const options = select ? select.map((sel) => <option className={styles.optionSelect} key={sel} value={sel[0]}>{sel[1]}</option>) : null
        
        return (
            <div className={styles.wrapper}>
                <h4 className={styles.inputHeader}>
                    {children}
                </h4>
                <div className={styles.inputContainer}>
                    <Tag
                        className={classInput}
                        type='text'
                        id={id}
                        placeholder=' '
                        autoComplete='off'
                        onChange={onChange}
                        value={value}
                        {...props}
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
                        <Button
                        onClick={crossOnClock}
                        {...props}
                        type='clear'>
                        </Button>
                    }
                </div>
            </div>
        )
    }
};
SearchBox.contextType = AppContext;

export default SearchBox;