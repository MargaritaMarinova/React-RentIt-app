import React from 'react';

import classes from './index.module.css';

import NavigationItems from '../navigation/navigationItems';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
      <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;