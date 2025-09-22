// import React, { useState, useMemo } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
// import { ChevronDown, Download, Code, Search, Filter } from 'lucide-react';

// const Dashboard = () => {
//   // Sample data based on your CSV - in real implementation, this would be loaded from the actual CSV
//   const rawData = [
//     { vin: '5YJYGDEE1L', county: 'King', city: 'Seattle', state: 'WA', postalCode: '98122', modelYear: 2020, make: 'TESLA', model: 'MODEL Y', electricVehicleType: 'Battery Electric Vehicle (BEV)', cafvEligibility: 'Clean Alternative Fuel Vehicle Eligible', electricRange: 291, baseMSRP: 0 },
//     { vin: '7SAYGDEE9P', county: 'Snohomish', city: 'Bothell', state: 'WA', postalCode: '98021', modelYear: 2023, make: 'TESLA', model: 'MODEL Y', electricVehicleType: 'Battery Electric Vehicle (BEV)', cafvEligibility: 'Eligibility unknown as battery range has not been researched', electricRange: 0, baseMSRP: 0 },
//     { vin: '5YJSA1E4XK', county: 'King', city: 'Seattle', state: 'WA', postalCode: '98109', modelYear: 2019, make: 'TESLA', model: 'MODEL S', electricVehicleType: 'Battery Electric Vehicle (BEV)', cafvEligibility: 'Clean Alternative Fuel Vehicle Eligible', electricRange: 270, baseMSRP: 0 },
//     { vin: '5YJSA1E27G', county: 'King', city: 'Issaquah', state: 'WA', postalCode: '98027', modelYear: 2016, make: 'TESLA', model: 'MODEL S', electricVehicleType: 'Battery Electric Vehicle (BEV)', cafvEligibility: 'Clean Alternative Fuel Vehicle Eligible', electricRange: 210, baseMSRP: 0 },
//     { vin: '5YJYGDEE5M', county: 'Kitsap', city: 'Suquamish', state: 'WA', postalCode: '98392', modelYear: 2021, make: 'TESLA', model: 'MODEL Y', electricVehicleType: 'Battery Electric Vehicle (BEV)', cafvEligibility: 'Eligibility unknown as battery range has not been researched', electricRange: 0, baseMSRP: 0 },
//     { vin: '3FA6P0SU8H', county: 'Thurston', city: 'Yelm', state: 'WA', postalCode: '98597', modelYear: 2017, make: 'FORD', model: 'FUSION', electricVehicleType: 'Plug-in Hybrid Electric Vehicle (PHEV)', cafvEligibility: 'Not eligible due to low battery range', electricRange: 21, baseMSRP: 0 },
//     { vin: '1N4AZ0CP2D', county: 'Yakima', city: 'Yakima', state: 'WA', postalCode: '98903', modelYear: 2013, make: 'NISSAN', model: 'LEAF', electricVehicleType: 'Battery Electric Vehicle (BEV)', cafvEligibility: 'Clean Alternative Fuel Vehicle Eligible', electricRange: 75, baseMSRP: 0 },
//     { vin: 'KNAGV4LD9J', county: 'Snohomish', city: 'Bothell', state: 'WA', postalCode: '98012', modelYear: 2018, make: 'KIA', model: 'OPTIMA', electricVehicleType: 'Plug-in Hybrid Electric Vehicle (PHEV)', cafvEligibility: 'Not eligible due to low battery range', electricRange: 29, baseMSRP: 0 },
//     { vin: '1N4AZ0CP8F', county: 'Kitsap', city: 'Port Orchard', state: 'WA', postalCode: '98366', modelYear: 2015, make: 'NISSAN', model: 'LEAF', electricVehicleType: 'Battery Electric Vehicle (BEV)', cafvEligibility: 'Clean Alternative Fuel Vehicle Eligible', electricRange: 84, baseMSRP: 0 },
//     { vin: '5UXTA6C03N', county: 'King', city: 'Auburn', state: 'WA', postalCode: '98001', modelYear: 2022, make: 'BMW', model: 'X5', electricVehicleType: 'Plug-in Hybrid Electric Vehicle (PHEV)', cafvEligibility: 'Clean Alternative Fuel Vehicle Eligible', electricRange: 30, baseMSRP: 0 },
//     // Add more sample data to demonstrate functionality
//     { vin: '5YJ3E1EB4L', county: 'King', city: 'Seattle', state: 'WA', postalCode: '98126', modelYear: 2020, make: 'TESLA', model: 'MODEL 3', electricVehicleType: 'Battery Electric Vehicle (BEV)', cafvEligibility: 'Clean Alternative Fuel Vehicle Eligible', electricRange: 322, baseMSRP: 0 },
//     { vin: '5YJ3E1EA5K', county: 'Yakima', city: 'Yakima', state: 'WA', postalCode: '98903', modelYear: 2019, make: 'TESLA', model: 'MODEL 3', electricVehicleType: 'Battery Electric Vehicle (BEV)', cafvEligibility: 'Clean Alternative Fuel Vehicle Eligible', electricRange: 220, baseMSRP: 0 },
//     { vin: '1N4BZ0CP4H', county: 'Thurston', city: 'Olympia', state: 'WA', postalCode: '98506', modelYear: 2017, make: 'NISSAN', model: 'LEAF', electricVehicleType: 'Battery Electric Vehicle (BEV)', cafvEligibility: 'Clean Alternative Fuel Vehicle Eligible', electricRange: 107, baseMSRP: 0 },
//     { vin: 'WBY1Z4C51E', county: 'King', city: 'Renton', state: 'WA', postalCode: '98059', modelYear: 2014, make: 'BMW', model: 'I3', electricVehicleType: 'Plug-in Hybrid Electric Vehicle (PHEV)', cafvEligibility: 'Clean Alternative Fuel Vehicle Eligible', electricRange: 72, baseMSRP: 0 },
//     { vin: '1FADP5CUXD', county: 'Yakima', city: 'Yakima', state: 'WA', postalCode: '98902', modelYear: 2013, make: 'FORD', model: 'C-MAX', electricVehicleType: 'Plug-in Hybrid Electric Vehicle (PHEV)', cafvEligibility: 'Not eligible due to low battery range', electricRange: 19, baseMSRP: 0 },
    
//   ];

//   const [currentView, setCurrentView] = useState('summary');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedFilter, setSelectedFilter] = useState('all');

//   // Calculate analytics
//   const analytics = useMemo(() => {
//     // County distribution
//     const countyData = rawData.reduce((acc, item) => {
//       acc[item.county] = (acc[item.county] || 0) + 1;
//       return acc;
//     }, {});

//     // Make distribution
//     const makeData = rawData.reduce((acc, item) => {
//       acc[item.make] = (acc[item.make] || 0) + 1;
//       return acc;
//     }, {});

//     // Model distribution
//     const modelData = rawData.reduce((acc, item) => {
//       acc[item.model] = (acc[item.model] || 0) + 1;
//       return acc;
//     }, {});

//     // Electric Vehicle Type distribution
//     const vehicleTypeData = rawData.reduce((acc, item) => {
//       const type = item.electricVehicleType.includes('BEV') ? 'BEV' : 'PHEV';
//       acc[type] = (acc[type] || 0) + 1;
//       return acc;
//     }, {});

//     // Model Year distribution
//     const yearData = rawData.reduce((acc, item) => {
//       acc[item.modelYear] = (acc[item.modelYear] || 0) + 1;
//       return acc;
//     }, {});

//     // CAFV Eligibility distribution
//     const cafvData = rawData.reduce((acc, item) => {
//       if (item.cafvEligibility.includes('Clean Alternative')) {
//         acc['Clean Alternative Fuel Vehicle Eligible'] = (acc['Clean Alternative Fuel Vehicle Eligible'] || 0) + 1;
//       } else if (item.cafvEligibility.includes('Not eligible')) {
//         acc['Not eligible due to low battery range'] = (acc['Not eligible due to low battery range'] || 0) + 1;
//       } else {
//         acc['Eligibility unknown'] = (acc['Eligibility unknown'] || 0) + 1;
//       }
//       return acc;
//     }, {});

//     return {
//       county: Object.entries(countyData).map(([name, value]) => ({ name, value, percentage: ((value / rawData.length) * 100).toFixed(0) })),
//       make: Object.entries(makeData).map(([name, value]) => ({ name, value, percentage: ((value / rawData.length) * 100).toFixed(0) })),
//       model: Object.entries(modelData).map(([name, value]) => ({ name, value, percentage: ((value / rawData.length) * 100).toFixed(0) })),
//       vehicleType: Object.entries(vehicleTypeData).map(([name, value]) => ({ name, value, percentage: ((value / rawData.length) * 100).toFixed(0) })),
//       year: Object.entries(yearData).map(([name, value]) => ({ name: parseInt(name), value, percentage: ((value / rawData.length) * 100).toFixed(0) })).sort((a, b) => a.name - b.name),
//       cafv: Object.entries(cafvData).map(([name, value]) => ({ name, value, percentage: ((value / rawData.length) * 100).toFixed(0) })),
//       totalVehicles: rawData.length
//     };
//   }, [rawData]);

//   // Filter data for table view
//   const filteredData = useMemo(() => {
//     return rawData.filter(item => {
//       const matchesSearch = searchTerm === '' || 
//         Object.values(item).some(val => 
//           val.toString().toLowerCase().includes(searchTerm.toLowerCase())
//         );
      
//       const matchesFilter = selectedFilter === 'all' || 
//         (selectedFilter === 'bev' && item.electricVehicleType.includes('BEV')) ||
//         (selectedFilter === 'phev' && item.electricVehicleType.includes('PHEV')) ||
//         (selectedFilter === 'tesla' && item.make === 'TESLA') ||
//         (selectedFilter === 'eligible' && item.cafvEligibility.includes('Clean Alternative'));
      
//       return matchesSearch && matchesFilter;
//     });
//   }, [rawData, searchTerm, selectedFilter]);

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

//   const renderSummaryView = () => (
//     <div className="space-y-6">
//       {/* Key Metrics */}
//       <div className="bg-white rounded-lg shadow-sm p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Metrics</h3>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="bg-blue-50 p-4 rounded-lg">
//             <div className="text-2xl font-bold text-blue-600">{analytics.totalVehicles}</div>
//             <div className="text-sm text-gray-600">Total Vehicles</div>
//           </div>
//           <div className="bg-green-50 p-4 rounded-lg">
//             <div className="text-2xl font-bold text-green-600">{analytics.vehicleType.find(v => v.name === 'BEV')?.value || 0}</div>
//             <div className="text-sm text-gray-600">Battery Electric (BEV)</div>
//           </div>
//           <div className="bg-yellow-50 p-4 rounded-lg">
//             <div className="text-2xl font-bold text-yellow-600">{analytics.vehicleType.find(v => v.name === 'PHEV')?.value || 0}</div>
//             <div className="text-sm text-gray-600">Plug-in Hybrid (PHEV)</div>
//           </div>
//           <div className="bg-purple-50 p-4 rounded-lg">
//             <div className="text-2xl font-bold text-purple-600">{analytics.make.find(m => m.name === 'TESLA')?.value || 0}</div>
//             <div className="text-sm text-gray-600">Tesla Vehicles</div>
//           </div>
//         </div>
//       </div>

//       {/* Charts Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* County Distribution */}
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribution by County</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={analytics.county.slice(0, 6)}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="value" fill="#0088FE" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Vehicle Type Distribution */}
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Vehicle Type Distribution</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={analytics.vehicleType}
//                 cx="50%"
//                 cy="50%"
//                 labelLine={false}
//                 label={({ name, percentage }) => `${name}: ${percentage}%`}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 dataKey="value"
//               >
//                 {analytics.vehicleType.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Make Distribution */}
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Makes</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={analytics.make.slice(0, 5)} layout="horizontal">
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis type="number" />
//               <YAxis dataKey="name" type="category" width={80} />
//               <Tooltip />
//               <Bar dataKey="value" fill="#00C49F" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Year Distribution */}
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Model Year Distribution</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={analytics.year}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="value" stroke="#FFBB28" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );

//   const renderDataView = () => (
//     <div className="bg-white rounded-lg shadow-sm">
//       {/* Data Explorer Header */}
//       <div className="border-b p-6">
//         <div className="flex justify-between items-start mb-4">
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">Electric_Vehicle_Population_Data.csv</h2>
//             <p className="text-sm text-gray-500">(Sample Data - {filteredData.length} records)</p>
//           </div>
//           <div className="flex gap-2">
//             <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50">
//               <Download size={16} />
//               Download
//             </button>
//             <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50">
//               <Code size={16} />
//               Code
//             </button>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex gap-4 items-center">
//           <div className="relative flex-1 max-w-md">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//             <input
//               type="text"
//               placeholder="Search data..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="relative">
//             <select
//               value={selectedFilter}
//               onChange={(e) => setSelectedFilter(e.target.value)}
//               className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="all">All Vehicles</option>
//               <option value="bev">Battery Electric (BEV)</option>
//               <option value="phev">Plug-in Hybrid (PHEV)</option>
//               <option value="tesla">Tesla Only</option>
//               <option value="eligible">CAFV Eligible</option>
//             </select>
//             <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//           </div>
//         </div>
//       </div>

//       {/* Data Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="text-left p-4 font-medium text-gray-700 border-r">VIN (1-10)</th>
//               <th className="text-left p-4 font-medium text-gray-700 border-r">County</th>
//               <th className="text-left p-4 font-medium text-gray-700 border-r">City</th>
//               <th className="text-left p-4 font-medium text-gray-700 border-r">State</th>
//               <th className="text-left p-4 font-medium text-gray-700 border-r">Model Year</th>
//               <th className="text-left p-4 font-medium text-gray-700 border-r">Make</th>
//               <th className="text-left p-4 font-medium text-gray-700 border-r">Model</th>
//               <th className="text-left p-4 font-medium text-gray-700 border-r">Electric Vehicle Type</th>
//               <th className="text-left p-4 font-medium text-gray-700">CAFV Eligibility</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((vehicle, index) => (
//               <tr key={vehicle.vin} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                 <td className="p-4 border-r text-sm font-mono">{vehicle.vin}</td>
//                 <td className="p-4 border-r text-sm">{vehicle.county}</td>
//                 <td className="p-4 border-r text-sm">{vehicle.city}</td>
//                 <td className="p-4 border-r text-sm">{vehicle.state}</td>
//                 <td className="p-4 border-r text-sm">{vehicle.modelYear}</td>
//                 <td className="p-4 border-r text-sm font-medium">{vehicle.make}</td>
//                 <td className="p-4 border-r text-sm">{vehicle.model}</td>
//                 <td className="p-4 border-r text-sm">
//                   <span className={`px-2 py-1 rounded-full text-xs ${
//                     vehicle.electricVehicleType.includes('BEV') 
//                       ? 'bg-green-100 text-green-800' 
//                       : 'bg-blue-100 text-blue-800'
//                   }`}>
//                     {vehicle.electricVehicleType.includes('BEV') ? 'BEV' : 'PHEV'}
//                   </span>
//                 </td>
//                 <td className="p-4 text-sm">
//                   <span className={`px-2 py-1 rounded-full text-xs ${
//                     vehicle.cafvEligibility.includes('Clean Alternative')
//                       ? 'bg-green-100 text-green-800'
//                       : vehicle.cafvEligibility.includes('Not eligible')
//                       ? 'bg-red-100 text-red-800'
//                       : 'bg-yellow-100 text-yellow-800'
//                   }`}>
//                     {vehicle.cafvEligibility.includes('Clean Alternative')
//                       ? 'Eligible'
//                       : vehicle.cafvEligibility.includes('Not eligible')
//                       ? 'Not Eligible'
//                       : 'Unknown'
//                     }
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Summary Statistics */}
//       <div className="border-t bg-gray-50 p-4">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//           <div>
//             <span className="font-medium">Total Records:</span> {filteredData.length}
//           </div>
//           <div>
//             <span className="font-medium">BEV:</span> {filteredData.filter(v => v.electricVehicleType.includes('BEV')).length}
//           </div>
//           <div>
//             <span className="font-medium">PHEV:</span> {filteredData.filter(v => v.electricVehicleType.includes('PHEV')).length}
//           </div>
//           <div>
//             <span className="font-medium">CAFV Eligible:</span> {filteredData.filter(v => v.cafvEligibility.includes('Clean Alternative')).length}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div>
//               <h1 className="text-2xl font-semibold text-gray-900">Electric Vehicle Population</h1>
//               <p className="text-sm text-gray-500 mt-1">Analytics Dashboard for EV Registration Data</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="text-sm text-gray-500">80 records per page</div>
//               <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50">
//                 <Download size={16} />
//                 Download
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Navigation */}
//       <nav className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex space-x-8">
//             <button
//               onClick={() => setCurrentView('summary')}
//               className={`py-4 text-sm font-medium border-b-2 ${
//                 currentView === 'summary'
//                   ? 'border-blue-500 text-blue-600'
//                   : 'border-transparent text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               Data Card
//             </button>
//             <button
//               onClick={() => setCurrentView('data')}
//               className={`py-4 text-sm font-medium border-b-2 ${
//                 currentView === 'data'
//                   ? 'border-blue-500 text-blue-600'
//                   : 'border-transparent text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               Data Explorer
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {currentView === 'summary' ? renderSummaryView() : renderDataView()}
//       </main>

//       {/* Footer */}
//       <footer className="bg-white border-t mt-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="text-center text-sm text-gray-500">
//             <p>Electric Vehicle Population Dashboard - Built for Analytics Assessment</p>
//             <p className="mt-1">Data source: Electric Vehicle Registration Dataset</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { ChevronDown, ChevronUp, Download, Code, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

// // ============= REDUX STORE =============
// const createStore = (reducer, initialState) => {
//   let state = initialState;
//   let listeners = [];

//   const getState = () => state;
//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   };
//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter(l => l !== listener);
//     };
//   };

//   return { getState, dispatch, subscribe };
// };


import createStore from '../redux/store/combinedRuducer';
import sampleData from '../api/api'
import HeaderComponent from '../Components/header/SubHeader';
import NavigationComponent from '../Components/dashboard/NavigationComponent';
import DataViewComponent from '../Components/dashboard/DataViewComponent';
import KeyMetricsComponent from '../Components/dashboard/KeyMatricsCard';
import YearChartComponent from '../Components/dashboard/YearChart';
import VehicleTypeChartComponent from '../Components/dashboard/VehicleChart';
import CountyChartComponent from '../Components/dashboard/CountryChart';
import MakeChartComponent from '../Components/dashboard/MakeChart';
import SearchFilterComponent from '../Components/dashboard/SearchFilterComponent';
import VehicleTypeBadge from '../Components/dashboard/VehicleTypeBudge';
import SortableHeaderComponent from '../Components/dashboard/SortableComponent';
import PaginationComponent from '../Components/dashboard/PeginationComponent';
import SummaryViewComponent from '../Components/dashboard/SummaryViewComponent';
import FooterComponent from '../Components/footer/Footer';

// ============= STATE & ACTIONS =============
const initialState = {
  vehicles: [],
  currentView: 'summary',
  searchTerm: '',
  selectedFilter: 'all',
  sortConfig: { key: null, direction: 'asc' },
  currentPage: 1,
  itemsPerPage: 10
};

const ActionTypes = {
  SET_VEHICLES: 'SET_VEHICLES',
  SET_CURRENT_VIEW: 'SET_CURRENT_VIEW',
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  SET_SELECTED_FILTER: 'SET_SELECTED_FILTER',
  SET_SORT_CONFIG: 'SET_SORT_CONFIG',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_ITEMS_PER_PAGE: 'SET_ITEMS_PER_PAGE'
};

const actions = {
  setVehicles: (vehicles) => ({ type: ActionTypes.SET_VEHICLES, payload: vehicles }),
  setCurrentView: (view) => ({ type: ActionTypes.SET_CURRENT_VIEW, payload: view }),
  setSearchTerm: (term) => ({ type: ActionTypes.SET_SEARCH_TERM, payload: term }),
  setSelectedFilter: (filter) => ({ type: ActionTypes.SET_SELECTED_FILTER, payload: filter }),
  setSortConfig: (config) => ({ type: ActionTypes.SET_SORT_CONFIG, payload: config }),
  setCurrentPage: (page) => ({ type: ActionTypes.SET_CURRENT_PAGE, payload: page }),
  setItemsPerPage: (items) => ({ type: ActionTypes.SET_ITEMS_PER_PAGE, payload: items })
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_VEHICLES:
      return { ...state, vehicles: action.payload };
    case ActionTypes.SET_CURRENT_VIEW:
      return { ...state, currentView: action.payload };
    case ActionTypes.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload, currentPage: 1 };
    case ActionTypes.SET_SELECTED_FILTER:
      return { ...state, selectedFilter: action.payload, currentPage: 1 };
    case ActionTypes.SET_SORT_CONFIG:
      return { ...state, sortConfig: action.payload };
    case ActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case ActionTypes.SET_ITEMS_PER_PAGE:
      return { ...state, itemsPerPage: action.payload, currentPage: 1 };
    default:
      return state;
  }
};

// ============= STORE SETUP =============
const store = createStore(reducer, initialState);

const useStore = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return unsubscribe;
  }, []);

  return [state, store.dispatch];
};



// ============= MAIN DASHBOARD COMPONENT =============
const Dashboard = () => {
  const [state, dispatch] = useStore();
  const { vehicles, currentView, searchTerm, selectedFilter, sortConfig, currentPage, itemsPerPage } = state;

  // Initialize data
  useEffect(() => {
    dispatch(actions.setVehicles(sampleData));
  }, [dispatch]);

  // Event handlers
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    dispatch(actions.setSortConfig({ key, direction }));
  };

  const handleViewChange = (view) => {
    dispatch(actions.setCurrentView(view));
  };

  const handleSearchChange = (term) => {
    dispatch(actions.setSearchTerm(term));
  };

  const handleFilterChange = (filter) => {
    dispatch(actions.setSelectedFilter(filter));
  };

  const handlePageChange = (page) => {
    dispatch(actions.setCurrentPage(page));
  };

  const handleItemsPerPageChange = (items) => {
    dispatch(actions.setItemsPerPage(items));
  };

  // Process data with filters and sorting
  const processedData = React.useMemo(() => {
    let filtered = vehicles.filter(item => {
      const matchesSearch = searchTerm === '' || 
        Object.values(item).some(val => 
          val.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesFilter = selectedFilter === 'all' || 
        (selectedFilter === 'bev' && item.electricVehicleType.includes('BEV')) ||
        (selectedFilter === 'phev' && item.electricVehicleType.includes('PHEV')) ||
        (selectedFilter === 'tesla' && item.make === 'TESLA') ||
        (selectedFilter === 'eligible' && item.cafvEligibility.includes('Clean Alternative'));
      
      return matchesSearch && matchesFilter;
    });

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        
        if (aVal === null || aVal === undefined) return 1;
        if (bVal === null || bVal === undefined) return -1;
        
        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
        }
        
        const aStr = aVal.toString().toLowerCase();
        const bStr = bVal.toString().toLowerCase();
        
        if (sortConfig.direction === 'asc') {
          return aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
        } else {
          return aStr > bStr ? -1 : aStr < bStr ? 1 : 0;
        }
      });
    }

    return filtered;
  }, [vehicles, searchTerm, selectedFilter, sortConfig]);

  // Calculate pagination
  const totalPages = Math.ceil(processedData.length / itemsPerPage);
  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return processedData.slice(startIndex, endIndex);
  }, [processedData, currentPage, itemsPerPage]);

  // Calculate analytics
  const analytics = React.useMemo(() => {
    if (!vehicles.length) return {};

    const countyData = vehicles.reduce((acc, item) => {
      acc[item.county] = (acc[item.county] || 0) + 1;
      return acc;
    }, {});

    const makeData = vehicles.reduce((acc, item) => {
      acc[item.make] = (acc[item.make] || 0) + 1;
      return acc;
    }, {});

    const vehicleTypeData = vehicles.reduce((acc, item) => {
      const type = item.electricVehicleType.includes('BEV') ? 'BEV' : 'PHEV';
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    const yearData = vehicles.reduce((acc, item) => {
      acc[item.modelYear] = (acc[item.modelYear] || 0) + 1;
      return acc;
    }, {});

    return {
      county: Object.entries(countyData).map(([name, value]) => ({ name, value, percentage: ((value / vehicles.length) * 100).toFixed(0) })),
      make: Object.entries(makeData).map(([name, value]) => ({ name, value, percentage: ((value / vehicles.length) * 100).toFixed(0) })),
      vehicleType: Object.entries(vehicleTypeData).map(([name, value]) => ({ name, value, percentage: ((value / vehicles.length) * 100).toFixed(0) })),
      year: Object.entries(yearData).map(([name, value]) => ({ name: parseInt(name), value, percentage: ((value / vehicles.length) * 100).toFixed(0) })).sort((a, b) => a.name - b.name),
      totalVehicles: vehicles.length
    };
  }, [vehicles]);

  return (
    <div className="min-h-screen bg-gray-50 ">
      <HeaderComponent totalVehicles={vehicles.length} />
      
      <NavigationComponent 
        currentView={currentView} 
        onViewChange={handleViewChange}
      />

      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4  ">
        {currentView === 'summary' ? (
          <SummaryViewComponent analytics={analytics} />
        ) : (
          <DataViewComponent
            processedData={processedData}
            paginatedData={paginatedData}
            searchTerm={searchTerm}
            selectedFilter={selectedFilter}
            sortConfig={sortConfig}
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            onSearchChange={handleSearchChange}
            onFilterChange={handleFilterChange}
            onSort={handleSort}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        )}
      </main>

      <FooterComponent />
    </div>
  );
};

export default Dashboard;