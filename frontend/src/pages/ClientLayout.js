import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar'

function ClientLayout() {
  return (
    <div className="d-flex flex-grow-1" style={{ marginTop: "10px" }}>
      <Sidebar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}

export default ClientLayout;
