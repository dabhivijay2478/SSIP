import React from "react";

import { Link, Outlet, NavLink } from "react-router-dom";

export default function Dash() {
  return (
    <>
      <div className="flex">
        <section
          className=" text-gray-100 p-4 sticky flex-shrink-0"
          id="left-side-panel"
        >
          <div className="flex justify-center">
            <div className="sd-body">
              <ul>
                <li>
                  <NavLink
                    to="/Dash/Home"
                    className="sd-link bg-white  dark:hover:bg-green-400 dark:hover:text-blue-900 text-gray-700"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Dash/Addservice"
                    className="sd-link  bg-white dark:hover:bg-green-400 dark:hover:text-blue-900 text-gray-700"
                  >
                    Add Serivce
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Dash/Database"
                    className="sd-link  bg-white dark:hover:bg-green-400 dark:hover:text-blue-900 text-gray-700"
                  >
                    Database
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className=" text-white flex-grow p-4" id="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}
