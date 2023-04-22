import React from "react";
import Main from "./pages/Main";
import Features from "./pages/Features";
import "./App.css";
import Header from "./components/Header";
import Banner from "./pages/Banner";
const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <Main />
    </>
  );
};

export default App;
