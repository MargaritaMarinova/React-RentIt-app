import React, {Component} from 'react'
import styles from './index.module.css'
import Header from '../header'
import Footer from '../footer'
import Aux from '../../hoc/AuxFile'
import {connect} from 'react-redux'

class PageLayout extends Component {
    render(){
    return (
        <Aux>
        <Header isAuth = {this.props.isAuthenticated}/>
                <div className = {styles.container}>
                <main className = {styles.innercontainer}>
                {this.props.children}
                </main>
                </div>
        <div>
        <Footer />
        </div>
       
        </Aux>
    )
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}



export default connect(mapStateToProps) (PageLayout)