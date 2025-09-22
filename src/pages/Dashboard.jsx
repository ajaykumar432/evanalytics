import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { ChevronDown, ChevronUp, Download, Code, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
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