import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListCustomerComponent from './components/ListCustomerComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';


function App() {
  return (
    <div>
        <Router>
          <HeaderComponents />
          <div className='container'>
            <Routes>
              <Route exact path = "/"  element={<ListCustomerComponent/>}></Route>
              <Route exact path = "/customers" element={<ListCustomerComponent/>}></Route>
              <Route exact path = "/add-customer" element={<CreateCustomerComponent/>}></Route>
            </Routes> 
        </div>
        <FooterComponents/>  
       </Router>
    </div>
    
 );
}

export default App;



