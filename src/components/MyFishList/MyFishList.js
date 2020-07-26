import React from 'react';
import styles from './MyFishList.module.sass';
import AppContext from '../../context';
import MyFishListItem from './MyFishListItem';

class MyFishList extends React.Component {
    render() {
        return (
            <>
            <h1 className={styles.sectionHeader}>moje okazy</h1>
            <ul className={styles.listWrapper}>
                {
                    this.context.myFish.map((fhs) => <MyFishListItem key={fhs.myKey} {...fhs} />)
                }
            </ul>
            </>
        )
    }
}
MyFishList.contextType = AppContext;
export default MyFishList;