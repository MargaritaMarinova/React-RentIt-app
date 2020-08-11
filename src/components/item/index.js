import React from 'react'
import styles from './index.module.css'

const ItemCard = (props) => (
    
    <div className = {styles.itemCard}> 
       <img alt="product" className={styles.image} src={props.imageUrl} />  
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>Цена за наем (7дни): <strong>{props.price.toFixed(2)} лв</strong></p>
      <button>Детайли</button>
    </div>

)


export default ItemCard