import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Dash() {
  const nav = useNavigate();

  useEffect(() => {
    const isLoggedIn = Cookies.get("isLoggedIn");
    if (!isLoggedIn) {
      return nav("/");
    }
  }, []);
  // logout
  const handleLogout = async () => {
    Cookies.remove("isLoggedIn");
    window.alert("સફળતાપૂર્વક લોગ આઉટ");
  };
  return (
    <>
      <div>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">ડેશબોર્ડ</span>
          <i class="fa-solid fa-bars"></i>
        </button>

        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/Dash/Home"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <i className="fa-solid fa-house"></i>
                  <span className="ml-3">હોમપેજ</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/Dash/Addservice"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <i className="fa-sharp fa-solid fa-plus"></i>
                  <span className="ml-3">સેવા ઉમેરો</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Dash/Database"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <i className="fa-solid fa-database"></i>
                  <span className="flex-1 ml-3 whitespace-nowrap">ડેટાબેઝ</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <span className="flex-1 ml-3 whitespace-nowrap">લૉગ આઉટ</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className=" gap-4 mb-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
