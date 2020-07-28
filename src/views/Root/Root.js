import React from 'react';
import './Root.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
import MyFish from '../MyFish/MyFish';
import Top from '../Top/Top';
import Header from '../../components/Header/Header'
import FishCard from '../../components/FishCard/FishCard'
import fish from '../../assets/data/fish';
import AppContext from '../../context';
import MyFishCard from '../../components/MyFishCard/MyFishCard';



class Root extends React.Component {
    state = {
        fish: fish,
        fishFiltered: '',
        searchedFishInCatalog: '',
        isFishCardOpen: false,
        isMyFishOpen: false,
        fishIdToDisplay: '',
        myFishIdToDisplay: '',
        myFishFiltered: '',
        searchedFishInMyFish: '',
        searchedPlaceInMyFish: '',
        searchedMonthInMyFish: '',
        searchedYearInMyFish: '',
        searchedStarsInMyFish: '',


        myFish: [
            {
                fishId: '10',
                myKey: 1565761550453,
                myPlace: 'Rzeka Odra',
                myFood: 'rosówka',
                myMethod: 'zatęta z kukuryczy z larwami rosówki + łowienie z gruntu  koszem z zanętą + rosówka',
                myLength: 55,
                myWeight: 2300,
                myDescription: 'to mój rekord',
                myGrade: 3,
            },
            {
                fishId: '2',
                myKey: 1545751550453,
                myPlace: 'Rzeka Odra',
                myFood: 'rosówka',
                myMethod: 'zatęta z kukuryczy z larwami rosówki + łowienie z gruntu  koszem z zanętą + rosówka',
                myLength: 55,
                myWeight: 2300,
                myDescription: 'to mój rekord',
                myGrade: 3,
            },
            {
                fishId: '9',
                myKey: 1565261550453,
                myPlace: 'Rzeka Wisła',
                myFood: 'larwy much',
                myMethod: 'spinning, błystka obrotowa + larwy',
                myLength: 75,
                myWeight: 1850,
                myDescription: 'duługa ale słaba',
                myGrade: 2,
            },
            {
                fishId: '9',
                myKey: 1595752180611,
                myPlace: 'Zalew Szczeciński',
                myFood: 'żywiec',
                myMethod: 'zanecanie 48h, rosówki, żywiec',
                myLength: 82,
                myWeight: 4400,
                myDescription: 'duża ale bywały większe',
                myGrade: 1,
            },
        ]
    }

    openMyFish = (e) => {
        document.body.style.overflowY = 'hidden';
        this.setState({
            myFishIdToDisplay: e.target.id,
            isMyFishOpen: true,
        })
    }

    closeMyFish = () => {
        document.body.style.overflowY = 'auto';
        this.setState({
            isMyFishOpen: false,
        })
    }

    openFishCard = (e) => {
        document.body.style.overflowY = 'hidden';
        this.setState({
            fishIdToDisplay: e.target.id,
            isFishCardOpen: true,
        })
    }

    closeFishCard = () => {
        document.body.style.overflowY = 'auto';
        this.setState({
            isFishCardOpen: false,
        })
    }

    filterCatalog = (searchTxt) => {
        this.setState({
            fishFiltered: this.state.fish.filter((fhs) => fhs.name.toLowerCase().includes(searchTxt.toLowerCase())),
            searchedFishInCatalog: searchTxt
        })
    }


    filterMyFishListParamFromBase = (searchTxt, param, searchPlace, searchMonth, searchYear, stars) => {

        const idsFitToSearchArr = this.state.fish.filter((fhs) => fhs[param].toLowerCase().includes(searchTxt.toLowerCase()))
        let foundSearchElement = [];
        idsFitToSearchArr.forEach((i) => {
            let newFragment = this.state.myFish.filter((fhs) => fhs.fishId === i.id);
            foundSearchElement = [...foundSearchElement, ...newFragment];
        });

        if (searchPlace !== '') {
            foundSearchElement = foundSearchElement.filter((fhs) => fhs.myPlace.toLowerCase().includes(searchPlace.toLowerCase()))
        }

        if (searchMonth !== '' && searchMonth !== '---') {
            foundSearchElement = foundSearchElement.filter((fhs) => new Date(fhs.myKey).getMonth() + 1 == searchMonth)
            console.log(searchMonth);
        }

        if (searchYear !== '' && searchYear !== '---') {
            foundSearchElement = foundSearchElement.filter((fhs) => new Date(fhs.myKey).getFullYear() == searchYear)
        }

        if (stars !== '') {
            foundSearchElement = foundSearchElement.filter((fhs) => fhs.myGrade == stars);
        }



        this.setState({
            myFishFiltered: foundSearchElement,
            searchedFishInMyFish: searchTxt,
            searchedPlaceInMyFish: searchPlace,
            searchedMonthInMyFish: searchMonth,
            searchedYearInMyFish: searchYear,
            searchedStarsInMyFish: stars
        })
    }

    handleGradeChange = (e, key) => {
        const newGade = e.target.id * 1

        this.setState(prevState => {
            const changedMyFish = Object(...prevState.myFish.filter((fhs) => fhs.myKey.toString() === key.toString()));
            changedMyFish.myGrade = newGade;
            const changingElIndex = prevState.myFish.indexOf(changedMyFish);
            return {
                myFish: [
                    ...prevState.myFish.slice(0, changingElIndex),
                    changedMyFish,
                    ...prevState.myFish.slice(changingElIndex + 1)
                ]
            }
        })
    }

    render() {
        const { isFishCardOpen, fishIdToDisplay, fish, isMyFishOpen, myFish, myFishIdToDisplay } = this.state;
        const contextElements = {
            ...this.state,
            openFishCard: this.openFishCard,
            closeFishCard: this.closeFishCard,
            filterCatalog: this.filterCatalog,
            openMyFish: this.openMyFish,
            closeMyFish: this.closeMyFish,
            handleGradeChange: this.handleGradeChange,
            filterMyFishListParamFromBase: this.filterMyFishListParamFromBase,
        }
        return (
            <BrowserRouter>
                <>
                    <AppContext.Provider value={contextElements}>
                        <Header />
                        {isFishCardOpen && <FishCard {...fish[fishIdToDisplay - 1]} />}
                        {isMyFishOpen && <MyFishCard {...Object(...myFish.filter((fhs) => fhs.myKey.toString() === myFishIdToDisplay.toString()))} />}
                        <Switch>
                            <Route exact path='/' component={Catalog} />
                            <Route path='/myfish' component={MyFish} />
                            <Route path='/top' component={Top} />
                        </Switch>
                    </AppContext.Provider>
                </>
            </BrowserRouter>
        )
    }
};
export default Root;
