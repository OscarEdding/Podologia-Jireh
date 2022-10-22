import { React } from "react";

import Logo from '../assets/logo.png'


const Header = () => {

  return (
    <div className="flex w-full h-14 bg-slate-500">
      <div className="flex h-full items-center">
        <img src={Logo} className="w-12 h-12" />
      </div>
    </div>
  );
};

export default Header;
