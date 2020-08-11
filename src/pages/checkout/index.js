import React, {Component} from 'react'
import PageLayout from '../../components/page-layout'
import ItemsSummary from '../../components/itemsSummary'

class CheckoutPage extends Component {
state = {
    itemList: {
        airfryer: 1,
        hairdryer: 1
    }
}

checkoutBackHandler = () => {
    this.props.history.goBack()
}

checkoutNextHandler = () => {
    this.props.history.replace('/thankyou')
}
    render(){
        return(
            <PageLayout>
                <ItemsSummary 
                itemList={this.props.itemList}
                checkoutBack = {this.checkoutBackHandler}
                checkoutNext = {this.checkoutNextHandler}/>
            </PageLayout>
        )
    }

}

export default CheckoutPage