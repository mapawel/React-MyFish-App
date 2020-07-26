import React from 'react';
import styles from './CatalogList.module.sass';
import AppContext from '../../context';
import CatalogListItem from './CatalogListItem'


class CatalogList extends React.Component {
    state = {
        searchTxt: ''
    }

    handleSearch = async (e) => {
        await this.setState({
            searchTxt: e.target.value
        });
        this.context.filterCatalog(this.state.searchTxt)
    }

    handleClear = async () => {
        await this.setState({
            searchTxt: ''
        })
        this.context.filterCatalog(this.state.searchTxt)
    }

    render() {
        return (
            <>
                <div className={styles.sectionWrapper}>
                    <h1 className={styles.sectionHeader}>katalog gatunków</h1>
                    <h4 className={styles.inputHeader}>
                        znajdź gatunek:
                    </h4>
                    <div className={styles.inputContainer}>
                        <input
                            className={styles.inputElement}
                            type='text'
                            id='filterFish'
                            placeholder=' '
                            autoComplete='off'
                            onChange={(e) => this.handleSearch(e)}
                            value={this.state.searchTxt.toLocaleUpperCase()}
                        >
                        </input>
                        <label
                            className={styles.label}
                            htmlFor='filterFish'
                        >
                            podaj nazwę
                    </label>
                        {
                            this.state.searchTxt &&
                            <button
                                className={styles.button}
                                onClick={this.handleClear}>
                            </button>
                        }
                    </div>
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
