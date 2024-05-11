import React from "react";
import Intro from "./Components/Intro";
import Header from "./Components/Header";
import About from "./Components/About";
import Title from "./Components/Title";
import PopularArt from "./Components/PopularArt";
import ArtistTitle from "./Components/ArtistTitle";
import Artists from "./Components/Artists";
import ReviewTitle from "./Components/ReviewTitle";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-gray-950 min-w-full min-h-screen">
      <Intro />
      <Header />
      <About />
      <Title />
      <PopularArt />
      <ArtistTitle />
      <Artists />
      <ReviewTitle />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
