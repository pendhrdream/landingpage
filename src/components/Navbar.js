import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";
import BookDemo from "./forms/BookDemo";
import Login from "./forms/Login";
import "../styles/main.css";

function Navbar() {
  const [ismenuopen, setIsmenuopen] = useState(false);

  const togglemnu = () => {
    setIsmenuopen(!ismenuopen);
  };

  const menuItems = [
    { label: "Solutions", id: "solutions" },
    { label: "Business", id: "business" },
    { label: "Resources", id: "resources" },
    { label: "Industries", id: "industries" },
    { label: "About", id: "about" },
  ];
  return (
    <nav
      className="w-full flex bg-white border-b text-purple-600 fixed top-0 bg-opacity-9"
      style={{ zIndex: 1000 }}
    >
      <div className="min-h-[130px] flex flex-row items-center justify-between mx-auto container">
        <img
          className="flex basis-[160px] flex-shrink-0 w-[160px] h-[35px]"
          src={Logo}
          alt="Logo"
        />
        <div className="flex justify-between items-center lg:pl-[5px] xl:pl-[30px] 2xl:pl-[70px] lg:gap-[5px] xl:gap-[30px] 2xl:gap-[50px]">
          {menuItems.map((item) => (
            <MenuItem title={item.label} id={item.id} />
          ))}
        </div>
        <div className="flex items-center justify-between lg:pl-[5px] xl:pl-[30px] 2xl:pl-[70px] gap-[20px]">
          <Login />
          <BookDemo />
        </div>
      </div>
    </nav>
  );
}

const MenuItem = ({ title, id }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className="flex gap-[8px] relative justify-between items-center"
      onClick={() => {
        setClicked(true);
        window.location.replace(`/${id}`);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onBlur={() => setClicked(false)}
    >
      <p
        className="text-[20.692px] font-normal leading-[27.934px]tracking-[0.233px] text-rubik"
        style={{ color: hovered || clicked ? "#4B1790" : "#0B1623" }}
      >
        {title}
      </p>
      {!clicked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
        >
          <path
            d="M6.20703 9.89648L12.4147 16.1041L18.6223 9.89648"
            style={{ stroke: hovered || clicked ? "#4B1790" : "#0B1623" }}
            stroke-width="2.06921"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
        >
          <path
            d="M18.6846 16.104L12.4769 9.89637L6.26931 16.104"
            style={{ stroke: hovered || clicked ? "#4B1790" : "#0B1623" }}
            stroke-width="2.06921"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default Navbar;
