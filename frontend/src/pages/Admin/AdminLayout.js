import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarA from '../../components/Admin/SidebarA';


function AdminLayout() {
  return (
    <div className="d-flex flex-grow-1" style={{ marginTop: "10px" }}>
      <SidebarA />
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
