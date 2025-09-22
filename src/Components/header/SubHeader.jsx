import React from "react";
import { Download } from "lucide-react";

const HeaderComponent = ({ totalVehicles }) => (
  <header className="bg-white shadow-sm border-b">
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-0 h-auto sm:h-16 py-3 sm:py-0">
        {/* Title + Subtitle */}
        <div className="text-center sm:text-left">
          <h1 className="text-lg sm:text-2xl font-semibold text-gray-900">
            Electric Vehicle Population
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Analytics Dashboard for EV Registration Data
          </p>
        </div>

        {/* Records + Download */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <div className="text-xs sm:text-sm text-gray-500">
            {totalVehicles} records
          </div>
          <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg text-xs sm:text-sm hover:bg-gray-50 cursor-pointer">
            <Download size={14} className="sm:size-4" />
            <span className="hidden xs:inline">Download</span>
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default HeaderComponent;
