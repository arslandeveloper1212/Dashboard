import React, { useEffect, useState } from 'react';
import '../../../src/App.css';

import { useParams } from 'react-router-dom';




const CreateUserAdmin = () => {

    const { id } = useParams(); // Fetching the id parameter from the URL
    console.log(id);

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState('');

    // Function to handle file change
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedFile(file);

            // Preview the image if it's an image file
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewImage(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                setPreviewImage('');
            }
        } else {
            setSelectedFile(null);
            setPreviewImage('');
        }

    };


    return (
        <div className='container-fluid'>
        <div className="row">
        <div className="control-overwidth padding-given">
          
                <div className="container-fluid">
                    <div className="row justify-content-between d-flex">
                        <h1 className='main-heading'>Create Customer</h1>
                        <span>create</span>
                        <div className="col-md-12 col-lg-6 col-12 py-4">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label heading-color">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                           
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label heading-color">Email </label>
                                <input type="email" className="form-control" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="contact" className="form-label heading-color">Contact Number</label>
                                <input type="number" className="form-control" />
                            </div>

                         

                            <div className='mb-3'>
                                <div className="form-group">
                                    <label htmlFor="select-type" className="form-label">Type</label>
                                    <select id="select-type" name="select-type" className="form-select">

                                        <option value="worldwide">Broker</option>
                                        <option value="notUSA">Admin</option>

                                    </select>
                                </div>
                            </div>

                           

                            <div className='mb-3'>
                                <div className="form-group">
                                    <label htmlFor="select-Status" className="form-label">Status</label>
                                    <select id="select-Status" name="select-Status" className="form-select">

                                        <option value="worldwide">Active</option>
                                        <option value="notUSA">Inactive</option>

                                    </select>
                                </div>
                            </div>
















                        </div>




                        <div className="col-md-12 col-lg-6 col-12" >
                            <div style={{ textAlign: "center", marginBottom: "30px" }}>
                                <img
                                    src={previewImage || 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'}
                                    className="img-fluid"
                                    style={{ width: "150px", height: "150px", borderRadius: "150px", backgroundPosition: "center", backgroundSize: "cover" }}
                                    alt="Preview"
                                />
                            </div>
                            <div className="mb-3">
                            <input type="file" style={{width:"320px", margin:"auto"}} className="form-control" onChange={handleFileChange} />
                          </div>


                        </div>


                        <div className='col-12'>

                            



                        </div>

                    </div>



                   

                </div>

                <button className='btn-grey' style={{ margin: "30px 0px" }}>Create</button>
        </div>





  
</div>
        </div>
        
    
  );
};



export default CreateUserAdmin;


