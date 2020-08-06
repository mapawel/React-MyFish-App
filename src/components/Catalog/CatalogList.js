import React from 'react';
import styles from './CatalogList.module.sass';
import AppContext from '../../context';
import CatalogListItem from './CatalogListItem';
import SearchBox from '../SearchBox/SearchBox';


class CatalogList extends React.Component {
    render() {
        const { fishFiltered, fish, filterCatalog, searchedFishInCatalog } = this.context;
        return (
            <>
                <h1 className={styles.sectionHeader}>katalog gatunków</h1>

                <div className={styles.sectionWrapper}>
                    <SearchBox
                        id='fishCatalogFilter'
                        onChange={(e) => filterCatalog(e.target.value)}
                        value={searchedFishInCatalog.toLocaleUpperCase()}
                        labelTxt='podaj nazwę'
                        crossOnClock={(e) => filterCatalog('')}
                    >znajdź gatunek:</SearchBox>
                </div>

                <ul className={styles.wrapper}>
                    {
                        fishFiltered ?
                            (
                                (fishFiltered.length === 0 && fish.length !== 0) ?
                                    (
                                        <h2 className={styles.welcomeInfo}>Nic nie znaleziono - spróbuj inaczej.</h2>
                                    ) : (
                                        fishFiltered.map((fhs) => <CatalogListItem key={fhs.id} {...fhs} />))
                            ) : (
                                fish.map((fhs) => <CatalogListItem key={fhs.id} {...fhs} />)
                            )
                    }
                </ul>
            </>
        )
    }
};
CatalogList.contextType = AppContext;

export default CatalogList;

