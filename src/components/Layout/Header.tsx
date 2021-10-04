import React from 'react';
import logo from "../../wind.png";


export function Header() {

  return (
    <div className="flex w-full space-around p-2 items-center">
      <img src={logo} className="App-logo" alt="logo"/>
      <span className="p-1 pl-3">
        AirLert
      </span>
    </div>
  );
}