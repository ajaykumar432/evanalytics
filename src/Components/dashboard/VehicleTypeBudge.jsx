import React from "react";

const VehicleTypeBadge = ({ vehicleType }) => {
  const isBEV = vehicleType?.includes("BEV");

  return (
    <span
      className={`inline-block rounded-full cursor-pointer text-[10px] sm:text-xs px-2 py-1 sm:px-3 sm:py-1.5 font-medium ${
        isBEV ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
      } hover:opacity-80 transition`}
    >
      {isBEV ? "BEV" : "PHEV"}
    </span>
  );
};

export default VehicleTypeBadge;
