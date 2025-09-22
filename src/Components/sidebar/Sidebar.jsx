import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaFileInvoiceDollar, FaCog, FaChartBar, FaBolt, FaShuttleVan } from "react-icons/fa"; // added FaBolt

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: FaTachometerAlt },
  { name: "Billing & Payments", path: "/billing-payment", icon: FaFileInvoiceDollar },
  { name: "Reports", path: "/reports", icon: FaChartBar },
  { name: "Settings", path: "/settings", icon: FaCog },
];

const Sidebar = ({ onClose }) => {
  return (
    <aside className="h-full bg-white flex flex-col">
      {/* Replaced text with EV icon */}
      <div className="p-6 text-center font-bold text-xl border-b flex justify-center items-center">
        <FaShuttleVan className="text-blue-600" size={28} />
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-all ${
                isActive ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            <item.icon size={18} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

