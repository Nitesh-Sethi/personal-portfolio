import React from "react";
import "./Fullpage.component.css";
import cover from "../../assets/dp.jpg";

import ReactFullpage from "@fullpage/react-fullpage";
import SkillByWidth from "../SkillByWidth/SkillByWidth.component";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} // scrolling speed
    navigation={true} // right side dots
    css3={true}
    navigationTooltips={["Home", "About Me", "Skills"]} // right side dots name
    autoScrolling={true}
    slidesNavigation={true}
    controlArrows={false}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section s1">
            <h1>Nitesh Sethi</h1>
            <h2>I'm a Full Stack Web Developer</h2>
          </div>
          <div className="section s2">
            <div className="innerContent innerContent--aboutme">
              <h1>About Me</h1>
              <div className="imageContainer">
                <img src={cover} alt="" />
              </div>
              <div className="description">
                <p className="inner-heading">Hey there,</p>
                <p className="para">
                  This is Nitesh Sethi from New Delhi, India. I'm a Web
                  Developer and designer who develops web applications. I have
                  completed my 3 years of Diploma in{" "}
                  <b>Computer Science Engineering</b> from{" "}
                  <b>Ambedkar Institute of Technology</b> (a.k.a Ambedkar
                  Polytechnic) in July 2019.
                </p>
                <p className="para">
                  I started learning <b>Html</b> in my early school days. After
                  that during college, I started putting my hands on{" "}
                  <b>Cascading Style sheets</b> and <b>Javascript</b>. I have a
                  fairly good grip in Cascading style sheets. Nowadays, I'm
                  learning Adobe XD as a part of designing to know more about{" "}
                  <b>UI/UX</b> and <b>React.js</b> framework.
                </p>
              </div>
            </div>
          </div>
          <div className="section s3">
            <div className="innerContent innerContent--skills">
              <h1>Skills & Services</h1>
              <div className="skills--section">
                <SkillByWidth />
              </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
