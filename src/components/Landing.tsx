import React from 'react';
import logoGray from "../assets/logogrey.svg"
import logoWhite from "../assets/logowhite.svg"
import logoBlack from "../assets/logoBlack.png"
import { MenuIcon } from '@heroicons/react/solid'
import Blob from "../components/js/blob/Blob";
import {Link, BrowserRouter as Router} from "react-router-dom";

export function Landing() {

  return (
    <div className="flex w-screen h-screen bg-gradient-to-r from-asBlue via-asGreen to-asGray">
    {/*<div className="flex w-screen h-screen bg-white bg-opacity-70">*/}
      <Blob/>
      <div className="flex flex-col w-full">
        <img className=" ml-8 w-1/2 " src={logoWhite} alt="logo"/>
        <span>
          Clean air for all!
        </span>

          <a className="z-50" href="/map">

          <span className="p-5">
          Go to map
        </span>
          </a>


        {/*<Title open={true} lineHeight={120}>*/}
        {/*  <div className="">*/}
        {/*    <img className="h-60" src={logoWhite} alt="logo"/>*/}
        {/*  </div>*/}
        {/*</Title>*/}
        {/*<Title open={true} lineHeight={80} className="wide-title">*/}
        {/*  <div> Clean air for all! </div>*/}
        {/*</Title>*/}
      </div>

    </div>

  );
}