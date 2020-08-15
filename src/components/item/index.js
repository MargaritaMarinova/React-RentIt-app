import React, {Component} from 'react'
import styles from './index.module.css'
import {Link} from 'react-router-dom'
import Axios from 'axios'

const CardItem = (item)=>{

   
    const handleRent = (event) => {
        event.preventDefault()
        const rentit = {
            rented: true
        }
        
        Axios.get('https://rentit-86cde.firebaseio.com/items.json')
        .then (res => {
            console.log(res)
        })
    }
    
    return (
        <div className = {styles.item}>
       <img alt="product" className={styles.image} src={item.imageUrl} />  
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>Цена за наем (7дни): <strong>{item.price.toFixed(2)} лв</strong></p>
      
    <button onClick = {handleRent}>Rent it!</button>
    
        </div>
        
    )
    
}

export default CardItem