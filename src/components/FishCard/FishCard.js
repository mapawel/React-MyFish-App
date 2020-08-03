import React from 'react';
import styles from './FishCard.module.sass';
import AppContext from '../../context';
import Button from '../Button/Button'
import Image from '../Image/Image';
import TxtWhHead from '../TxtWhHead/TxtWhHead';
import CardTitle from '../CardTitle/CardTitle';
import ModalCard from '../ModalCard/ModalCard';


class FishCard extends React.Component {
    render() {
        const { name, location, img, generalInfo, lengthLimit, food, advice, timeLimit, id } = this.props
        return (
            <ModalCard>
                <CardTitle>{name}</CardTitle>
                <Image
                    src={img}
                    alt={name} />
                <div className={styles.infoBox}>
                    <TxtWhHead headTxt='Info:'>{generalInfo}</TxtWhHead>
                    <TxtWhHead headTxt='Wymiar ochronny:'>{lengthLimit}</TxtWhHead>
                    <TxtWhHead headTxt='Okres ochronny:'>{timeLimit}</TxtWhHead>
                    <TxtWhHead headTxt='Występowanie:'>{location}</TxtWhHead>
                    <TxtWhHead headTxt='Odżywianie:'>{food}</TxtWhHead>
                    <TxtWhHead headTxt='Porady i ciekawostki:'>{advice}</TxtWhHead>
                </div>
                <Button
                    onClick={this.context.closeFishCard}
                    id={id}
                    type='close'>
                </Button>
            </ModalCard>
        )
    }
};
FishCard.contextType = AppContext;

export default FishCard;

