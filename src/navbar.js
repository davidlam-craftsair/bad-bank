import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="justify-content-center" >
              <div className="d-grid justify-content-center" >
                <i className="fa-solid fa-house"></i>
              </div>
              <p >Home</p>
            </div>
          </a>

          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="pay">
                  <div className="d-g/Users/davidlam/library/mobile documents/com~apple~CloudDocs/Dev/javascript/react/built_without_toolchains/test_badbank/src
rid justify-content-center">
                    <i className="fa-solid fa-basket-shopping"></i>

                  </div>
                  <p>Pay</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="transfer">
                  <div className="d-grid justify-content-center">
                    <i className="fa-solid fa-right-left"></i>
                  </div>
                  <p>Transfer</p>
                </Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav mb-2">
            <li className="d-flex nav-item">
              <Link className="nav-link" to="login">Login</Link>
            </li>
            <li className="d-flex nav-item">
              <Link className="nav-link" to="createaccount">Create Account</Link>
            </li>
          </ul>
        </div>
      </nav >
    </>
  );
}
