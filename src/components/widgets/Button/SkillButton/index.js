import React from "react";
import "./style.widgets.skillButton.css";

export default function SkillButton(__buttonProperties) {
  function clickHandler(e) {
    e.value = "null";
  }
  return (
    <div className="skill-button-wrapper">
      <ul className="btn-properties">
        <li>
          <a href={clickHandler}>
            <i className={__buttonProperties.startIcon1}></i>
            <span>{__buttonProperties.title1}</span>
          </a>
        </li>
        <li>
          <a href={clickHandler}>
            <i className={__buttonProperties.startIcon2}></i>
            <span>{__buttonProperties.title2}</span>
          </a>
        </li>
        <li>
          <a href={clickHandler}>
            <i className={__buttonProperties.startIcon3}></i>
            <span>{__buttonProperties.title3}</span>
          </a>
        </li>
        <li>
          <a href={clickHandler}>
            <i className={__buttonProperties.startIcon4}></i>
            <span className="lastTitle">{__buttonProperties.title4}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
