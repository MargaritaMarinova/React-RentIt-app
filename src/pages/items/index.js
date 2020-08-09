import React from 'react'
import PageLayout from '../../components/page-layout'
import SubmitButton from '../../components/button/submitButton'

const ItemsPage = () => {
    return(
        <PageLayout>
        <p> Items Page</p>
        <SubmitButton a href = "/create" title = "Нов продукт" />
        </PageLayout>
    )
}

export default ItemsPage