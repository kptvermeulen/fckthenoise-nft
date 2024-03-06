import React from "react";
import Header from "components/Header";
import HeaderFV from "components/Home/HeaderFV";
import Tokenomics from "components/Home/Tokenomics";
import HowToBuy from "components/Home/HowToBuy";
import Footer from "components/Footer";

export default function Home() {
  const whatsAppLink = "https://api.whatsapp.com/send/?phone=31651241443";
  return (
    <>
      <Header />
      <HeaderFV />
      <Tokenomics />
      <HowToBuy />
      <Footer />
    </>
  );
}
