import React from "react";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="company-container">
        <nav>
          <div className="logo">Sensedia Soccer Manager</div>
        </nav>
      </div>
      <div className="nav-container">
        <nav>
          <div className="logo">
            Welcome &gt;
            <Link to="/users/add">Register</Link> | <Link to="/">Users</Link>
          </div>
          <div className="logo"> help -</div>
          <div className="logo"> waffle menu</div>
          <div className="logo"> | User Name</div>
        </nav>
      </div>
      <div className="header-container">
        <div className="wrapper">
          <header>
            <div>
              <h3>Tipo de quadra</h3>
              <p>Society</p>
            </div>
            <div>
              <h3>Nível</h3>
              <p>Semi-profissional</p>
            </div>
            <div>
              <h3>Vitórias</h3>
              <p>345</p>
            </div>
          </header>
        </div>
      </div>
      <div className="body-container">
        <div className="wrapper">
          <Outlet />
        </div>
      </div>

      <div className="footer-container">
        <div className="wrapper">
          <footer>
            <div>Nothing here yet</div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
