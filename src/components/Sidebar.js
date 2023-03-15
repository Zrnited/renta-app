import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <aside
      className={
        sidebar
          ? "absolute top-0 bottom-0 h-full left-0 w-1/2 z-30 shadow-xl bg-customGray p-5 transition-all ease-in-out delay-100 sm:hidden"
          : "absolute top-0 bottom-0 w-1/2 z-30 bg-customGray -left-full p-5 transition-all ease-in-out delay-100 sm:hidden"
      }
    >
      <div>
        <h1 className="uppercase text-customBlue font-extrabold text-xl tracking-wider">
          renta
        </h1>
        <hr />
        <div className="flex flex-col gap-8 mt-4">
          <ul className="flex flex-col text-left gap-2">
            <li className="px-3 py-2 hover:bg-customBlue hover:text-customWhite transition ease-in-out delay-100 rounded-md">
              <Link onClick={()=>setSidebar(false)}>Insurance</Link>
            </li>
            <li className="px-3 py-2 hover:bg-customBlue hover:text-customWhite transition ease-in-out delay-100 rounded-md">
              <Link onClick={()=>setSidebar(false)}>Blog</Link>
            </li>
            <li className="px-3 py-2 hover:bg-customBlue hover:text-customWhite transition ease-in-out delay-100 rounded-md">
              <Link onClick={()=>setSidebar(false)}>About</Link>
            </li>
          </ul>

          <button className="bg-customBlue py-2 px-5 text-white text-base rounded-lg hover:opacity-80 transition delay-100 cursor-pointer">
            <Link>Get Started</Link>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
