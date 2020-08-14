// import React, {Component} from 'react'
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// import ItemsSummary from '../../components/itemsSummary'
// import ContactData from './ContactData';
// import * as actions from '../../store/actions/index';

// class CheckoutPage extends Component {
// state = {
//     itemList: {
//         airfryer: 1,
//         hairdryer: 1
//     }
// }

// checkoutBackHandler = () => {
//     this.props.history.goBack()
// }

// checkoutNextHandler = () => {
//     this.props.history.replace('/thankyou')
// }
//     render(){
//         let summary = <Redirect to="/" />
//             const rentedRedirect = this.props.rented ? <Redirect to="/"/> : null;
//             summary = (
//                 <div>
//                     {rentedRedirect}
//                     <ItemsSummary
//                         ingredients={this.props.ings}
//                         checkoutCancelled={this.checkoutBackHandler}
//                         checkoutContinued={this.checkoutNextHandler} />
//                     <Route
//                         path={this.props.match.path + '/contact-data'}
//                         component={ContactData} />
//                 </div>
//             );
        
//         return summary;
//     }
// }

// const mapStateToProps = state => {
//     return {
//         ings: state.burgerBuilder.ingredients,
//         rented: state.item.isRented
//     }
// };

// export default connect( mapStateToProps )( CheckoutPage );