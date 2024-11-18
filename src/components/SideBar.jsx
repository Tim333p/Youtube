import { NavLink } from "react-router-dom";
import sideBar from "../data/SideBar";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const SideBar = ({ navStyle, open }) => {
  const [oopen, setOopen] = useState(false);

  const handleOpen = () => {
    setOopen((o) => !o);
  };

  const reduceChar = (word, maxLength) => {
    return word.length > maxLength
      ? word.substring(0, maxLength) + "..."
      : word;
  };

  return (
    <>
      <div
        className="nav-bar fixed bg-black bottom-0 top-16 left-0 w-60 z-50"
        style={{
          ...navStyle,
          transition: "transform 0.3s ease, opacity 0.3s ease",
          transform: open ? "translateX(0%)" : "translateX(-100%)",
        }}
      >
        <nav className="nav-bar w-full h-full flex flex-col items-center overflow-y-auto ">
          <ul className="mr-5 mt-3 mb-3">
            {sideBar[0].names.map((items, index) => (
              <li
                key={index}
                className="text-white hover:bg-gray-800 hover:rounded-xl active:bg-gray-700 "
              >
                <NavLink
                  to={items.path}
                  className={({ isActive }) =>
                    `text-sm font-bold text-white hover:bg-gray-800 hover:rounded-xl  ${
                      isActive ? "bg-gray-800" : ""
                    }`
                  }
                >
                  <div className="flex items-center py-2 pl-2 pr-14">
                    <div className="mr-3">{<items.image size={26} />}</div>
                    {items.name}
                  </div>
                </NavLink>
              </li>
            ))}
            <div className="bg-gray-600 w-full h-[1px] mt-2"></div>
            <li className="text-white hover:bg-gray-800 hover:rounded-xl active:bg-gray-700 mt-2">
              <NavLink
                className="text-white flex items-center font-bold"
                to="mine"
              >
                <h1 className="text-base py-2 pl-2 ">Mine</h1>
                <div className="ml-2">
                  <IoIosArrowForward />
                </div>
              </NavLink>
            </li>
            {sideBar[1].names1.map((items, index) => (
              <li
                key={index}
                className="text-white hover:bg-gray-800 hover:rounded-xl active:bg-gray-700 "
              >
                <NavLink
                  to={items.path}
                  className={({ isActive }) =>
                    `text-sm font-bold text-white hover:bg-gray-800 hover:rounded-xl  ${
                      isActive ? "bg-gray-800" : ""
                    }`
                  }
                >
                  <div className="flex items-center py-2 pl-2 pr-14">
                    <div className="mr-3">{<items.image size={26} />}</div>
                    {items.name}
                  </div>
                </NavLink>
              </li>
            ))}

            <div className="bg-gray-600 w-full h-[1px] mt-2"></div>
            <h1 className="text-white text-base font-bold my-3 ml-2">
              Subscriptions
            </h1>
            {sideBar[2].channels.map((items, index) => (
              <li
                key={index}
                className="text-white hover:bg-gray-800 hover:rounded-xl active:bg-gray-700 "
              >
                <NavLink
                  to={items.path}
                  className={({ isActive }) =>
                    `text-sm font-bold text-white hover:bg-gray-800 hover:rounded-xl  ${
                      isActive ? "bg-gray-800" : ""
                    }`
                  }
                >
                  <div className="flex items-center py-2 pl-2 pr-14">
                    <div className="mr-3">
                      <img
                        className="w-7 h-7 rounded-full"
                        src={items.image}
                        alt=""
                      />
                    </div>
                    {items.name}
                  </div>
                </NavLink>
              </li>
            ))}

            {oopen &&
              sideBar[7].channels1.map((items, index) => (
                <li
                  key={index}
                  className={`text-white hover:bg-gray-800 hover:rounded-xl active:bg-gray-700`}
                >
                  <NavLink
                    to={items.path}
                    className={({ isActive }) =>
                      `text-sm font-bold text-white hover:bg-gray-800 hover:rounded-xl  ${
                        isActive ? "bg-gray-800" : ""
                      }`
                    }
                  >
                    <div className="flex items-center py-2 pl-2 pr-14">
                      <div className="mr-3">
                        <img
                          className="w-7 h-7 rounded-full"
                          src={items.image}
                          alt=""
                        />
                      </div>
                      {items.name}
                    </div>
                  </NavLink>
                </li>
              ))}

            <div className="hover:bg-gray-800 hover:rounded-xl active:bg-gray-700">
              <button
                onClick={handleOpen}
                className="text-white text-base font-bold py-3 pl-2 flex items-center"
              >
                {!oopen ? (
                  <IoIosArrowDown size={20} />
                ) : (
                  <IoIosArrowUp size={20} />
                )}{" "}
                <h1 className="ml-[17px]">Show more</h1>
              </button>
            </div>
            <div className="bg-gray-600 w-full h-[1px] mt-2"></div>
            <h1 className="text-white text-base font-bold my-3 ml-2">
              Reasearch
            </h1>

            {sideBar[3].names2.map((items, index) => (
              <li
                key={index}
                className="text-white hover:bg-gray-800 hover:rounded-xl active:bg-gray-700 "
              >
                <NavLink
                  to={items.path}
                  className={({ isActive }) =>
                    `text-sm font-bold text-white hover:bg-gray-800 hover:rounded-xl  ${
                      isActive ? "bg-gray-800" : ""
                    }`
                  }
                >
                  <div className="flex items-center py-2 pl-2 pr-14">
                    <div className="mr-3">{<items.image size={26} />}</div>
                    {items.name}
                  </div>
                </NavLink>
              </li>
            ))}
            <div className="bg-gray-600 w-full h-[1px] mt-2"></div>
            <h1 className="text-white text-base font-bold my-3 ml-2">
              More from YouTube
            </h1>

            {sideBar[4].names3.map((items, index) => (
              <li
                key={index}
                className="text-white hover:bg-gray-800 hover:rounded-xl active:bg-gray-700 "
              >
                <NavLink
                  to={items.path}
                  className={({ isActive }) =>
                    `text-sm font-bold text-white hover:bg-gray-800 hover:rounded-xl  ${
                      isActive ? "bg-gray-800" : ""
                    }`
                  }
                >
                  <div className="flex items-center py-2 pl-2 pr-14">
                    <div className="mr-3">{<items.image size={26} />}</div>
                    {reduceChar(items.name, 12)}
                  </div>
                </NavLink>
              </li>
            ))}
            <div className="bg-gray-600 w-full h-[1px] mt-2 mb-3"></div>

            {sideBar[5].names4.map((items, index) => (
              <li
                key={index}
                className="text-white hover:bg-gray-800 hover:rounded-xl active:bg-gray-700"
              >
                <NavLink
                  to={items.path}
                  className={({ isActive }) =>
                    `text-sm font-bold text-white hover:bg-gray-800 hover:rounded-xl  ${
                      isActive ? "bg-gray-800" : ""
                    }`
                  }
                >
                  <div className="flex items-center py-2 pl-2 pr-14">
                    <div className="mr-3">{<items.image size={26} />}</div>
                    {items.name}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
