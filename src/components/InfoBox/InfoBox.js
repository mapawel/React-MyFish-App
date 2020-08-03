import React from 'react';
import AppContext from '../../context';
import styles from './InfoBox.module.sass';
import Button from '../Button/Button'
import TxtWhHead from '../TxtWhHead/TxtWhHead';
import CardTitle from '../CardTitle/CardTitle';
import ModalCard from '../ModalCard/ModalCard';

const InfoBox = () => (
    <AppContext.Consumer>
        {(context) => (
            <ModalCard>
                <CardTitle>o aplikacji</CardTitle>
                <div className={styles.infoBox}>
                    <TxtWhHead headTxt='katalog'>tu znajdziesz dostępne w naszej aplikacji gatunki ryb. Na kaflu gatunku jest skrót informacji a po kliknięciu przycisku INFO wyświetlisz kartę ze szczegółowym opisem gatunku.<br></br>Klikając przycisk ZŁOWIONA możesz dodać ten konkretny gatunek do sekcji "moje okazy" czyli do katalogu swoich ryb.</TxtWhHead>
                    <TxtWhHead headTxt='moje okazy'>Katalog ryb, jakie złowiłeś. Możesz je dodawać klikając ZŁOWIONA na kflach gatunków w sekcji katalog lub klikając "+" na górnym pasku.<br></br>listę swoich okazów możesz filtrować i sortować.</TxtWhHead>
                    <TxtWhHead headTxt='statystyki'>tutaj możesz sprawdzić szybko najdłuższą rybę ze swoich okazów z każdego gatunku oraz ilość ryb, jakie złowiłeś z podziałem na gatunki</TxtWhHead>
                    <TxtWhHead headTxt='karta ryby'>klikając WIĘCEJ na kaflu swojej ryby w sekcji moje okazy wyświetlisz szczegółowe informacje o swoim połowie oraz na szybko zmodyfikujesz ocenę klikając w gwiazdki</TxtWhHead>
                    <TxtWhHead headTxt='dodawanie ryby'>skorzystaj z "+" lub przycisku ZŁOWIONA, uzupełnij formularz wpisując niezbędne dane</TxtWhHead>
                    <TxtWhHead headTxt='modyfikowanie danych ryby'>na karcie Twojej ryby kliknij ZMIEŃ DANE aby wuświetlić formularz zmian.</TxtWhHead>
                    <TxtWhHead headTxt='for developers'>aplikacja wykonana w pełni w bibliotece JS React wg najlepszej wiedzy autora na poziomie podstawowym. Wykorzystano React Router, aplikacja typu SPA, RWD. Przekazywanie stanu za pomoca Context API. Do stylowania wykorzystano CSS Modules i SASS. Zapis dodawanych danych w pamięci przeglądarki. </TxtWhHead>
                    <TxtWhHead headTxt=''>Copyright 2020 <a className={styles.link} href='https://github.com/mapawel'>mapawel<br></br></a>All Rights Reserved</TxtWhHead>
                </div>
                <Button
                    onClick={context.closeInfo}
                    name='myPlace'
                    type='close'>
                </Button>

            </ModalCard>
        )}
    </AppContext.Consumer>
);
export default InfoBox;
