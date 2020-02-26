import React from "react";
import "./Mailing.css";

function Mailing() {
  return (
    <React.Fragment>
      <div className="email-area">
        <h1>dxtrn.umf.2017@gmail.com</h1>
        <button href="mailto:dxtrn.umf.2017@gmail.com">Send Mail</button>
      </div>
    </React.Fragment>
  );
}

export default Mailing;
