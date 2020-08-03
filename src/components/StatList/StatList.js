import React from 'react';
import styles from './StatList.module.sass';
import AppContext from '../../context';
import StatItemLength from './StatItemLength';
import StatItemCount from './StatItemCount';


class StatList extends React.Component {
    render() {
        const { myFish, fish } = this.context
        // const { name } = Object(...fish.filter((fhs) => fhs.id === myFish[myFish.length - 1].fishId));
        // const { img } = Object(...fish.filter((fhs) => fhs.id === myFish[myFish.length - 1].fishId));
        // const date = new Date(myKey).toLocaleDateString();

        let arr = []
        fish.forEach((type, index) => {
            arr[index] = myFish.filter((fhs) => fhs.fishId === type.id)
        });

        const compareNumbers = (a, b) => b.myLength - a.myLength
        arr.forEach((type) => {
            type.sort(compareNumbers)
        })

        return (
            <div className={styles.wrapper}>
                <h1 className={styles.sectionHeader}>najdłuższe ryby każdego gatunku</h1>
                {
                    arr.map((item)=> item.length >0 ? <StatItemLength key={item[0].myKey} {...item[0]} /> : null)

                }
                <h1 className={styles.sectionHeader}>ilość ryb każdego gatunku</h1>
                {
                    arr.map((item, index)=> item.length >0 ? <StatItemCount key={`${index}count`} count={item.length} fishId={item[0].fishId} /> : null)

                }
            </div>
        )
    }

};
StatList.contextType = AppContext
export default StatList;
