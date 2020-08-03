import React from 'react';
import styles from './CatalogListItem.module.sass';
import AppContext from '../../context';
import Button from '../Button/Button';
import Image from '../Image/Image';
import TxtWhHead from '../TxtWhHead/TxtWhHead';
import CardTitle from '../CardTitle/CardTitle';
import CardItem from '../CardItem/CardItem';


const CatalogListItem = ({ name, img, generalInfo, lengthLimit, timeLimit, id }) => (
    <AppContext.Consumer>
        {(context) => (
            <CardItem>
                <CardTitle>{name}</CardTitle>
                <Image
                    src={img}
                    alt={name} />
                <div className={styles.infoBox}>
                    <TxtWhHead headTxt='Info:'>{generalInfo}</TxtWhHead>
                    <TxtWhHead headTxt='Wymiar ochronny:'>{lengthLimit}</TxtWhHead>
                    <TxtWhHead headTxt='Okres ochronny:'>{timeLimit}</TxtWhHead>
                </div>
                <div className={styles.flexEnter}></div>
                <Button
                    id={id}
                    onClick={context.openFishCard}>
                    info
                </Button>
                <Button
                    id={id}
                    onClick={(e)=>context.openForm(e)}>
                    złowiona
                </Button>
            </CardItem>
        )}
    </AppContext.Consumer>
);

export default CatalogListItem;

