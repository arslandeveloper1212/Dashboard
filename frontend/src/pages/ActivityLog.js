import React, { useState } from 'react'
import { MdOutlinePayment } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import Pagination from '../components/Pagination';
const ActivityLog = ({ itemspolicy }) => {


    const data = Array.from({ length: 50 }, (_, index) => ({ id: index + 1, title: `Item ${index + 1}` }));
    const itemsPerPage = 5;

    const [sortedItems, setSortedItems] = useState(itemspolicy || []);
    const [sortOption, setSortOption] = useState('Payment');
    const [sortOptionM, setSortOptionM] = useState('Month');

    const sortByPayment = () => {
        const sorted = [...sortedItems].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setSortedItems(sorted);
        setSortOption('Payment');
    };

    const sortByMonth = () => {
        const sorted = [...sortedItems].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setSortedItems(sorted);
        setSortOptionM('Month');
    };

    return (

        <div className="control-overwidth padding-given">

            <div className="container-fluid">
                <div className="row">
                    <div className=' d-flex flex-row align-items-center justify-content-between'>
                        <h1 className='main-heading'>Activity Log</h1>

                        <button className='btn-grey-padding' style={{ margin: '0px 10px' }}>Export Log Data</button>

                    </div>

                    <div>
                        <span>manage client data</span>
                    </div>



                </div>


                <div className='row mt-4'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <form className="d-flex">
                            <input style={{ borderRadius: "15px", padding: "8px 16px" }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                        </form>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12' style={{ display: "flex", justifyContent: "end" }}>
                        <div className="dropdown mb-3">
                            <button style={{ border: "none", padding: "8px 16px", borderRadius: "15px" }} className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by: {sortOption === 'Payment' ? 'Payment' : 'Oldest'}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><button className="dropdown-item" onClick={sortByPayment}>Payment</button></li>

                            </ul>

                            <button style={{ border: "none", padding: "8px 16px", borderRadius: "15px" }} className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by: {sortOptionM === 'Month' ? 'Month' : 'Oldest'}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><button className="dropdown-item" onClick={sortByMonth}>Month</button></li>

                            </ul>
                        </div>

                    </div>

                </div>

                <div className='row mt-4'>
                    <div className='control-activity align-items-center d-flex'>
                        <MdOutlinePayment />
                        &nbsp;   <span>Payment</span>&nbsp;&nbsp;
                        <span>Amount 400$</span>
                        &nbsp;
                        &nbsp;&nbsp; <span style={{ color: "lightgrey" }}>on</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>Date: 21.01.2024</span>
                    </div>
                </div>

                <hr></hr>



                <div className='row'>
                    <div className='control-activity align-items-center d-flex'>
                        <BsPeopleFill />
                        &nbsp;   <span>Customer</span>&nbsp;&nbsp;
                        <span>Name Someone</span>
                        &nbsp;  &nbsp;
                        <span>IDJBSMK0912</span>
                        &nbsp;&nbsp; <span style={{ color: "lightgrey" }}>on</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>Date: 21.01.2024</span>
                    </div>
                </div>


                <hr></hr>

                <div className='row '>
                    <div className='control-activity align-items-center d-flex'>
                        <MdOutlinePayment />
                        &nbsp;   <span>Payment</span>&nbsp;&nbsp;
                        <span>Amount 400$</span>
                        &nbsp;
                        &nbsp;&nbsp; <span style={{ color: "lightgrey" }}>on</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>Date: 21.01.2024</span>
                    </div>
                </div>

                <hr></hr>


            </div>


        </div>
    )
}

export default ActivityLog
