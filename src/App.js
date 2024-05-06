import React from 'react';
// import logo from './/image/BW Emblem.PNG'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'; 
import Header from './components/Header'; 
import Footer from './components/Footer'; 
// import PhotoCarousel from './components/Photocarosel';
import PhotoGallery from './components/Photogallery';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <PhotoCarousel /> */}
      <PhotoGallery />
      <main>
       
      </main>
      <Footer />
    </div>
  );
}

export default App;

