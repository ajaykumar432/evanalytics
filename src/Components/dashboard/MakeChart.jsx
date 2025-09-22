import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const MakeChartComponent = ({ data }) => (
  <div className="bg-white rounded-lg shadow-sm p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Makes</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data?.slice(0, 5) || []} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={80} />
        <Tooltip />
        <Bar dataKey="value" fill="#00C49F" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default MakeChartComponent;