import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navigationLink.css';

const navigationLink = ( props ) => (
    <div>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={styles.active}>{props.children}</NavLink>
    </div>
);

export default navigationLink;