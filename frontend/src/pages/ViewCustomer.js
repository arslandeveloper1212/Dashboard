import React, { useState } from 'react';
import '../../src/App.css';
import { PiDownloadSimple } from "react-icons/pi";


const BUTTONS = [
    { id: 1, title: 'Inpatient', selected: false },
    { id: 2, title: 'Outpatient', selected: false },
    { id: 3, title: 'Dental', selected: false },
    { id: 4, title: 'Maternity', selected: false },
];

const ViewCustomer = () => {


    const [buttons, setButtons] = useState(BUTTONS);
    console.log(buttons)

    const handleButton = (buttonId, e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const newButtons = buttons.map((btn) => {
            if (btn.id !== buttonId) return btn;
            return { ...btn, selected: !btn.selected }; // Create a new object with updated selected value
        });
        setButtons(newButtons);
    };



    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState('');
    const [activity, setActivity] = useState('');


    const handleAddButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSave = () => {
        // Handle saving date and activity here
        console.log('Date:', date);
        console.log('Activity:', activity);
        // Optionally, you can reset state values or perform other actions
        setShowModal(false);
    };


    return (

        <div className='container-fluid'>
            <h1 className='main-heading'>Customer Details</h1>
            <span>Manage Client Data</span>

            <div className='mt-5'>
                <div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-12'>
                            <div className='flex-row d-flex'>
                                <img style={{ width: "80px" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOX4mkcW8pH9FbpI9rTBkokiMxSY2GJ3eyw&s' className='img-fluid' />
                                <div className='flex-column d-flex px-3'>
                                    <span>Name</span>
                                    <span>Test@gmail.com</span>
                                    <span>+923474452235</span>
                                </div>


                            </div>

                        </div>

                        <div className='col-lg-2 col-md-2 col-12'>
                            <div className='flex-column d-flex px-3'>
                                <span>Nationality</span>
                                <span>Thai</span>

                            </div>
                        </div>
                        <div className=' col-lg-2 col-md-2 col-12'>
                            <div className='flex-column d-flex px-3'>
                                <span>Date Of Birth</span>
                                <span>08/08/2024</span>

                            </div>
                        </div>
                        <div className='col-lg-2 col-md-2 col-12'>
                            <div className='flex-column d-flex px-3'>
                                <span>Sex</span>
                                <span>Male</span>

                            </div>
                        </div>
                        <div className='col-lg-2 col-md-2 col-12'>
                            <div className='flex-column d-flex px-3'>
                                <span>Country</span>
                                <span>Thailand</span>

                            </div>
                        </div>

                        <div className='col-lg-2 col-md-2 col-12'>
                            <div className='flex-column d-flex px-3'>
                                <span>Address</span>
                                <span>House No 112, San Fransico</span>

                            </div>
                        </div>


                    </div>
                    <hr style={{ color: "grey" }} />
                    <div className='row'>
                        <div className='row d-flex'>
                            <div className='col-lg-4 col-md-4 col-12'>
                                <div className='flex-row d-flex'>

                                    <div className='flex-column d-flex '>
                                        <div className="mb-3">
                                            <span className='str-bold-h'>Plan Modules</span>

                                            <div >
                                                {buttons.map((bt) => (
                                                    <button
                                                        key={bt.id}
                                                        onClick={(e) => handleButton(bt.id, e)}
                                                        className={bt.selected ? 'buttonPressed' : 'button-padding'}
                                                    >
                                                        {bt.title}
                                                    </button>

                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg col-md col-12'>
                                <span>Documents</span>
                                <div className='flex-row d-flex' style={{ margin: "10px 0px" }}>
                                    <div className='flex-column px-3'>
                                        <div className='flex-row'>
                                            <div>
                                                <span>Verified ID</span>
                                                <PiDownloadSimple />
                                            </div>

                                            <div className='py-3'>
                                                <span>Proof Of Address</span>
                                                <PiDownloadSimple />
                                            </div>

                                        </div>


                                    </div>

                                    <div className='flex-column d-flex px-3'>
                                        <div className='flex-row'>
                                            <div>
                                                <span>Policy Document</span>
                                                <PiDownloadSimple />
                                            </div>

                                            <div className='py-3'>
                                                <span>Invoice</span>
                                                <PiDownloadSimple />
                                            </div>

                                        </div>


                                    </div>

                                    <div className='flex-column d-flex px-3'>
                                        <div className='flex-row'>
                                            <div>
                                                <span>Other Document</span>
                                                <PiDownloadSimple />
                                            </div>



                                        </div>


                                    </div>
                                </div>

                            </div>





                        </div>
                    </div>

                    <div className='row d-flex'>
                        <div className='col-12'>
                            <span className='str-bold-h'>Policy Detail</span>
                            <div className='viewcustomer-get py-3'>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex '>
                                        <span>Policy Number</span>
                                        <span>LKJSK234</span>

                                    </div>
                                </div>

                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex'>
                                        <span>Policy Type</span>
                                        <span>Family</span>

                                    </div>
                                </div>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex '>
                                        <span>Insurer</span>
                                        <span>XYZ</span>

                                    </div>
                                </div>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex '>
                                        <span>Plan Number</span>
                                        <span>Connect</span>

                                    </div>
                                </div>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex '>
                                        <span>Start Date</span>
                                        <span>10/10/2022</span>

                                    </div>
                                </div>

                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex'>
                                        <span>End Date</span>
                                        <span>10/10/2022</span>
                                    </div>
                                </div>

                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex '>
                                        <span>Area Of Cover</span>
                                        <span>Worldwide</span>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>


                    <div className='row d-flex'>
                        <div className='col-12'>
                            <span className='str-bold-h'>Payment Detail</span>
                            <div className='viewcustomer-get py-3'>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex '>
                                        <span>Currency</span>
                                        <span>USD</span>

                                    </div>
                                </div>

                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Frequency</span>
                                        <span>Annual</span>

                                    </div>
                                </div>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Premium</span>
                                        <span>$3042</span>

                                    </div>
                                </div>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Deductibles Or Copay</span>
                                        <span>$500</span>

                                    </div>
                                </div>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Payment Method</span>
                                        <span>Card</span>

                                    </div>
                                </div>

                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Commission</span>
                                        <span>300</span>
                                    </div>
                                </div>




                            </div>

                        </div>

                    </div>


                    <div className='row d-flex'>
                        <div className='col-12'>
                            <span className='str-bold-h'>Members</span>
                            <div className='flex-row d-flex py-3'>
                                <div className='col-lg-2 col-md-2 col-12'>
                                    <div className='flex-column d-flex '>
                                        <span>Name</span>
                                        <span>John Doe</span>
                                        <span>John Doe</span>
                                        <span>John Doe</span>
                                        <span>John Doe</span>

                                    </div>
                                </div>

                                <div className='col-lg-2 col-md-2 col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Nationality</span>
                                        <span>Pakistani</span>
                                        <span>Pakistani</span>
                                        <span>Pakistani</span>
                                        <span>Pakistani</span>

                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-2 col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Date Of Birth</span>
                                        <span>18/18/2022</span>
                                        <span>18/18/2022</span>
                                        <span>18/18/2022</span>
                                        <span>18/18/2022</span>

                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-2 col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Relation</span>
                                        <span>Child</span>
                                        <span>Child</span>

                                        <span>Child</span>

                                        <span>Child</span>


                                    </div>
                                </div>






                            </div>

                            <button className="btn-grey" onClick={handleAddButtonClick}>
                                Add
                            </button>
                        </div>

                    </div>

                </div>



                {/* Modal */}
                {showModal && (
                    <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Activity</h5>
                                    <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                                </div>
                                <div className="modal-body">
                                   
                                    <div className='row d-flex flex-row'>
                                   
                                        <div className="mb-3">
                                            <label htmlFor="dateInput" className="form-label">Date</label>
                                            <input type="date" className="form-control" id="dateInput"
                                            value={date} onChange={(e) => setDate(e.target.value)} />
                                        </div>
                                        <div >
                                        <label htmlFor="Category" className="form-label heading-color">Category:</label>
                                        <select id="Category" name='Category' className="form-select">
                                          <option value="contact">Contact</option>
                                          <option value="service">Service</option>
                                          <option value="renewal">Renewal</option>
                                          <option value="claim">Claim</option>
                                          <option value="none">None</option>
                                        </select>
                                      </div>
                                   
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="activityInput" className="form-label">Activity</label>
                                        <textarea rows="5" cols="" type="text" className="form-control" id="activityInput"
                                            value={activity} onChange={(e) => setActivity(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">

                                    <button type="button" className="btn-green" onClick={handleSave}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showModal && <div className="modal-backdrop fade show"></div>}


                <div className='mt-5'>
                  <span className='str-bold-h'>Activity</span>
                    <div className='row'>
                      
                              
                                <div className='flex-row d-flex py-3'>



                                    <div className='col-lg-3 col-12'>
                                        <div className='flex-column d-flex px-3'>
                                            <span className='str-bold-h'>Date </span>
                                            <span>18/18/2022</span>
                                            <span>18/18/2022</span>
                                            <span>18/18/2022</span>
                                            <span>18/18/2022</span>

                                        </div>
                                    </div>

                                    
                                    <div className='col-lg-3 col-12'>
                                        <div className='flex-column d-flex px-3'>
                                            <span className='str-bold-h'>Category </span>
                                            <span>None</span>
                                            <span>Renewal</span>
                                            <span>Contact</span>
                                            <span>Claim</span>

                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-12'>
                                        <div className='flex-column d-flex px-3'>
                                            <span className='str-bold-h'>Details</span>
                                            <span>Lorem ipsum is a dummy text</span>
                                            <span>Lorem ipsum is a dummy text</span>
                                            <span>Lorem ipsum is a dummy text</span>
                                            <span>Lorem ipsum is a dummy text</span>



                                        </div>
                                    </div>






                                </div>



                            </div>
                      
                </div>

            </div>
        </div>



    );
};

export default ViewCustomer;



