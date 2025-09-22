import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "../src/layout/Layout";
import Dashboard from "./pages/Dashboard";

// Dummy Pages
const Billing = () => <div className="p-6">💳 Billing & Payments</div>;
const Settings = () => <div className="p-6">⚙️ Account Settings</div>;
const Reports = () => <div className="p-6">📑 Reports</div>;

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<DashboardLayout />}>
          
          <Route index element={<Dashboard />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="billing-payment" element={<Billing />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
