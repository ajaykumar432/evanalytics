// import React from 'react'

// const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header

import React, { useState, useRef, useEffect } from "react";
import { Bell, Menu, UserCircle, LogOutIcon, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({ onToggleSidebar }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="h-full flex justify-between items-center px-6 py-4 bg-white shadow-sm border-b">
      {/* Sidebar Toggle (mobile) */}
      <button
        className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        onClick={onToggleSidebar}
      >
        <Menu className="text-gray-600" size={20} />
      </button>

      <div className="justify-end flex-1 flex">
      <div className="flex items-center space-x-4">
        <Bell className="text-gray-500" size={20} />

        {/* Profile */}
        <div className="relative" ref={wrapperRef}>
          <div
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-semibold">
              U
            </div>
            <ChevronDown
              className={`text-gray-400 transition-transform ${showDropdown ? "rotate-180" : ""}`}
              size={16}
            />
          </div>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border py-2 z-50">
              <div
                onClick={() => {
                  navigate("/settings");
                  setShowDropdown(false);
                }}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                <UserCircle className="mr-2 text-gray-400" size={16} /> My Profile
              </div>
              <div
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                <LogOutIcon className="mr-2 text-gray-400" size={16} /> Logout
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
