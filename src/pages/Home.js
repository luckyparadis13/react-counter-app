import { useContext } from "react";
import UserContext from "../UserContext";

function Home() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>{user.role} based in San Francisco.</p>
    </div>
  );
}

export default Home;
