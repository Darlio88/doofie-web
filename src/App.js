import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import './App.css'
import Catergory from './pages/Catergory/Catergory';

import Home from './pages/Home/Home'
import Welcome from './pages/Welcome/Welcome'


function App() {
  return (
<BrowserRouter >
<Routes path='/'>
<Route path='' element={<Welcome />}/>
<Route path='home' element={<Home />}/>
<Route path='catergories/:item' element={<Catergory />}/>

</Routes>
</BrowserRouter>
  );
}

export default App;
