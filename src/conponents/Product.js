import React from "react";

export default function Product(props) {
  function incrementQuantity(index) {}
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name}{" "}
          <span class="badge bg-secondary">${props.product.price}</span>{" "}
        </h2>
      </div>
      <div className="col-3">
        <div className="btn-group" role="group" /* aria-label="" */>
          <button type="button" class="btn btn-outline-danger">
            -
          </button>
          <button type="button" class="btn btn-outline-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-outline-info"
            onClick={this.incrementQuantity}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        {props.Product.quantity * props.Product.price}
      </div>
    </div>
  );
}
