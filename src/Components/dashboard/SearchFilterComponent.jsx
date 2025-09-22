// Search and Filter Component
import React from "react";
import {
  Search,
  Filter,
} from "lucide-react";

const SearchFilterComponent = ({
  searchTerm,
  selectedFilter,
  onSearchChange,
  onFilterChange,
}) => (
  <div className="flex  sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
    
    {/* Search Box */}
    <div className="relative sm:w-auto ">
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={16}
      />
      <input
        type="text"
        placeholder="Search data..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Filter Dropdown */}
    <div className="relative w-full sm:w-auto">
      <select
        value={selectedFilter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="appearance-none w-full sm:w-auto bg-white border rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      >
        <option value="all">All Vehicles</option>
        <option value="bev">Battery Electric (BEV)</option>
        <option value="phev">Plug-in Hybrid (PHEV)</option>
        <option value="tesla">Tesla Only</option>
        <option value="eligible">CAFV Eligible</option>
      </select>
      <Filter
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
        size={16}
      />
    </div>
  </div>
);

export default SearchFilterComponent;
