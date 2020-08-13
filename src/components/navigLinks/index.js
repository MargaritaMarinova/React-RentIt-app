import React from 'react';
import styles from './index.module.css';
import NavigLink from '../navigLink';

const NavigLinks = () => (
    <ul className={styles.navigLinks}>
        <NavigLink link="/" exact>Начало</NavigLink>
        <NavigLink link="/register">Регистрация</NavigLink>
        <NavigLink link="/login">Вход</NavigLink>
        <NavigLink link="/items">Продукти</NavigLink>
        <NavigLink link="/create">Нов продукт</NavigLink>
    </ul>
);

export default NavigLinks;

