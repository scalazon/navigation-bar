import React from 'react';
import SearchBar from './components/Search.jsx'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {FiMapPin} from 'react-icons/fi'
import { IconContext } from "react-icons";
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  
  render() {
    let deliverToFont = {
      fontFamily: 'AmazonEmber_Rg',
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: '400',
      marginTop: '9px',
      color: 'white'
    };

    let cityZipFont = {
      fontSize: '14px',
      lineHeight: '15px',
      fontWeight: '700',
      paddingBottom: '5px',
      color: 'white'
    }

    let mapIconStyle = {
      padding: '0',
      margin: '0',
      border: '0',
      float: 'left',
    }

    let addressStyle = {
      width: '85%',
      float: 'right',
      paddingBottom: '0'
    }

    return (
      <>
        <Navbar bg='dark' expand={true}> 
          <Container fluid={true}>
              <Col xl={2}>
                <img 
                src='https://elasticbeanstalk-us-east-2-746219401089.s3.us-east-2.amazonaws.com/Hackmazon-logo-white.png'
                width='150'
                height='45'
                />
              </Col>
              <Col xl={8}>
                <SearchBar />
              </Col>
              <Col xl={2}>
              </Col>
          </Container>
        </Navbar>
        <Navbar bg='dark' variant='dark' expand={true}>
          <Container fluid={true}>
            <Col xl={2} style={mapIconStyle}>
              <IconContext.Provider value={{ color: "white", size: '1.25em'}}>
                <FiMapPin />
              </IconContext.Provider>
              <Container style={addressStyle}>
                <Row><span style={deliverToFont}>Deliver to Garrett</span></Row>
                <Row><span style={cityZipFont}>Austin 78703</span></Row>
              </Container>
            </Col>
            <Col xl={8}>
              <Nav variant='dark'>
                <Nav.Link href="#">Deliver to Austin</Nav.Link>
                <Nav.Link href="#">Today's Deals</Nav.Link>
                <Nav.Link href="#">My Hackmazon.com</Nav.Link>
                <Nav.Link href="#">Buy Again</Nav.Link>
                <Nav.Link href="#">Gift Cards</Nav.Link>
                <Nav.Link href="#">Help</Nav.Link>
              </Nav>
            </Col>
            <Col xl={2}>

            </Col>

          </Container>
        </Navbar>
      </>
    )
  }
}

export default App;

/*
   <Navbar.Brand href="#">
            <img 
              src='https://elasticbeanstalk-us-east-2-746219401089.s3.us-east-2.amazonaws.com/Hackmazon-logo-white.png'
              width='150'
              height='45'
            />
          </Navbar.Brand>  
          <SearchBar />
        </Navbar>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#'>
            <IconContext.Provider value={{ color: "white", size: '1.2em'}}>
              <FiMapPin />
            </IconContext.Provider> 
          </Navbar.Brand>
          <Nav variant='dark'>
            <Nav.Link href='#'>
              <Container>
                <Row><span style={deliverToFont}>Deliver to Garrett</span></Row>
                <Row><span style={cityZipFont}>Austin 78703</span></Row>
              </Container>
            </Nav.Link>
            <Nav.Link href="#">Deliver to Austin</Nav.Link>
            <Nav.Link href="#">Today's Deals</Nav.Link>
            <Nav.Link href="#">My Hackmazon.com</Nav.Link>
            <Nav.Link href="#">Buy Again</Nav.Link>
            <Nav.Link href="#">Gift Cards</Nav.Link>
            <Nav.Link href="#">Help</Nav.Link>
          </Nav>





*/