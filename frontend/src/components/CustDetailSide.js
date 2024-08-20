import React, { useState } from 'react';
import { PiPaperclipHorizontal } from 'react-icons/pi';

const CustDetailSide = () => {
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
            <div className='cust-grey-button d-flex'>
                <button className='btn-grey' style={{ margin: '30px 0px' }}>Export Data</button>
                <button className='btn-grey' style={{ margin: '30px 8px' }}>Upload CSV</button>
                <button className='btn-grey' style={{ margin: '30px 0px' }}>Create Customer</button>
            </div>

            <div className='bg-custdetail' style={{ backgroundColor: '#ececec', borderRadius: '6px', padding: "20px" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='control-cust d-flex align-items-center justify-content-between'>
                                <h3 className='font-given-16'>Customer Detail</h3>
                                <button className='btn-grey' style={{ margin: '30px 0px' }}>Active</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='cust-name'>
                            <span>Name</span>
                            <h3>John Doe</h3>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='cust-btn'>
                            <span className='font-given-14'>Requirements</span>
                            <div className='cust-btn mb-3'>
                                <button className='btn-grey ' style={{ margin: '0px 0px' }}>Hospitalization</button>
                                <button className='btn-grey' style={{ margin: '0px 10px' }}>Dental</button>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <div className='cust-controller d-flex flex-row justify-content-between'>
                            <div className='cust-setter flex-col'>
                                <span>Residential Location</span>
                                <h3 className='font-given-16'>Thailand</h3>
                            </div>
                            <div className='cust-setter flex-col'>
                                <span>Nationality</span>
                                <h3 className='font-given-16'>Thai</h3>
                            </div>
                        </div>
                    </div>

                    <div className='row d-flex align-items-center justify-content-between'>
                        <div className='cust-controller d-flex flex-row justify-content-between'>
                            <div className='cust-setter flex-col align-items-center'>
                                <h3 className='font-given-16'>Documents</h3>
                                <span className='font-given-14'>Verified Documents</span>
                            </div>
                            <button className='btn-grey font-given-14' style={{ marginTop: '20px' }}>Add Document</button>
                        </div>

                        {/* Driving License Input */}
                        <div className='cust-addoc d-flex' style={{ width: '310px', backgroundColor: 'white', padding: '6px 20px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: "10px" }}>
                            <div className='file-input-wrapper'>
                                <input
                                    type='file'
                                    id='fileInputDriving'
                                    onChange={handleDrivingLicenseChange}
                                    accept='.pdf,.jpg,.jpeg,.png'
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor='fileInputDriving' className='file-label' style={{ display: 'flex', alignItems: 'center' }}>
                                    {drivingLicense ? (
                                        <span>{drivingLicense.name}</span>
                                    ) : (
                                        <span>Driving License</span>
                                    )}
                                </label>
                            </div>

                        </div>
                        <PiPaperclipHorizontal className='clip-icon' onClick={handleOtherDocumentChange} style={{ width: "13%" }} />

                        {/* Other Document Input */}
                        <div className='cust-addoc' style={{ width: '310px', backgroundColor: 'white', padding: '6px 20px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: "10px" }}>
                            <div className='file-input-wrapper'>
                                <input
                                    type='file'
                                    id='fileInputOther'
                                    onChange={handleOtherDocumentChange}
                                    accept='.pdf,.jpg,.jpeg,.png'
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor='fileInputOther' className='file-label' style={{ display: 'flex', alignItems: 'center' }}>
                                    {otherDocument ? (
                                        <span>{otherDocument.name}</span>
                                    ) : (
                                        <span>Other Document</span>
                                    )}
                                </label>
                            </div>

                        </div>
                        <PiPaperclipHorizontal className='clip-icon ' style={{ width: "13%" }} />
                        <input type='file' className='form-control' />
                    </div>


                </div>

                <div className='row mt-3 mb-2' style={{paddingLeft: "13px"}}>
                    <div className='col'>
                        <h1 className='sidebar-h'>Opeted Policies</h1>
                        <span >List of policies under the user</span>
                        <div className='opted-controller d-flex justify-content-between align-items-center pt-3'>
                            <div>
                                <button className='btn-grey font-given-14'>Policy ID</button>
                                <span>Policy Name</span>
                            </div>

                            <PiPaperclipHorizontal className='clip-icon ' style={{ width: "13%" }} />
                        </div>

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
                <div className='d-flex flex-row gap-2'>
                    <button className=' text-black contact-update-del font-given-14'>Contact</button>
                    <button className=' text-black contact-update-del font-given-14'>Update</button>
                    <button className=' text-black contact-update-del font-given-14'>Delete</button>
                </div>

            </div>
            </div>

           
        </div>
    );
};

export default CustDetailSide;
