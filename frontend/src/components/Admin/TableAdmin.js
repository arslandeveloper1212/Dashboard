
import React from 'react';

import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useParams } from 'react-router-dom';
const TableAdmin = ({ items, onDelete }) => {

  const handleDelete = (id) => {
    onDelete(id); // Call the onDelete function passed from props
  };


  // delete id code

  // const [user, setUser] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const showUserApi = "http://localhost:3000/delete-customer/${id}";

  // const handelDelete = async (id) => {
  //   console.log("id : -", id);

  // setIsLoading(true);
  // try {
  //   const response = await fetch(showUserApi.concat("/") + id, {
  //     method: "DELETE",
  //   });
  //   if (!response.ok) {
  //     throw new Error("Failed to delete item");
  //   }
  //   setUser(user.filter((item) => item.id !== id));
  // } catch (error) {
  //   setError(error.message);
  // } finally {
  //   setIsLoading(false);
  // }
  // };



  return (
    <div style={{ overflowX: "auto" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>

            <th scope="col">Type</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items && items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.type}</td>

              <td>
                <button className={`btn ${item.status === 'Active' ? 'btn-active' : 'btn-danger'}`}>{item.status}</button>
              </td>

              <td>
               


                <Link to={`/admin/update-user/${item.id}`} style={{padding:"0px 10px"}}>
                  <TiEdit style={{color: "#e2af40", fontSize:"22px"}} />
                </Link>


                <RiDeleteBin6Line onClick={() => handleDelete(item.id)} style={{color:"#d1494c" , fontSize:"22px"}} />



              </td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAdmin;
