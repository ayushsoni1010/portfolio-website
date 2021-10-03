import React from 'react';
import './style.widgets.cards.css';

export default function Cards(__cardsProperties) {
    return (
        <div className="cards-wrapper">
            <h2 className="status-title">{__cardsProperties.status}</h2>
            <p className="card-info">{__cardsProperties.info}</p>
            <p className="last-info">{__cardsProperties.lastInfo}</p>
        </div>
    )
}