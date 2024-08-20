// SupportDashboardLayout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import SupportDashboard from '../pages/SupportDashboard';
import CustSupportSide from '../components/CustSupportSide';

const SupportDashboardLayout = () => {
  const location = useLocation();

  return (
    <div className='container-fluid'>
    <div className="d-flex utfs">
    <div className="flex-grow-1">
      <SupportDashboard />
    </div>
    {location.pathname === '/support-dashboard' && (
      <div className="custom-width-last">
        <CustSupportSide />
      </div>
    )}
  </div>
    </div>
   
  );
};

export default SupportDashboardLayout;
