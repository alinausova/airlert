import React from 'react';
import './App.css';
import "tailwindcss/tailwind.css"
import {Header} from "./components/Layout/Header";
import {JMapView} from "./components/JMapView";
import {Chart} from "./components/Chart";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Landing} from "./components/Landing";

function App() {
  return (
          <div className="bg-white text-gray-700 h-screen">
            <Header/>
            <JMapView/>
            {/*<Chart/>*/}
          </div>
    // <Router>
    //   <Switch>
    //     <Route exact path="/map">
    //       <div className="bg-white text-gray-700 h-screen">
    //         <Header/>
    //         <JMapView/>
    //         <Chart/>
    //       </div>
    //     </Route>
    //
    //     <Route path="/">
    //       <Landing/>
    //     </Route>
    //   </Switch>
    // </Router>

  );
}

export default App;
