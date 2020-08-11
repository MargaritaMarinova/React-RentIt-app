import React, {Component} from 'react'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submitButton'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import Input from '../../components/input'
import axios from '../../axios-order'


class CreatePage extends Component {
    constructor(props) {
        super(props)

        this.state={
            name: "",
            imageUrl: "",
            description: "",
            category: "",
            price: ""
        }
    }


    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value
        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const item = {
            name: this.state.name,
            imageUrl: this.state.imageUrl,
            description: this.state.description,
            category: this.state.category,
            price: this.state.price
        };

        axios.post('/items.json', item)
        .then(response => {
            console.log(response)
        })
    }

    render () {
        
    return (
        <PageLayout>
        <form className = {styles.container} onSubmit={this.handleSubmit}>
            <Title title = "Create" />
            <Input
            value={this.state.name}
            onChange = {(e) => this.onChange(e, 'name')}
            label="Name"
            id="name"
            />
            <Input
            value={this.state.imageUrl}
            onChange = {(e) => this.onChange(e, 'imageUrl')}
            label="imageUrl"
            id="imageUrl"
            />
            <Input
            value={this.state.description}
            onChange = {(e) => this.onChange(e, 'description')}
            label="Description"
            id="description"
            />
            <Input
            value={this.state.category}
            onChange = {(e) => this.onChange(e, 'category')}
            label="Category"
            id="category"
            />
            <Input
            value={this.state.price}
            onChange = {(e) => this.onChange(e, 'price')}
            label="Price"
            id="price"
            />

        <SubmitButton title = "Create" />
        </form>
        </PageLayout>
    )

    }
}

export default CreatePage