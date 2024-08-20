import React, { useState, useEffect } from 'react';
import PolicyJson from '../JsonFolder.js/Policy.json'; // Import JSON data



const itemsPerPage = 5; // Number of items to display per page

const Pagination = () => {
  const [datas, setData] = useState([]);
  console.log(data)
  const [currentPage, setCurrentPage] = useState(1); // For PolicyTable component
  console.log(currentPage)
  const [currentPolicy, setCurrentPolicy] = useState([]);
  console.log(currentPolicy)

  useEffect(() => {
    setData(PolicyJson); // Set initial data from JSON file
  }, []);

  useEffect(() => {
    if (!Array.isArray(datas) || datas.length === 0) {
      // Handle case where data is not an array or empty
      setCurrentPolicy([]);
      return;
    }

    // Calculate pagination for PolicyTable component
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentPolicy(datas.slice(startIndex, endIndex));
  }, [currentPage, datas]);

  const totalPages = Math.ceil(datas.length / itemsPerPage); // Total pages for PolicyTable component

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <div className="table-container">
      
        <PolicyTable itemspolicy={currentPolicy} />
        <nav>
          <ul className="pagination" style={{ justifyContent: "center" }}>
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageClick(currentPage - 1)}>&laquo;</button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageClick(index + 1)}>{index + 1}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageClick(currentPage + 1)}>&raquo;</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
