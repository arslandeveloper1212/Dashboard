import React from 'react';

const TableSupport = ({ itemssupport }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Issue Catalog</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {itemssupport.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{new Date(item.date).toLocaleDateString()}</td>
                        <td>{item.issueCatalog}</td>
                        <td>{item.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableSupport;
