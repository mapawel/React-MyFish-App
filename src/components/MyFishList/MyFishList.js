import React from 'react';
import styles from './MyFishList.module.sass';
import AppContext from '../../context';
import MyFishListItem from './MyFishListItem';
import SearchCombo from '../../components/SearchCombo/SearchCombo';
import Button from '../Button/Button'

class MyFishList extends React.Component {

    render() {
        let welcomescreen
        if (this.context.myFish.length === 0) {
            welcomescreen = 
                <div className={styles.welcomeBox}>
                <h2 className={styles.welcomeInfo}>Nie masz jeszcze żadnych okazów. Dodaj swój pierwszy połów:</h2>
                <Button onClick={this.context.openForm}>dodaj</Button>
            </div> 
        } else {welcomescreen = null;
        console.log(this.context.myFish.length);}


        return (
            <>
                <h1 className={styles.sectionHeader}>moje okazy</h1>

                <SearchCombo />

                <ul className={styles.listWrapper}>
                    {
                        welcomescreen
                    }
                    {
                        this.context.myFishFiltered ?
                            (
                                this.context.myFishFiltered.map((fhs) => <MyFishListItem key={fhs.myKey} {...fhs} />)
                            ) : (
                                this.context.myFish.map((fhs) => <MyFishListItem key={fhs.myKey} {...fhs} />)
                            )
                    }
                </ul>
            </>
        )
    }
}
MyFishList.contextType = AppContext;
export default MyFishList;




// {
//     this.context.myFish.map((fhs) => <MyFishListItem key={fhs.myKey} {...fhs} />)
// }