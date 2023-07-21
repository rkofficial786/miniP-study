
import './App.css';
import Navigation from './component/Navigation';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './page/Home';
import Dashboard from './page/Dashboard';
import About from './page/About';
import Login from './page/Login';
import Signup from './page/Signup';
import Contact from './page/Contact';
import { useState } from 'react';


function App() {

const[isLoggedIn,setIsLoggedIn]=useState(false)

  return (
    <div className="App">

      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
<div className='hero'>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/Signup' element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>


      </Routes>

      </div>
     
    </div>
  );
}

export default App;
