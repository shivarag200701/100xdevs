import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function DropDown() {
  const [value, setValue] = useState("This Month");
  return (
    <Menu
      as="div"
      className="relative inline-block border-1 border-[#f5f5f5] rounded-sm"
    >
      <MenuButton className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-gray-500 inset-ring-1 inset-ring-white/5 hover:bg-white/20">
        {value}
        <FaChevronDown className="text-gray-500" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#f4f4f4] outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-black data-focus:bg-white/5 data-focus:text-gray-500 data-focus:outline-hidden"
              onClick={() => {
                setValue("Account settings");
              }}
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-black data-focus:bg-white/5 data-focus:text-gray-500 data-focus:outline-hidden"
              onClick={() => {
                setValue("Support");
              }}
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-black data-focus:bg-white/5 data-focus:text-gray-500 data-focus:outline-hidden"
              onClick={() => {
                setValue("License");
              }}
            >
              License
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-black data-focus:bg-white/5 data-focus:text-gray-500 data-focus:outline-hidden"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}
