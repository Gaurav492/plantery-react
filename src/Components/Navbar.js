import React from "react";
import { Link } from "react-router-dom";

function Navbar({ totalItems }) {
  return (
    <>
      {/* ======= Header =======  */}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container">
          <div className="header-container d-flex align-items-center">
            <div className="logo mr-auto">
              <h1 className="text-light">
                <a href="../index.html">
                  <span>Plantery.</span>
                </a>
              </h1>
            </div>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li>
                  <Link to="/" data-aos="zoom-in" data-aos-delay="400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products">Products </Link>
                </li>
                <li>
                  <Link to="./about">About Us</Link>
                </li>

                <li className="get-started">
                  <Link to="/cart" className="ml-2 px-5">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="badge badge-warning" id="lblCartCount">
                      {totalItems}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* End Header  */}
    </>
  );
}

export default Navbar;
