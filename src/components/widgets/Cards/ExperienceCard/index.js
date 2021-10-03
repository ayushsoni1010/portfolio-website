import React from 'react';
import './style.widgets.cards.experienceCard.css';

export default function ExperienceCard(__cardsProperties) {
    return (
        <div className="experience-card-wrapper">
            <h1 className="experience-title gradient-text">{__cardsProperties.title}</h1>
            <p className="company-title">{__cardsProperties.companyName}</p>
            <ul className="experience-description-wrapper">
                <li className="job-description">{__cardsProperties.description1}</li>
                <li className="job-description">{__cardsProperties.description2}</li>
                <li className="job-description">{__cardsProperties.description3}</li>
            </ul>
        </div>
    )
}