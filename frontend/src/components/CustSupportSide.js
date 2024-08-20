import React, { useState } from 'react';
import { PiPaperclipHorizontal } from 'react-icons/pi';

const CustSupportSide = () => {

    return (
        <div className='custom-width-last'>
            <div className='cust-grey-button d-flex justify-content-end'>

                <button className='btn-grey' style={{ margin: '30px 0px' }}>Create Ticket</button>
            </div>

            <div className='bg-custdetail' style={{ backgroundColor: '#ececec', borderRadius: '6px', padding: "20px" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='control-cust d-flex align-items-center justify-content-between'>
                                <h3 className='font-given-16'>Support Ticket</h3>
                                <button className='btn-grey' style={{ margin: '30px 0px' }}>Open</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='cust-name d-flex justify-content-between'>
                            <span>Intiated Support Ticket</span>
                            <span>27.01.2024</span>

                        </div>
                        <div className='cust-btn mb-3 flex-column'>
                           <span>This issue</span>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='cust-name d-flex justify-content-between'>
                            <span> Ticket Response</span>
                            <span>01.01.2024</span>

                        </div>
                        <div className='cust-btn mb-3 flex-column'>
                           <span>This is Response</span>

                        </div>
                    </div>


                    <div class="form-floating mb-3" style={{marginTop: "250px"}}>
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2">type message here</label>
</div>







                </div>

              

              
              

                <div className='row'>
                    <div className='d-flex justify-content-center align-items-center
                     flex-row gap-2'>
                        <button className=' text-black contact-update-en font-given-14'>Update</button>
                     
                        <button className=' text-black contact-update-en font-given-14'>Close Ticket</button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default CustSupportSide;
