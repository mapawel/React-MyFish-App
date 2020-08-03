import React from 'react';
import styles from './MyFishListItem.module.sass';
import AppContext from '../../context';
import GradeStars from '../GradeStars/GradeStars';
import Button from '../Button/Button';
import Image from '../Image/Image';
import TxtWhHead from '../TxtWhHead/TxtWhHead';
import CardTitle from '../CardTitle/CardTitle';
import CardItem from '../CardItem/CardItem';

class MyFishListItem extends React.Component {
    render() {
        const { fishId, myKey, myPlace, myLength, myWeight } = this.props;
        const { name } = Object(...this.context.fish.filter((fhs) => fhs.id === fishId));
        const { img } = Object(...this.context.fish.filter((fhs) => fhs.id === fishId));
        const date = new Date(myKey).toLocaleDateString();

        return (
            <CardItem narrow>
                <CardTitle>{name}</CardTitle>
                <Image
                    src={img}
                    alt={name} />

                <div className={styles.infoBox}>
                    <TxtWhHead headTxt='data połowu:'>{date}</TxtWhHead>
                    <TxtWhHead headTxt='miejsce połowu:'>{myPlace}</TxtWhHead>
                    <TxtWhHead headTxt='długość:'>{`${myLength} cm`}</TxtWhHead>
                    <TxtWhHead headTxt='waga:'>{`${myWeight} gr`}</TxtWhHead>
                    <TxtWhHead headTxt='twoja ocena połowu:'></TxtWhHead>
                </div>
                <GradeStars {...this.props} nonClick></GradeStars>
                <Button
                    id={myKey}
                    onClick={this.context.openMyFish}>
                    więcej
                </Button>
            </CardItem>
        )
    }
};
MyFishListItem.contextType = AppContext;

export default MyFishListItem;

