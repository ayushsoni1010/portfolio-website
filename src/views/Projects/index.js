import React from "react";
import "./style.views.projects.css";
import BgText from "../../components/widgets/BgText";
import ProjectCard from "../../components/widgets/Cards/ProjectCard";

export default function Projects() {
  return (
    <div className="projects-section-wrapper">
      <h1 className="project-title">Projects</h1>
      <BgText title="Projects" />
      <div className="project-card-wrapper">
        <ProjectCard
          projectTitle="Eccentric Touch"
          projectDescription="In a team colloboration, developing a project called Eccentric Touch, it is a small CSS Library to solve all our frontend issues"
          projectURL="https://github.com/DesignSystemsOSS/eccentrictouch"
        />
        <ProjectCard
          projectTitle="Frontend Mentor Projects"
          projectDescription="This are the frontend mentor challenges with various completed projects using HTML, CSS, JS, React."
          projectURL="https://github.com/ayushsoni1010/frontend-mentor-challenges"
        />
        <ProjectCard
          projectTitle="CSS Battle Challenges"
          projectDescription="This are the css battle challenges with various completed projects by cssbattle.dev"
          projectURL="https://github.com/ayushsoni1010/css-battle-challenges"
        />
      </div>
    </div>
  );
}
