import React from "react";
import "./style.views.projects.css";
import BgText from "../../components/widgets/BgText";
import ProjectCard from "../../components/widgets/Cards/ProjectCard";
import MainButton from "../../components/widgets/Button/MainButton";

export default function Projects() {
  return (
    <div className="projects-section-wrapper">
      <BgText title="Projects" bgTitle="Projects" />
      <div className="project-card-wrapper">
        <ProjectCard
          projectTitle="Eccentric Touch"
          projectDescription="In a team colloboration, developing a project called Eccentric Touch, it is a small CSS Library to solve all our frontend issues"
          projectURL="https://github.com/DesignSystemsOSS/eccentrictouch"
        />
        <ProjectCard
          projectTitle="React Movie App"
          projectDescription="It's a Movie App made with React using The Movie Database API and styled-components"
          projectURL="react-movie-app-alpha.vercel.app/"
        />
        <ProjectCard
          projectTitle="Frontend Mentor Projects"
          projectDescription="This are the frontend mentor challenges with various completed projects using HTML, CSS, JS, React."
          projectURL="https://github.com/ayushsoni1010/frontend-mentor-challenges"
        />
        <ProjectCard
          projectTitle="VR Industries"
          projectDescription="This is a freelance project work in which I have worked on the VR Industries's website from scratch."
          projectURL="https://www.vrindustries.co/"
        />
        <ProjectCard
          projectTitle="CSS Battle Challenges"
          projectDescription="This are the css battle challenges with various completed projects by cssbattle.dev"
          projectURL="https://github.com/ayushsoni1010/css-battle-challenges"
        />
        <a
          href="https://github.com/ayushsoni1010?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <MainButton
            value="Checkout More Projects"
            startIcon="fa-solid fa-rocket-launch"
          />
        </a>
      </div>
    </div>
  );
}
