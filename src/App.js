import React from "react";
import NavigationBar from "./components/NavigationBar";
import MyFooter from "./components/MyFooter";
import WelcomeHero from "./components/WelcomeHero";
import LatestRelease from "./components/LatestRelease";


const App = () => {
  return (
    <>
    <NavigationBar />
    <WelcomeHero />
    <LatestRelease />
    <MyFooter />
    </>
  );
}

export default App;

