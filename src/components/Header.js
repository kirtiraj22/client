import React, { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[--bg-color] p-4 w-screen">
      <div className="max-w-[1240px] items-center flex justify-between mx-auto">
        <div className="text-[--text-color] font-bold text-5xl">
          Secure<span className="text-blue-700">Vault</span>
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-[--text-color] text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-[--text-color] text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex gap-10 text-[--text-color] text-[20px]">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Features</li>
          <li className="hover:text-blue-500 cursor-pointer">Upload</li>
        </ul>
        {/* Responsive  */}
        <ul
          className={`duration-700 md:hidden h-screen w-full top-[88px] fixed bg-[--bg-color]  text-[--text-color]
        ${toggle ? "left-[0]" : "left-[-100%]"}
        `}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Features</li>
          <li className="p-5">Upload</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
