import React from "react";
import Poster from "./poster";
import Cards from "./cards";
import Navbar from "./navbar";
import KidsStats from "./kidsStats";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Poster />
      <Cards />
      <KidsStats />
      <Footer />
    </div>
  );
};

export default Home;
