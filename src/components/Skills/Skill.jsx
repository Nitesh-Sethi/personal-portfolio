import React from "react";
import "./Skill.css";

function Button(props) {
  return (
    <React.Fragment>
      <div className="skill">
        <div className="skill-icon-and-name">
          <div className="skill-code">
            <img src={props.code} alt="skill-icon" />
          </div>
          <div className="skill-name">
            <div className="skill-fullname">{props.fname}</div>
            <div className="skill-description">{props.description}</div>
          </div>
        </div>
        <div className="skill-bar">
          <div className="bar" style={props.style}>
            {props.percentage}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Button;
