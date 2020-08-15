import React, {Component} from 'react'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submitButton'
import styles from './index.module.css'
import axios from 'axios'


class CreatePage extends Component {
        state={
            id: "",
            name: "",
            imageUrl: "",
            description: "",
            price: "",
            creator: "",
            rented: false
        }
    


    handleSubmit = async (event) => {
        event.preventDefault()
        const item = {
            id:this.state.id,
            name: this.state.name,
            imageUrl: this.state.imageUrl,
            description: this.state.description,
            price: this.state.price,
            creator: this.state.creator,
            rented: this.state.rented
        };

        axios.post('https://rentit-86cde.firebaseio.com/items.json', item)
        .then(response => {
            const id= response.data.name
            axios.patch('https://rentit-86cde.firebaseio.com/items/'+id+'.json', {
                id: response.data.name
            }).then(res => {
                console.log(res)
            })
           
            
        })
    }

    render () {
        
    return (
        <div>
        <form className = {styles.container}>
            <Title title = "Create" />
            <label className = {styles.label}>Име</label>
            <input className = {styles.input} type="text"
            value={this.state.name}
            onChange = {(event) => this.setState({name: event.target.value})}
            id="name"
            />
            <label className = {styles.label}>Снимка</label>
            <input type="text" className = {styles.input}
            value={this.state.imageUrl}
            onChange = {(event) => this.setState({imageUrl: event.target.value})}
            id="imageUrl"
            />
            <label className = {styles.label}>Цена за наем (7 дни)</label>
            <input type="text" className = {styles.input}
            value={this.state.price}
            onChange = {(event) => this.setState({price: event.target.value})}
            id="price"
            />
            <label className = {styles.label}>Описание</label>
            <textarea rows="4" className = {styles.input}
            value={this.state.description}
            onChange = {(event) => this.setState({description: event.target.value})}
            id="description"
            />
            {/* <label className = {styles.label}>Категория</label>
            <select className = {styles.input}
            value={this.state.category}
            onChange = {(event) => this.setState({category: event.target.value})}
            label="Категория"
            id="category"
            >
                <option value="kitchen">Кухня</option>
                <option value="livingroom">Всекидневна</option>
                <option value="bedroom">Спалня</option>
                <option value="bathroom">Баня</option>
                <option value="outside">На открито</option>
                </select> */}
            </form> 
       <div>
        <SubmitButton onClick = {this.handleSubmit} title = "Създай" />
        </div>
        
        </div>   
    )

    }
}

export default CreatePage