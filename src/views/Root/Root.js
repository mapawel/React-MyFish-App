import React from 'react';
import './Root.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
import MyFish from '../MyFish/MyFish';
import myFishInitialDB from '../../assets/data/myFishInitialDB';
import Top from '../Top/Top';
import Header from '../../components/Header/Header'
import FishCard from '../../components/FishCard/FishCard'
import fish from '../../assets/data/fish';
import AppContext from '../../context';
import MyFishCard from '../../components/MyFishCard/MyFishCard';
import Form from '../../components/Form/Form';
import InfoBox from '../../components/InfoBox/InfoBox';


class Root extends React.Component {
    state = {
        fish: fish,
        fishFiltered: '',
        searchedFishInCatalog: '',
        isFishCardOpen: false,
        isMyFishOpen: false,
        isFormOpen: false,
        isFormMessageOpen: false,
        isChangeFormOpen: false,
        fishIdToDisplay: '',
        myFishIdToDisplay: '',
        myFishFiltered: '',
        searchedFishInMyFish: '',
        searchedPlaceInMyFish: '',
        searchedMonthInMyFish: '',
        searchedYearInMyFish: '',
        searchedStarsInMyFish: '',
        sort: '',
        myFish: myFishInitialDB,
        isInfoOpen: false,
    }

    componentDidMount(){
        if (JSON.parse(localStorage.getItem('fishSaved'))) {
            const fishLocalSaved = JSON.parse(localStorage.getItem('fishSaved'));
            this.setState(prevState=>({
                myFish: fishLocalSaved, 
            }))
        }
    }

    addFn = async (e, newFishData) => {
        e.preventDefault();
        const { fishId, myKey, myPlace, myLength, myWeight, myGrade } = newFishData;

        if (!myKey) {
            if (fishId && myPlace && myLength && myWeight && myGrade) {
                const newFish = newFishData
                newFish.myKey = new Date().getTime();
                newFish.myLength = newFish.myLength * 1;
                newFish.myWeight = newFish.myWeight * 1;
                newFish.myGrade = newFish.myGrade * 1;
                await this.setState(prevState => ({
                    myFish: [...prevState.myFish, newFish],
                }))
                this.closeForm()
            } else {
                this.setState({
                    isFormMessageOpen: true
                })
            }

        } else {

            if (fishId && myPlace && myLength && myWeight && myGrade) {
                await this.setState(prevState => {
                    const changedMyFish = Object(...prevState.myFish.filter((fhs) => fhs.myKey.toString() === myKey.toString()));
                    for (let data in newFishData) { changedMyFish[data] = newFishData[data] }
                    const changingElIndex = prevState.myFish.indexOf(changedMyFish);
                    return {
                        myFish: [
                            ...prevState.myFish.slice(0, changingElIndex),
                            changedMyFish,
                            ...prevState.myFish.slice(changingElIndex + 1)
                        ]
                    }
                })
                this.closeForm()
            } else {
                this.setState({
                    isFormMessageOpen: true
                })
            }
        }
        localStorage.setItem('fishSaved', JSON.stringify(this.state.myFish))
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
            fishIdToDisplay: ''
        })
    }

    openForm = (e) => {
        document.body.style.overflowY = 'hidden';
        this.setState({
            fishIdToDisplay: e.target.id,
            isFormOpen: true,
            isFormMessageOpen: false
        })
    }

    closeForm = () => {
        document.body.style.overflowY = 'auto';
        this.setState({
            isFormOpen: false,
            isChangeFormOpen: false,
            fishIdToDisplay: ''
        })
    }

    openChangeForm = (e) => {
        document.body.style.overflowY = 'hidden';
        this.setState({
            isMyFishOpen: false,
            isChangeFormOpen: true,
            isFormMessageOpen: false
        })
    }

    filterCatalog = (searchTxt) => {
        this.setState({
            fishFiltered: this.state.fish.filter((fhs) => fhs.name.toLowerCase().includes(searchTxt.toLowerCase())),
            searchedFishInCatalog: searchTxt
        })
    }

    filterMyFishListParamFromBase = (searchTxt, param, searchPlace, searchMonth, searchYear, stars, sort) => {

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
            foundSearchElement = foundSearchElement.filter((fhs) => new Date(fhs.myKey).getMonth() + 1 === searchMonth * 1)
        }

        if (searchYear !== '' && searchYear !== '---') {
            foundSearchElement = foundSearchElement.filter((fhs) => new Date(fhs.myKey).getFullYear() === searchYear * 1)
        }

        if (stars !== '') {
            foundSearchElement = foundSearchElement.filter((fhs) => fhs.myGrade === stars * 1);
        }

        if (sort !== '') {
            let compareNumbers;
            if (sort.id === '1') {
                compareNumbers = (a, b) => a[sort.name] - b[sort.name]
            }
            else {
                compareNumbers = (a, b) => b[sort.name] - a[sort.name]
            }
            foundSearchElement = foundSearchElement.sort(compareNumbers)
        }

        this.setState({
            myFishFiltered: foundSearchElement,
            searchedFishInMyFish: searchTxt,
            searchedPlaceInMyFish: searchPlace,
            searchedMonthInMyFish: searchMonth,
            searchedYearInMyFish: searchYear,
            searchedStarsInMyFish: stars,
            sort: sort
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

    scrollTop = () => {
        window.scrollTo(0,window.innerHeight-60)
    }

    openInfo = () => {
        document.body.style.overflowY = 'hidden';
        this.setState({
            isInfoOpen: true,
        })
    }

    closeInfo = () => {
        document.body.style.overflowY = 'auto';
        this.setState({
            isInfoOpen: false,
        })
    }

    render() {
        const { isFishCardOpen, fishIdToDisplay, fish, isMyFishOpen, myFish, myFishIdToDisplay, isFormOpen, isChangeFormOpen, isInfoOpen } = this.state;
        const contextElements = {
            ...this.state,
            openFishCard: this.openFishCard,
            closeFishCard: this.closeFishCard,
            filterCatalog: this.filterCatalog,
            openMyFish: this.openMyFish,
            closeMyFish: this.closeMyFish,
            handleGradeChange: this.handleGradeChange,
            filterMyFishListParamFromBase: this.filterMyFishListParamFromBase,
            openForm: this.openForm,
            closeForm: this.closeForm,
            addFn: this.addFn,
            openChangeForm: this.openChangeForm,
            scrollTop: this.scrollTop,
            openInfo: this.openInfo,
            closeInfo: this.closeInfo
        }
        return (
            <BrowserRouter>
                <>
                    <AppContext.Provider value={contextElements}>
                        <Header />
                        {isFishCardOpen && <FishCard {...fish[fishIdToDisplay - 1]} />}
                        {isMyFishOpen && <MyFishCard {...Object(...myFish.filter((fhs) => fhs.myKey.toString() === myFishIdToDisplay.toString()))} />}
                        {isFormOpen && <Form />}
                        {isChangeFormOpen && <Form {...Object(...myFish.filter((fhs) => fhs.myKey.toString() === myFishIdToDisplay.toString()))} />}
                        {isInfoOpen && <InfoBox />}
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
