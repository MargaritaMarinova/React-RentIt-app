// import React, {Component} from 'react'
// import Input from '../../../components/input';
// import AuthButton from '../../../components/button/authButton';
// import styles from './index.module.css';
// import * as actions from '../../../store/actions/index';
// import {connect} from 'react-redux'

// class ItemPage extends Component {
//     state = {
//         controls: {
//                 name: {
//                 elementType: 'input',
//                 elementConfig: {
//                     type: 'text',
//                     placeholder: 'Име на продукт'
//                 },
//                 value: '',
//                 validation: {
//                     required: true
//                 },
//                 valid: false,
//                 touched: false
//             },
//                 imageUrl: {
//                 elementType: 'input',
//                 elementConfig: {
//                     type: 'text',
//                     placeholder: 'Линк към изображение'
//                 },
//                 value: '',
//                 validation: {
//                     required: true
//                 },
//                 valid: false,
//                 touched: false
//             },
//                 description: {
//                     elementType: 'textarea',
//                     elementConfig: {
//                         type: 'text',
//                         placeholder: 'Описание'
//                     },
//                     value: '',
//                     validation: {
//                         required: true
//                     },
//                     valid: false,
//                     touched: false
//                 },
//                 category: {
//                     elementType: 'select',
//                     elementConfig: {
//                         options: [
//                             {value: 'kitchen', displayValue: 'кухня'},
//                             {value: 'livingroom', displayValue: 'всекидневна'},
//                             {value: 'bedroom', displayValue: 'спалня'},
//                             {value: 'bathroom', displayValue: 'баня'},
//                             {value: 'ooutside', displayValue: 'на открито'}
//                         ]
//                     },
//                     value: '',
//                     validation: {
//                         required: true
//                     },
//                     valid: false,
//                     touched: false
//                 },
//                 price: {
//                     elementType: 'input',
//                     elementConfig: {
//                         type: 'number',
//                         placeholder: 'Цена за наем (7 дни)'
//                     },
//                     value: '',
//                     validation: {
//                         required: true,
//                         isNumeric: true
//                     },
//                     valid: false,
//                     touched: false
//                 },
//     },
//     isRented: false
// }
    
//     checkValidity(value, rules) {
//         let isValid = true;
//         if (!rules) {
//             return true;
//         }
        
//         if (rules.required) {
//             isValid = value.trim() !== '' && isValid;
//         }

//         if (rules.minLength) {
//             isValid = value.length >= rules.minLength && isValid
//         }

//         if (rules.maxLength) {
//             isValid = value.length <= rules.maxLength && isValid
//         }

//         if (rules.isEmail) {
//             const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//             isValid = pattern.test(value) && isValid
//         }

//         if (rules.isNumeric) {
//             const pattern = /^\d+$/;
//             isValid = pattern.test(value) && isValid
//         }

//         return isValid;
//     }

//     inputChangedHandler = (event, controlName) => {
//         const updatedControls = {
//             ...this.state.controls,
//             [controlName]: {
//                 ...this.state.controls[controlName],
//                 value: event.target.value,
//                 valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
//                 touched: true
//             }
//         };
//         this.setState({controls: updatedControls});
//     }

//     submitHandler = (event) => {
//         event.preventDefault();
//         const itemData = [
//             this.state.controls.name.value, 
//             this.state.controls.imageUrl.value, 
//             this.state.controls.description.value, 
//             this.state.controls.category.value, 
//             this.state.controls.price.value,
//             this.state.isRented
//         ]
//         this.props.onCreate(itemData);
//     }

//     render() {
//         const formElementArray = [];
//         for (let key in this.state.controls) {
//             formElementArray.push({
//                 id: key,
//                 config: this.state.controls[key]
//             });
//         }

//         const form = formElementArray.map(formElement => (
//             <Input 
//             key = {formElement.id}
//             elementType = {formElement.config.elementType}
//             elementConfig = {formElement.config.elementConfig}
//             value = {formElement.config.value}
//             invalid = {!formElement.config.valid}
//             shouldValidate = {formElement.config.validation}
//             touched = {formElement.config.touched}
//             changed={(event) => this.inputChangedHandler(event, formElement.id)}

//             />
//         ))
//         return(
//             <div>
//                 <form onSubmit={this.submitHandler}>
//                 {form}
//                 <AuthButton>Създай</AuthButton>
//                 </form>
                
//             </div>
//         )
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         userId: state.auth.userId,
//         token: state.auth.token,
//         onCreate: ( itemData) => dispatch(actions.create(itemData, token))
//     };
// };



// export default connect(null, mapDispatchToProps)(ItemPage);