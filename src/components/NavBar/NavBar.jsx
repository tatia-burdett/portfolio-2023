import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-light">
      <div id="#top" className="container-fluid">
        <a className="navbar-brand" href="#top">
          Tatia Burdett
        </a>
        <div className="navbar" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row hstack gap-3">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#top">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-2 btn btn-outline-secondary" href="#top">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
