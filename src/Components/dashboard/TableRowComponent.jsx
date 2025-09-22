// // Table Row Component
// import React from 'react'
// import { ChevronDown, ChevronUp, Download, Code, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

// import VehicleTypeBadge from './VehicleTypeBudge';
// const TableRowComponent = ({ vehicle, index }) => (
//   <tr className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 cursor-pointer`}>
//     <td className="p-4 border-r text-sm font-mono">{vehicle.vin}</td>
//     <td className="p-4 border-r text-sm">{vehicle.county}</td>
//     <td className="p-4 border-r text-sm">{vehicle.city}</td>
//     <td className="p-4 border-r text-sm">{vehicle.state}</td>
//     <td className="p-4 border-r text-sm">{vehicle.modelYear}</td>
//     <td className="p-4 border-r text-sm font-medium">{vehicle.make}</td>
//     <td className="p-4 border-r text-sm">{vehicle.model}</td>
//     <td className="p-4 border-r text-sm">
//       <VehicleTypeBadge vehicleType={vehicle.electricVehicleType} />
//     </td>
//     <td className="p-4 border-r text-sm">{vehicle.electricRange} miles</td>
//     <td className="p-4 text-sm">${vehicle.baseMSRP.toLocaleString()}</td>
//   </tr>
// );

// export default TableRowComponent;

// TableRowComponent.jsx
import React from "react";
import VehicleTypeBadge from "./VehicleTypeBudge";

const TableRowComponent = ({ vehicle, index }) => {
  if (!vehicle) return null; // skip rendering if undefined

  return (
    <tr
      className={`${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      } hover:bg-blue-50 cursor-pointer`}
    >
      <td className="px-2 sm:px-4 py-2 border-r text-xs sm:text-sm font-mono truncate max-w-[120px]">
        {vehicle.vin || "N/A"}
      </td>
      <td className="px-2 sm:px-4 py-2 border-r text-xs sm:text-sm truncate max-w-[100px]">
        {vehicle.county || "N/A"}
      </td>
      <td className="px-2 sm:px-4 py-2 border-r text-xs sm:text-sm truncate max-w-[100px]">
        {vehicle.city || "N/A"}
      </td>
      <td className="px-2 sm:px-4 py-2 border-r text-xs sm:text-sm truncate max-w-[80px]">
        {vehicle.state || "N/A"}
      </td>
      <td className="px-2 sm:px-4 py-2 border-r text-xs sm:text-sm truncate max-w-[80px]">
        {vehicle.modelYear || "N/A"}
      </td>
      <td className="px-2 sm:px-4 py-2 border-r text-xs sm:text-sm font-medium truncate max-w-[100px]">
        {vehicle.make || "N/A"}
      </td>
      <td className="px-2 sm:px-4 py-2 border-r text-xs sm:text-sm truncate max-w-[120px]">
        {vehicle.model || "N/A"}
      </td>
      <td className="px-2 sm:px-4 py-2 border-r text-xs sm:text-sm truncate max-w-[120px]">
        {vehicle.electricVehicleType ? (
          <VehicleTypeBadge vehicleType={vehicle.electricVehicleType} />
        ) : (
          "N/A"
        )}
      </td>
      <td className="px-2 sm:px-4 py-2 border-r text-xs sm:text-sm truncate max-w-[100px]">
        {vehicle.electricRange ? `${vehicle.electricRange} miles` : "N/A"}
      </td>
      <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm truncate max-w-[120px]">
        {vehicle.baseMSRP
          ? `$${vehicle.baseMSRP.toLocaleString()}`
          : "N/A"}
      </td>
    </tr>
  );
};

export default TableRowComponent;
