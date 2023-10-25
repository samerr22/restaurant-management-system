import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import orderFood from './images/order-food.png';
import User from './images/user.png';
import oranGe from './images/orange.png'
import './dark-mode.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useLocation } from 'react-router-dom';








function Homed() {

  const location = useLocation();
  

  const selectedMenuItem = location.state && location.state.selectedMenuItem;
  const selectedTable = location.state && location.state.selectedTable;

  const selectedCapacity = location.state && location.state.selectedCapacity;


  console.log(selectedMenuItem);
  console.log(selectedTable);
  console.log(selectedCapacity);


  
  
  

    const ButtonGroupStyles = {
        width: '200px',
        height: '700px',
        
    };

    const headerStyles ={
        textAlign: 'center',
       marginBottom: '10px',
    };
    
    


    
   

  return (

    
    
      
    


    <div style={{ backgroundColor: '#161A2C', color: '#fff' }} >


        <div className="d-flex" >

        
            < div className="flex-shrink-0">
          
            
      
      <Container>
    <Row>
    <Col xs={6} md={4}  className="d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center">
      <img src={oranGe} alt="orange" style={{ width: '130px', height: '130px' }}/>
      <h2 style={{fontFamily: 'Arial, sans-serif'}}>Rest</h2>
     
      </div>
      
      
    </Col>
  </Row>
         </Container>
               
           <div style={{height: '50px'}}></div>
            <div style={{ display: 'flex', flexDirection: 'column' }} >
               <Button href="/" variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none', marginLeft:'10px' }}>
          Menu
        </Button>
        <Button href="/add" variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif', marginBottom: '30px',backgroundColor: '#161A2C', border: 'none'}}>
          Table
        </Button>
        <Button href="/Oadd" variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none'}}>
             Order
        </Button>
        <Button  href="/Padd" variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none', marginRight:'10px'}}>
         Pay
        </Button>
        <Button  href="/Um" variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none', marginLeft:'10px'}}>
          Admin
        </Button>
        <div style={{height: '40px'}}></div>
        <Button    variant="secondary" size="lg"  style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',backgroundColor: '#D27202', border: 'none', width: '150px',   margin: '0 auto', 
        marginBottom: '70px' }}>
          Logout 
        </Button>
        </div>   
       

        
      </div>
      <div className="flex-grow-1" >
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#161A2C' }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'rgb(245, 242, 242)', fontSize: '25px', fontFamily: 'Times New Roman, serif' }} >Order</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            </Nav>
          <Nav>
            <Nav.Link href="#deets">
            <img src={orderFood} alt="order Food" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <img src={User} alt="user" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div style={{ borderTop: '1px solid white', marginTop: '0' }}></div>

    
    
    

<Card style={{ width: '80rem', height: '20rem',  border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px', position: 'relative', top: '50px', margin: '0 auto', marginBottom: '35px'}}>
      <Card.Body>
  
    <div style={{height: '20px'}}></div>
    <div style={{ position: 'absolute', bottom: '5px', right: '10px', display: 'flex', flexDirection: 'row'}}> 
    <Button href="/add" style={{backgroundColor: '#D27202', width: '100px',fontFamily: 'Arial, sans-serif'}} variant="dark">Back</Button>
    
    <Button href="/Padd"  variant="dark" style={{ marginLeft: '40px',backgroundColor: '#D27202',width: '100px',fontFamily: 'Arial, sans-serif' }}>Next</Button>{' '}
    </div>
    
    {/* Display menuData */}
   
    <p style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>Name:  </p>
    <p style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>Selected Menu Item: {selectedMenuItem && selectedMenuItem.name}</p>
    <p style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>Selected Table: {selectedTable}</p>
        <p>Selected Capacity: {selectedCapacity}</p>

        </Card.Body>
     </Card>
    
    
    </div>
    </div>
   </div>
 
    
    
  );
}


export default Homed;