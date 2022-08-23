import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import './App.css'
import Catergory from './pages/Catergory/Catergory';

import Home from './pages/Home/Home'
import Welcome from './pages/Welcome/Welcome'
import Signup  from './pages/Signup/Signup';
import Login from './pages/Login/Login'
import Item from './pages/Item/Item';
function App() {
  return (
<BrowserRouter >
<Routes path='/'>
<Route path='' element={<Welcome />}/>
<Route path='home' element={<Home />}/>
<Route path='catergories/:item' element={<Catergory />}/>
<Route path='signup' element={<Signup />}/>
<Route path='login' element={<Login />}/>
<Route path='catergory/:item' element={<Item />}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
