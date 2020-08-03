import React from 'react';
import styles from './MyFishCard.module.sass';
import AppContext from '../../context';
import GradeStars from '../GradeStars/GradeStars';
import Button from '../Button/Button';
import Image from '../Image/Image';
import TxtWhHead from '../TxtWhHead/TxtWhHead';
import CardTitle from '../CardTitle/CardTitle';
import ModalCard from '../ModalCard/ModalCard';


class MyFishCard extends React.Component {
    render() {
        const { fishId, myKey, myPlace, myLength, myFood, myMethod, myWeight, myDescription, myGrade } = this.props;
        const { name } = Object(...this.context.fish.filter((fhs) => fhs.id === fishId));
        const { img } = Object(...this.context.fish.filter((fhs) => fhs.id === fishId));
        const date = new Date(myKey).toLocaleDateString();
        const hour = new Date(myKey).toLocaleTimeString();

        return (
            <ModalCard>
                <CardTitle>{name}</CardTitle>
                <Image
                    src={img}
                    alt={name} />
                <div className={styles.infoBox}>
                    <TxtWhHead headTxt='data i godzina połowu:'>{`${date}, godz: ${hour}`}</TxtWhHead>
                    <TxtWhHead headTxt='miejsce połowu:'>{myPlace}</TxtWhHead>
                    <TxtWhHead headTxt='długość:'>{`${myLength} cm`}</TxtWhHead>
                    <TxtWhHead headTxt='waga:'>{`${myWeight} gr`}</TxtWhHead>
                    <TxtWhHead headTxt='przynęta:'>{myFood}</TxtWhHead>
                    <TxtWhHead headTxt='sposób połowu:'>{myMethod}</TxtWhHead>
                    <TxtWhHead headTxt='informacje dodatkowe:'>{myDescription}</TxtWhHead>
                    <TxtWhHead headTxt='twoja ocena połowu:'></TxtWhHead>
                    <GradeStars
                        onClick={(e) => this.context.handleGradeChange(e, myKey)}
                        myGrade={myGrade}
                    >kliknij, aby zmodyfikować</GradeStars>
                </div>
                <Button
                    id={myKey}
                    onClick={this.context.openChangeForm}
                >zmień dane</Button>
                <Button
                    id={myKey}
                    onClick={this.context.closeMyFish}
                    type='close'
                ></Button>
            </ModalCard>
        )
    }
};
MyFishCard.contextType = AppContext;

export default MyFishCard;

