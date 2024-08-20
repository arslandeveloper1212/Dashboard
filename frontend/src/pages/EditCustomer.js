import React, { useEffect, useState } from 'react';
import '../../src/App.css';
import NationalityDrop from '../components/NationalityDrop';
import CountryDrop from '../components/CountryDrop';
import { useParams } from 'react-router-dom';

const BUTTONS = [
  { id: 1, title: 'Inpatient', selected: false },
  { id: 2, title: 'Outpatient', selected: false },
  { id: 3, title: 'Dental', selected: false },
  { id: 4, title: 'Maternity', selected: false },
];


const EditCustomer = () => {

  const { id } = useParams(); // Fetching the id parameter from the URL
  console.log(id);

  const [elementCount, setElementCount] = useState(1); // Start with one set of fields

  const handleAddFields = () => {
    setElementCount(elementCount + 1);
  };


  const [policyType, setPolicyType] = useState('individual');

  const handlePolicyTypeChange = (e) => {
    setPolicyType(e.target.value);
  };

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


  useEffect(() => {
    initializeDragAndDrop("dragArea1", "fileInput1", "fileList1", "browseFilesBtn1");
    initializeDragAndDrop("dragArea2", "fileInput2", "fileList2", "browseFilesBtn2");
    initializeDragAndDrop("dragArea3", "fileInput3", "fileList3", "browseFilesBtn3");
    initializeDragAndDrop("dragArea4", "fileInput4", "fileList4", "browseFilesBtn4");
    initializeDragAndDrop("dragArea5", "fileInput5", "fileList5", "browseFilesBtn5");
  }, []);

  function initializeDragAndDrop(dragAreaId, fileInputId, fileListId, browseFilesBtnId) {
    const dragArea = document.getElementById(dragAreaId);
    const fileInput = document.getElementById(fileInputId);
    const fileList = document.getElementById(fileListId);
    const browseFilesBtn = document.getElementById(browseFilesBtnId);

    dragArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dragArea.classList.add('drag-over');
    });

    dragArea.addEventListener('dragleave', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dragArea.classList.remove('drag-over');
    });

    dragArea.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dragArea.classList.remove('drag-over');
      const files = e.dataTransfer.files;
      handleFiles(files, fileList);
    });

    browseFilesBtn.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', () => {
      const files = fileInput.files;
      handleFiles(files, fileList);
    });

    function handleFiles(files, fileList) {
      fileList.innerHTML = ''; // Clear previous files
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const listItem = document.createElement('p');
        listItem.textContent = file.name;
        fileList.appendChild(listItem);
      }
    }
  }







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
    <div>
      <div className="col-lg-12 col-md-12 col-12">
        <div className="control-overwidth padding-given">
          <form>
            <div>
              <div className="row justify-content-between d-flex">
                <h1 className='main-heading'>Edit Customer</h1>
                <span>add new customer</span>
                <div className="col-md-12 col-lg-6 col-12 py-4">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label heading-color">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className='mb-3'>
                    <NationalityDrop className="form-control" />
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

                  <div className="mb-3">
                    <label htmlFor="date" className="form-label heading-color">Date of Birth</label>
                    <input type="date" className="form-control" />
                  </div>

                  <div className='mb-3'>
                    <div className="form-group">
                      <label htmlFor="select-genter" className="form-label">Sex</label>
                      <select id="select-genter" name="select-genter" className="form-select">

                        <option value="worldwide">Male</option>
                        <option value="notUSA">Female</option>

                      </select>
                    </div>
                  </div>

                  <div className='mb-3'>
                    <CountryDrop className="form-control" />
                  </div>


                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>



                  <div className="mb-3">
                    <span>Plan Modules</span>

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
                    <input type="file" className="form-control" onChange={handleFileChange} />
                  </div>
                  <div className="row" >
                    <div className="container mt-5">
                      <div className="mb-3">
                        <div className="form-group">
                          <label htmlFor="startDate" className="heading-color">Verified ID</label>
                          <div className="drag-area" id="dragArea1">
                            <h3 id="browseFilesBtn1">Drop files to upload</h3>
                            <input type="file" id="fileInput1" multiple style={{ display: "none" }} />
                          </div>
                          <div id="fileList1" className="mt-3"></div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="form-group">
                          <label htmlFor="startDate" className="heading-color">Proof Of Address</label>
                          <div className="drag-area" id="dragArea2">
                            <h3 id="browseFilesBtn2">Drop files to upload</h3>
                            <input type="file" id="fileInput2" multiple style={{ display: "none" }} />
                          </div>
                          <div id="fileList2" className="mt-3"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="startDate" className="heading-color">Other Documents</label>
                      <div className="drag-area" id="dragArea3">

                        <h3 id="browseFilesBtn3">Drop files to upload</h3>
                        <input type="file" id="fileInput3" multiple style={{ display: "none" }} />
                      </div>
                      <div id="fileList3" className="mt-3"></div>
                    </div>
                  </div>
                </div>


                <div className='col-12'>
                  <div className='mb-3'>
                    <div className="form-group">
                      <label htmlFor="policy-type" className="form-label">Policy Type</label>
                      <select
                        id="policy-type"
                        name="policy-type"
                        className="form-select"
                        value={policyType}
                        onChange={handlePolicyTypeChange}
                        style={{ marginBottom: "20px", width: "50%" }}
                      >
                        <option value="individual">Individual</option>
                        <option value="couple">Couple</option>
                        <option value="family">Family</option>
                        <option value="group">Group</option>
                      </select>

                      {/* Conditional rendering based on policy type */}

                      {policyType === 'couple' || policyType === 'family' || policyType === 'group' ? (
                        <div>
                          {[...Array(elementCount)].map((_, index) => (
                            <div key={index}>
                              <div style={{ width: "1320px", marginTop: "10px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "20px", justifyContent: "space-between" }}>
                                  <div className='mb-3'>
                                    <label style={{ marginBottom: "8px" }} htmlFor={`name-${index}`}>Name:</label>
                                    <input className='form-control' type="text" id={`name-${index}`} name={`name-${index}`} style={{ width: "300px" }} />
                                  </div>

                                  <div className="form-group mb-3">
                                    <label htmlFor={`relationship-${index}`} className="form-label">Relationship</label>
                                    <select id={`relationship-${index}`} name={`relationship-${index}`} className="form-select" style={{ width: "300px" }}>
                                      <option value="Wife">Wife</option>
                                      <option value="Partner">Partner</option>
                                      <option value="Child">Child</option>
                                      <option value="Employee">Employee</option>
                                    </select>
                                  </div>

                                  <div className='mb-3'>
                                    <NationalityDrop id={`nationality-${index}`} name={`nationality-${index}`} className="form-control" />
                                  </div>

                                  <div className='mb-3'>
                                    <label style={{ marginBottom: "8px" }} htmlFor={`date-of-birth-${index}`}>Date of Birth:</label>
                                    <input className='form-control' type="date" id={`date-of-birth-${index}`} name={`date-of-birth-${index}`} style={{ width: "300px" }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}

                          <div style={{ textAlign: "end" }}>
                            <button type="button" className="btn-grey mb-0" onClick={handleAddFields}>Add More</button>
                          </div>
                        </div>
                      ) : null}



                    </div>



                  </div>

                </div>



                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-12 col-12'>
                      <div className="row">
                        <div className="mb-3">
                          <label htmlFor="policy" className="form-label heading-color">Policy Number</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <div className="form-group">
                            <label htmlFor="insurer-policy" className="form-label">Insurer</label>
                            <select id="insurer-policy" name="insurer-policy" className="form-select">

                              <option value="worldwide">Dummy Insurance</option>
                              <option value="notUSA">Company Names</option>

                            </select>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="policy" className="form-label heading-color">Pan Name</label>
                          <input type="text" className="form-control" />
                        </div>


                        <div className="mb-3">
                          <label htmlFor="date" className="form-label heading-color">Start Date</label>
                          <input type="date" className="form-control" />
                        </div>


                        <div className="mb-3">
                          <label htmlFor="date" className="form-label heading-color">End Date</label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="date" className="form-label heading-color">Area Of Cover</label>
                          <input type="text" className="form-control" />
                        </div>

                        <div className='mb-3'>
                          <label>Policy Information</label>
                          <div className="drag-area" id="dragArea4">

                            <h3 id="browseFilesBtn4">Drop files to upload</h3>
                            <input type="file" id="fileInput4" multiple style={{ display: "none" }} />
                          </div>
                          <div id="fileList4" className="mt-3"></div>
                        </div>


                      </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-12'>
                      <div className="mb-3">
                        <div >
                          <label htmlFor="currency" className="form-label heading-color">Currency:</label>
                          <select id="currency" name='currency' className="form-select">
                            <option value="$">$ USD</option>
                            <option value="£">£ Pound</option>
                            <option value="€">€ Euro</option>
                            <option value="₹">₹ Rupee</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="premiumFrequency" className="form-label heading-color">Premium Frequency</label>
                        <input type="text" className="form-control" id="premiumFrequency" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="premiumAmount" className="form-label heading-color">Premium Amount</label>
                        <input type="text" className="form-control" id="premiumAmount" />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="premiumAmount" className="form-label heading-color">Deductibles Or Copay</label>
                        <input type="text" className="form-control" id="premiumAmount" />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="premiumAmount" className="form-label heading-color">Payment Method</label>
                        <input type="text" className="form-control" id="premiumAmount" />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="premiumAmount" className="form-label heading-color">Commission Received</label>
                        <input type="text" className="form-control" id="premiumAmount" />
                      </div>

                      <div className='mb-3'>
                        <label>Invoice</label>
                        <div className="drag-area" id="dragArea5">

                          <h3 id="browseFilesBtn5">Drop files to upload</h3>
                          <input type="file" id="fileInput5" multiple style={{ display: "none" }} />
                        </div>
                        <div id="fileList5" className="mt-3"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <button className='btn-grey' style={{ margin: "30px 0px" }}>Save Profile</button>
            </div>





          </form>
        </div>
      </div>
    </div>
  );
};



export default EditCustomer;

const handleAddFields = () => {

  var container = document.getElementById('new-input-container');

  const newElem = document.createElement("input");
  newElem.setAttribute("type", "text");
  container.appendChild(newElem);
}

