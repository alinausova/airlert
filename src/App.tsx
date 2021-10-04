import React from 'react';
import './App.css';
import "tailwindcss/tailwind.css"
import {Header} from "./components/Layout/Header";
import {MapView} from "./components/MapView";
import {JMapView} from "./components/JMapView";
import {Chart} from "./components/Chart";

function App() {
  return (
    <div className="bg-white text-gray-700 h-screen">
      <Header/>
      <JMapView/>
      <Chart/>
    </div>
  );
}

export default App;
