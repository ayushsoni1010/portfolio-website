import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/index.css';
import Header from './components/sections-component/Header';
import Footer from './components/sections-component/Footer';
import LandingPage from './views/LandingPage/index';
import Contact from './views/Contact';
import About from './views/About';
import Education from './views/Education';
import Experience from './views/Experience';
import Skills from './views/Skills';
import Projects from './views/Projects';

export default function App(){
  return (
    <div className="center_view">
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/" exact component={About}/>
        <Route path="/about" exact component={About}/>
        <Route path="/" exact component={Education}/>
        <Route path="/" exact component={Experience}/>
        <Route path="/" exact component={Skills}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/contact" exact component={Contact}/>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
