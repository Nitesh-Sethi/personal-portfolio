import React from "react";
import "./SkillByWidth.css";
import CssLogo from "../../assets/CssLogo96.png";
import JsLogo from "../../assets/javascript96.png";
import MongoLogo from "../../assets/mongodb96.png";
import ExpressLogo from "../../assets/Express-js-min.png";
import ReactLogo from "../../assets/react480.png";
import NodeLogo from "../../assets/nodejs96.png";
import Skill from "../Skills/Skill";

function SkillByWidth() {
  return (
    <React.Fragment>
      {window.innerWidth > "420" ? (
        <>
          <Skill
            code={CssLogo}
            fname="HTML5 &amp; CSS3"
            description="I'm highly skilled about this."
            percentage="90%"
            style={{ width: "90%" }}
          />
          <Skill
            code={JsLogo}
            fname="JavaScript"
            description="I'm highly skilled about this."
            percentage="70%"
            style={{ width: "70%" }}
          />
          <Skill
            code={NodeLogo}
            fname="Node.js"
            description="I'm highly skilled about this."
            percentage="50%"
            style={{ width: "50%" }}
          />
          <Skill
            code={ExpressLogo}
            fname="Express.js"
            description="I'm highly skilled about this."
            percentage="70%"
            style={{ width: "70%" }}
          />
          <Skill
            code={ReactLogo}
            fname="React.js"
            description="Undoubtfully, I'm new in React"
            percentage="50%"
            style={{ width: "50%" }}
          />
          <Skill
            code={MongoLogo}
            fname="MongoDB"
            description="Somewhere familiar with mongoDb."
            percentage="50%"
            style={{ width: "50%" }}
          />
        </>
      ) : (
        <>
          <div className="slide">
            <Skill
              code={CssLogo}
              fname="HTML5 &amp; CSS3"
              description="I'm highly skilled about this."
              percentage="90%"
              style={{ width: "90%" }}
            />
            <Skill
              code={JsLogo}
              fname="JavaScript"
              description="I'm highly skilled about this."
              percentage="70%"
              style={{ width: "70%" }}
            />
            <Skill
              code={NodeLogo}
              fname="Node.js"
              description="I'm highly skilled about this."
              percentage="50%"
              style={{ width: "50%" }}
            />
          </div>
          <div className="slide">
            <Skill
              code={ExpressLogo}
              fname="Express.js"
              description="I'm highly skilled about this."
              percentage="70%"
              style={{ width: "70%" }}
            />
            <Skill
              code={ReactLogo}
              fname="React.js"
              description="Undoubtfully, I'm new in React"
              percentage="50%"
              style={{ width: "50%" }}
            />
            <Skill
              code={MongoLogo}
              fname="MongoDB"
              description="Somewhere familiar with mongoDb."
              percentage="50%"
              style={{ width: "50%" }}
            />
          </div>
        </>
      )}
    </React.Fragment>
  );
}

export default SkillByWidth;
