import React from "react";

// Wrapper 
import { StatueStatus } from "./pages";

// Router 
import { BrowserRouter as Router } from "react-router-dom";

// Bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Styles 
import "./sass/main.scss";

function App() {
  return (
    <Router>

      {/* Statue Status Wrapper  */}
      <StatueStatus />

    </Router>
  );
}

export default App;
