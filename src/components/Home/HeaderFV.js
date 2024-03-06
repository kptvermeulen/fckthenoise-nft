import React from "react";
import "styles/Home/HeaderFV.css";
import logo from "assets/img/logo.png";

export default function HeaderFV() {
  return (
    <div id="headerFV" style={{ paddingTop: "80px" }}>
      <div className="maxWidthContainer">
        <div className="column11">
          <div className="VCenter">
            <h3>$FTN</h3>
            <h1 style={{ marginTop: "5px" }}>F*ck The Noise</h1>
            <p>
              Inspired by Israel Adesanya we are going to Fuck The Noise!
              Recently we have seen an influx of people getting cancelled for
              speaking their truth or having controversy opinions.
            </p>
            <div className="flex" style={{ marginTop: "75px" }}>
              <div className="btn darkBtn">Buy on Uniswap</div>
              <div className="btn noBtn darkBtn" style={{ marginLeft: "20px" }}>
                View on Dextools
              </div>
            </div>
          </div>
          <div className="center headerFVImage">
            <img src={logo} alt="coin" />
          </div>
        </div>
      </div>
    </div>
  );
}
