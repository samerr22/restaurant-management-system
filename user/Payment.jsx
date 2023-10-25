import React from 'react'
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
import creditCard from './images/creditcard.png';
import Pay from './images/paypal.png';
import Cash from './images/cash.png';
import Bit from './images/bit.png';
import { FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';










function Homed() {

  
  
  const handleButtonClick = () => {
    alert('payment successful'); 
  };
 
 
  

    


  return (
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
               <Button href="/" className='custom-font' variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none', marginLeft:'10px' }}>
          Menu
        </Button>
        <Button href="/add" className='custom-font' variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none'}}>
          Table
        </Button>
        <Button href="/Oadd"className='custom-font' variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none'}}>
             Order
        </Button>
        <Button href="/Padd"className='custom-font' variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none', marginRight:'10px'}}>
         Pay
        </Button>
        <Button href="/Um" className='custom-font' variant="secondary" size="lg" style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',marginBottom: '30px',backgroundColor: '#161A2C', border: 'none', marginLeft:'10px'}}>
          Admin
        </Button>
        <div style={{height: '40px'}}></div>
        <Button   className='custom-font' variant="secondary" size="lg"  style={{color: 'rgb(245, 242, 242)',fontSize: '23px',fontFamily: 'Times New Roman, serif',backgroundColor: '#D27202', border: 'none', width: '150px',   margin: '0 auto', 
        marginBottom: '70px' }}>
          Logout 
        </Button>
        </div>   
       

        
      </div>
      <div className="flex-grow-1" >
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#161A2C' }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'rgb(245, 242, 242)', fontSize: '25px', fontFamily: 'Times New Roman, serif' }} >Payment</Navbar.Brand>
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

    
  
    
    <div className= "d-flex justify-content-between" 
    style={{ backgroundColor: '#161A2C', padding: '20px', borderRadius: '10px', 
    boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)',width:'1300px',height: '100px' }}>
   
    <Card style={{ width: '16rem', height: '9rem',  border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px', position: 'relative', top: '25px'  }}>
           <img src={creditCard} alt="creditcard" style={{ width: '130px', height: '130px',margin: '0 auto' }}/>
          <Card.Body className="text-center">
           <Card.Title style={{ color: 'rgb(208, 205, 205)', fontFamily: 'Georgia, serif', position: 'relative', bottom: '28px'}}>Credit Card</Card.Title>
            
      </Card.Body>
     </Card>
    

    
    <Card style={{ width: '16rem', height: '9rem', border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px', position: 'relative', top: '25px'}}>
      <img src={Pay} alt="paypal" style={{ width: '130px', height: '130px',margin: '0 auto' }}/>
          <Card.Body className="text-center"></Card.Body>
        <Card.Body className="text-center">
          <Card.Title style={{ color: 'rgb(208, 205, 205)', fontFamily: 'Georgia, serif', position: 'relative', bottom: '60px',}}>Paypal</Card.Title>
            
       
     </Card.Body>
   </Card>



    <Card style={{ width: '16rem', height: '9rem', border: 'none', 
      backgroundColor: 'rgba(100, 100, 100, 0.1)', borderRadius: '8px', position: 'relative', top: '25px' }}>
    <img src={Cash} alt="cash" style={{ width: '130px', height: '130px',margin: '0 auto' }}/>
          <Card.Body className="text-center"></Card.Body>
          <Card.Body className="text-center">
           <Card.Title style={{ color: 'rgb(208, 205, 205)', fontFamily: 'Georgia, serif', position: 'relative', bottom: '60px',}}>Cash</Card.Title>
            
        
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem', height: '9rem',  border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px', position: 'relative', top: '25px'  }}>
           <img src={Bit} alt="bit" style={{ width: '120px', height: '120px',margin: '0 auto' }}/>
          <Card.Body className="text-center">
           <Card.Title style={{ color: 'rgb(208, 205, 205)', fontFamily: 'Georgia, serif', position: 'relative', bottom: '18px'}}>Bit Coin</Card.Title>
            
      </Card.Body>
     </Card>
    
    
     
   </div>

   
   
   <Form style={{  marginTop: '150px' }}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label style={{color: 'rgb(245, 242, 242)',fontFamily: 'Arial, sans-serif'}}>Cardholder Name:</Form.Label>
          <FormControl style={{width:'500px', border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px',color: 'rgb(208, 205, 205)', }} type="text" placeholder="Type something..." />
        </Form.Group>
      </Form>

      <Form style={{  marginTop: '20px' }}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label style={{color: 'rgb(245, 242, 242)',fontFamily: 'Arial, sans-serif'}}>Card Namber:</Form.Label>
          <FormControl style={{width:'500px', border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px',color: 'rgb(208, 205, 205)', }} type="text" placeholder="Type something..." />
        </Form.Group>
      </Form>
    
    <div style={{position: 'absolute', left: '220px', display: 'flex', flexDirection: 'row'}}>
      <Form style={{  marginTop: '20px' }}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label style={{color: 'rgb(245, 242, 242)',fontFamily: 'Arial, sans-serif'}}>Expiration Data:</Form.Label>
          <FormControl style={{width:'200px', border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px',color: 'rgb(208, 205, 205)', }} type="text" placeholder="Type something..." />
        </Form.Group>
      </Form>

      <Form style={{  marginTop: '20px',marginLeft: '40px' }}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label style={{color: 'rgb(245, 242, 242)',fontFamily: 'Arial, sans-serif'}}>Cvv:</Form.Label>
          <FormControl style={{width:'200px', border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px',color: 'rgb(208, 205, 205)', }} type="text" placeholder="Type something..." />
        </Form.Group>
      </Form>
      </div>

      <div style={{height: '20px'}}></div>
    <div style={{ position: 'absolute', bottom: '40px', right: '50px', display: 'flex', flexDirection: 'row'}}> 
    <Button href="/Oadd" style={{backgroundColor: '#D27202', width: '100px',fontFamily: 'Arial, sans-serif'}} variant="dark">Cancel</Button>
    <div>
    <Button  style={{ marginLeft: '40px',backgroundColor: '#D27202',width: '150px',fontFamily: 'Arial, sans-serif' }}
     
     variant="dark"
    onClick={handleButtonClick}>Confirm Payment</Button>
    </div>

    </div>
    </div>
   </div>
   </div>
    
    
  );
}


export default Homed;