import React from "react";
import "./style.views.education.css";
import BgText from "../../components/widgets/BgText";
import Cards from "../../components/widgets/Cards";
export default function Education() {
  return (
    <div className="education-section-wrapper">
      <h1 className="education-section-title">Education</h1>
      <BgText title="Background" />
      <div className="education-cards-wrapper">
        <Cards
          status="2018 - 2020"
          info="High School, Mathematics"
          lastInfo="Central Board of Secondary Education, Sanskar Academy"
        />
        <Cards
          status="2020 - 2024"
          info="Bachelor of Technology, Computer Science with Cloud Technology"
          lastInfo="Medi-Caps University"
        />
      </div>
    </div>
  );
}
