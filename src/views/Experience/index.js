import React from 'react';
import './style.views.experience.css';
import BgText from '../../components/widgets/BgText';
import ExperienceCard from '../../components/widgets/Cards/ExperienceCard';

export default function Experience() {
    return (
      <div className="experience-section-wrapper">
        <BgText title="Work" bgTitle="Experience" />
        <div className="experience-card-section-wrapper">
          <ExperienceCard
            title="Software Engineer Intern"
            companyName="Economize.cloud"
            description1="Working on a dashboard application that is based on cloud technology and SaaS product."
            description2="Implementing and fixing the frontend UI of the application."
            description3="Worked on the storybook setup of base wrapper components and implementing charts using chart.js and vue-chart.js in a wrapper component."
          />
          <ExperienceCard
            title="Frontend Developer"
            companyName="The DesignSystems"
            description1="Working as a Frontend Engineer and building TheDesignSystems community."
            description2="Working on thedesignsystems community website and UI components from scratch using ReactJS."
            description3="Working on a CSS library that results in solving frontend crisis called eccentrictouch using ReactJS, SCSS."
          />
          <ExperienceCard
            title="Microsoft Learn Student Ambassador"
            companyName="Microsoft"
            description1="Microsoft Learn Student Ambassadors are the on-campus leaders with a passion for making a difference."
            description2=" In a collaboration with the Coding Society Community, I had conducted a 3-days long session on Web Development and build a hands-on project which is based on LinkTree."
            description3="Building vibrant communities, and sharing the latest tech with their peers and interacting with fellow MLSA's in the community."
          />
          <ExperienceCard
            title="Script Fellowship"
            companyName="Script Foundation"
            description1="As a Fellow in Script Fellowship Program'21, I am the top first contributor in Script Fellowship."
            description2="Worked on KaroVerify, CraftBrain, and HACK-OV8 projects which are based on the MERN stack."
            description3="Implemented the frontend UI of the open-source projects using ReactJS, SCSS/CSS, HTML, JS."
          />
          <ExperienceCard
            title="Hackathon Mentor"
            companyName="AnyoneCanCo.de , HackTheNorth"
            description1=" I have successfully mentored many folks at HackACode'21 and HackTheNorth and I am truly thankful and really appreciate the active participation from both the participant and the organizers of the event."
            description2=" Mentored people about hackathon, open-source, API s , frontend, git & github and various tech related stuff. "
            description3=" Collaborated within the community, discussed about the project hacks and having meet-ups with the organizers, sponsors and volunteers."
          />
          <ExperienceCard
            title="Open Source Contributor/Mentor"
            companyName="LGMSoC , DCP , GWoC , SWoC , WoC-2.0"
            description1="Contributed to various open-source projects related to frontend , UI-UX designing and documentation."
            description2="Collaborated within the community and worked on few projects from scratch related to web development and programming."
            description3="Awarded scholarship for the Web Development course at DevIncept Training Programs."
          />
        </div>
      </div>
    );
}