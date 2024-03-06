import React from "react";
import "styles/header.css";
import { useNavigate } from "react-router-dom";
import logo from "assets/img/logo.png";

import twitter from "assets/img/twitter.svg";
import telegram from "assets/img/telegram.svg";
import chart from "assets/img/chart.svg";
import uniswap from "assets/img/uniswap.svg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div id="header">
      <div className="maxWidthContainer">
        <div className="headerContainer">
          <div
            className="headerLogo"
            onClick={() => {
              navigate("/");
            }}
          >
            <img style={{ marginRight: "20px" }} src={logo} alt="logo Vermax" />
            <div className="removeOnSmallScreen">F*CK THE NOISE</div>
          </div>
          <div className="headerNav">
            <div
              className="headerNav removeOnSmallScreen"
              style={{ marginRight: "30px" }}
            >
              <div
                className="headerNavItem"
                onClick={() => {
                  document
                    .getElementById("tokenomics")
                    .scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                Tokenomics
              </div>
              <div
                className="headerNavItem"
                onClick={() => {
                  document
                    .getElementById("howToBuy")
                    .scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                How To Buy
              </div>
            </div>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <div className="headerNavItem">
                <img src={twitter} alt="twitter logo" />
              </div>
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <div className="headerNavItem">
                <img src={telegram} alt="telegram logo" />
              </div>
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <div className="headerNavItem">
                <img src={chart} alt="chart logo" />
              </div>
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <div className="headerNavItem">
                <img
                  src={uniswap}
                  alt="uniswap logo"
                  style={{ height: "30px", marginTop: "-7px" }}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
