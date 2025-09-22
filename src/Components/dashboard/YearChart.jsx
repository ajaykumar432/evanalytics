
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';


const YearChartComponent = ({ data }) => (
  <div className="bg-white rounded-lg shadow-sm p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Model Year Distribution</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data || []}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#FFBB28" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default YearChartComponent;