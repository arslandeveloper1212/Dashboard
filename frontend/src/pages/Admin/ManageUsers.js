import React, { useState, useEffect } from 'react';
import TableAdmin from '../../components/Admin/TableAdmin';
import Pagination from '../../components/Pagination';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
  const [items, setItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [sortOption, setSortOption] = useState('Type'); // Initial sorting option
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10; // Number of items to display per page

  useEffect(() => {
    // Simulated fetch or setting of data (replace with actual data fetching if needed)
    const fetchData = () => {
      // Replace this with your actual data fetching mechanism (e.g., API call) 
      const data = [
        { "id": 3252, "name": "John Doe","email":"data@gmail.com","phone":"+02232342234", "type": "Broker", "status": "Active" },
        { "id": 3253, "name": "John Doe","email":"email@gmail.com","phone":"+9232323232", "type": "Admin", "status": "Inactive" },
    
    ]
      setItems(data);
      setSortedItems(data); // Initialize sortedItems with the fetched data
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  // Sorting functions (sortByActive, sortByInactive, TypeSort) go here
  const sortByActive = () => {
    const sorted = [...items].filter(item => item.status === 'Active');
    setSortedItems(sorted);
    setSortOption('active');
    setCurrentPage(1); // Type current page to 1 after sorting
  };

  const sortByInactive = () => {
    const sorted = [...items].filter(item => item.status === 'Inactive');
    setSortedItems(sorted);
    setSortOption('inactive');
    setCurrentPage(1); // Type current page to 1 after sorting
  };

  const TypeSort = () => {
    setSortedItems(items); // Show all items without sorting
    setSortOption('Type');
    setCurrentPage(1); // Type current page to 1 after Typeting
  };

  // Search functionality
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Type current page to 1 when search term changes
  };

  // Filter items based on search term and sort option
  const filteredItems = sortedItems.filter(item =>
    (sortOption === 'active' && item.status === 'Active') ||
    (sortOption === 'inactive' && item.status === 'Inactive') ||
    (sortOption === 'Type' && (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by search term if Type option
      // Add more fields to search by (e.g., nationality, policy, etc.) if needed
    ))
  );



  const onDelete =  (id) => {
    alert( id)
    // Perform delete operation (replace with actual API call)
    // try {
    //   const response =  fetch(`http://localhost:3000/delete-customer/${id}`, {
    //     method: 'DELETE',
    //   });
    //   if (!response.ok) {
    //     throw new Error('Failed to delete item');
    //   }
    //   // Filter out the deleted item from items state
    //   setItems(items.filter(item => item.id !== id));
    //   setSortedItems(sortedItems.filter(item => item.id !== id));
    // } catch (error) {
    //   console.error('Error deleting item:', error);
    //   // Handle error state if needed
    // }
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
            <h1 className='main-heading'>Manage Users</h1>
            <span>Manage Users Data</span>
          </div>
          <div>
            <div className='cust-grey-button d-flex'>

              <Link to={"/admin/create-user"}><button className='btn-grey' style={{ margin: '30px 0px' }}>Create User</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-12'>
          <form className="d-flex">
            <input
              style={{ borderRadius: "15px", padding: "8px 16px", width:"320px" }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </div>
        <div className='col-lg-6 col-md-6 col-12' style={{ display: "flex", justifyContent: "end" }}>
          <div className="dropdown mb-3">
            <button className=" btn-grey dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Sort by: {sortOption === 'active' ? 'Active' : sortOption === 'inactive' ? 'Inactive' : 'Type'}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><button className="dropdown-item" onClick={sortByActive}>Active</button></li>
              <li><button className="dropdown-item" onClick={sortByInactive}>Inactive</button></li>
              <li><button className="dropdown-item" onClick={TypeSort}>Reset to Default</button></li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <TableAdmin items={currentItems} onDelete={onDelete} />
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

export default ManageUsers;
