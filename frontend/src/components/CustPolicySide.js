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
                    <div className='row '>
                       <div className='flex-row d-flex align-items-center'>
                       <img style={{ width: "60px" }} src='https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png' className='img-fluid' />
                       
                        <div className='cust-name flex-column'>

                            <span>Policy A</span>
                            <h3>Company Provider</h3>
                        </div>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='cust-btn mt-3'>
                            <span className='font-given-14'>Facilities</span>
                            <div className='cust-btn mb-3'>
                                <button className='btn-grey-padding' style={{ margin: '0px 0px' }}>Impatient</button>
                                <button className='btn-grey-padding' style={{ margin: '0px 10px' }}>Outpatient</button>
                                <button className='btn-grey-padding ' style={{ margin: '0px 0px' }}>Dental</button>
                                <button className='btn-grey-padding' style={{ margin: '0px 10px' }}>Maternity</button>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='controler-custpolicy' style={{ backgroundColor: "#d9d9d9", padding: " 160px 70px", margin: "10px 0px" }}>
                            <span>maybe all the data here or popup <br></br> or on different page</span>
                            <br></br>
                            <br></br>
                            <span>(to make things clear visually <br></br> and for better understanding)</span>
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
        </div>
    );
};

export default CustDetailSide;
