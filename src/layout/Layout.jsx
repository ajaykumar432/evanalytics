// import React from 'react'
// import Sidebar from '../Components/sidebar/Sidebar'
// import { Outlet } from 'react-router-dom'
// import Footer from '../Components/footer/Footer'

// const Layout = () => {
//   return (
//     <div>
//         <div>
//             <Sidebar/>
//         </div>
//         <div><Outlet/></div>
//         <div><Footer/></div>
//     </div>
//   )
// }

// export default Layout


import React, { useState } from "react";
import Sidebar from "../Components/sidebar/Sidebar";
import Topbar from "../components/header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-screen h-screen bg-blue-200/20 flex overflow-hidden relative">
      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full w-64 sm:w-72 lg:w-[20%] bg-white shadow-xl border-r border-gray-100 z-40
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay (Mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full lg:w-[80%]">
        {/* Topbar */}
        <div className="h-[12%] sm:h-[10%]">
          <Topbar onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
        </div>

        {/* Page Content */}
        <div className="h-[88%] sm:h-[90%] overflow-y-auto overflow-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
