import React, { useState, useEffect } from 'react';
import TableQuotes from '../components/TableQuotes';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';

const Quotes = () => {
  const [items, setItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [sortOption, setSortOption] = useState('reset'); // Initial sorting option
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10; // Number of items to display per page

  useEffect(() => {
    // Simulated fetch or setting of data (replace with actual data fetching if needed)
    const fetchData = () => {
      // Replace this with your actual data fetching mechanism (e.g., API call)
      const data = [
        { id: 1, name: "John Doe", nationality: "Thai", insurer: "KSLI", premium: "23023", status: "Policy Issued", renewal: "2 Month" },
        { id: 2, name: "Jane Smith", nationality: "Thai", insurer: "KSLI", premium: "23023", status: "Quote Downloaded", renewal: "none" },
        { id: 3, name: "Alice Johnson", nationality: "Thai", insurer: "KSLI", premium: "23023", status: "Quote Downloaded", renewal: "3 Month" },
        {id: 4, name: "Bob Brown", nationality: "Thai", insurer: "KSLI", premium: "23023", status: "Contacted", renewal: "none" },
        { id: 5, name: "Eve Green", nationality: "Thai", insurer: "KSLI", premium: "23023", status: "Application Sent", renewal: "2 Month" },
        { id: 6, name: "Charlie White", nationality: "Thai", insurer: "KSLI", premium: "23023", status: "Application Sent", renewal: "4 Month" },
        { id: 7, name: "Grace Lee", nationality: "Thai", insurer: "KSLI", premium: "23023", status: "Policy Issued", renewal: "none" },
      ];
      setItems(data);
      setSortedItems(data); // Initialize sortedItems with the fetched data
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  // Sorting functions
  const sortByStatus = (status) => {
    const sorted = items.filter(item => item.status === status);
    setSortedItems(sorted);
    setSortOption(status);
    setCurrentPage(1); // Reset current page to 1 after sorting
  };

  const sortByPolicy = (policy) => {
    const sorted = items.filter(item => item.policy === policy);
    setSortedItems(sorted);
    setSortOption(policy);
    setCurrentPage(1); // Reset current page to 1 after sorting
  };

  const sortByRenewal = (renewal) => {
    const sorted = items.filter(item => item.renewal === renewal);
    setSortedItems(sorted);
    setSortOption(renewal);
    setCurrentPage(1); // Reset current page to 1 after sorting
  };

  const resetSort = () => {
    setSortedItems(items); // Show all items without sorting
    setSortOption('reset');
    setCurrentPage(1); // Reset current page to 1 after resetting
  };

  // Search functionality
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset current page to 1 when search term changes
  };

  // Filter items based on search term and sort option
  const filteredItems = sortedItems.filter(item =>
    (sortOption === 'reset' && item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (sortOption === 'Policy Issued' && item.status === 'Policy Issued') ||
    (sortOption === 'Quote Downloaded' && item.status === 'Quote Downloaded') ||
    (sortOption === 'Contacted' && item.status === 'Contacted') ||
    (sortOption === 'Application Sent' && item.status === 'Application Sent') ||
    (sortOption === 'Submitted' && item.policy === 'Submitted') ||
    (sortOption === 'In Process' && item.policy === 'In Process') ||
    (sortOption === '2 Month' && item.renewal === '2 Month') ||
    (sortOption === '3 Month' && item.renewal === '3 Month') ||
    (sortOption === '4 Month' && item.renewal === '4 Month') || 
    (sortOption === '5 Month' && item.renewal === '5 Month')
  );

  const onDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/delete-customer/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
      // Filter out the deleted item from items state
      setItems(items.filter(item => item.id !== id));
      setSortedItems(sortedItems.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid">
      <div className="row" style={{ margin: "18px 0px" }}>
        <div className='justify-content-between d-flex'>
          <div>
            <h1 className='main-heading'>Clients Dashboard</h1>
            <span>Manage Client Data</span>
          </div>
          <div>
            <div className='cust-grey-button d-flex'>
              <button className='btn-grey' style={{ margin: '30px 0px' }}>Export Data</button>
              <button className='btn-grey' style={{ margin: '30px 8px' }}>Upload CSV</button>
              <Link to={"/create-customer"}><button className='btn-grey' style={{ margin: '30px 0px' }}>Create Customer</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-12'>
          <form className="d-flex">
            <input
              style={{ borderRadius: "15px", padding: "8px 16px", width: "320px" }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </div>
        <div className='col-lg-6 col-md-6 col-12' style={{ display: "flex", justifyContent: "end", gap:"10px" }}>
          <div className="dropdown mb-3">
            <button className="btn-grey dropdown-toggle" type="button" id="dropdownMenuButtonStatus" data-bs-toggle="dropdown" aria-expanded="false">
              Status: {sortOption === 'Quote Downloaded' ? 'Quote Downloaded' : sortOption === 'Contacted' ? 'Contacted': sortOption === 'Application Sent' ? 'Application Sent': sortOption === 'Policy Issued' ? 'Policy Issued' : 'All'}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonStatus">
              <li><button className="dropdown-item" onClick={() => sortByStatus('Quote Downloaded')}>Quote Downloaded</button></li>
              <li><button className="dropdown-item" onClick={() => sortByStatus('Contacted')}>Contacted</button></li>
              <li><button className="dropdown-item" onClick={() => sortByStatus('Application Sent')}>Application Sent</button></li>
              <li><button className="dropdown-item" onClick={() => sortByStatus('Policy Issued')}>Policy Issued</button></li>
              <li><button className="dropdown-item" onClick={resetSort}>All</button></li>
            </ul>
          </div>
          <div className="dropdown mb-3">
            <button className="btn-grey dropdown-toggle" type="button" id="dropdownMenuButtonPolicy" data-bs-toggle="dropdown" aria-expanded="false">
              Claim: {sortOption === 'Submitted' ? 'Submitted' : sortOption === 'In Process' ? 'In Process' : 'None'}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonPolicy">
              <li><button className="dropdown-item" onClick={() => sortByPolicy('Submitted')}>Submitted</button></li>
              <li><button className="dropdown-item" onClick={() => sortByPolicy('In Process')}>In Process</button></li>
              <li><button className="dropdown-item" onClick={resetSort}>None</button></li>
            </ul>
          </div>
          <div className="dropdown mb-3">
            <button className="btn-grey dropdown-toggle" type="button" id="dropdownMenuButtonRenewal" data-bs-toggle="dropdown" aria-expanded="false">
              Renewal: {sortOption === '2 Month' ? '2 Month' : sortOption === '3 Month' ? '3 Month': sortOption === '4 Month' ? '4 Month': sortOption === '5 Month' ? '5 Month'  : 'None'}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonRenewal">
              <li><button className="dropdown-item" onClick={() => sortByRenewal('2 Month')}>2 Month</button></li>
              <li><button className="dropdown-item" onClick={() => sortByRenewal('3 Month')}>3 Month</button></li>
              <li><button className="dropdown-item" onClick={() => sortByRenewal('4 Month')}>4 Month</button></li>
              <li><button className="dropdown-item" onClick={() => sortByRenewal('5 Month')}>5 Month</button></li>
              <li><button className="dropdown-item" onClick={resetSort}>None</button></li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <TableQuotes itemsquotes={currentItems} onDelete={onDelete} />
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredItems.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Quotes;
