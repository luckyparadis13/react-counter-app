import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
