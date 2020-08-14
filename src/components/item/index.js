import React, {Component} from 'react'
import styles from './index.module.css'
import axios from 'axios'

class ItemCard extends Component {

  state = {
    name: this.state.name,
    imageUrl: this.state.imageUrl,
    description: this.state.description,
    category: this.state.category,
    price: this.state.price,
    creator: this.state.creator,
    rented: this.state.rented

  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const item = {
        name: this.state.name,
        imageUrl: this.state.imageUrl,
        description: this.state.description,
        category: this.state.category,
        price: this.state.price,
        creator: this.state.creator,
        rented: !this.state.rented
    };

    axios.put('https://rentit-86cde.firebaseio.com/items.json', item)
    .then(response => {
        console.log(response)
    })
}
    render () {
      return (
    <div className = {styles.itemCard}> 
       <img alt="product" className={styles.image} src={this.state.imageUrl} />  
      <p>{this.state.name}</p>
      <p>{this.state.description}</p>
      <p>Цена за наем (7дни): <strong>{this.state.price.toFixed(2)} лв</strong></p>
      <button onClick = {this.handleSubmit} >{!this.state.rented ? 'Rent it!' : 'Rented' }</button>
    </div>
      )}

}


export default ItemCard