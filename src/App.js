import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './views/About';
import Contact from './views/Contact';
import Blog from './views/Blog';
import Home from './views/Home';

export default class Elephant extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/blog' element= {<Blog/>}/>
        </Routes>
      </div>
    )
  }
}
