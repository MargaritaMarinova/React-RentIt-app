import React from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'

const LogoutPage = () => {
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