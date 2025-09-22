// Key Metrics Component
import React from 'react'
import MetricCard from './MetricsCard'
const KeyMetricsComponent = ({ analytics }) => (
  <div className="bg-white rounded-lg shadow-sm p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Metrics</h3>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <MetricCard
        value={analytics.totalVehicles || 0}
        label="Total Vehicles"
        bgColor="bg-blue-50"
        textColor="text-blue-600"
      />
      <MetricCard
        value={analytics.vehicleType?.find(v => v.name === 'BEV')?.value || 0}
        label="Battery Electric (BEV)"
        bgColor="bg-green-50"
        textColor="text-green-600"
      />
      <MetricCard
        value={analytics.vehicleType?.find(v => v.name === 'PHEV')?.value || 0}
        label="Plug-in Hybrid (PHEV)"
        bgColor="bg-yellow-50"
        textColor="text-yellow-600"
      />
      <MetricCard
        value={analytics.make?.find(m => m.name === 'TESLA')?.value || 0}
        label="Tesla Vehicles"
        bgColor="bg-purple-50"
        textColor="text-purple-600"
      />
    </div>
  </div>
);

export default KeyMetricsComponent;