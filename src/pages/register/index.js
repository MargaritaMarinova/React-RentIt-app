import React, {Component} from 'react'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submitButton'
import styles from './index.module.css'
import Input from '../../components/input'
import authenticate from '../../utils/authenticate'
import UserContext from '../../Context'
import axios from '../../axios-order'


class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state={
            username: "",
            password: "",
            rePassword: ""
        }
    }

    
    
    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value
        this.setState(newState)
    }


    handleSubmit = async (event) => {
    event.preventDefault()
    const user = {
                username: this.state.username,
                password: this.state.password,
                rePassword: this.state.rePassword
                
            };
            //console.log(user)
            axios.post('/users.json', user)
            
            const list = axios.get('/users.json')
            //console.log(list)
            
        }  
    

    render () {
        
    return (
        <div>
        <form className = {styles.container} onSubmit={this.handleSubmit}>
            <Title title = "Register" />
            <Input
            value={this.state.username}
            onChange = {(e) => this.onChange(e, 'username')}
            label="Username"
            id="username"
            />
            <Input
            value={this.state.password}
            onChange = {(e) => this.onChange(e, 'password')}
            label="Password"
            id="password"
            />
            <Input
            value={this.state.rePassword}
            onChange = {(e) => this.onChange(e, 'rePassword')}
            label="Re-password"
            id="rePassword"
            />

        <SubmitButton className = {styles.button} title = "Register" />
        </form>
        </div>
        )

    }
}



export default RegisterPage