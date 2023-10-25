
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homed from './Homed';
import Table from './Table';
import Order from './Order';
import Payment from './Payment';
import Umenu from './admin/Umenu';
import Utable from './admin/Utable';
import Upayment from './admin/Upayment'





 


function App() {
  
  

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homed/>}></Route>
      <Route path="/add" element={<Table/>}></Route>
      <Route path="/Oadd" element={<Order/>}></Route>
      <Route path="/Padd" element={<Payment/>}></Route>
      <Route path="/Um" element={<Umenu/>}></Route>
      <Route path="/Utbl" element={<Utable/>}></Route>
      <Route path="/Upay" element={<Upayment/>}></Route>
      
    </Routes>
    </BrowserRouter>

    


  );
}

export default App
