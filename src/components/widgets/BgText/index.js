import React from 'react';
import './style.widgets.bgtext.css';

export default function BgText(__textDetails) {
    return (
      <div className="bgtext-wrapper">
            <h1 className="bg-text-title">{__textDetails.title}</h1>
            <p className="bg-text-bg-title">{__textDetails.bgTitle}</p>
      </div>
    );
    
}