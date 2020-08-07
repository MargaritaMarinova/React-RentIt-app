import React, {Component} from 'react'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submitButton'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import Input from '../../components/input'


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

    render () {
        const {
            username,
            password,
            rePassword
        } = this.state
    return (
        <PageLayout>
        <div className = {styles.container}>
            <Title title = "Register" />
            <Input
            value={username}
            onChange = {(e) => this.onChange(e, 'username')}
            label="Username"
            id="username"
            />
            <Input
            value={password}
            onChange = {(e) => this.onChange(e, 'password')}
            label="Password"
            id="password"
            />
            <Input
            value={rePassword}
            onChange = {(e) => this.onChange(e, 'rePassword')}
            label="Re-password"
            id="rePassword"
            />


            
        </div>
        <div className = {styles.button}>
        <SubmitButton title = "Register" />
        </div>
        </PageLayout>
    )

}
}

export default RegisterPage