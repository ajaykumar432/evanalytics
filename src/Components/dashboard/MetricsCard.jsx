
// Metric Card Component
import React from 'react'
const MetricCard = ({ value, label, bgColor, textColor }) => (
  <div className={`${bgColor} p-4 rounded-lg cursor-pointer hover:shadow-md transition-shadow`}>
    <div className={`text-2xl font-bold ${textColor}`}>{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default MetricCard;