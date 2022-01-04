import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './views/About';
import Contact from './views/Contact';

export default class Elephant extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>React Homework</h1>
        <Routes>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    )
  }
}
