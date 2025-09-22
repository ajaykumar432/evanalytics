// Sortable Header Component
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SortableHeaderComponent = ({
  column,
  children,
  sortConfig,
  onSort,
  className = "",
}) => (
 <th
  className={`text-left px-2 sm:px-4 py-2 sm:py-4 font-medium text-gray-700 border-r cursor-pointer hover:bg-gray-100 select-none ${className}`}
  onClick={() => onSort(column)}
>
  <div className="flex items-center gap-1 sm:gap-2 min-w-[60px]">
    <span className="truncate">{children}</span>
    <div className="flex flex-col shrink-0">
      <ChevronUp
        size={10} 
        className={`${
          sortConfig.key === column && sortConfig.direction === "asc"
            ? "text-blue-600"
            : "text-gray-400"
        }`}
      />
      <ChevronDown
        size={10} 
        className={`${
          sortConfig.key === column && sortConfig.direction === "desc"
            ? "text-blue-600"
            : "text-gray-400"
        } -mt-1`}
      />
    </div>
  </div>
</th>

);

export default SortableHeaderComponent;
