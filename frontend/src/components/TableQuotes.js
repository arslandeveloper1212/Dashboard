import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const TableQuotes = ({ itemsquotes, onDelete, onUpdateStatus }) => {
  const [currentItem, setCurrentItem] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleEditClick = (item) => {
    setCurrentItem(item);
    setSelectedStatus(item.status); // Set the initial status in the dropdown
    const modal = new window.bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
  };

  const handleDropdownChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleSaveChanges = () => {
    if (currentItem) {
      onUpdateStatus(currentItem.id, selectedStatus); // Notify parent with updated status
      const modal = window.bootstrap.Modal.getInstance(document.getElementById('editModal'));
      if (modal) {
        modal.hide();
      }
      setCurrentItem(null);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      onDelete(id); // Call the onDelete function passed from props
    }
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Nationality</th>
            <th scope="col">Insurer</th>
            <th scope="col">Premium</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {itemsquotes && itemsquotes.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.nationality}</td>
              <td>{item.insurer}</td>
              <td>{item.premium}</td>
              <td>
                <button
                  style={{
                    backgroundColor: item.status === 'Policy Issued'
                      ? '#9de8d6'
                      : item.status === 'Quote Downloaded'
                      ? '#cacaca'
                      : item.status === 'Contacted'
                      ? '#f1d99c'
                      : item.status === 'Application Sent'
                      ? '#b9befc'
                      : 'transparent',
                    color: item.status === 'Policy Issued'
                      ? '#018768'
                      : item.status === 'Quote Downloaded'
                      ? '#7b7b7b'
                      : item.status === 'Contacted'
                      ? '#db9f01'
                      : item.status === 'Application Sent'
                      ? '#424de5'
                      : 'black',
                    padding: '4px 8px',
                    borderRadius: '15px',
                    border: '2px solid',
                    borderColor: item.status === 'Policy Issued'
                      ? '#04b087'
                      : item.status === 'Quote Downloaded'
                      ? '#7a7a7a'
                      : item.status === 'Contacted'
                      ? '#d89d00'
                      : item.status === 'Application Sent'
                      ? '#4750d1'
                      : '#cccccc',
                  }}
                >
                  {item.status}
                </button>
              </td>
              <td>
                <Link to={`/view-quotes/${item.id}`}>
                  <FaEye style={{ color: "#1a846a", fontSize: "22px" }} />
                </Link>
                <Link to="#" onClick={() => handleEditClick(item)} style={{ padding: "0px 10px" }}>
                  <TiEdit style={{ color: "#e2af40", fontSize: "22px" }} />
                </Link>
                <RiDeleteBin6Line onClick={() => handleDelete(item.id)} style={{ color: "#d1494c", fontSize: "22px" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for editing */}
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Edit Quote</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {currentItem && (
                <form>
                  <div className='mb-3'>
                    <div className="form-group">
                      <label htmlFor="statusSelect" className="form-label">Status</label>
                      <select 
                        id="statusSelect" 
                        name="statusSelect" 
                        className="form-select"
                        value={selectedStatus}
                        onChange={handleDropdownChange}
                      >
                        <option value="Quote Downloaded">Quote Downloaded</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Application Sent">Application Sent</option>
                        <option value="Policy Issued">Policy Issued</option>
                      </select>
                    </div>
                  </div>
                </form>
              )}
            </div>
            <div className="modal-footer">
              
              <button type="button" className="btn-grey" onClick={handleSaveChanges}>Send Invoice</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableQuotes;
