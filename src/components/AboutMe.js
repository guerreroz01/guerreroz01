import React from "react";
import {} from "@material-ui/icons";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="contact-main__aboutme">
      <h2>ABOUT ME</h2>
      <p className="aboutme__p">
        Hi, I'm Oliver Reyes a graduate in dentistry about 10 years ago who one
        day discover the beutiful and fasinated world of developer and without
        any doubt jump to in, now this is my full time job, I have kwnoledge in
        backend and frontend working with Nodejs building API infrastructures
        and beutiful UI with Reactjs, for almost 2 years you can download my
        complete resume here
      </p>
      <div>
        <h3>Knoledge Thecnologies</h3>
        <p>
          API rest, Nodejs, Reactjs, Mongodb, SQL and MySQL, firebase, JWT and
          Passport, Sass, Git and Github
        </p>
        <div className="tech">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1920px-Node.js_logo.svg.png"
            width="40px"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            width="40px"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/1920px-MongoDB-Logo.svg.png"
            width="60px"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            width="60px"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1920px-Git-logo.svg.png"
            width="60px"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/ee/MySQL_Logo.png"
            width="60px"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/1920px-Python_logo_and_wordmark.svg.png"
            width="60px"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1920px-Firebase_Logo.svg.png"
            width="60px"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1024px-Font_Awesome_5_brands_github.svg.png"
            width="40px"
            alt=""
          />
        </div>
      </div>
      <div>
        <h3>Phone</h3>
        <p>Lorem, ipsum dolor.</p>
      </div>
      <div>
        <h3>Email</h3>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </section>
  );
}

export default AboutMe;
