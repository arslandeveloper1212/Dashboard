import React, { useState } from 'react';


import Pagination from '../components/Pagination';
import PolicyTable from '../components/PolicyTable';
const PolicyDashboard = ({ itemspolicy }) => {


    const data = Array.from({ length: 50 }, (_, index) => ({ id: index + 1, title: `Item ${index + 1}` }));
  const itemsPerPage = 5; 
    
    const [sortedItems, setSortedItems] = useState(itemspolicy || []);
    const [sortOption, setSortOption] = useState('Company');

    const sortByCompany = () => {
        const sorted = [...sortedItems].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setSortedItems(sorted);
        setSortOption('Company');
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
                <h1 className='main-heading'>Policy Dashboard</h1>
                <span>Manage Policy Data</span>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-12'>
                    <form className="d-flex">
                        <input style={{ borderRadius: "15px", padding: "8px 16px" }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      
                    </form>
                </div>
                <div className='col-lg-6 col-md-6 col-12' style={{ display: "flex", justifyContent: "end" }}>
                    <div className="dropdown mb-3">
                        <button style={{ border: "none", padding: "8px 16px", borderRadius: "15px" }} className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort by: {sortOption === 'Company' ? 'Company' : 'Oldest'}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><button className="dropdown-item" onClick={sortByCompany}>Company</button></li>
                          
                        </ul>
                    </div>
                    <ul className="list-group">
                        {sortedItems.map(itempolicy => (
                        
                            <li key={itempolicy.id} className="list-group-item">
                                {itempolicy.PolicyName}
                            </li>

                           
                        ))}
                    </ul>
                </div>
                <PolicyTable/>
                 <Pagination data={data} itemsPerPage={itemsPerPage} />
            </div>
          
            
            
            
        </div>
    );
};

export default PolicyDashboard;
