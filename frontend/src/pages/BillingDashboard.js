import React, { useState } from 'react';
import Table from '../components/Table';

import Pagination from '../components/Pagination';
const BillingDashboard = ({ billingdata }) => {


    const data = Array.from({ length: 50 }, (_, index) => ({ id: index + 1, title: `Item ${index + 1}` }));
  const itemsPerPage = 5; // Number of items to display per page
    
    const [sortedItems, setSortedItems] = useState(billingdata || []);
    const [sortOption, setSortOption] = useState('ID');

    const sortByID = () => {
        const sorted = [...sortedItems].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setSortedItems(sorted);
        setSortOption('ID');
    };

    // You can add more sorting options here as needed
    // const sortByOldest = () => {
    //     const sorted = [...sortedItems].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    //     setSortedItems(sorted);
    //     setSortOption('oldest');
    // };

    return (
        <div className="custom-width-middle padding-given">
            <div className="row justify-content-between d-flex" style={{margin: "18px 0px"}}>
                <h1 className='main-heading'>Billing Dashboard</h1>
                <span>Manage Billing Data</span>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-12'>
                    <form className="d-flex">
                        <input style={{ borderRadius: "15px", padding: "8px 16px" }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        {/* Add a search button if needed */}
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
                <div className='col-lg-6 col-md-6 col-12' style={{ display: "flex", justifyContent: "end" }}>
                    <div className="dropdown mb-3">
                        <button style={{ border: "none", padding: "8px 16px", borderRadius: "15px" }} className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort by: {sortOption === 'ID' ? 'ID' : 'Oldest'}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><button className="dropdown-item" onClick={sortByID}>ID</button></li>
                            {/* Add more sorting options as needed */}
                            {/* <li><button className="dropdown-item" onClick={sortByOldest}>Oldest</button></li> */}
                        </ul>
                    </div>
                    <ul className="list-group">
                        {sortedItems.map(item => (
                            <li key={item.id} className="list-group-item">
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
              
                <Pagination data={data} itemsPerPage={itemsPerPage} />
            </div>
          
            
            
            
        </div>
    );
};

export default BillingDashboard;
