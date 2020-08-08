import React, {useContext} from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import {useHistory} from 'react-router-dom'
import UserContext from '../../Context'

const LogoutPage = () => {

    const context = useContext(UserContext)
    const history = useHistory()
    const logOut = () => {
        context.logOut()
        history.push('/')
      }
      logOut()
      return(
        
        <PageLayout>
            <div className = {styles.farewell}>
            <p> Благодарим, че посетихте сайта ни.</p>
            <p> Заповядайте отново!</p>
            <a href = '/'>Връщане км началната страница</a>
            </div>
        </PageLayout>
        
    )
    
    
}

export default LogoutPage