import React from "react";
import SingleProduct from "../Components/SingleProduct";
import useTitle from "../lib/changeTitle";

function Products({ products, onAddToCart, onGetProduct }) {
  useTitle("Products | ");
  return (
    <>
      <main className="main">
        {/* ======= Breadcrumbs ======= */}
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Products</h2>
              {/* Bread Crums */}
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Products</li>
              </ol>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}
        <section className="product-area shop-sidebar shop section">
          <div className="container">
            <div className="row">
              {products.map((product) => (
                <SingleProduct
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onGetProduct={onGetProduct}
                />
                // <h1>{product.name}</h1>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Products;
