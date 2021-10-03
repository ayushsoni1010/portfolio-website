import React from 'react';
import './style.widgets.bgtext.css';

export default function BgText(__textDetails) {
    return (
      <div className="bgtext-wrapper">
            <p className="bg-text-title">{__textDetails.title}</p>
      </div>
    );
    
}