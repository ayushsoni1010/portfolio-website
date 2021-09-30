import React from "react";
import "./style.widgets.button.css";

export default function Button(__buttonDetails) {
  if (!__buttonDetails.startIcon) {
    return (
      <button className="button-properties" type="button">
        {__buttonDetails.value}
      </button>
    )
  }
  else {
    return (
      <button className="button-icon-properties" type="button"><i className={__buttonDetails.startIcon}></i>{__buttonDetails.value}</button>
    )
  }

}
