import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import TopNavComp from '../components/TopNavComp';

function ClientLayout() {
  return (
    <div className="d-flex flex-grow-1" style={{ marginTop: "10px" }}>
      <Sidebar />
      <TopNavComp/>
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}

export default ClientLayout;
