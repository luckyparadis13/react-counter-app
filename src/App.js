import { useState } from "react";

function App() {
  const [people, setPeople] = useState(["Lucky", "Alex", "Linda"]);
  const [input, setInput] = useState("");

  function addPerson() {
    if (input === "") return;
    setPeople([...people, input]);
    setInput("");
  }

  return (
    <div>
      <h1>People List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a name..."
      />
      <button onClick={addPerson}>Add</button>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
