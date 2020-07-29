import React from 'react';
import styles from './FishCard.module.sass';
import AppContext from '../../context';
import Button from '../Button/Button'


class FishCard extends React.Component {

    render() {
        const { name, location, img, generalInfo, lengthLimit, food, advice, timeLimit, id } = this.props
        return (
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>{name}</h2>
                    <div className={styles.imageBox}><div className={styles.imageBubble}><img
                        className={styles.image}
                        src={img}
                        alt={name}
                    /></div></div>


                    <div className={styles.infoBox}>
                        <h4 className={styles.smallHeader}>Info:</h4>
                        <p className={styles.txt}>{generalInfo}</p>
                        <h4 className={styles.smallHeader}>Wymiar ochronny:</h4>
                        <p className={styles.txt}>{lengthLimit}</p>
                        <h4 className={styles.smallHeader}>Okres ochronny:</h4>
                        <p className={styles.txt}>{timeLimit}</p>
                        <h4 className={styles.smallHeader}>Występowanie:</h4>
                        <p className={styles.txt}>{location}</p>
                        <h4 className={styles.smallHeader}>Odżywianie:</h4>
                        <p className={styles.txt}>{food}</p>
                        <h4 className={styles.smallHeader}>Porady i ciekawostki:</h4>
                        <p className={styles.txt}>{advice}</p>
                    </div>
                    <div className={styles.flexEnter}></div>
                    <Button
                        onClick={this.context.closeFishCard}
                        id={id}
                        type='close'>
                    </Button>
                </div>
        )
    }
};
FishCard.contextType = AppContext;

export default FishCard;

