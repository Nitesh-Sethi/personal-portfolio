import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="footer-flex">
          <p>
            Designed and Developed By{" "}
            <a href="https://github.com/Nitesh-Sethi">Nitesh Sethi</a>
          </p>
          <p>&copy; Nitesh Sethi 2020. All rights Reserved.</p>
        </div>
        {/* <div className="footer-flex">
          <p>
            Thanks to <a href="https://icons8.com/">Icons8</a> for providing
            Icons.
          </p>
        </div> */}
      </footer>
    </React.Fragment>
  );
}

export default Footer;
