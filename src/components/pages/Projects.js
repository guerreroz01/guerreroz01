import React, { useState } from "react";
import "./Projects.css";
import Card from "../Card";
import Button from "../Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
function Projects() {
  const [w, setW] = useState(window.innerWidth);

  window.onresize = function (e) {
    setW(window.innerWidth);
  };

  return (
    <div className="projects__wrapper">
      <div className="projects__wrapper--card">
        {w >= 700 && (
          <Card
            img={
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            }
          />
        )}
        <div className="arrow_left" style={{ color: "#fff" }}>
          <ArrowBackIosIcon style={{ fontSize: 40 }} />
        </div>
        <div className="card__content">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
              alt=""
            />
          </div>
          <h3>Project X</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ea architecto dignissimos modi temporibus, nobis fuga ipsum possimus
          </p>
        </div>
        <div className="arrow_right" style={{ color: "#fff" }}>
          <ArrowForwardIosIcon style={{ fontSize: 40 }} />
        </div>
        {w >= 700 && (
          <Card
            img={
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            }
          />
        )}
      </div>
      <Button title={"CALL TO ACTION"} />
    </div>
  );
}

export default Projects;
