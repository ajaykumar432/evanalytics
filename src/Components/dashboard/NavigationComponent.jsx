// // Navigation Component
// import React from 'react'
// const NavigationComponent = ({ currentView, onViewChange }) => (
//   <nav className="bg-white ">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex space-x-8">
//         <button
//           onClick={() => onViewChange('summary')}
//           className={`py-4 text-sm font-medium border-b-2 cursor-pointer ${
//             currentView === 'summary'
//               ? 'border-blue-500 text-blue-600'
//               : 'border-transparent text-gray-500 hover:text-gray-700'
//           }`}
//         >
//           Data Card
//         </button>
//         <button
//           onClick={() => onViewChange('data')}
//           className={`py-4 text-sm font-medium border-b-2 cursor-pointer ${
//             currentView === 'data'
//               ? 'border-blue-500 text-blue-600'
//               : 'border-transparent text-gray-500 hover:text-gray-700'
//           }`}
//         >
//           Data Explorer
//         </button>
//       </div>
//     </div>
//   </nav>
// );

// export default NavigationComponent


import React from "react";

const NavigationComponent = ({ currentView, onViewChange }) => (
  <nav className="bg-white border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex space-x-4 sm:space-x-8 overflow-x-auto">
        <button
          onClick={() => onViewChange("summary")}
          className={`flex-shrink-0 py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium border-b-2 cursor-pointer whitespace-nowrap ${
            currentView === "summary"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Data Card
        </button>
        <button
          onClick={() => onViewChange("data")}
          className={`flex-shrink-0 py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium border-b-2 cursor-pointer whitespace-nowrap ${
            currentView === "data"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Data Explorer
        </button>
      </div>
    </div>
  </nav>
);

export default NavigationComponent;
