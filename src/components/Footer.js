import React from "react";
import "styles/footer.css";
import uniswap from "assets/img/uniswap.svg";

export default function Footer() {
  return (
    <div id="footer">
      <div className="maxWidthContainer">
        <div className="center">
          <h2>Get Your $FTN Now!</h2>
          <p>
            Inspired by Israel Adesanya we are going to Fuck The Noise! Recently
            we have seen an influx of people getting cancelled for speaking
            their truth or having controversy opinions.
          </p>
          <div className="flex">
            <div className="borderBtn">Twitter</div>
            <div className="borderBtn">Telegram</div>
            <div className="borderBtn">DexTools</div>
            <div className="btn">
              <img
                src={uniswap}
                alt="uniswap logo"
                style={{
                  height: "30px",
                  marginTop: "-7px",
                  marginRight: "10px",
                }}
              />
              Uniswap
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
