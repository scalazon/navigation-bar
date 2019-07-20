/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa/'




class Prime extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
    this.showHide = this.showHide.bind(this)
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
        <Button variant="dark" onClick={this.showHide}>Prime</Button>

        <Modal show={this.state.visible} 
        size={'lg'}
        onHide={this.showHide}
        id="mainNav" >
          <Modal.Header closeButton>
            <Modal.Title>Prestige Worldwide</Modal.Title>
          </Modal.Header>
          <Modal.Body id="primeBody">
              <p>Thanks for checking out our project!</p>
              <Button variant='dark' id="PrimeButton" href="https://github.com/hackmazon/navigation-bar/blob/master/README.md">
                <FaGithub /><span>Check us out on Github</span>
              </Button>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default Prime;