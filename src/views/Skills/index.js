import React from "react";
import "./style.views.skills.css";
import SkillButton from "../../components/widgets/Button/SkillButton";
import BgText from "../../components/widgets/BgText";

export default function Skills() {
  return (
    <div className="skills-section-wrapper">
      <h1 className="skills-title">Skills</h1>
      <BgText title="Skills" />
      <SkillButton
        title1="C"
        startIcon1="devicon-c-plain"
        title2="C++"
        startIcon2="devicon-cplusplus-plain"
        title3="Java"
        startIcon3="devicon-java-plain"
        title4="JavaScript"
        startIcon4="devicon-javascript-plain"
      />
      <SkillButton
        title1="HTML"
        startIcon1="devicon-html5-plain"
        title2="CSS"
        startIcon2="devicon-css3-plain"
        title3="Figma"
        startIcon3="devicon-figma-plain"
        title4="Adobe XD"
        startIcon4="devicon-xd-plain"
      />
      <SkillButton
        title1="SASS"
        startIcon1="devicon-css3-plain"
        title4="Storybook"
        startIcon4="devicon-storybook-plain"
        title3="VueJS"
        startIcon3="devicon-vuejs-plain"
        title2="React"
        startIcon2="devicon-react-original"
      />
      <SkillButton
        title1="Git"
        startIcon1="devicon-git-plain"
        title2="NPM"
        startIcon2="devicon-npm-original-wordmark"
        title3="Yarn"
        startIcon3="devicon-yarn-plain"
        title4="Docker"
        startIcon4="devicon-docker-plain"
      />
    </div>
  );
}
