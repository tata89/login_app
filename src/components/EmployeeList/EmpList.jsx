import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import tbl_data from "../../json_data/tbl_data.json";
import Emptbl from "./Emptbl";
const EmpList = () => {
  const [logged, setLogged] = useState();
  const [tbldata, setTbl_data] = useState(tbl_data.user);
  let token = localStorage.getItem("token");
  console.log(tbldata);
  useEffect(() => {
    if (token === "") {
      setLogged(false);
    }
  }, []);
  if (logged === false) {
    return <Redirect to="/" />;
  }
  return (
    <div style={{ width: "75%", margin: "0px auto" }}>
      <h1 style={{ textAlign: "left", marginTop: "15px" }}>Employee List</h1>
      <table style={{ marginTop: "30px" }} className="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">email</th>
            <th scope="col">Phone no</th>
          </tr>
        </thead>
        <tbody>
          {tbldata.map((item) => (
            <Emptbl key={item.id} user={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EmpList;
