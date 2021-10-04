import React from 'react';
import './App.css';
import "tailwindcss/tailwind.css"
import {Header} from "./components/Layout/Header";
import {MapView} from "./components/MapView";
import {JMapView} from "./components/JMapView";

function App() {
  return (
    <div>
      <Header/>
      <JMapView/>
    </div>
  );
}

export default App;
