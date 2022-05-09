import React from "react";
import HeaderLogo from "../assets/headerLogo.svg";
import login from "../assets/login.svg";
import {Link} from "react-router-dom";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header class=" bg-white w-full">
      <nav class="md:flex md:justify-center relative m-auto  h-20 w-4/5 items-center">
        <div className="header-logo mr-10">
          <img src={HeaderLogo} alt="logo" />
        </div>
        <section className=" {!toggle ?">
          <div className="CROSS-ICON absolute cursor-pointer top-0 right-0  py-8">
            <button onClick={handleToggle} class="outline-none md:hidden ">
              {toggle ? (
                <svg
                  class=" w-8 h-6 gap-4 text-gray-500 hover:text-violent-500 "
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <span class="text-2xl text-bold text-gray-700">X</span>
              )}        
            </button>
          </div>
          {/* <button class="outline-none mobile-menu-button">
              <svg
                class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                name="!open"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button> */}
            {!toggle ? 
          (<nav class="mobile">
            <ul
              className={
                " border-b-20 w-12/12 text-black bg-white mx-5 text-xl my-10 lg-hidden right-0  min-h-[250px] "
              }
            >
              <li className=" my-8 text-lg hover:border-b-2 border-violet-400 hover:font-bold  ">
                 Home
              </li>
              <li className=" my-8 text-lg hover:border-b-2 border-violet-400 hover:font-bold ">
                 About Us
              </li>
              <li className=" my-8 text-lg hover:border-b-2 border-violet-400 hover:font-bold ">
                 Our Service
              </li>
              <li className=" my-8 text-lg hover:border-b-2 border-violet-400 hover:font-bold  focus:ring-red-300 ">
                 Post a House
              </li>
              <div>
                <div className="flex  w-full lg-hidden text-lg hover:border-b-2 border-gray-400 hover:font-bold   items-center">
                   Login/Register
                  <img src={login} alt="logo" />
                </div>
              </div>
            </ul>
          </nav>) :
          (<ul className="DESKTOP-MENU px-40 gap-10 hidden  lg:flex ">
            <li className=" text-2xl hover:border-b-2 border-violet-400 hover:text-button  ">
               Home
            </li>
            <li className=" text-2xl hover:border-b-2 border-violet-400 hover:text-button ">
               About Us
            </li>
            <li className=" text-2xl hover:border-b-2 border-violet-400 hover:text-button ">
               Our Service
            </li>
            <li className=" text-2xl hover:border-b-2 border-violet-400 hover:text-button  ">
              Post a House
            </li>
            <div className="flex justify-center text-button  ml-20 mr-10 lg-hidden text-3xl hover:border-b-2 border-violet-400 hover:font-bold   items-center">
               login/register
              <img class="" src={login} alt="logo" />
            </div>
          </ul>)}
        </section>
      </nav> 
    </header>
  );
}

export default Header;
