// Chart Components
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { ChevronDown, ChevronUp, Download, Code, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const CountyChartComponent = ({ data }) => (
  <div className="bg-white rounded-lg shadow-sm p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribution by County</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data?.slice(0, 6) || []}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#0088FE" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default CountyChartComponent;