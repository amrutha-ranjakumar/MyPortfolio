import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Project from './pages/Project';
import Skill from './pages/Skill';
import React from 'react';
import Education from './pages/Education';
import { Contact } from './pages/Contact';
 

function App() {
  return (
    <div>
     <Header/>
      <Routes>
       <Route path='/' element={ <Home/>}/>
      
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
        </div>
          );
        }
export default App;
         
