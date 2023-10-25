import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
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
import saImage from './images/sa.jpg';
import './dark-mode.css';
import { Link } from 'react-router-dom';
import axios from 'axios';







function Homed() {

  
    
 
  
  
  const[homeds,setHomeds] = useState([]);
  const history = useNavigate();

 


  useEffect(() =>{
    const getHomeds =() =>{
     axios.get("http://localhost:3001/Menuitem/").then((res) =>{
      setHomeds(res.data);
     }).catch((err) => {
      alert(err.message);
     })
    }
    getHomeds();
  },[])


 
  

    
    


  return (
    <div style={{ backgroundColor: '#161A2C', color: '#fff'}}>


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
        <Navbar.Brand href="#home" style={{ color: 'rgb(245, 242, 242)', fontSize: '25px', fontFamily: 'Times New Roman, serif' }} >Menu</Navbar.Brand>
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
    
    {homeds.map((homd, index) => (
    <Card key={index} style={{ width: '12rem', height: '12rem',  border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px', position: 'relative', top: '50px'  }}>
      <Card.Img variant="top" src={saImage} className="rounded-circle" 
         style={{ maxWidth: '80%', maxHeight: '80%', position: 'relative', bottom: '50px',  margin: '0 auto', marginBottom: '70px'}}/>
          <Card.Body className="text-center">
           <Card.Title style={{ color: '#fff', fontFamily: 'Arial, sans-serif', position: 'relative', bottom: '110px',}}>{homd.name}</Card.Title>
             <Card.Text style={{ color: '#fff', fontFamily: 'Arial, sans-serif', position: 'relative', bottom: '100px'}}>
             ${homd.price}
          </Card.Text>
        

          
      
    
      <Button href='/add'
        style={{
          backgroundColor: '#D27202',
          border: 'none',
          width: '130px',
          margin: '0 auto',
          marginBottom: '70px',
          position: 'relative',
          bottom: '100px',
        }}
      
        variant="dark"
      
        onClick={() => {
          // Assuming you want to pass the selected 'homd' data to the second component
          history({
            pathname: '/add', // Navigate to the second component
            state: { selectedMenuItem: homd }, // Pass selected menu item data
          });
        }}
      >
        Order
      </Button>
   
  


      </Card.Body>
     </Card>
    ))}
    



   
    
    
   </div>

    

    
   

    </div>
   </div>
 </div>
    
    
  );
}

export default Homed;