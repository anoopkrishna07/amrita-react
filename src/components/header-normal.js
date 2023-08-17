import React from "react";
import "./header-normal.css";
import logo from "./img/logo.svg";
import search from "./img/search.svg";
import { Container } from "react-bootstrap";

export const HeaderNormal = () => {
  return (
    <>
    <Container>
    <div className="header-normal">
      <div className="div">
        <div className="logo">
          <img className="logo" alt="logo" src={logo} />
          </div>
        <p className="home-about-academics">
          Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Academics &amp;
          Programs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Research
        </p>
        <div className="search-wrapper">
          <div className="search">
            <div className="overlap-6">
              <img className="stroke-2" alt="Search" src={search} />
            </div>
          </div>
        </div>
        <p className="news-events-careers">
          NEWS&nbsp;&nbsp;&nbsp;&nbsp; EVENTS&nbsp;&nbsp;&nbsp;&nbsp; CAREERS&nbsp;&nbsp;&nbsp;&nbsp;CONTACT
        </p>
      </div>
      </div>
      </Container>
      </>
  );
};
