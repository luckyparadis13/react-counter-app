import { useState, useEffect } from "react";
import Header from "./components/Header";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      setUsers(data);
      setLoading(false);
    }
    getUsers();
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
