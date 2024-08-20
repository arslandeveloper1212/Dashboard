// SupportDashboardLayout.js
import React from 'react';
import { useLocation } from 'react-router-dom';


import SupportTicketAdmin from '../../pages/Admin/SupportTicketAdmin';
import CustSupportAdminSide from './CustSupportAdminSide';


const SupportTicketAdminLayout = () => {
    const location = useLocation();

    return (
        <div className='container-fluid'>
            <div className="d-flex justify-content-center ">
                <div className="flex-grow-1">
                    <SupportTicketAdmin />
                </div>
                {location.pathname === '/admin/support-ticket' && (
                    <div className="custom-width-last">
                        <CustSupportAdminSide />
                    </div>
                )}
            </div>
        </div>

    );
};

export default SupportTicketAdminLayout;
