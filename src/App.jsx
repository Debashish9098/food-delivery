import React, { useState } from 'react';
import Navbar from './Components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/cart/Cart'; // Ensure you have this component
import PlaceOrder from './pages/placeorder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import LoginPopup from './Components/Loginpopup/LoginPopup';


const App = () => {

   const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
