import React from 'react';
import styles from './Button.module.sass';
import AppContext from '../../context';

class Button extends React.Component {
    render() {
        const { type, id, onClick, children, ...props } = this.props;
        let btnClass;
        switch (type) {
            case 'close':
                btnClass = styles.closeBtn
                break;
            case 'clear':
                btnClass = styles.roundClearBtn
                break;
            case 'defaultRed':
                btnClass = styles.defaultBtnRed
                break;
            default:
                btnClass = styles.defaultBtn;
        }

        return (
            <button
                className={btnClass}
                id={id}
                onClick={onClick}
                {...props}
            >
                {children}
            </button>

        )
    }
};
Button.contextType = AppContext;
export default Button;


