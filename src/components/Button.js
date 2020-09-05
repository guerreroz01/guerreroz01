import React from "react";
import "./Button.css";

function Button({ title, icon, url }) {
  const handleClick = (target) => {
    if (target) {
      window.open(target);
    }
  };
  return (
    <>
      <button className="btn" type="submit" onClick={() => handleClick(url)}>
        {title}
        {icon && <span style={{ marginLeft: "12px" }}>{icon}</span>}
      </button>
    </>
  );
}

export default Button;
