import React from 'react'
import styles from './navigationItems.css'
import NavigationLink from './navigationLink'

const NavigationItems = (props) => (
        <ul className={styles.NavigationItems}>
        <NavigationLink link="/" exact >Начало</NavigationLink>
        {props.isAuthenticated ? <NavigationLink link="/items">Продукти</NavigationLink> : ''}
        {props.isAuthenticated ? <NavigationLink link="/create">Нов продукт</NavigationLink>: ''}
        {props.isAuthenticated ? <NavigationLink link="/logout">Изход</NavigationLink> :'' }
        {!props.isAuthenticated ? <NavigationLink link="/register">Регистрация</NavigationLink> : ''}
        {!props.isAuthenticated ? <NavigationLink link="/login">Вход</NavigationLink> : ''}
        </ul>
    
)

export default NavigationItems