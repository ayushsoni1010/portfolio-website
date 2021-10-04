import React from 'react';
import './style.widgets.cards.projectCard.css';
import Button from '../../Button/MainButton';

export default function ProjectCard(__projectDetails) {
    return (
        <div className="projectCard-wrapper">
            <h1 className="project-card-title gradient-text">{__projectDetails.projectTitle}</h1>
            <p className="project-description">{__projectDetails.projectDescription}</p>
            <a href={__projectDetails.projectURL}>
                <Button value="View" startIcon="fas fa-chevron-circle-down"/>
            </a>
        </div>
    )
}