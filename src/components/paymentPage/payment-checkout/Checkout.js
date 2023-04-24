import React, { useEffect, useState } from "react";

import "./checkout.css";

export default function Checkout({setState}) {
 

  return (
    <div>
      <body>
        <div id="main">
          <div class="headerdiv">
            <div class="header"></div>
          </div>
          <div class="formhead">
            <h1>Checkout</h1>
            <div class="processbar">
              <div class="prc1">
                <p>Address</p>
              </div>
              <div class="prc2">
                <p>Shipping Details and Payment</p>
              </div>
            </div>
            <br />
            <hr />
          </div>
          <div id="paymain">
            <div class="cards1">
              <p class="cardheader">Select payment method</p>
              <div class="paycard">
                <span>
                  <input type="radio" name="" id="cardradio" />
                  Enter payment method
                  <img
                    src="https://img.shop.com/Image/local/images/cc/amex.jpg"
                    alt=""
                  />
                  <img
                    src="https://img.shop.com/Image/local/images/cc/discover.jpg"
                    alt=""
                  />
                  <img
                    src="https://img.shop.com/Image/local/images/cc/mastercard.png"
                    alt=""
                  />
                  <img
                    src="https://img.shop.com/Image/local/images/cc/visa.jpg"
                    alt=""
                  />
                </span>
              </div>
              <div class="bitpay">
                <span>
                  <input type="radio" name="" id="cardradio" />
                  Enter payment method
                  <img
                    src="https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg"
                    alt=""
                    width="250px"
                  />
                </span>
              </div>
              <div class="sezzle">
                <a href="https://checkout.sezzle.com/welcome">
                  <img
                    src="https://img.shop.com/Image/local/images/cc/SezzlePaymentBtn_Small-purple.svg"
                    alt=""
                    width="250px"
                  />
                </a>
              </div>
              <div class="paypal">
                <a href="https://www.paypal.com">
                  <img
                    src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png"
                    alt=""
                    width="220px"
                  />
                </a>
              </div>
              <div class="paycredit">
                <a href="https://www.paypal.com">
                  <img
                    src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/ppcredit_MD_BNPOT_1x.png"
                    alt=""
                    width="220px"
                  />
                </a>
              </div>
              <div class="mastervisa">
                <a href="https://www.paypal.com">
                  <img
                    src="https://src.mastercard.com/assets/img/btn/src_chk_btn_147x034px.svg?locale=en_us&paymentmethod=master,visa,discover,amex&checkoutid=a4a6w4v6h7cg0iaijxn0j1iaoelnus5936"
                    alt=""
                    width="220px"
                  />
                </a>
              </div>
              <div class="cdtails">
                <div class="coupondiv">
                  <p>Apply Coupon</p>
                  <div class="couponbox">
                    <label for="" class="couponlabel">
                      Coupon Code:
                      {/* <input onChange={handleInput} type="text" id="getcode" /> */}
                    </label>
                    {/* <button onClick={applyCoupen} class="aplbtn">Apply</button> */}
                    <p id="couponmsg"></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="orderval">
              <div class="ordersum">
                <h1>Order Summary</h1>
                <hr />
                <div class="itemvalue">
                  {/* <div style={{display:"flex",justifyContent:"space-between"}}>
              <p class="left">Sub total :</p>
              <p class="right">{total}</p>
              </div>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <p class="left">Shipping:</p>
                <p class="right">Free</p>
              </div> */}

                  <br />
                  <p class="totval"></p>
                  <br />
                  <p class="left">Sub total :</p>
                  <br />
                  {/* <p class="right">{total}</p> */}
                  <br />
                  <p class="left">Shipping:</p>
                  <br />
                  <p class="right">Free</p>
                  <br />
                  <p id="copontrue"></p>
                  <br />
                  <p id="couponval"></p>
                  <br />

                  <p class="fintag">Order Total:</p>
                  {/* <p class="finval">{total}</p> */}
                  <hr class="green" />
                  <div class="gettxt">
                    <div class="alerttxt">
                      <input type="checkbox" name="" id="checkbox" />
                      <p class="right2">
                        Get text alerts for this order
                        <br />
                        mobilePhone
                      </p>
                    </div>
                    <hr />
                    <p id="getmob"></p>
                    <p class="left2">Message and data rates may apply.</p>
                    <p class="left2">
                      Mobile number can be changed in your Profile.
                    </p>
                  </div>
                  <div class="plcorder">
                    <button
                      onClick={() => {
                       setState(3)
                      }}
                      id="plcbtn"
                    >
                      Place Order
                    </button>
                  </div>
                  <div class="gettxt">
                    <p>
                      Let us know how we are doing <a href="">Send Feedback</a>
                    </p>
                    <p class="tnk">Thanks!</p>
                    <p>
                      Your feedback is appreciated and reviewed by our team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer id="footer">
          © 1997-2022 Market America, Inc. or its affiliates. All other
          designated trademarks, copyrights, and brands are the property of
          their respective owners. (famos-p19) Privacy Policy | Terms of Use |
          Advertising Disclosure | Return Policy | Shipping Information
          <section class="digimg"></section>
        </footer>
      </body>
    </div>
  );
}
