import React from "react";
import "styles/Home/howToBuy.css";

export default function HowToBuy() {
  return (
    <div id="howToBuy">
      <div className="maxWidthContainer">
        <div className="center">
          <h4>Instructions</h4>
          <h2>How To Buy?</h2>
          <p>
            With FuckTheNoise we want to support individuals and organizations
            who stand against the mainstream narrative that is often driven by
            the systematic woke agenda. $FTN standts for - Anti cancel culture -
            Anti censorship - Anti mainstream narrative - Anti woke agenda
          </p>
          <div className="column111" style={{ gap: "30px", marginTop: "50px" }}>
            <div className="htbContainer">
              <div className="stepContainer">1</div>
              <h3>Create</h3>
              <p>
                Create a digital currency wallet with Metamask. Keep your seed
                phrase in a secure location, and don't share it with anyone.
              </p>
              <a href="https://metamask.io/" target="_blank" rel="noreferrer">
                <div className="btn" style={{ marginTop: "35px" }}>
                  Download Metamask
                </div>
              </a>
            </div>

            <div className="htbContainer">
              <div className="stepContainer">2</div>
              <h3>Fund</h3>
              <p>
                Purchase ETH on Metamask or on another exchange and transfer it
                to your wallet, this can be used to purchase, swap, and sell
                tokens.
              </p>
              <div className="btn" style={{ marginTop: "35px" }}>
                View Dextools
              </div>
            </div>
            <div className="htbContainer">
              <div className="stepContainer">3</div>
              <h3>Swap</h3>
              <p>
                Access Uniswap through a browser or the browser in the Metamask
                app and connect your wallet. Swap your ETH for $FTN, be sure to
                leave some ETH for gas fees.
              </p>
              <div className="btn" style={{ marginTop: "35px" }}>
                Buy on Uniswap
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
