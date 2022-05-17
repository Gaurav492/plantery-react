import React from "react";
import CartItems from "../Components/CartItems";
import { Link } from "react-router-dom";
import useTitle from "../lib/changeTitle";

function Cart({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) {
  useTitle("Cart | ");
  const renderEmptyCart = () => (
    <main id="main">
      <div className="site-section">
        <div className="container">
          <h2 className="p-4">
            You have no items in your cart,{" "}
            <Link className="h5" to="/products">
              Start adding some products
            </Link>
          </h2>
        </div>
      </div>
    </main>
  );

  const renderCart = () => (
    <>
      <main id="main ">
        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table table-bordered mt-5">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-total">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.line_items.map((cartItem) => (
                        // <SingleProduct
                        //   key={product.id}
                        //   product={product}
                        //   onAddToCart={onAddToCart}
                        // />
                        <CartItems
                          key={cartItem.id}
                          item={cartItem}
                          onUpdateCartQty={onUpdateCartQty}
                          onRemoveFromCart={onRemoveFromCart}
                        />
                        // <h1>{product.name}</h1>
                      ))}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            <div className="row">
              <div className="col-md-7">
                <div className="row mb-5">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <Link
                      to="/products"
                      className="btn btn-primary btn-sm d-block"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={onEmptyCart}
                    >
                      Empty Cart
                    </button>
                  </div>
                  <div className="col-md-5"></div>
                </div>
                <div className="row">
                  <div className="col-md-12"></div>
                  <div className="col-md-8 mb-3 mb-md-0"></div>
                  <div className="col-md-4"></div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="row justify-content-end">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">
                          Cart Total
                        </h3>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6"></div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">
                          {cart.subtotal.formatted_with_symbol}
                        </strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="">
                        <Link to="/checkout" className="btn btn-success">
                          Proceed To Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );

  return <> {!cart.line_items.length ? renderEmptyCart() : renderCart()}</>;
}

export default Cart;
