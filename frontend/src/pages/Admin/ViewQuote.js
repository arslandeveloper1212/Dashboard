import React, { useState } from 'react';
import '../../../src/App.css';
import { PiDownloadSimple } from "react-icons/pi";


const BUTTONS = [
    { id: 1, title: 'Inpatient', selected: false },
    { id: 2, title: 'Outpatient', selected: false },
    { id: 3, title: 'Dental', selected: false },
    { id: 4, title: 'Maternity', selected: false },
];

const ViewQuote = () => {


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

        <div className='container-fluid padding-given'>
            <h1 className='main-heading'>Lead Quote</h1>
            <span>View lead data</span>

            <div className='mt-5'>
                <div>
                    <div className='row'>
                        <div className='col-lg-2 col-md-2 col-12'>
                            <div className='flex-row d-flex'>

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
                                <span>Age</span>
                                <span>24 years</span>

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
                                <span>Currency</span>
                                <span>USD</span>

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
                            <div className='col-lg-8 col-md-8 col-12 d-flex'>

                                <div className='col-lg-3 col-md-3 col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Area Of Cover</span>
                                        <span>Worldwide</span>

                                    </div>
                                </div>






                                <div className='col-lg-2 col-md-2 col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Plane Name</span>
                                        <span>Connect</span>

                                    </div>
                                </div>


                                <div className='col-lg-2 col-md-2 col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Insurer</span>
                                        <span>VUMI</span>

                                    </div>
                                </div>



                                <div className='col-lg-2 col-md-2 col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Premium</span>
                                        <span>$3042</span>

                                    </div>
                                </div>


                                <div className='col-lg-2 col-md-2 col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Deductibles Or Copay</span>
                                        <span>$500</span>

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
                                            <span>Age</span>
                                            <span>24 year</span>
                                            <span>22 year</span>
                                            <span>134 year</span>
                                            <span>11 year</span>

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

                            
                            </div>

                        </div>

                    </div>



                 


                </div>
            </div>



            );
};

            export default ViewQuote;



