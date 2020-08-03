import React from 'react';
import styles from './StatItemLength.module.sass';
import TxtWhHead from '../TxtWhHead/TxtWhHead';
import CardTitle from '../CardTitle/CardTitle';
import CardItem from '../CardItem/CardItem';
import AppContext from '../../context';

class StatItemLength extends React.Component {
    render() {
        const { fish } = this.context
        const { fishId, myKey, myLength, myPlace } = this.props
        const { name } = Object(...fish.filter((fhs) => fhs.id === fishId))
        const date = new Date(myKey).toLocaleDateString()

        return (
            <CardItem narrow>
                <CardTitle>{name}</CardTitle>
                <div className={styles.infoBox}>
                    <TxtWhHead headTxt='długość:'>{`${myLength} cm`}</TxtWhHead>
                    <TxtWhHead headTxt='miejsce połowu:'>{myPlace}</TxtWhHead>
                    <TxtWhHead headTxt='data połowu:'>{date}</TxtWhHead>
                </div>
            </CardItem>
        )
    }
};
StatItemLength.contextType = AppContext;
export default StatItemLength;