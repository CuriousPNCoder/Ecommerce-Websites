import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Topnav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className=" bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-14 items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-12 w-auto"
                src="/assets/logo.png"
                alt="Your Company"
              />
              <img
                className="hidden lg:block h-12 w-auto"
                src="/assets/logo.png"
                alt="Your Company"
              />
            </div>

            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
              <NavLink
                to="/"
                className="text-black px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="bg-gray-900">
                Home
              </NavLink>
              <NavLink to="/cart">
                <button type="button">
                  <div className="relative py-2">
                    <div className="t-0 absolute left-3">
                      <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                        3
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="file: mt-4 h-6 w-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </button>
              </NavLink>
            </div>
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-black"
                activeClassName="bg-gray-900"
                onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/cart">
                <button type="button">
                  <div className="relative py-2">
                    <div className="t-0 absolute left-3">
                      <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                        3
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="file: mt-4 h-6 w-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Topnav;
