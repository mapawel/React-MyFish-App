import React from 'react';
import styles from './MyFishListItem.module.sass';
import AppContext from '../../context';
import GradeStars from '../GradeStars/GradeStars';
import Button from '../Button/Button';

class MyFishListItem extends React.Component {
    render() {
        const { fishId, myKey, myPlace, myLength, myWeight } = this.props;
        const { name } = Object(...this.context.fish.filter((fhs) => fhs.id === fishId));
        const { img } = Object(...this.context.fish.filter((fhs) => fhs.id === fishId));
        const date = new Date(myKey).toLocaleDateString();

        return (
            <li className={styles.listElementWrapper}>
                <h2 className={styles.title}>{name}</h2>
                <div className={styles.imageBox}><div className={styles.imageBubble}><img
                    className={styles.image}
                    src={img}
                    alt={name}
                /></div></div>
                <div className={styles.infoBox}>
                    <h4 className={styles.smallHeader}>data połowu:</h4>
                    <p className={styles.txt}>{date}</p>
                    <h4 className={styles.smallHeader}>miejsce połowu:</h4>
                    <p className={styles.txt}>{myPlace}</p>
                    <h4 className={styles.smallHeader}>długość:</h4>
                    <p className={styles.txt}>{`${myLength} cm`}</p>
                    <h4 className={styles.smallHeader}>waga:</h4>
                    <p className={styles.txt}>{`${myWeight} gr`}</p>
                    <p className={styles.smallHeader}>twoja ocena połowu:</p>
                </div>

                <GradeStars {...this.props} nonClick></GradeStars>

                <div className={styles.flexEnter}></div>
                <Button
                    id={myKey}
                    onClick={this.context.openMyFish}
                >
                    więcej
                </Button>

            </li>
        )
    }
};
MyFishListItem.contextType = AppContext;

export default MyFishListItem;

