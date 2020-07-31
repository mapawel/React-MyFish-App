import React from 'react';
import styles from './MyFishCard.module.sass';
import AppContext from '../../context';
import GradeStars from '../GradeStars/GradeStars';
import Button from '../Button/Button';


class MyFishCard extends React.Component {
    render() {
        const { fishId, myKey, myPlace, myLength, myFood, myMethod, myWeight, myDescription, myGrade } = this.props;
        const { name } = Object(...this.context.fish.filter((fhs) => fhs.id === fishId));
        const { img } = Object(...this.context.fish.filter((fhs) => fhs.id === fishId));
        const date = new Date(myKey).toLocaleDateString();
        const hour = new Date(myKey).toLocaleTimeString();

        return (
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{name}</h2>
                <div className={styles.imageBox}><div className={styles.imageBubble}><img
                    className={styles.image}
                    src={img}
                    alt={name}
                /></div></div>
                <div className={styles.infoBox}>
                    <h4 className={styles.smallHeader}>data i godzina połowu:</h4>
                    <p className={styles.txt}>{`${date}, godz: ${hour}`}</p>
                    <h4 className={styles.smallHeader}>miejsce połowu:</h4>
                    <p className={styles.txt}>{myPlace}</p>
                    <h4 className={styles.smallHeader}>długość:</h4>
                    <p className={styles.txt}>{`${myLength} cm`}</p>
                    <h4 className={styles.smallHeader}>waga:</h4>
                    <p className={styles.txt}>{`${myWeight} gr`}</p>
                    <h4 className={styles.smallHeader}>przynęta:</h4>
                    <p className={styles.txt}>{myFood}</p>
                    <h4 className={styles.smallHeader}>sposób połowu:</h4>
                    <p className={styles.txt}>{myMethod}</p>
                    <h4 className={styles.smallHeader}>informacje dodatkowe:</h4>
                    <p className={styles.txt}>{myDescription}</p>

                    <p className={styles.smallHeader}>twoja ocena połowu:</p>
                    <GradeStars
                        onClick={(e) => this.context.handleGradeChange(e, myKey)}
                        myGrade={myGrade}
                    >kliknij, aby zmodyfikować</GradeStars>


                </div>
                <div className={styles.flexEnter}></div>
                <Button
                        id={myKey}
                        onClick={this.context.openChangeForm}
                    >zmień dane</Button>
                <Button
                    id={myKey}
                    onClick={this.context.closeMyFish}
                    type='close'
                ></Button>
            </div>
        )
    }
};
MyFishCard.contextType = AppContext;

export default MyFishCard;

