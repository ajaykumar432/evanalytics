// // Pagination Component

// import React from 'react'
// import { ChevronDown, ChevronUp, Download, Code, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

// const PaginationComponent = ({ currentPage, totalPages, totalItems, itemsPerPage, onPageChange, onItemsPerPageChange }) => {
//   const getVisiblePages = () => {
//     const delta = 2;
//     const range = [];
//     const rangeWithDots = [];

//     for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
//       range.push(i);
//     }

//     if (currentPage - delta > 2) {
//       rangeWithDots.push(1, '...');
//     } else {
//       rangeWithDots.push(1);
//     }

//     rangeWithDots.push(...range);

//     if (currentPage + delta < totalPages - 1) {
//       rangeWithDots.push('...', totalPages);
//     } else {
//       rangeWithDots.push(totalPages);
//     }

//     return rangeWithDots;
//   };

//   if (totalPages <= 1) return null;

//   const visiblePages = getVisiblePages();
//   const startItem = (currentPage - 1) * itemsPerPage + 1;
//   const endItem = Math.min(currentPage * itemsPerPage, totalItems);

//   return (
//     <div className="flex items-center justify-between px-6 py-4 bg-white border-t">
//       <div className="flex items-center gap-4">
//         <span className="text-sm text-gray-700">
//           Showing {startItem} to {endItem} of {totalItems} entries
//         </span>
//         <div className="flex items-center gap-2">
//           <label className="text-sm text-gray-700">Show:</label>
//           <select
//             value={itemsPerPage}
//             onChange={(e) => onItemsPerPageChange(parseInt(e.target.value))}
//             className="border rounded px-2 py-1 text-sm"
//           >
//             <option value={5}>5</option>
//             <option value={10}>10</option>
//             <option value={20}>20</option>
//             <option value={50}>50</option>
//           </select>
//           <span className="text-sm text-gray-700">entries</span>
//         </div>
//       </div>
      
//       <div className="flex items-center gap-1">
//         <button
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <ChevronLeft size={16} />
//         </button>
        
//         {visiblePages.map((page, index) => (
//           <button
//             key={index}
//             onClick={() => typeof page === 'number' && onPageChange(page)}
//             disabled={page === '...'}
//             className={`px-3 py-2 rounded text-sm ${
//               page === currentPage
//                 ? 'bg-blue-500 text-white'
//                 : page === '...'
//                 ? 'cursor-default'
//                 : 'hover:bg-gray-100'
//             }`}
//           >
//             {page}
//           </button>
//         ))}
        
//         <button
//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <ChevronRight size={16} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaginationComponent;

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationComponent = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  const visiblePages = getVisiblePages();
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-3 bg-white border-t gap-3 sm:gap-0">
      
      {/* Left: Showing X to Y + items per page */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-700">
        <span>
          Showing {startItem} to {endItem} of {totalItems} entries
        </span>
        <div className="flex items-center gap-1">
          <label>Show:</label>
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(parseInt(e.target.value))}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span>entries</span>
        </div>
      </div>

      {/* Right: Page Buttons */}
      <div className="flex flex-wrap justify-center sm:justify-end items-center gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={16} />
        </button>

        {visiblePages.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={page === "..."}
            className={`px-3 py-2 rounded text-sm ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : page === "..."
                ? "cursor-default"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
