import React from 'react';

import styles from './index.module.css';

import NavigLinks from '../navigLinks';


const Header = ( props ) => (
    <header className={styles.Toolbar}>
        
        <nav className={styles.DesktopOnly}>
            <NavigLinks />
        </nav>
    </header>
);

export default Header;