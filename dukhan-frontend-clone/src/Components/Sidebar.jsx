import React, { useState } from "react";
import { GoHome } from "react-icons/go";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="sm:hidden fixed top-3 left-3 z-30 inline-flex items-center p-2
                   rounded-lg text-gray-600 bg-white/90 shadow hover:bg-gray-100
                   focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-label="Open sidebar"
        aria-expanded={open}
        aria-controls="app-sidebar"
      >
        <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h9v2H3v-2z"
          />
        </svg>
      </button>

      {/* Backdrop overlay (mobile only) */}
      <div
        className={`sm:hidden fixed inset-0 z-40 bg-black/40 transition-opacity
                    ${
                      open
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={`
        fixed top-0 left-0 z-40 w- h-screen bg-[#222b47] 
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0 sm:static sm:h-auto
      `}
      >
        <div className="p-4 text-white">
          <ul className="space-y-2">
            <li>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <GoHome className="size-6" />
                </div>
                <a href="#" className="block py-2">
                  Home
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <GoHome className="size-6" />
                </div>
                <a href="#" className="block py-2">
                  Orders
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <GoHome className="size-6" />
                </div>
                <a href="#" className="block py-2">
                  Products
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <GoHome className="size-6" />
                </div>
                <a href="#" className="block py-2">
                  Delivery
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <GoHome className="size-6" />
                </div>
                <a href="#" className="block py-2">
                  Dashboard
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <GoHome className="size-6" />
                </div>
                <a href="#" className="block py-2">
                  Marketing
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <GoHome className="size-6" />
                </div>
                <a href="#" className="block py-2">
                  Dashboard
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <GoHome className="size-6" />
                </div>
                <a href="#" className="block py-2">
                  Dashboard
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <GoHome className="size-6" />
                </div>
                <a href="#" className="block py-2">
                  Dashboard
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <GoHome className="size-6" />
                </div>
                <a href="#" className="block py-2">
                  Dashboard
                </a>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <GoHome className="size-6" />
                </div>
                <a href="#" className="block py-2">
                  Dashboard
                </a>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
