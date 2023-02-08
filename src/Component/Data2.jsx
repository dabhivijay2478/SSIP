import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";

function Data() {
  const [customerName, setCustomerName] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [customersData, setCustomersData] = useState([]);
  const [updatedCustomerName, setUpdatedCustomerName] = useState("");
  const [updatedCustomerPassword, setUpdatedCustomerPassword] = useState("");
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
  const [mainservice, setAddmain] = useState("સેવા પસંદ કરો");
  const main = mainservice;
  useEffect(() => {
    const q = query(collection(db, main));
    onSnapshot(q, (querySnapshot) => {
      const table = [];
      querySnapshot.forEach((doc) => {
        table.push({ ...doc.data(), id: doc.id });
      });
      setData(table);
    });
  }, []);

  const updateData = (e) => {
    e.preventDefault();
    db.collection("customersData").doc(dataIdToBeUpdated).update({
      name: updatedCustomerName,
      password: updatedCustomerPassword,
    });

    setUpdatedCustomerPassword("");
    setUpdatedCustomerName("");
    setDataIdToBeUpdated("");
  };

  const deleteData = (id) => {
    db.collection("customersData").doc(id).delete();
  };

  return (
    <div className="App">
      
      <div className="App__Updateform">
        <input
          type="text"
          placeholder="Name"
          value={updatedCustomerName}
          onChange={(e) => setUpdatedCustomerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={updatedCustomerPassword}
          onChange={(e) => setUpdatedCustomerPassword(e.target.value)}
        />
        <button onClick={updateData}>Update</button>
      </div>
      
      <div className="App__DataDisplay">
        <table>
          <tr>
            <th>NAME</th>
            <th>PASSWORD</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>

          {customersData?.map(({ id, data }) => (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.password}</td>
              <td>
                <button
                  onClick={() => {
                    setDataIdToBeUpdated(id);
                    setUpdatedCustomerPassword(data.password);
                    setUpdatedCustomerName(data.name);
                  }}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteData(id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Data;
