import React from 'react'
import homeImage from '../../images/kitchen-items.png'
import styles from './index.module.css'


const HomePage = () => {
    return(
        <div>
        <img alt="equipment" className={styles.home} src={homeImage} />
        <h2 className = {styles.blue}> Не е нужно да купуваш всичко това!</h2>
        <br></br>
        <h1 className = {styles.green}> Можеш да го наемеш!</h1>
        </div>
        
    )
}

export default HomePage