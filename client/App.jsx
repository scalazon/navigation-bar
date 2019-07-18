import React from 'react';
import { MdSearch} from 'react-icons/md';
import { MdLanguage } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
// eslint-disable-next-line import/extensions
import SearchBar from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar id="mainNav" bg="dark" expand>
          <Container fluid>
            <Col xl={2}>
              <img
                src="https://elasticbeanstalk-us-east-2-746219401089.s3.us-east-2.amazonaws.com/FEC+Logo+2.png"
                width="100%"
                alt="hackmazon_logo"
              />
            </Col>
            <Col xl={7}>
              <Nav>
                <SearchBar />
                <Button variant="warning" id="searchButton">
                  <IconContext.Provider value={{ color: 'black', size: '2em' }}>
                    <MdSearch />
                  </IconContext.Provider>
                </Button>
              </Nav>
            </Col>
            <Col xl={4} />
          </Container>
        </Navbar>
        <Navbar id="mainNav" bg="dark" variant="dark" expand>
          <Container fluid>
            <Col xl={2}>
              <Nav className="navLinks">
                <Button variant="dark" id="mapButton">
                  <IconContext.Provider value={{ color: 'white', size: '1.5em' , className:'mapIcon'}}>
                    <FiMapPin />
                  </IconContext.Provider>
                  <span id="deliver-top">Deliver to Zubair</span>
                  <br />
                  <span id="deliver-bottom">Austin, 78701</span>
                </Button>
              </Nav>
            </Col>
            <Col xl={7}>
              <Nav className="navLinks">
                <Button variant="dark">Browsing History</Button>
                <Button variant="dark">Today's Deals</Button>
                <Button variant="dark">My Hackmazon.com</Button>
                <Button variant="dark">Buy Again</Button>
                <Button variant="dark">Whole Foods</Button>
                <Button variant="dark">Gift Cards</Button>
                <Button variant="dark">Sell</Button>
                <Button variant="dark">Help</Button>
                <Dropdown id="langSelect">
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    <IconContext.Provider value={{ color: 'white', size: '1.75em' }}>
                      <MdLanguage />
                    </IconContext.Provider>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>English - EN</Dropdown.Item>
                    <Dropdown.Item>Español - ES action</Dropdown.Item>
                    <Dropdown.Item><a href="#">Learn More</a></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Col>
            <Col xl={4}>
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
                    <Dropdown.Item>Register for a Business Account</Dropdown.Item>
                    <Dropdown.Item>Your Amazon Credit Cards</Dropdown.Item>
                    <Dropdown.Item>Your Content and Devices</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Col>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default App;

