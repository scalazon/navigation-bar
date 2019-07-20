/* eslint-disable prettier/prettier */
import React from 'react';
import { MdSearch } from 'react-icons/md';
import { MdLanguage } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
// eslint-disable-next-line import/extensions
import SearchBar from './components/Search.jsx';
import Cart from './components/Cart.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 0,
    };
  }

  componentDidMount() {
    const listener = new BroadcastChannel('cart');
    listener.onmessage = (event) => {
      console.log(event.data)
      console.log('cart:', this.state.cart)
      let newCount = this.state.cart + event.data.quantity;
      console.log(newCount)
      this.setState({
        cart: newCount
      })
    }

    
  }

  render() {
    return (
      <>
        <Navbar id="mainNav" bg="dark" expand>
          <Navbar.Brand>
            <img
              src="https://elasticbeanstalk-us-east-2-746219401089.s3.us-east-2.amazonaws.com/FEC+Logo+2.png"
              className="main_logo"
              alt="hackmazon_logo"
            />
          </Navbar.Brand>
          <Nav.Link></Nav.Link>
          <SearchBar className="searchBarComponent"  />
          <Button variant="dark" id="searchButton">
            <IconContext.Provider value={{ color: 'black', size: '2em' }}>
              <MdSearch />
            </IconContext.Provider>
          </Button>
        </Navbar>

        <Navbar id="mainNav" bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navLinks">
                <Button variant="dark" id="mapButton">
                  <IconContext.Provider value={{color: 'white',size: '1.5em', className: 'mapIcon',}}>
                    <FiMapPin />
                  </IconContext.Provider>
                  <span id="deliver-top">Deliver to Zubair</span>
                  <br />
                  <span id="deliver-bottom">Austin 78701</span>
                </Button>   
                <Nav.Link></Nav.Link> 
                <Nav.Link></Nav.Link>
                <Nav.Link></Nav.Link>
                <Nav.Link></Nav.Link>
                <Button variant="dark">Browsing History</Button>
                <Button variant="dark">Today's Deals</Button>
                <Button variant="dark">My Hackmazon.com</Button>
                <Button variant="dark">Buy Again</Button>
                <Button variant="dark">Whole Foods</Button>
                <Button variant="dark">Gift Cards</Button>
                <Button variant="dark">Sell</Button>
                <Button variant="dark">Help</Button>
                <DropdownButton variant="dark" className="btn" id="LangButton" title={
                  <IconContext.Provider value={{color: 'white',size: '1.45em'}}>
                    <MdLanguage />
                  </IconContext.Provider>
                }>
                    <Dropdown.Item>English - EN</Dropdown.Item>
                    <Dropdown.Item>Español - ES action</Dropdown.Item>
                    <Dropdown.Item as="a">Learn More</Dropdown.Item>
                </DropdownButton>

                {/* <Dropdown id="langSelect">
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    <IconContext.Provider value={{ color: 'white', size: '1.75em' }}>
                      <MdLanguage />
                    </IconContext.Provider>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>English - EN</Dropdown.Item>
                    <Dropdown.Item>Español - ES action</Dropdown.Item>
                    <Dropdown.Item as="a">Learn More</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
              </Nav>
              </Navbar.Collapse>
              <Nav className="navLinks">
                <Dropdown id="accountDropdown">
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    <span id="hello">Hello, Hack Reactor</span>
                    <br />
                    <span id="account">Account & Lists</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Header>Your Account</Dropdown.Header>
                    <Dropdown.Item>Your Account</Dropdown.Item>
                    <Dropdown.Item>Your Orders</Dropdown.Item>
                    <Dropdown.Item>Your Dash Buttons</Dropdown.Item>
                    <Dropdown.Item>Your Lists</Dropdown.Item>
                    <Dropdown.Item>Your Recommendations</Dropdown.Item>
                    <Dropdown.Item>Your Subscribe and Save Items</Dropdown.Item>
                    <Dropdown.Item>Memberships & Subscriptions</Dropdown.Item>
                    <Dropdown.Item>Your Service Requests</Dropdown.Item>
                    <Dropdown.Item>Your Prime Membership</Dropdown.Item>
                    <Dropdown.Item>Your Garage</Dropdown.Item>
                    <Dropdown.Item>Your Fanshop</Dropdown.Item>
                    <Dropdown.Item>Your Pets</Dropdown.Item>
                    <Dropdown.Item>Start a Selling Account</Dropdown.Item>
                    <Dropdown.Item>
                      Register for a Business Account
                    </Dropdown.Item>
                    <Dropdown.Item>Your Amazon Credit Cards</Dropdown.Item>
                    <Dropdown.Item>Your Content and Devices</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="dark">Orders</Button>
                <DropdownButton variant="dark" className="btn" id="PrimeButton" title="Prime">
                  <Dropdown.Item>
                    <div>
                      <p>Forthcoming team photo</p>
                    </div>
                  </Dropdown.Item>
                </DropdownButton>
                <Button variant="dark">
                  <div id="cartButton">
                    <Image 
                      src="https://elasticbeanstalk-us-east-2-746219401089.s3.us-east-2.amazonaws.com/transparent-cart.png"
                      id="cartImage"
                    />
                    <span id="cartTotal">{this.state.cart}</span>
                  </div>
                  <span id="cartTitle">Cart</span>
                </Button>
              </Nav>
        </Navbar>
        <Cart />
      </>
    );
  }
}

export default App;
