import React from 'react';
import styles from './Form.module.sass';
import SearchBox from '../SearchBox/SearchBox';
import Button from '../Button/Button';
import AppContext from '../../context';
import GradeStars from '../GradeStars/GradeStars';
import fish from '../../assets/data/fish';


class Form extends React.Component {

    state = {
        fishId: '',
        myKey: '',
        myPlace: '',
        myFood: '',
        myMethod: '',
        myLength: '',
        myWeight: '',
        myDescription: '',
        myGrade: ''
    }

    handleInputChange = (e, reset) => {
        e.preventDefault();
        e.target.value = reset === null ? '' : e.target.value;
        e.target.value = e.target.name === 'myGrade' ? e.target.id : e.target.value

        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const { addFn } = this.context
        const { myPlace, myFood, myMethod, myLength, myWeight, myDescription, myGrade, fishId } = this.state
        

        return (
            <div className={styles.wrapper}>
                <h2 className={styles.title}>dodaj złowioną rybę</h2>

                <form
                    className={styles.formWrapper}
                    onSubmit={(e) => addFn(e, this.state)}>

                    <SearchBox
                        name='fishId'
                        id='fishId'
                        onChange={(e) => this.handleInputChange(e)}
                        value={fishId.toUpperCase()}
                        labelTxt='nazwa'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                        select={[['---', '---'], ...fish.map((fhs)=>[fhs.id, fhs.name])]} 
                    >gatunek:</SearchBox>

                    <SearchBox
                        name='myPlace'
                        id='myPlace'
                        onChange={(e) => this.handleInputChange(e)}
                        value={myPlace.toUpperCase()}
                        labelTxt='akwen / miejscowość'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                    >miejsce połowu:</SearchBox>

                    <SearchBox
                        name='myFood'
                        id='myFood'
                        onChange={(e) => this.handleInputChange(e)}
                        value={myFood.toUpperCase()}
                        labelTxt='przynęta'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                    >na co złowione:</SearchBox>

                    <SearchBox
                        name='myMethod'
                        id='myMethod'
                        onChange={(e) => this.handleInputChange(e)}
                        value={myMethod.toUpperCase()}
                        labelTxt='opis'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                    >jaką metodą:</SearchBox>

                    <SearchBox
                        type='number'
                        name='myLength'
                        id='myLength'
                        onChange={(e) => this.handleInputChange(e)}
                        value={myLength.toUpperCase()}
                        labelTxt='centymetry'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                    >długość ryby:</SearchBox>

                    <SearchBox
                        // type='number'
                        name='myWeight'
                        id='myWeight'
                        onChange={(e) => this.handleInputChange(e)}
                        value={myWeight.toUpperCase()}
                        labelTxt='gramy'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                    >waga ryby:</SearchBox>

                    <SearchBox
                        textarea
                        name='myDescription'
                        id='myDescription'
                        onChange={(e) => this.handleInputChange(e)}
                        value={myDescription.toUpperCase()}
                        labelTxt='opis'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                    >opis połowu:</SearchBox>

                    <GradeStars
                    name='myGrade'
                    onClick={(e) => this.handleInputChange(e)}
                    myGrade={myGrade}
                    >nadaj ocenę</GradeStars>


                    <Button>dodaj</Button>
                </form>

                <div className={styles.flexEnter}></div>

                <Button
                    onClick={this.test}
                    name='test'
                    > test
                </Button>

                <Button
                    onClick={this.context.closeForm}
                    name='myPlace'
                    type='close'>
                </Button>
            </div>
        )
    }
};
Form.contextType = AppContext;

export default Form;



// addingNewFish: [
//     {
//         fishId: '',
//         myKey: '',
//         myPlace: '',
//         myFood: '',
//         myMethod: '',
//         myLength: '',
//         myWeight: '',
//         myDescription: '',
//         myGrade: ''
//     }
// ]