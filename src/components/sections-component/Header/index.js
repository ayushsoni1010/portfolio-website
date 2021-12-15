import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logoIcon.svg'
import headerOptions from './__headerOptions.json';
import './style.header.css';

export default function Header() {
    const [headerDetails] = useState(headerOptions);
    return (
      <header className="header">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={logo} alt="Logo" /><p>AYUSH SONI</p>
          </Link>
        </div>
        <div className="header-options-container">
          {headerDetails.map((data, index) => {
            return (
              <ul className="header-options-wrapper" key={index}>
                <li className="header-option-list">
                  <Link to={data.path}>{data.title}</Link>
                </li>
              </ul>
            );
          })}
        </div>
      </header>
    );
}
