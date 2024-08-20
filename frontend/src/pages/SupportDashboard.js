

import React, { useState, useMemo } from 'react';
import TableSupport from '../components/TableSupport';
import Pagination from '../components/Pagination';

const SupportDashboard = () => {
    // Replace this with the data you provided
    const data = [
        { id: 1, date: "2024-07-01T10:00:00Z", issueCatalog: "Login Issue", status: "Resolved" },
        { id: 2, date: "2024-07-02T11:15:00Z", issueCatalog: "Password Reset", status: "Pending" },
        { id: 3, date: "2024-07-03T14:30:00Z", issueCatalog: "Account Lock", status: "In Progress" },
        { id: 4, date: "2024-07-04T09:45:00Z", issueCatalog: "Page Not Loading", status: "Resolved" },
        { id: 5, date: "2024-07-05T16:20:00Z", issueCatalog: "Payment Issue", status: "Pending" },
        { id: 6, date: "2024-07-06T12:05:00Z", issueCatalog: "Feature Request", status: "Resolved" },
        { id: 7, date: "2024-07-07T08:50:00Z", issueCatalog: "Error Message", status: "In Progress" },
        { id: 8, date: "2024-07-08T10:30:00Z", issueCatalog: "Technical Glitch", status: "Resolved" },
        { id: 9, date: "2024-07-09T15:00:00Z", issueCatalog: "Accessibility Issue", status: "Pending" },
        { id: 10, date: "2024-07-10T17:45:00Z", issueCatalog: "Data Sync Problem", status: "Resolved" }
    ];
    
    const itemsPerPage = 5; // Number of items to display per page
    const [sortedItems, setSortedItems] = useState(data);
    const [sortOption, setSortOption] = useState('Month');
    const [currentPage, setCurrentPage] = useState(1);

    const sortByMonth = () => {
        const sorted = [...sortedItems].sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedItems(sorted);
        setSortOption('Month');
    };

    const sortByOldest = () => {
        const sorted = [...sortedItems].sort((a, b) => new Date(a.date) - new Date(b.date));
        setSortedItems(sorted);
        setSortOption('Oldest');
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = useMemo(() => sortedItems.slice(indexOfFirstItem, indexOfLastItem), [sortedItems, currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="custom-width-middle padding-given">
            <div className="row justify-content-between d-flex" style={{ margin: "18px 0px" }}>
                <h1 className='main-heading'>Support Dashboard</h1>
                <span>For Support and Feedback</span>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-12'>
                    <form className="d-flex">
                        <input
                            style={{ borderRadius: "15px", padding: "8px 16px" }}
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>
                </div>
                <div className='col-lg-6 col-md-6 col-12' style={{ display: "flex", justifyContent: "end" }}>
                    <div className="dropdown mb-3">
                        <button
                            style={{ border: "none", padding: "8px 16px", borderRadius: "15px" }}
                            className="dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Sort by: {sortOption}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><button className="dropdown-item" onClick={sortByMonth}>Month</button></li>
                            <li><button className="dropdown-item" onClick={sortByOldest}>Oldest</button></li>
                        </ul>
                    </div>
                </div>
                <div className='col-12'>
                    <TableSupport itemssupport={currentItems} />
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={sortedItems.length}
                        paginate={handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default SupportDashboard;
