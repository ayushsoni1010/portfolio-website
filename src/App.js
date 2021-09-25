import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/sections-component/Header';
import './styles/index.css';
import LandingPage from './views/LandingPage/index';


export default function App(){
  return (
    <div className = "center_view">
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={LandingPage}/>
      </BrowserRouter>
    </div>
  )
}
