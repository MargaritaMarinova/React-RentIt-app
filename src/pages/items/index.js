import React from 'react'
import PageLayout from '../../components/page-layout'
import SubmitButton from '../../components/button/submitButton'
import ItemCard from '../../components/item'
import ItemList from '../../components/itemList'

const ItemsPage = () => {
    return(
        <PageLayout>
        <ItemList></ItemList>
        </PageLayout>
    )
}

export default ItemsPage