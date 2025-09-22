// Data View Component
import React from 'react'
import { ChevronDown, ChevronUp, Download, Code, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import SearchFilterComponent from './SearchFilterComponent';
import SortableHeaderComponent from './SortableComponent';
import TableRowComponent from './TableRowComponent' 
import PaginationComponent from './PeginationComponent';
import TableStatisticsComponent from './TableRowComponent';

const DataViewComponent = ({ 
  processedData,
  paginatedData,
  searchTerm, 
  selectedFilter, 
  sortConfig,
  currentPage,
  totalPages,
  itemsPerPage,
  onSearchChange,
  onFilterChange,
  onSort,
  onPageChange,
  onItemsPerPageChange
}) => (
 <div className="bg-white rounded-lg shadow-sm">
  {/* Data Explorer Header */}
  <div className="border-b p-4 sm:p-6">
  {/* Top Section */}
  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-4">
    
    {/* File Info */}
    <div className="flex-1 min-w-0">
      <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 break-words">
        Electric_Vehicle_Population_Data.csv
      </h2>
      <p className="text-xs sm:text-sm text-gray-500">
        ({processedData.length} records total, showing {paginatedData.length} on this page)
      </p>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-wrap sm:flex-nowrap gap-2">
      <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-xs sm:text-sm hover:bg-gray-50 transition">
        <Download size={16} className="shrink-0" />
        <span className="hidden xs:inline">Download</span>
      </button>
      <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-xs sm:text-sm hover:bg-gray-50 transition">
        <Code size={16} className="shrink-0" />
        <span className="hidden xs:inline">Code</span>
      </button>
    </div>
  </div>

  {/* Search & Filter */}
  <SearchFilterComponent
    searchTerm={searchTerm}
    selectedFilter={selectedFilter}
    onSearchChange={onSearchChange}
    onFilterChange={onFilterChange}
  />
</div>


  {/* Data Table */}
<div className="bg-white rounded-xl shadow-lg overflow-hidden">
  <div className="overflow-x-auto hidden md:block">
    <table className="w-full min-w-[900px] text-xs sm:text-sm">
      <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
        <tr>
          <SortableHeaderComponent column="vin" sortConfig={sortConfig} onSort={onSort}>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">VIN (1-10)</span>
            </div>
          </SortableHeaderComponent>
          <SortableHeaderComponent column="county" sortConfig={sortConfig} onSort={onSort}>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">County</span>
            </div>
          </SortableHeaderComponent>
          <SortableHeaderComponent column="city" sortConfig={sortConfig} onSort={onSort}>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">City</span>
            </div>
          </SortableHeaderComponent>
          <SortableHeaderComponent column="state" sortConfig={sortConfig} onSort={onSort}>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">State</span>
            </div>
          </SortableHeaderComponent>
          <SortableHeaderComponent column="modelYear" sortConfig={sortConfig} onSort={onSort}>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">Model Year</span>
            </div>
          </SortableHeaderComponent>
          <SortableHeaderComponent column="make" sortConfig={sortConfig} onSort={onSort}>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">Make</span>
            </div>
          </SortableHeaderComponent>
          <SortableHeaderComponent column="model" sortConfig={sortConfig} onSort={onSort}>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">Model</span>
            </div>
          </SortableHeaderComponent>
          <SortableHeaderComponent column="electricVehicleType" sortConfig={sortConfig} onSort={onSort}>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">EV Type</span>
            </div>
          </SortableHeaderComponent>
          <SortableHeaderComponent column="electricRange" sortConfig={sortConfig} onSort={onSort}>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">Range</span>
            </div>
          </SortableHeaderComponent>
          <SortableHeaderComponent column="baseMSRP" sortConfig={sortConfig} onSort={onSort}>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">MSRP</span>
            </div>
          </SortableHeaderComponent>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {paginatedData.map((vehicle, index) => (
          <TableRowComponent 
            key={index} 
            vehicle={vehicle} 
            index={index}
            className="hover:bg-blue-50/50 transition-colors duration-150"
          />
        ))}
      </tbody>
    </table>
  </div>

  {/* Mobile Grid View */}
  <div className="md:hidden p-4">
    {paginatedData.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {paginatedData.map((vehicle, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
          >
            {/* Header Section */}
            <div className="border-b border-gray-100 pb-3 mb-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-gray-800">
                  {vehicle.make} {vehicle.model}
                </h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  {vehicle.modelYear}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1">VIN: {vehicle.vin}</p>
            </div>

            {/* Details Grid */}
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Location</span>
                  <span className="text-sm text-gray-800 font-medium">
                    {vehicle.city}, {vehicle.county}
                  </span>
                  <span className="text-xs text-gray-600">{vehicle.state}</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">EV Type</span>
                  <span className="text-sm text-gray-800 font-medium">
                    {vehicle.electricVehicleType}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-2 pt-2 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Range</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-green-700">
                      {vehicle.electricRange}
                    </span>
                    <span className="text-xs text-gray-500">miles</span>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">MSRP</span>
                  <span className="text-sm font-bold text-blue-700">
                    {vehicle.baseMSRP ? `$${vehicle.baseMSRP.toLocaleString()}` : 'N/A'}
                  </span>
                </div>
              </div>
            </div>

            {/* Accent Bar */}
            <div className="mt-3 pt-2 border-t border-gray-100">
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-green-500 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((vehicle.electricRange / 400) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1 text-center">Range Indicator</p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <Search size={40} className="text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No vehicles found</h3>
          <p className="text-gray-600 mb-4">
            We couldn't find any electric vehicles matching your criteria.
          </p>
          <p className="text-sm text-gray-500">
            Try adjusting your search or filter settings to see more results.
          </p>
        </div>
      </div>
    )}
  </div>
</div>


  {/* Pagination */}
  {processedData.length > 0 && (
    <div className="p-4">
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={processedData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
        onItemsPerPageChange={onItemsPerPageChange}
      />
    </div>
  )}

  {/* Table Stats */}
  <TableStatisticsComponent data={processedData} />
</div>
);

export default DataViewComponent;