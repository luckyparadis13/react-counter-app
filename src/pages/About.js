import { useContext } from "react";
import UserContext from "../UserContext";

function About() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>About {user.name}</h1>
      <p>
        I'm a {user.role} with a background in business and salon ownership.
      </p>
      <p>
        I graduated from FullStack Academy and completed App Academy's AI
        Engineering course.
      </p>
    </div>
  );
}

export default About;
