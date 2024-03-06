import React from "react";
import "styles/Home/tokenomics.css";

export default function Tokenomics() {
  return (
    <div id="tokenomics">
      <div className="maxWidthContainer">
        <div className="center">
          <h4>F*ck The Noise</h4>
          <h2>Tokenomics</h2>
          <div className="tokenomicsGrid">
            <div className="tGRow">
              <div className="tGitem"></div>
              <div className="tGitem center" style={{ fontWeight: 600 }}>
                Buy
              </div>
              <div className="tGitem center" style={{ fontWeight: 600 }}>
                Sell
              </div>
            </div>
            <div className="tGRow">
              <div className="tGitem" style={{ fontWeight: 600 }}>
                Reflection
              </div>
              <div className="tGitem center">5%</div>
              <div className="tGitem center">5%</div>
            </div>
            <div className="tGRow">
              <div className="tGitem" style={{ fontWeight: 600 }}>
                Marketing
              </div>
              <div className="tGitem center">3%</div>
              <div className="tGitem center">3%</div>
            </div>
            <div className="tGRow" style={{ border: "unset" }}>
              <div className="tGitem" style={{ fontWeight: 600 }}>
                Development
              </div>
              <div className="tGitem center">2%</div>
              <div className="tGitem center">2%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
