import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ShowDataInTable = ({count}) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUser(data);
      console.log(("Api data", data));
    };
    fetchData();
  }, []);
  
  return (
    <>
        <table cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <thead>
            {user.map((users) =>
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.phone}</td>
                <td>{users.website}</td>
              </tr>
            )}
          </thead>
        </table>
    </>
  );
};

export default ShowDataInTable;
