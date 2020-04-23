import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class CartProducts extends Component {
  state = {};
  render() {
    return (
      <Container>
        <div className="mt-3">
          <h5>Shopping Cart ({this.props.cartCnt} Items)</h5>
          <div className="style__divider___1j_Fp mt-2" />

          {this.props.cartProductsArr ? (
            this.props.cartProductsArr.map(product => (
              <div>
                <div className="d-flex">
                  <div
                    className="col-2"
                    style={{
                      width: "12.499999995%",
                      flex: "0 0 12.499%",
                      maxWidth: "12.499%"
                    }}
                  >
                    <Image
                      src={product ? product.photos[0] : ""}
                      className="productImg"
                      style={{
                        //width: "130px",
                        height: "130px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        margin: "auto 0"
                      }}
                    />
                  </div>
                  <div
                    className="col-10"
                    style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontSize: "17px"
                    }}
                  >
                    <div className="justify-content-between d-flex">
                      <div>
                        <Link
                          className="name_style"
                          to={`/productPage/${product._id}`}
                        >
                          {product.productName}
                        </Link>
                      </div>
                      <div className="mr-5 price_style">
                        ${product.productPrice}
                      </div>
                    </div>
                    <div class="stock_style">In stock</div>
                    <div className="pt-2 action_style">
                      <span
                        className="mr-2 delete_style"
                        onClick={() => {
                          this.props.deleteCartProduct({
                            data: {
                              data: { id:localStorage.getItem("ID"),
                                      _id: product._id }
                            }
                          });
                        }}
                      >
                        Delete
                      </span>
                      <span className="mr-2">|</span>
                      <span
                        className="move_style"
                        onClick={() => {
                          this.props.moveCartToSaved({
                            id:localStorage.getItem("ID"),
                            productId: product._id 
                          });
                        }}
                      >
                        Move to Save For Later
                      </span>
                    </div>
                  </div>
                </div>
                <div className="style__divider___1j_Fp mt-2" />
              </div>
            ))
          ) : (
            ""
          )}
        </div>
      </Container>
    );
  }
}

export default CartProducts;
