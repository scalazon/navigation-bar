/* eslint-disable react/sort-comp */
/* eslint-disable prettier/prettier */
import Axios from 'axios';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfItems: 0,
      items: [],
      total: 0,
      visible: false,
    }
    this.showHide = this.showHide.bind(this)
    this.updateCart = this.updateCart.bind(this)
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

  showHide() {
    const viz = !this.state.visible;
    this.setState({
      visible: viz
    });
  }

  render() {


    return(
      <>
        <Button variant="dark" onClick={this.showHide}>
          Cart <Badge variant="warning">{this.state.numberOfItems}</Badge>
        </Button>

        <Modal show={this.state.visible} 
        onEnter={this.updateCart}
        onHide={this.showHide}>
          <Modal.Header closeButton>
            <Modal.Title>Your Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <CardDeck> */}
              {this.state.items.map(item => {
                return (
                  <Card>
                    <div className="card-horizontal">
                      <Image thumbnail src={item.thumbnail} />
                 
                    {/* <Card.Img variant="top" id='cardImage' src={item.thumbnail} /> */}
                    <Card.Body>
                      <Card.Text>
                      {item.productTitle}
                      </Card.Text>
                    </Card.Body>
                    </div>
                    <Card.Footer>
                      ${item.price}, quantity: {item.quantity}
                      <Button variant='dark'>Remove from Cart</Button>
                    </Card.Footer>
                  </Card>
                )
              })}
            {/* </CardDeck> */}
          </Modal.Body>
          <Modal.Footer>
            <p>Your subtotal is ${Number(this.state.total)}</p>
            <Button variant="dark" id={'searchButton'} onClick={this.showHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default Cart;