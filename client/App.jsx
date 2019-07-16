import React from 'react';
import SearchBar from './components/Search.jsx'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  
  render() {
    
    const imgStyle = {
      maxHeight: '10%',
      maxWidth: '15%'
    }
    
    return (
      <>
        <Navbar bg='dark' expand='xl'>
          <Row>
            <Col xl='auto'>
              <Navbar.Brand href="#">
                <img 
                  src='https://elasticbeanstalk-us-east-2-746219401089.s3.us-east-2.amazonaws.com/Hackmazon-logo-white.png'
                  width='150'
                  height='45'
                />
              </Navbar.Brand>
            </Col>
            <Col xl='auto'>
              <SearchBar />
            </Col>
            <Col>
            </Col>
          </Row>
          {/* <Row>
            <Nav.Link href="#">Deliver to Austin</Nav.Link>
            <Nav.Link href="#">Today's Deals</Nav.Link>
            <Nav.Link href="#">My Hackmazon.com</Nav.Link>
            <Nav.Link href="#">Buy Again</Nav.Link>
            <Nav.Link href="#">Gift Cards</Nav.Link>
            <Nav.Link href="#">Help</Nav.Link>
          </Row> */}
        </Navbar>
      </>
    )
  }
}

export default App;

