/* eslint-disable react/sort-comp */
/* eslint-disable prettier/prettier */
import Axios from 'axios';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfItems: 0,
      items: [],
      total: 0
    }
  }


  updateCart() {
    // Axios.get('http://hackmazonnavbar-env.bj77f9npm5.us-east-2.elasticbeanstalk.com/cart/all')
    Axios.get('/cart/all')
    .then(result => {
      this.setState({
        items: result.data
      })
      // return Axios.get('http://hackmazonnavbar-env.bj77f9npm5.us-east-2.elasticbeanstalk.com/cart/total')
      return Axios.get('/cart/total')
    })
    .then(total => {
      this.setState({
        total: total.data
      })
      // return Axios.get('http://hackmazonnavbar-env.bj77f9npm5.us-east-2.elasticbeanstalk.com/cart/itemCount')
      return Axios.get('/cart/itemCount')
    })
    .then(count => {
      this.setState({
        numberOfItems: count.data
      })
    })
  }

  componentDidMount() {
    this.updateCart();
  }

  render() {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow();

    return(
      <div>
        <span>There are {this.state.numberOfItems} items</span>
        <span>The subtotal is ${this.state.total}</span>
      </div>
    )
  }
}

export default Cart;