import React from 'react';
import styles from './MyFishList.module.sass';
import AppContext from '../../context';
import MyFishListItem from './MyFishListItem';
import SearchBox from '../SearchBox/SearchBox';
import GradeStars from '../GradeStars/GradeStars';

class MyFishList extends React.Component {

    render() {

        const { filterMyFishListParamFromBase, searchedFishInMyFish, searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish } = this.context
        
        return (
            <>
                <h1 className={styles.sectionHeader}>moje okazy</h1>

                <div className={styles.sectionWrapper}>
                    <SearchBox
                        id='fishCatalogFilterName'
                        onChange={(e) => filterMyFishListParamFromBase(e.target.value, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish)}
                        value={searchedFishInMyFish.toLocaleUpperCase()}
                        labelTxt='fragment nazwy'
                        crossOnClock={(e) => filterMyFishListParamFromBase('', 'name', searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish)}
                    >gatunek:</SearchBox>

                    <SearchBox
                        id='fishCatalogFilterPlace'
                        onChange={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', e.target.value, searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish)}
                        value={searchedPlaceInMyFish.toLocaleUpperCase()}
                        labelTxt='fragment lokalizacji'
                        crossOnClock={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', '', searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish)}
                    >miejsce połowu:</SearchBox>

                    <SearchBox
                        id='fishCatalogFilterMonth'
                        onChange={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, e.target.value, searchedYearInMyFish, searchedStarsInMyFish)}
                        value={this.context.searchedMonthInMyFish.toLocaleUpperCase()}
                        labelTxt='wybierz miesiąc'
                        crossOnClock={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, '', searchedYearInMyFish, searchedStarsInMyFish)}
                        select={[['---', '---'], [1, 'styczeń'], [2, 'lutu'], [3, 'marzec'], [4, 'kwiecień'], [5, 'maj'], [6, 'czerwiec'], [7, 'lipiec'], [8, 'sierpień'], [9, 'wrzesień'], [10, 'październik'], [11, 'listopad'], [12, 'grudzień']]}
                    >miesiąc połowu:</SearchBox>

                    <SearchBox
                        id='fishCatalogFilterYear'
                        onChange={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, e.target.value, searchedStarsInMyFish)}
                        value={this.context.searchedYearInMyFish.toLocaleUpperCase()}
                        labelTxt='wybierz rok'
                        crossOnClock={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, '', searchedStarsInMyFish)}
                        select={[['---', '---'], [2017, 2017], [2018, 2018], [2019, 2019], [2020, 2020], [2021, 2021], [2022, 2022]]}
                    >rok połowu:</SearchBox>

                    <GradeStars
                        onClick={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, e.target.id)}
                        searchEvent
                        {...this.props}
                    >wyszukaj połowy po ocenie</GradeStars>
                    <button
                        onClick={() => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, '')}
                    >czysc gwiazdki</button>

                </div>

                <ul className={styles.listWrapper}>
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