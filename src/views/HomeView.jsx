import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import Intro from "../components/Intro";
import Port from "../components/Port";
import Site from "../components/Site";
import Skill from "../components/Skill";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Footer from "../components/Footer";

const HomeView = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default HomeView;
