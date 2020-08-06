import React from 'react';
import styles from './MyFishList.module.sass';
import AppContext from '../../context';
import MyFishListItem from './MyFishListItem';
import SearchCombo from '../../components/SearchCombo/SearchCombo';
import MyListEmpty from '../MyFishList/MyListEmpty';

class MyFishList extends React.Component {
    render() {
        const { myFishFiltered, myFish } = this.context;
        return (
            <>
                <h1 className={styles.sectionHeader}>moje okazy</h1>

                <SearchCombo />

                <ul className={styles.listWrapper}>
                    {
                        <MyListEmpty />
                    }
                    {
                        myFishFiltered ?
                            (
                                (myFishFiltered.length === 0 && myFish.length !== 0) ?
                                    (
                                        <h2 className={styles.welcomeInfo}>Nic nie znaleziono - spróbuj inaczej.</h2>
                                    ) : (
                                        myFishFiltered.map((fhs) => <MyFishListItem key={fhs.myKey} {...fhs} />))
                            ) : (
                                myFish.map((fhs) => <MyFishListItem key={fhs.myKey} {...fhs} />)
                            )
                    }
                </ul>
            </>
        )
    }
}
MyFishList.contextType = AppContext;
export default MyFishList;
