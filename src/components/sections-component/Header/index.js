import React from 'react';
import { useState } from 'react';
import logo from '../../../assets/logoIcon.png'
import headerOptions from './__headerOptions.json';
import './style.header.css';

export default function Header() {
    const [headerDetails] = useState(headerOptions);
    return (
      <header className="header">
        <div className="logo-wrapper">
          <a href="/">
            <img src={logo} alt="Logo" /><p>AYUSH SONI</p>
          </a>
        </div>
        <div className="header-options-container">
          {headerDetails.map((data, index) => {
            return (
              <ul className="header-options-wrapper" key={index}>
                <li className="header-option-list">
                  <a href={data.path}>{data.title}</a>
                </li>
              </ul>
            );
          })}
        </div>
      </header>
    );
}