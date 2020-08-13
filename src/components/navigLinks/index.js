import React from 'react';
import styles from './index.module.css';
import NavigLink from '../navigLink';

const NavigLinks = (props) => (
    <ul className={styles.navigLinks}>
        <NavigLink link="/" exact>Начало</NavigLink>
        {!props.isAuthenticated ? <NavigLink link="/register">Регистрация</NavigLink> : ''}
        {!props.isAuthenticated ? <NavigLink link="/login">Вход</NavigLink> : ''}
        {props.isAuthenticated ? <NavigLink link="/items">Продукти</NavigLink> : ''}
        {props.isAuthenticated ? <NavigLink link="/create">Нов продукт</NavigLink> : ''}
        {props.isAuthenticated ? <NavigLink link="/logout">Изход</NavigLink> : ''}
    </ul>
);

export default NavigLinks;

