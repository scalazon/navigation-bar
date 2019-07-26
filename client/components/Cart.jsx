/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable prettier/prettier */
import Axios from 'axios';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaTrashAlt } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';
import { IconContext } from 'react-icons';


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
    //DB call to get all items in the cart and update the cart's items state
    Axios.get('http://hackmazonnavbar-env.bj77f9npm5.us-east-2.elasticbeanstalk.com/cart/all')
    // Axios.get('/cart/all')
    .then(result => {
      this.setState({
        items: result.data
      })
      return Axios.get('http://hackmazonnavbar-env.bj77f9npm5.us-east-2.elasticbeanstalk.com/cart/total')
      // return Axios.get('/cart/total')
    })
    //DB call to update the $total of items in the cart state
    .then(total => {
      this.setState({
        total: total.data
      })
      return Axios.get('http://hackmazonnavbar-env.bj77f9npm5.us-east-2.elasticbeanstalk.com/cart/itemCount')
      // return Axios.get('/cart/itemCount')
    })
    //DB call to up the state of the item count
    .then(count => {
      this.setState({
        numberOfItems: count.data
      })
    })
  }

  componentDidMount() {
    const listener = new BroadcastChannel('cart');
    listener.onmessage = (event) => {
      //When we get a message to add something to the cart, post to update our db
        Axios.post('http://hackmazonnavbar-env.bj77f9npm5.us-east-2.elasticbeanstalk.com/cart/add',{data: event.data})
        //then make server request to update the local state from the database
        .then(this.updateCart())
        .catch(console.error)
    }
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
          <IconContext.Provider value={{color: 'white',size: '2em'}}>
            <TiShoppingCart />
          </IconContext.Provider>
          <Badge id="searchButton" variant="light">{this.state.numberOfItems}</Badge>
        </Button>

        <Modal show={this.state.visible} 
        onEnter={this.updateCart}
        size={'lg'}
        onHide={this.showHide}
        id="mainNav" >
          <Modal.Header closeButton>
            <Modal.Title variant="dark">Your Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {this.state.items.map((item, i) => {
                return (
                  <Card key={i}>
                    <div className="card-horizontal">
                      <div className="cart_thumbnail">
                        <img src={item.thumbnail} alt={`{item.productTitle}`} />
                      </div>
                      <Card.Body>
                        <Card.Title>{item.productTitle}</Card.Title>
                        <Card.Text>
                          Price: <Badge pill variant="dark">${Number(item.price).toFixed(2)}</Badge><br />
                          Quantity: <Badge pill variant="dark">{item.quantity}</Badge><br />
                          Subtotal: <Badge pill variant="dark">${Number(item.quantity * item.price).toFixed(2)}</Badge>
                        </Card.Text>
                      </Card.Body>
                    </div>
          
                    <Card.Footer>
            
                      <Button variant='dark' id="removeCart" onClick={e => {
                        let asin = item.asin
                        Axios.delete('http://hackmazonnavbar-env.bj77f9npm5.us-east-2.elasticbeanstalk.com/cart/removeItem', {data: {asin}}).then(() => {
                          this.updateCart();
                        })
                      }}><FaTrashAlt /></Button>
                    </Card.Footer>
                  </Card>
                )
              })}
          </Modal.Body>
          <Modal.Footer>
            Your cart total is:<span> </span><span id="cartFinalTotal">${Number(this.state.total).toFixed(2)}</span>
            <span>  </span>
            <Button variant="dark">
              Checkout
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default Cart;