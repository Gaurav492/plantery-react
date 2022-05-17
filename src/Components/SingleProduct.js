import React from "react";

function SingleProduct({ product, onAddToCart, onGetProduct }) {
  return (
    <>
      {/* {console.log(img, name, price)} */}
      <div className="col-lg-4 col-md-6 col-12">
        <div className="single-product">
          <div className="product-img">
            <a>
              <img className="default-img" src={product.image.url} alt="#" />
            </a>
            <div
              className="button-head"
              onClick={() => onAddToCart(product.id, 1)}
            >
              <div className="product-action-2">
                <span className="p-4" title="Add to cart">
                  Add to cart
                </span>
              </div>
            </div>
          </div>
          <div className="product-content">
            <h3>
              <a href="product-details.html">{product.name}</a>
            </h3>
            <div className="product-price">
              <span className="pl-1">
                <i className="fas fa-rupee-sign"></i>
                {product.price.formatted}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
