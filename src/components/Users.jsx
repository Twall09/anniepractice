import React from "react";

const Users = ({ users }) => {
  const theUsers = users.filter((user) => user.firstName.startsWith("B"));
  return (
    <div>
      <h1>Users starting with letter B</h1>
      <ul>
        {theUsers.map((user) => (
          <li key={user.id}>
            {user.firstName}
            {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
