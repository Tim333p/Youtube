import home from "../../data/Home";
import { NavLink } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { IoListSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { VscSave } from "react-icons/vsc";
import { GiSaveArrow } from "react-icons/gi";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineStop } from "react-icons/ai";
import { GoStop } from "react-icons/go";
import { MdOutlineFlag } from "react-icons/md";


const Home = () => {
  const [isMemuOpen, setIsMenuOpen] = useState(null);

  const toggleMenu = (index) => {
    setIsMenuOpen(isMemuOpen === index ? null : index);
  };

  return (
    <main className="scroll absolute overflow-y-scroll bg-black right-0 bottom-0 left-20 top-16 z-40 overflow-hidden">
      <ul className="absolute mt-2 right-0 left-40 h-12 felx flex-row z-40">
        {home[0].filter.map((items, index) => (
          <NavLink
            key={index}
            to="/"
            className={`text-white bg-gray-700/50 py-2 px-3 rounded-lg ml-3 duration-300 hover:bg-gray-700`}
          >
            {items.name}
          </NavLink>
        ))}
      </ul>
      <div className="absolute bottom-0 right-0 top-12 left-40 grid grid-cols-5 mt-6 ml-3 gap-y-12">
        {home[1].videos.map((items, index) => (
          <div key={index} className="cursor-pointer w-80 flex flex-col">
            <div className="relative">
              <img
                className="w-80 h-[180px] rounded-xl"
                src={items.image}
                alt="thumbnail"
              />
              <div className="text-white absolute right-3 top-[150px] text-sm bg-black rounded-md">
                <span className="px-1">{items.duration}</span>
              </div>
            </div>

            <div className="inline-block absolute mt-[180px]">
              <img
                className="w-11 rounded-full mt-3"
                src={items.profile}
                alt="profile"
              />
            </div>
            <div className="w-64 ml-14 mt-2 inline-block">
              <h1 className="text-white w-56">{items.title}</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sunt excepturi quod maiores! voluptas
                explicabo.
              </p>
            </div>
            <div className="absolute ml-[292px] -mt-[148px] p-1.5 rounded-full duration-150 active:bg-gray-800">
              <HiDotsVertical
                color="white"
                size={20}
                onClick={() => toggleMenu(index)}
              />

              {isMemuOpen === index && (
                <div className="absolute z-10 bg-gray-800 w-80 h-[22rem] mt-2 flex flex-col justify-center rounded-xl">
                  <button className="text-white text-base w-full hover:bg-gray-700 flex justify-start">
                    <span className="py-2 px-5 flex items-center">
                      <div className="mr-2">
                        <IoListSharp size={22} />
                      </div>
                      Add to order
                    </span>
                  </button>
                  <button className="text-white text-base w-full hover:bg-gray-700 flex justify-start">
                    <span className="py-2 px-5 flex items-center">
                      <div className="mr-2">
                        <FaRegClock size={22} />
                      </div>
                      Add to list watch later
                    </span>
                  </button>
                  <button className="text-white text-base w-full hover:bg-gray-700 flex justify-start">
                    <span className="py-2 px-5 flex items-center">
                      <div className="mr-2">
                        <VscSave size={22} />
                      </div>
                      Add to list
                    </span>
                  </button>
                  <button className="text-white text-base w-full hover:bg-gray-700 flex justify-start">
                    <span className="py-2 px-5 flex items-center">
                      <div className="mr-2">
                        <GiSaveArrow size={22} />
                      </div>
                      Download
                    </span>
                  </button>
                  <button className="text-white text-base w-full hover:bg-gray-700 flex justify-start">
                    <span className="py-2 px-5 flex items-center">
                      <div className="mr-2">
                        <RiShareForwardLine size={22} />
                      </div>
                      Share
                    </span>
                  </button>
                  <div className="w-full h-[2px] my-1 bg-gray-700"></div>
                  <button className="text-white text-base w-full hover:bg-gray-700 flex justify-start">
                    <span className="py-2 px-5 flex items-center">
                      <div className="mr-2">
                        <AiOutlineStop size={22} />
                      </div>
                      Dont have iterest
                    </span>
                  </button>
                  <button className="text-white text-base w-full hover:bg-gray-700 flex justify-start">
                    <span className="py-2 px-5 flex items-center">
                      <div className="mr-2">
                        <GoStop size={22} />
                      </div>
                      Dont recomend channel
                    </span>
                  </button>
                  <button className="text-white text-base w-full hover:bg-gray-700 flex justify-start">
                    <span className="py-2 px-5 flex items-center">
                      <div className="mr-2">
                        <MdOutlineFlag size={22} />
                      </div>
                      Report
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="w-full h-1"></div>
      </div>
    </main>
  );
};

export default Home;
