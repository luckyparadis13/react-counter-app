import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import UserContext from "./UserContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  const [user] = useState({ name: "Lucky", role: "Junior Developer" });

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
