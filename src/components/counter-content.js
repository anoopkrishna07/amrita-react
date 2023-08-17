import React from "react";
import "./counter-content.css";
import line10 from "./img/line1.png";

export const Line1 = () => {
  return (
    <>
    <div className="box1">
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">Students Placed in 2022</div>
          <h1 className="element-lorem">
            <span className="span">96</span>
            <span className="text-wrapper-2">Lorem</span>
            <span className="text-wrapper-3">&nbsp;</span>
          </h1>
        </div>
      </div>
          <span className="line1">
          <img className="line" alt="Line" src={line10} /> </span>
          <span className="line2">
          <img className="line" alt="Line" src={line10} /> </span>
    </div>

      
    </>
  );
};