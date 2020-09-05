import React, { useState } from "react";
import "./Projects.css";
import Card from "../Card";
import Button from "../Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import data from "../data/DataProjects";

function Projects() {
  const [w, setW] = useState(window.innerWidth);
  const [cardProject, setCardProject] = useState(3);

  window.onresize = function (e) {
    setW(window.innerWidth);
  };

  const handleClickBack = () => {
    if (cardProject === 0) {
      setCardProject(data.length - 1);
    } else {
      setCardProject((prevState) => prevState - 1);
    }
  };

  const handleClickForward = () => {
    if (cardProject === data.length - 1) {
      setCardProject(0);
    } else {
      setCardProject((prevState) => prevState + 1);
    }
  };

  return (
    <div className="projects__wrapper">
      <div className="projects__wrapper--card">
        {w >= 800 && (
          <Card
            img={
              cardProject === 0
                ? data[data.length - 1].url
                : data[cardProject - 1].url
            }
          />
        )}
        <div
          onClick={() => handleClickBack()}
          className="arrow_left"
          style={{ color: "#fff" }}
        >
          <ArrowBackIosIcon style={{ fontSize: 40 }} />
        </div>
        <div className="card__content">
          <div className="image">
            <img src={data[cardProject].url} alt="" />
          </div>
          <div className="flex">
            <h3>{data[cardProject].projectName}</h3>
            <p>{data[cardProject].projectDesc}</p>
            <div className="btns">
              <Button title={"GITHUB"} url={data[cardProject].gitUrl} />
              <Button
                title={"VIEW PROJECT"}
                url={data[cardProject].projectUrl}
              />
            </div>
          </div>
        </div>
        <div
          className="arrow_right"
          style={{ color: "#fff" }}
          onClick={() => handleClickForward()}
        >
          <ArrowForwardIosIcon style={{ fontSize: 40 }} />
        </div>
        {w >= 800 && (
          <Card
            img={
              cardProject === data.length - 1
                ? data[0].url
                : data[cardProject + 1].url
            }
          />
        )}
      </div>
    </div>
  );
}

export default Projects;
