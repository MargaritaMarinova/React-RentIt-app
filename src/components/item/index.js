import React from 'react'
import styles from './index.module.css'
import {Link} from 'react-router-dom'
import Axios from 'axios'


const CardItem = (item)=>{

   
    const handleRent = (event) => {
        event.preventDefault()
        const rentit = {
            rented: true
        }
        
        Axios.patch(`https://rentit-86cde.firebaseio.com/items/${item.id}/.json`, rentit)
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
          
          
          <button onClick = {handleRent} disabled = {item.rented}>{!item.rented? 'Rent it!':'Rented'}</button>
        </div>
        
    )
    
}

export default CardItem