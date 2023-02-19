import React from "react";
import Table from "react-bootstrap/Table";

export default function MapArr() {
  const users = [
    { name: "abc", email: "abc@mail.com" },
    { name: "pqr", email: "pqr@mail.com" },
    { name: "xyz", email: "xyz@mail.com" },
  ];
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td>{++index}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
