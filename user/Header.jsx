import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './dark-mode.css';
import { Link } from 'react-router-dom';

function Header(){

   
    return(
        <div style={{ backgroundColor: '#161A2C', color: '#fff' }}>

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
               <Button href="//" variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none', marginLeft:'10px' }}>
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
        <Button   variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none', marginLeft:'10px'}}>
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

        
      
      



</div>
</div>
</div>

    );

}
export default Header;

