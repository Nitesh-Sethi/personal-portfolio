import React from "react";
import "./MediaSymbols.css";

function MediaSymbols(props) {
  return (
    <React.Fragment>
      <div className="media">
        <a href={props.link}>
          <img src={props.symbol} alt="" />
        </a>
      </div>
    </React.Fragment>
  );
}

export default MediaSymbols;
