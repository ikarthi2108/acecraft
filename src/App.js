import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart'; // Import the CartProvider
import Acecraft from './Components/Acecraft';
import Footer from './Components/Footer';
import Notes from './Components/Notes';
import School, { Uniformdisplay, Uniforms } from './Components/School';
import College from './Components/College';
import Enterprice from './Components/Enterprise';
import Airenmask from './Components/Arienmask'
import Errorcomponent from './Components/Errorcomponent';
import Register from './Components/Register';
import SignIn from './Components/SignIn';
import Cart from './Components/Cart';
import PrivateElement from './Components/PrivateRoute';
import NoteDetail from './Components/NoteDetail';

function App() {
  return (
    <CartProvider> {/* Wrap your application with CartProvider */}
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Acecraft />} />
          <Route exact path='/acecraft' element={<Acecraft />} />
          <Route exact path='/School' element={<School />} />
          <Route exact path='/College' element={<College />} />
          <Route exact path='/Enterprise' element={<Enterprice />} />
          <Route exact path='/Notes' element={<Notes />} />
          <Route exact path='/notes/:id' element={<NoteDetail />} />
          <Route exact path='/Airenmask' element={<Airenmask />} />
          <Route path='*' element={<Errorcomponent />} />
          <Route exact path='/Uniforms' element={<Uniforms />} />
          <Route exact path='/Uniform/:id' element={<Uniformdisplay />} />
          <Route exact path='/signup' element={<Register />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/cart' element={<PrivateElement><Cart /></PrivateElement>} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
