import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import "../App.css";

const KnowledgeBase = () => {
    const [items, setItems] = useState([]);
    const [sortedItems, setSortedItems] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc'); // State for sort order
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 10;

    useEffect(() => {
        // Simulated fetch or setting of data (replace with actual data fetching if needed)
        const fetchData = () => {
            const data = [
                { "id": 1, "question": "Question 3", "paragraph": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?" },
                { "id": 2, "question": "Question 2", "paragraph": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?" },
                { "id": 3, "question": "Question 1", "paragraph": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?" },
            ];
            setItems(data);
            setSortedItems(data); // Initialize sortedItems with the fetched data
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once on component mount

    // Sorting function for question
    const sortByQuestion = (order) => {
        const sorted = [...sortedItems].sort((a, b) => {
            if (order === 'asc') {
                return a.question.localeCompare(b.question);
            } else {
                return b.question.localeCompare(a.question);
            }
        });
        setSortedItems(sorted);
        setSortOrder(order);
        setCurrentPage(1);
    };

    // Search functionality
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    // Filter items based on search term
    const filteredItems = sortedItems.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="control-overwidth padding-given">
            <div className="container-fluid">
                <div className="row">
                    <div className=' d-flex flex-row align-items-center justify-content-between'>
                        <h1 className='main-heading'>Knowledge Base / FAQ</h1>
                        <button className='btn-grey-padding' style={{ margin: '0px 10px' }}>Export Data</button>
                    </div>
                    <div>
                        <span>manage client data</span>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <div className="d-flex justify-content-between">
                            <input style={{ borderRadius: "15px", padding: "8px 16px", width:"320px" }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchChange} />
                            
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12' style={{ display: "flex", justifyContent: "end" }}>
                                <div className="dropdown mb-3">
                                    <button className=" btn-grey dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort by: {sortOrder === 'asc' ? 'Asc' : 'Dsc'}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><button className="dropdown-item" onClick={() => sortByQuestion('asc')}>Ascending</button></li>
                                        <li><button className="dropdown-item" onClick={() => sortByQuestion('desc')}>Descending</button></li>
                                    </ul>
                                </div>
                            </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        {currentItems.map((item, index) => (
                            <div className="card ftss" key={index}>
                                <div className="card-body">
                                    <h5>{item.question}</h5>
                                    <div className='ftss-pp'>
                                        <p style={{ padding: "0px 17px" }}>{item.paragraph}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-12">
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

export default KnowledgeBase;
