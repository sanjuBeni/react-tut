import React from "react";
import Table from "react-bootstrap/Table";

export default function NestedList() {
  const users = [
    {
      name: "abc",
      email: "abc@mail.com",
      address: [
        { hno: 35, city: "Gurugram", country: "India" },
        { hno: 1135, city: "Noida", country: "India" },
      ],
    },
    {
      name: "pqr",
      email: "pqr@mail.com",
      address: [{ hno: 1125, city: "Noida", country: "India" }],
    },
    {
      name: "xyz",
      email: "xyz@mail.com",
      address: [{ hno: 1020, city: "Gurugram", country: "India" }],
    },
  ];
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td>1</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Table striped bordered hover>
                    <tbody>
                      {item.address.map((add, i) => {
                        return (
                          <tr key={i}>
                            <td>{add.hno}</td>
                            <td>{add.city}</td>
                            <td>{add.country}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
