// import React, {Component} from 'react'

// import {Link} from 'react-router-dom'
// import Axios from '../../axios-order'


// class DetailsItem extends Component () {

//   state={
//     id: '',
//     name: '',
//     imageUrl: '',
//     description: '',
//     price: '',
//     rented: ''
//   }

//    componentDidMount =()=> {
//      const id = this.props.match.params.id
//      Axios.get(`items/${id}/.json`)
//      .then(res => {
//        this.setState({
//         id: res.data.id,
//         name: res.data.name,
//         imageUrl: res.data.imageUrl,
//         description: res.data.description,
//         price: res.data.price,
//         rented: res.data.rented
//        })
//      })

//    }
    
        
//   render(){  
//       return (
//         <div >
//           <img alt="product" src={this.state.imageUrl} />  
//           <p>{this.state.name}</p>
//           <p>{this.state.description}</p>
//           <p>Цена за наем (7дни): <strong>{this.state.price} лв</strong></p>
           
          
          
//           </div>
//       )
//           }
    
// }
  
    
    

// export default DetailsItem