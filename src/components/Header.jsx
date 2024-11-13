import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BiSolidMicrophone } from "react-icons/bi";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { FaKeyboard } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import SideBar from "./SideBar";

const Header = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [open, setOpen] = useState(true);
  const [transition, setTransition] = useState(false);
  const [ navStyle, setNavStyle] = useState({})

  const openClose = () => {
    setTransition(true);
    setOpen((o) => !o);
  };

  useEffect(() => {
    if (transition) {
      if (open) {
        setNavStyle({
          transform: "translateX(0%)"
        });
      } else {
        setNavStyle({
          transform: "translateX(-100%)"
        });
      }
      const timeOut = setTimeout(() => setTransition(false), 300);
      return () => clearTimeout(timeOut);
    }
  }, [open, transition]);

  const showHandlerer = () => {
    setShowIcon(true);
  };

  const hideHandler = () => {
    setShowIcon(false);
  };

  return (
  <>
    <header className="z-50 flex items-center bg-black fixed top-0 left-0 right-0 h-16">
      <div onClick={openClose} className="ml-6 cursor-pointer">
        <RxHamburgerMenu color="white" size={25} />
      </div>
      <div className="ml-4 flex">
        <Link to="/">
        <img
          className="w-9"
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
          alt="logo"
        />
        </Link>
      </div>
      <Link to="/">
      <h1 className="text-white font-bold font-sans text-2xl ml-1">YouTube</h1>
      </Link>

      <div className="relative ml-[30rem]">
        <input
          onClick={showHandlerer}
          onBlur={hideHandler}
          className="focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500 transition duration-100 w-[33rem] h-9 rounded-l-full bg-black border-solid border-gray-600 border-y border-l pl-3 text-white"
          placeholder="Search"
          type="text"
        />
        <div className="absolute right-[0.5rem] top-1/2 transform -translate-y-1/2 flex items-center w-auto">
          <FaKeyboard color="white" size={20} />
          <IoMdClose
            style={{
              opacity: showIcon ? 1 : 0,
              cursor: showIcon ? 'pointer' : null,
              transition: "opacity 0.5s ease-in-out",
            }}
            color="gray"
            size={35}
          />
        </div>
      </div>

      <div className="h-9 w-14 bg-gray-800 border-gray-600 border flex items-center justify-center rounded-r-full">
        <CiSearch color="white" size={25} />
      </div>
      <div className="bg-gray-800 rounded-full ml-3 hover:bg-gray-700">
        <div className="p-2">
          <BiSolidMicrophone color="white" size={23} />
        </div>
      </div>

      <div className="absolute right-36 hover:bg-gray-800/100 rounded-full">
        <div className="p-2">
          < RiVideoAddLine color="white" size={23} />
        </div>
      </div>
      <div className="absolute right-24 hover:bg-gray-800/100 rounded-full">
        <div className="p-2">
          <FaRegBell color="white" size={22} />
        </div>
      </div>
      <div className="absolute right-10">
        <img
          className="w-9 rounded-full cursor-pointer"
          src="https://i.pinimg.com/280x280_RS/8f/60/ff/8f60ff4f569134d896010ebe836181a5.jpg"
          alt="profile picture"
        />
      </div>
    </header>
    <SideBar navStyle={navStyle} open={open}/>
  </>
  );
};

export default Header;
