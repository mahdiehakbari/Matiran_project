// src/routes/index.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CryptoDetails from '../pages/CryptoDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/dashboard' />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/crypto-details' element={<CryptoDetails />} />
    </Routes>
  );
};

export default AppRoutes;
