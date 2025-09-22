
// Summary View Component

import React from 'react'
import KeyMetricsComponent from './KeyMatricsCard';
import VehicleTypeChartComponent from './VehicleChart';
import YearChartComponent from './YearChart';
import CountyChartComponent from './CountryChart';
import MakeChartComponent from './MakeChart';
const SummaryViewComponent = ({ analytics }) => (
  <div className="space-y-6">
    <KeyMetricsComponent analytics={analytics} />
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CountyChartComponent data={analytics.county} />
      <VehicleTypeChartComponent data={analytics.vehicleType} />
      <MakeChartComponent data={analytics.make} />
      <YearChartComponent data={analytics.year} />
    </div>
  </div>
);


export default SummaryViewComponent