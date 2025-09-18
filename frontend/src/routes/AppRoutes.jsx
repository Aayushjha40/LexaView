import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from '../features/authentication/LoginScreen';
import Dashboard from '../features/dashboard/Dashboard';
import Result from '../features/dashboard/Result';
// ...import other components as needed...

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/result" element={<Result />} />
      {/* Add other routes here */}
    </Routes>
  </Router>
);

export default AppRoutes;