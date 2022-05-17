import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../lib/changeTitle";

function Confirmation() {
  useTitle("Confirmation | ");
  return (
    <>
      <main id="main">
        <div className="site-section">
          <div className="container mt-5">
            <h1>Your Order has Been Placed!!</h1>
            <Link className="h4" to="/products">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Confirmation;
