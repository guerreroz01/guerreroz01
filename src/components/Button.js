import React from "react";
import "./Button.css";

function Button({ title, icon }) {
  return (
    <>
      <button className="btn" type="submit">
        {title}
        {icon && <span style={{ marginLeft: "12px" }}>{icon}</span>}
      </button>
    </>
  );
}

export default Button;
