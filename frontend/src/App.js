import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import CreateCustomer from './pages/CreateCustomer';
import ActivityLog from './pages/ActivityLog';
import KnowledgeBase from './pages/KnowledgeBase';
import KnowledgeAccord from './pages/KnowledgeAccord';
import EditCustomer from './pages/EditCustomer';
import ViewCustomer from './pages/ViewCustomer';
import CustomerDash from './pages/CustomerDash';
import PolicyDashboard from './pages/PolicyDashboard';
import BillingDashboard from './pages/BillingDashboard';
import SupportDashboardLayout from './components/SupportDashboardLayout'; // Import the new layout
import HomeA from './pages/Admin/HomeA';
import ClientLayout from './pages/ClientLayout';
import AdminLayout from './pages/Admin/AdminLayout';
import ManageUsers from './pages/Admin/ManageUsers';

import CreateUserAdmin from './pages/Admin/CreateUserAdmin';
import EditUserAdmin from './components/Admin/EditUserAdmin';
import KnowledgeBaseFAQAdmin from './pages/Admin/KnowledgeBaseFAQAdmin';
import Quotes from './pages/Quotes';
import ViewQuote from './pages/Admin/ViewQuote';
import SupportTicketAdmin from './pages/Admin/SupportTicketAdmin';
import SupportTicketAdminLayout from './components/Admin/SupportTicketLayout';
import BillingDashboardAdmin from './pages/Admin/BillingDashboardAdmin';
import Login from './pages/Login';


function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signup" element={<Signup />} />
    <Route path='/login' element={<Login/>} />
      {/* Client Routes */}
      <Route path="/" element={<ClientLayout />}>
        {/* Default route for client */}
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-customer" element={<CreateCustomer />} />
        <Route path="/activity-log" element={<ActivityLog />} />
        <Route path="/knowledge-base-faq" element={<KnowledgeBase />} />
        <Route path="/knowledge-base-accordion" element={<KnowledgeAccord />} />
        <Route path="/edit-customer/:id" element={<EditCustomer />} />
        <Route path="/view-customer/:id" element={<ViewCustomer />} />

        {/* Client Dashboard Routes */}
        <Route path="/dashboard-customer" element={<CustomerDash />} />
        <Route path="/policy-dashboard" element={<PolicyDashboard />} />
        <Route path="/billing-dashboard" element={<BillingDashboard />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/view-quotes/:id" element={<ViewQuote />} />
        <Route path="/support-dashboard" element={<SupportDashboardLayout />} />
       
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        {/* Default route for admin */}
        <Route index element={<Navigate to="/admin/home" />} />
        <Route path="/admin/home" element={<HomeA />} />
        <Route path="/admin/manage-users" element={<ManageUsers/>} />
        <Route path="/admin/support-ticket" element={<SupportTicketAdminLayout/>} />
        <Route path="/admin/knowledge-base-faq" element={<KnowledgeBaseFAQAdmin/>} />
        <Route path="/admin/create-user" element={<CreateUserAdmin/>} />
        <Route path="/admin/update-user/:id" element={<EditUserAdmin/>} />
        <Route path="/admin/billing-dashboard" element={<BillingDashboardAdmin/>} />
        {/* Add more admin routes here as needed */}
      </Route>
    </Routes>
  );
}

export default App;
