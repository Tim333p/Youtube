import { NavLink } from "react-router-dom";
import sideBar from "../data/SideBar";

const SideBar2 = () => {
  return (
    <>
      <nav className="fixed bg-black top-[64px] bottom-0 left-0 w-20 z-40">
        <ul className="mt-3">
          {sideBar[6].names5.map((items, index) => (
            <li className="" key={index}>
              <NavLink
                to={items.path}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center rounded-xl w-16 h-20 hover:bg-gray-800 active:bg-gray-700`
                }
              >
                <div className="mb-1 ">
                  {<items.image size={26} color="white" />}
                </div>
                <h1 className="text-white text-[9px]">{items.name}</h1>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SideBar2;
