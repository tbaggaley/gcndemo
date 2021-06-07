import React from "react";
import "./App.css";

import VideoPage from "./VideoPage";
import { ScrollContextProvider } from "./ScrollContextProvider";
import LogoHeader from "./LogoHeader";
import Navigation from "./Navigation";

const App = () => {
  return (
    <ScrollContextProvider>
      <LogoHeader />
      <Navigation />
      <VideoPage />
    </ScrollContextProvider>
  );
};

export default App;
