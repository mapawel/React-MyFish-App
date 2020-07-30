import React from 'react';
import styles from './CatalogList.module.sass';
import AppContext from '../../context';
import CatalogListItem from './CatalogListItem';
import SearchBox from '../SearchBox/SearchBox';


class CatalogList extends React.Component {
    render() {
        return (
            <>
                <h1 className={styles.sectionHeader}>katalog gatunków</h1>

                <div className={styles.sectionWrapper}>
                    <SearchBox
                        id='fishCatalogFilter'
                        onChange = {(e) => this.context.filterCatalog(e.target.value)}
                        value = {this.context.searchedFishInCatalog.toLocaleUpperCase()}
                        labelTxt = 'podaj nazwę'
                        crossOnClock = {(e) => this.context.filterCatalog('')}
                    >znajdź gatunek:</SearchBox>
                </div>

                <ul className={styles.wrapper}>
                    {
                        this.context.fishFiltered ?
                            (
                                this.context.fishFiltered.map((fhs) => <CatalogListItem key={fhs.id} {...fhs} />)
                            ) : (
                                this.context.fish.map((fhs) => <CatalogListItem key={fhs.id} {...fhs} />)
                            )
                    }
                </ul>
            </>
        )
    }
};
CatalogList.contextType = AppContext;

export default CatalogList;

