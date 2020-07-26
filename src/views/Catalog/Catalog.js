import React from 'react';
import styles from './Catalog.module.sass';
import CatalogList from '../../components/Catalog/CatalogList'

const Catalog = () => (
    <CatalogList className={styles.catalogView} />
);
export default Catalog;

