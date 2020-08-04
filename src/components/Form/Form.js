import React from 'react';
import styles from './Form.module.sass';
import SearchBox from '../SearchBox/SearchBox';
import Button from '../Button/Button';
import AppContext from '../../context';
import GradeStars from '../GradeStars/GradeStars';
import fish from '../../assets/data/fish';
import CardTitle from '../CardTitle/CardTitle';
import ModalCard from '../ModalCard/ModalCard';


class Form extends React.Component {
    state = {
        fishId: this.props.fishId ? this.props.fishId : this.context.fishIdToDisplay,
        myKey: this.props.myKey ? this.props.myKey : '',
        myPlace: this.props.myPlace ? this.props.myPlace : '',
        myFood: this.props.myFood ? this.props.myFood : '',
        myMethod: this.props.myMethod ? this.props.myMethod : '',
        myLength: this.props.myLength ? this.props.myLength : '',
        myWeight: this.props.myWeight ? this.props.myWeight : '',
        myDescription: this.props.myDescription ? this.props.myDescription : '',
        myGrade: this.props.myGrade ? this.props.myGrade : ''
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
        const { addFn, isFormMessageOpen } = this.context
        const { myPlace, myFood, myMethod, myLength, myWeight, myDescription, myGrade, fishId } = this.state


        return (
            <ModalCard>

                <CardTitle>
                    {this.props.fishId ? 'zmień dane' : 'dodaj złowioną rybę'}
                </CardTitle>

                <form
                    className={styles.formWrapper}
                    onSubmit={(e) => addFn(e, this.state)}>

                    <SearchBox
                        name='fishId'
                        id='fishId'
                        onChange={(e) => this.handleInputChange(e)}
                        value={fishId}
                        labelTxt='nazwa'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                        select={[['---', '--- *'], ...fish.map((fhs) => [fhs.id, fhs.name])]}
                    >gatunek:</SearchBox>

                    <SearchBox
                        name='myPlace'
                        id='myPlace'
                        onChange={(e) => this.handleInputChange(e)}
                        value={myPlace}
                        labelTxt='akwen / miejscowość *'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                    >miejsce połowu:</SearchBox>

                    <div className={styles.flexEnter}></div>

                    <SearchBox
                        name='myFood'
                        id='myFood'
                        onChange={(e) => this.handleInputChange(e)}
                        value={myFood}
                        labelTxt='przynęta'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                    >na co złowione:</SearchBox>

                    <SearchBox
                        name='myMethod'
                        id='myMethod'
                        onChange={(e) => this.handleInputChange(e)}
                        value={myMethod}
                        labelTxt='opis'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                    >jaką metodą:</SearchBox>

                    <div className={styles.flexEnter}></div>

                    <SearchBox
                        type='number'
                        name='myLength'
                        id='myLength'
                        onChange={(e) => this.handleInputChange(e)}
                        value={myLength}
                        labelTxt='centymetry *'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                    >długość ryby:</SearchBox>

                    <SearchBox
                        type='number'
                        name='myWeight'
                        id='myWeight'
                        onChange={(e) => this.handleInputChange(e)}
                        value={myWeight}
                        labelTxt='gramy *'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                    >waga ryby:</SearchBox>

                    <div className={styles.flexEnter}></div>

                    <SearchBox
                        textarea
                        name='myDescription'
                        id='myDescription'
                        onChange={(e) => this.handleInputChange(e)}
                        value={myDescription}
                        labelTxt='opis'
                        crossOnClock={(e) => this.handleInputChange(e, null)}
                    >opis połowu:</SearchBox>

                    <GradeStars
                        name='myGrade'
                        onClick={(e) => this.handleInputChange(e)}
                        myGrade={myGrade}
                    >nadaj ocenę *</GradeStars>
                    {
                        isFormMessageOpen && <div className={styles.message}>uzupełnij pola oznaczone gwiazdką oraz ocenę</div>
                    }
                    <div className={styles.flexEnter}></div>
                    <Button>
                        {
                            this.props.fishId ? 'zmień' : 'dodaj'
                        }
                    </Button>
                </form>

                <Button
                    onClick={this.context.closeForm}
                    name='myPlace'
                    type='close'>
                </Button>
            </ModalCard>
        )
    }
};
Form.contextType = AppContext;

export default Form;
