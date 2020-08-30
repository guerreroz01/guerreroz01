import React from "react";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="social">
          <a target="_blanc" href="http://facebook.com">
            <FaFacebook />
          </a>
          <a target="_blanc" href="http://github.com">
            <FaGithub />
          </a>
          <a target="_blanc" href="http://twitter.com">
            <FaTwitter />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
