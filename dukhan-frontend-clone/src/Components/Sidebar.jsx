import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { LuNotepadText } from "react-icons/lu";
import { FaBox } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbSpeakerphone } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { IoMdColorPalette } from "react-icons/io";
import { RxLightningBolt } from "react-icons/rx";

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
        fixed top-0 left-0 z-40 w-[300px] h-screen bg-[#222b47] 
        transform transition-transform duration-300 ease-in-out 
        ${open ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0 sm:static sm:h-auto
      `}
      >
        <div className="p-4 text-white">
          <ul className="space-y-2 ">
            <li className="hover:bg-[#3e435b] p-1">
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <GoHome className="size-6" />
                </div>
                <a href="#" className="block py-1">
                  Home
                </a>
              </div>
            </li>
            <li className="hover:bg-[#3e435b] p-1">
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <LuNotepadText className="size-6" />
                </div>
                <a href="#" className="block py-1">
                  Orders
                </a>
              </div>
            </li>
            <li className="hover:bg-[#3e435b] p-1">
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <FaBox className="size-6" />
                </div>
                <a href="#" className="block py-1">
                  Products
                </a>
              </div>
            </li>
            <li className="hover:bg-[#3e435b] p-1">
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <CiDeliveryTruck className="size-6" />
                </div>
                <a href="#" className="block py-1">
                  Delivery
                </a>
              </div>
            </li>
            <li className="hover:bg-[#3e435b] p-1">
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <TbSpeakerphone className="size-6" />
                </div>
                <a href="#" className="block py-1">
                  Marketing
                </a>
              </div>
            </li>
            <li className="hover:bg-[#3e435b] p-1">
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <BsGraphUp className="size-6" />
                </div>
                <a href="#" className="block py-1">
                  Analytics
                </a>
              </div>
            </li>
            <li className="hover:bg-[#3e435b] p-1">
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <FaMoneyCheckAlt className="size-6" />
                </div>
                <a href="#" className="block py-1">
                  Payouts
                </a>
              </div>
            </li>
            <li className="hover:bg-[#3e435b] p-1">
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <CiDiscount1 className="size-6" />
                </div>
                <a href="#" className="block py-1">
                  Discounts
                </a>
              </div>
            </li>
            <li className="hover:bg-[#3e435b] p-1">
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <IoPeople className="size-6" />
                </div>
                <a href="#" className="block py-1">
                  Audience
                </a>
              </div>
            </li>
            <li className="hover:bg-[#3e435b] p-1">
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <IoMdColorPalette className="size-6" />
                </div>
                <a href="#" className="block py-1">
                  Apperance
                </a>
              </div>
            </li>
            <li className="hover:bg-[#3e435b] p-1">
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <RxLightningBolt className="size-6" />
                </div>
                <a href="#" className="block py-1">
                  Plugins
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
