import React from 'react';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import LandingPage from './components/landing_page/LandingPage';
import CreateProject from './components/landing_page/CreateProject';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/create-project" element={<CreateProject/>} />
      </Routes>
      
    </>
  );
}

export default App;
