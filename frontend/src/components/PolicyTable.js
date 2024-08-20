import React from 'react';

const PolicyTable = ({ itemspolicy }) => {
    console.log('Item Policy:', itemspolicy); // Debugging statement
   
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "25%" }} scope="col">PolicyName</th>
            <th style={{ width: "25%" }} scope="col">ImpDetails</th>
            <th style={{ width: "25%" }} scope="col">Status</th>
           
          </tr>
        </thead>
        <tbody>
          {itemspolicy && itemspolicy.map((itempolicy, index) => (
          
            <tr key={index}>
              <td>{itempolicy.PolicyName.PolicyName}</td>
              <td>{itempolicy.ImpDetails}</td>
             
              <td>
                <button className={`btn ${itempolicy.status === 'Active' ? 'btn-active' : 'btn-danger'}`}>
                  {itempolicy.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PolicyTable;
