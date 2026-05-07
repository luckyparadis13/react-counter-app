import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>My Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
