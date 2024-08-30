import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OerSection from './components/OerSection';
import ExploreVideos from "./components/ExploreVideos";
import Details from './components/Details';
import HowToUse from './components/HowToUse';
import Footer from './components/Footer';
import './assets/css/fullpage.css';


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <OerSection />
      <ExploreVideos />
      <Details />
      <HowToUse />
      <Footer />
    </div>
  );
}

export default App;
