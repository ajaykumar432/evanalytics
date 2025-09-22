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
 <div className="overflow-x-auto overflow-scroll bg-white rounded-lg shadow-sm">
          <table className="w-full min-w-[900px] text-xs sm:text-sm">
      <thead className="bg-gray-50">
        <tr>
          <SortableHeaderComponent column="vin" sortConfig={sortConfig} onSort={onSort}>
            VIN (1-10)
          </SortableHeaderComponent>
          <SortableHeaderComponent column="county" sortConfig={sortConfig} onSort={onSort}>
            County
          </SortableHeaderComponent>
          <SortableHeaderComponent column="city" sortConfig={sortConfig} onSort={onSort}>
            City
          </SortableHeaderComponent>
          <SortableHeaderComponent column="state" sortConfig={sortConfig} onSort={onSort}>
            State
          </SortableHeaderComponent>
          <SortableHeaderComponent column="modelYear" sortConfig={sortConfig} onSort={onSort}>
            Model Year
          </SortableHeaderComponent>
          <SortableHeaderComponent column="make" sortConfig={sortConfig} onSort={onSort}>
            Make
          </SortableHeaderComponent>
          <SortableHeaderComponent column="model" sortConfig={sortConfig} onSort={onSort}>
            Model
          </SortableHeaderComponent>
          <SortableHeaderComponent column="electricVehicleType" sortConfig={sortConfig} onSort={onSort}>
            EV Type
          </SortableHeaderComponent>
          <SortableHeaderComponent column="electricRange" sortConfig={sortConfig} onSort={onSort}>
            Range
          </SortableHeaderComponent>
          <SortableHeaderComponent
            column="baseMSRP"
            sortConfig={sortConfig}
            onSort={onSort}
            className="border-r-0"
          >
            MSRP
          </SortableHeaderComponent>
        </tr>
      </thead>
      <tbody>
        {paginatedData.map((vehicle, index) => (
          <TableRowComponent key={index} vehicle={vehicle} index={index} />
        ))}
      </tbody>
    </table>

    {paginatedData.length === 0 && (
      <div className="text-center py-12 px-4">
        <div className="text-gray-500">
          <Search size={48} className="mx-auto mb-4 opacity-50" />
          <p className="text-base sm:text-lg font-medium">No results found</p>
          <p className="text-xs sm:text-sm">Try adjusting your search or filter criteria</p>
        </div>
      </div>
    )}
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