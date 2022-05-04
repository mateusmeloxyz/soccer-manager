import React from "react";
import "./App.css";
import { ReactComponent as SensediaWhiteLogoWithText } from "./img/white-sensedia-logo-text.svg";
import { ReactComponent as SensediaPurpleLogo } from "./img/purple-sensedia-icon.svg";
import { ReactComponent as IconArrow } from "./img/icon-arrow.svg";
import IconHelp from "./img/icon-help.svg";
import IconWaffleMenu from "./img/icon-waffle-menu.svg";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="company-container">
        <div>
          <SensediaWhiteLogoWithText />
        </div>
      </div>
      <div className="nav-container">
        <nav>
          <div className="breadcrumbs">
            <SensediaPurpleLogo />
            <p>Welcome</p> <IconArrow />
            <Link className="route-link" to="/users/add">
              Register
            </Link>{" "}
            |{" "}
            <Link className="route-link" to="/">
              Users
            </Link>
          </div>
          <div className="nav-menu">
            <div className="nav-options">
              <div className="button-box">
                <a href="#">
                  <img src={IconHelp} className="help-logo" alt="help-logo" />
                </a>
              </div>
              <div className="button-box">
                <a href="#">
                  <img
                    src={IconWaffleMenu}
                    className="help-logo"
                    alt="help-logo"
                  />
                </a>
              </div>
            </div>
            <div className="nav-user-options">
              <div className="user-icon">
                <p>UN</p>
              </div>
              <p>User Name</p>
            </div>
          </div>
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
