// TableRowComponent.jsx
import React from "react";
import VehicleTypeBadge from "./VehicleTypeBadge"; // fixed typo Budge -> Badge

const TableRowComponent = ({ vehicle, index }) => {
  if (!vehicle) return null; // skip rendering if undefined

  return (
    <tr
      className={`${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      } hover:bg-blue-50 cursor-pointer text-xs sm:text-sm`}
    >
      <td className="p-2 sm:p-4 border-r font-mono truncate max-w-[120px]">
        {vehicle.vin || "N/A"}
      </td>
      <td className="p-2 sm:p-4 border-r">{vehicle.county || "N/A"}</td>
      <td className="p-2 sm:p-4 border-r">{vehicle.city || "N/A"}</td>
      <td className="p-2 sm:p-4 border-r">{vehicle.state || "N/A"}</td>
      <td className="p-2 sm:p-4 border-r">{vehicle.modelYear || "N/A"}</td>
      <td className="p-2 sm:p-4 border-r font-medium">
        {vehicle.make || "N/A"}
      </td>
      <td className="p-2 sm:p-4 border-r">{vehicle.model || "N/A"}</td>
      <td className="p-2 sm:p-4 border-r">
        {vehicle.electricVehicleType ? (
          <VehicleTypeBadge vehicleType={vehicle.electricVehicleType} />
        ) : (
          "N/A"
        )}
      </td>
      <td className="p-2 sm:p-4 border-r">
        {vehicle.electricRange ? `${vehicle.electricRange} mi` : "N/A"}
      </td>
      <td className="p-2 sm:p-4 font-semibold">
        {vehicle.baseMSRP ? `$${vehicle.baseMSRP.toLocaleString()}` : "N/A"}
      </td>
    </tr>
  );
};

export default TableRowComponent;


// TableStatisticsComponent.jsx
// import React from "react";

// const TableStatisticsComponent = ({ data }) => (
//   <div className="border-t bg-gray-50 p-4">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
//       <div className="bg-white rounded-lg p-3 shadow-sm">
//         <span className="font-medium block">Total Records</span>
//         <span className="text-gray-700">{data.length}</span>
//       </div>
//       <div className="bg-white rounded-lg p-3 shadow-sm">
//         <span className="font-medium block">BEV</span>
//         <span className="text-gray-700">
//           {data.filter((v) =>
//             v.electricVehicleType?.toUpperCase().includes("BEV")
//           ).length}
//         </span>
//       </div>
//       <div className="bg-white rounded-lg p-3 shadow-sm">
//         <span className="font-medium block">PHEV</span>
//         <span className="text-gray-700">
//           {data.filter((v) =>
//             v.electricVehicleType?.toUpperCase().includes("PHEV")
//           ).length}
//         </span>
//       </div>
//       <div className="bg-white rounded-lg p-3 shadow-sm">
//         <span className="font-medium block">CAFV Eligible</span>
//         <span className="text-gray-700">
//           {
//             data.filter((v) =>
//               v.cafvEligibility?.includes("Clean Alternative")
//             ).length
//           }
//         </span>
//       </div>
//     </div>
//   </div>
// );

// export default TableStatisticsComponent;
