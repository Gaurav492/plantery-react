import React from "react";

function CartItems({ item, onUpdateCartQty, onRemoveFromCart }) {
  // console.log(item.id);
  return (
    <>
      <tr>
        <td className="product-thumbnail">
          <img src={item.image.url} alt="Image" className="img-fluid" />
        </td>
        <td className="product-name">
          <h2 className="h5 text-black">{item.name}</h2>
        </td>
        <td>
          <span
            className="btn btn-outline-dark mr-2"
            onClick={() => {
              onUpdateCartQty(item.id, item.quantity - 1);
            }}
          >
            -
          </span>
          {item.quantity}
          <span
            className="btn btn-outline-dark ml-2"
            onClick={() => {
              onUpdateCartQty(item.id, item.quantity + 1);
            }}
          >
            +
          </span>
        </td>
        <td>{item.line_total.formatted_with_symbol}</td>
        <td>
          <span
            className="btn btn-dark"
            onClick={() => {
              onRemoveFromCart(item.id);
            }}
          >
            Remove
          </span>
        </td>
      </tr>
    </>
  );
}

export default CartItems;
