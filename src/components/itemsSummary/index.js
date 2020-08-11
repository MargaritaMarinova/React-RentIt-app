import React from 'react'
import SubmitButton from '../button/submitButton'
import styles from './index.module.css'

const ItemsSummary = (props)=> {
    return (
        <div className = {styles.summary}>
            <h1>Преглед на поръчката</h1>
            <div>
                <p> item</p>
                <p> item</p>
                <p> item</p>
            </div>
            <SubmitButton onClick = {props.checkoutBack} title = 'Върни се обратно'/>
            <SubmitButton onClick = {props.checkoutNext} title = 'Завърши поръчката'/>
        </div>
    )

}

export default ItemsSummary