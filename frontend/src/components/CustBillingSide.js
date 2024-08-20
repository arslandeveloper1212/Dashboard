import React, { useState } from 'react';
import { PiPaperclipHorizontal } from 'react-icons/pi';

const CustBillingSide = () => {
    const [drivingLicense, setDrivingLicense] = useState(null);
    const [otherDocument, setOtherDocument] = useState(null);

    const handleDrivingLicenseChange = (e) => {
        const file = e.target.files[0];
        // Perform additional validation or processing if needed
        setDrivingLicense(file);
        console.log(file)
    };

    const handleOtherDocumentChange = (e) => {
        const file = e.target.files[0];
        // Perform additional validation or processing if needed
        setOtherDocument(file);
        console.log(file)
    };




    return (
        <div className='custom-width-last'>
            <div className='cust-grey-button d-flex justify-content-end'>

                <button className='btn-grey' style={{ margin: '30px 0px' }}>Create Bill</button>
            </div>

            <div className='bg-custdetail' style={{ backgroundColor: '#ececec', borderRadius: '6px', padding: "20px" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='control-cust d-flex align-items-center justify-content-between'>
                                <h3 className='font-given-16'>Bill Detail</h3>
                                <button className='btn-grey' style={{ margin: '30px 0px' }}>Success</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='cust-name'>
                            <span>Payment Amount</span>
                            <h3>$400</h3>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='cust-name'>
                            <span>Payment related to policy(s)</span>
                            <h3>Related Policy</h3>
                        </div>
                    </div>








                </div>

                <div className='row mb-2' style={{ paddingLeft: "13px" }}>
                    <div className='col'>


                        <div className='opted-controller d-flex justify-content-between align-items-center'>

                            <div>
                                <button className='btn-grey font-given-14'>Policy ID</button>
                                <span>Policy Name</span>
                            </div>

                            <PiPaperclipHorizontal className='clip-icon ' style={{ width: "13%" }} />
                        </div>
                    </div>

                </div>

                <div className='row'>
                    <div className='cust-name'>
                        <span>Customer</span>
                        <h3>John Doe</h3>
                    </div>
                </div>

                <div className='row'>
                    <div className='cust-name'>
                        <span>Next Payment</span>
                        <h3>01.01.2025</h3>
                    </div>
                </div>

                <div className='row'>
                    <div className='cust-name'>
                        <span>Payment Cycle</span>
                        <h3>Monthly</h3>
                    </div>
                </div>

                <div className='row'>
                <div className='cust-name'>
                    <span>Payment Mode</span>
                    <h3>Credit Card</h3>
                </div>
            </div>

                <div className='row'>
                    <div className='d-flex flex-row gap-2'>
                        <button className=' text-black contact-update-del font-given-14'>Invoice</button>
                        <button className=' text-black contact-update-del font-given-14'>Send Invoice</button>
                        <button className=' text-black contact-update-del font-given-14'>Send Reminder</button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default CustBillingSide;
