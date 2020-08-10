import React from "react";
const Emptbl = ({ user: { id, name, age, gender, email, phoneNo } }) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>{email}</td>
      <td>{phoneNo}</td>
    </tr>
  );
};

export default Emptbl;
