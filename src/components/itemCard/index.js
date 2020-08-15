// import React from 'react'
// import styles from './index.module.css'
// import Axios from '../../axios-order'

// const ItemCard = (props) => {
//   state = {
//     id: props.id
//   }

//   const handleRent = (id) => {
    
//     Axios.get(`/items/`+ id +`.json`)
//     .then(res => {
      
//       console.log(res)
//     })
//   }
//     return (
//     <div className = {styles.itemCard}> 
//        <img alt="product" className={styles.image} src={props.imageUrl} />  
//       <p>{props.name}</p>
//       <p>{props.description}</p>
//       <p>Цена за наем (7дни): <strong>{props.price.toFixed(2)} лв</strong></p>
//       <button onClick = {handleRent}>Rent it!</button>
//     </div>
//     )
// }


// export default ItemCard