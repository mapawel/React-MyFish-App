import React from 'react';
import styles from './SearchCombo.module.sass';
import AppContext from '../../context';
import SearchBox from '../SearchBox/SearchBox';
import GradeStars from '../GradeStars/GradeStars';
import Button from '../Button/Button';
import SortBox from '../SortBox/SortBox';

class SearchCombo extends React.Component {
    render() {

        const { myFish, filterMyFishListParamFromBase, searchedFishInMyFish, searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish, sort } = this.context
        const yearsFromMyFish = new Set(myFish.map((fhs) => new Date(fhs.myKey).getFullYear()) );

        return (
            <div className={styles.sectionWrapper}>
                <SearchBox
                    id='fishCatalogFilterName'
                    onChange={(e) => filterMyFishListParamFromBase(e.target.value, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish, sort)}
                    value={searchedFishInMyFish.toLocaleUpperCase()}
                    labelTxt='fragment nazwy'
                    crossOnClock={(e) => filterMyFishListParamFromBase('', 'name', searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish, sort)}
                >gatunek:</SearchBox>

                <SearchBox
                    id='fishCatalogFilterPlace'
                    onChange={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', e.target.value, searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish, sort)}
                    value={searchedPlaceInMyFish.toLocaleUpperCase()}
                    labelTxt='fragment lokalizacji'
                    crossOnClock={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', '', searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish, sort)}
                >miejsce połowu:</SearchBox>

                <div className={styles.flexEnter}></div>

                <SearchBox
                    id='fishCatalogFilterMonth'
                    onChange={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, e.target.value, searchedYearInMyFish, searchedStarsInMyFish, sort)}
                    value={this.context.searchedMonthInMyFish.toLocaleUpperCase()}
                    labelTxt='wybierz miesiąc'
                    crossOnClock={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, '', searchedYearInMyFish, searchedStarsInMyFish, sort)}
                    select={[['---', '---'], [1, 'styczeń'], [2, 'lutu'], [3, 'marzec'], [4, 'kwiecień'], [5, 'maj'], [6, 'czerwiec'], [7, 'lipiec'], [8, 'sierpień'], [9, 'wrzesień'], [10, 'październik'], [11, 'listopad'], [12, 'grudzień']]}
                >miesiąc połowu:</SearchBox>

                <SearchBox
                    id='fishCatalogFilterYear'
                    onChange={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, e.target.value, searchedStarsInMyFish, sort)}
                    value={this.context.searchedYearInMyFish.toLocaleUpperCase()}
                    labelTxt='wybierz rok'
                    crossOnClock={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, '', searchedStarsInMyFish, sort)}
                    select={[['---', '--- *'], ...[...yearsFromMyFish].map((year) => [year, year])]}
                >rok połowu:</SearchBox>

                <div className={styles.flexEnter}></div>

                <div className={styles.wrapper}>

                    <GradeStars
                        onClick={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, e.target.id, sort)}
                        searchEvent
                        {...this.props}
                    > filtruj po ocenie
                    {searchedStarsInMyFish &&
                            <Button
                                onClick={() => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, '', sort)}
                                type='clear'
                            ></Button>
                        }
                    </GradeStars>
                </div>
                <div className={styles.wrapper}>
                    <p className={styles.inputHeader}>sortuj po</p>
                    <SortBox
                        onClick={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish, e.target)}
                        name='myLength'
                    >długości:</SortBox>

                    <SortBox
                        onClick={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish, e.target)}
                        name='myWeight'
                    >wadze:</SortBox>

                    <SortBox
                        onClick={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish, e.target)}
                        name='myKey'
                    >dacie:</SortBox>

                </div>

            </div>
        )
    }
}
SearchCombo.contextType = AppContext;

export default SearchCombo;
