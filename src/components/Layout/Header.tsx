import React from 'react';
import logoGray from "../../assets/logogrey.svg"
import logoWhite from "../../assets/logowhite.svg"
import { MenuIcon } from '@heroicons/react/solid'


export function Header() {

  return (
    // <div className="flex w-full justify-between p-2 items-center bg-gradient-to-r from-blue-400 via-green-300 to-gray-100 bg-opacity-70">
    //   <div className="-mb-8 -mt-10">
    //     <img className="h-32" src={logoWhite} alt="logo"/>
    //   </div>
    //
    //   <MenuIcon className="h-7 pr-3 text-gray-700"/>
    // </div>

    <div className="flex w-full justify-between p-2 items-center absolute z-50">
      <div className="-mb-8 -mt-10">
        <img className="h-32" src={logoGray} alt="logo"/>
      </div>

      {/*<MenuIcon className="h-7 pr-3 text-gray-700"/>*/}
    </div>

    // <div className="flex w-full justify-between p-2 items-center ">
    //   <div className="-mb-8 -mt-10">
    //     <img className="h-32" src={logoGray} alt="logo"/>
    //   </div>
    //
    //   <MenuIcon className="h-7 pr-3 text-gray-700"/>
    // </div>
  );
}