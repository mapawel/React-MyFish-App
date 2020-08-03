import React from 'react';
import styles from './StatItemCount.module.sass';
import CardTitle from '../CardTitle/CardTitle';
import CardItem from '../CardItem/CardItem';
import AppContext from '../../context';

class StatItemCount extends React.Component {
    render() {
        const { fish } = this.context
        const { count, fishId } = this.props
        const { name } = Object(...fish.filter((fhs) => fhs.id === fishId))

        return (
            <CardItem narrow>
                <CardTitle>{name}</CardTitle>
                <div className={styles.infoBox}>
                    <h2 className={styles.counter}>{count}<span className={styles.span}> szt</span></h2>
                </div>
            </CardItem>
        )
    }
};
StatItemCount.contextType = AppContext;
export default StatItemCount;