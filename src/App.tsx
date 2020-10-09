import { Link, Router } from "@reach/router";
import React from "react";
import { render } from "react-dom";
import About from "./About";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
