import React from 'react';
import styles from './SearchCombo.module.sass';
import AppContext from '../../context';
import SearchBox from '../SearchBox/SearchBox';
import GradeStars from '../GradeStars/GradeStars';
import Button from '../Button/Button';

class SearchCombo extends React.Component {
    render() {

        const { filterMyFishListParamFromBase, searchedFishInMyFish, searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, searchedStarsInMyFish } = this.context

        return (
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

                <div className={styles.flexEnter}></div>

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

                <div className={styles.flexEnter}></div>

                <GradeStars
                    onClick={(e) => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, e.target.id)}
                    searchEvent
                    {...this.props}
                > filtruj po ocenie
                    {searchedStarsInMyFish &&
                        <Button
                            onClick={() => filterMyFishListParamFromBase(searchedFishInMyFish, 'name', searchedPlaceInMyFish, searchedMonthInMyFish, searchedYearInMyFish, '')}
                            type='clear'
                        ></Button>
                    }
                </GradeStars>

            </div>
        )
    }
}
SearchCombo.contextType = AppContext;

export default SearchCombo;
