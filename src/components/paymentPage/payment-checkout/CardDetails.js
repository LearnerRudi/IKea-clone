import React, { useState } from "react";
import "./cardDetails.css";
import { useToast } from "@chakra-ui/react";

export default function CardsDetails({ setState }) {
  const err = useToast();
  const [formData, setFormData] = useState({
    cardNo: "",
    exp: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      formData.cardNo.trim() == "" ||
      formData.exp.trim() == "" ||
      formData.password.trim() == ""
    ) {
      err({
        title: "Form Validation",
        description: "Please fill all details.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      setState(4);
    }
  };

  return (
    <div>
      <body>
        <div id="head2q"></div>
        <hr />
        <div id="medq">
          <div id="p3q">
            <h1 id="head2ingq">Choose payment method</h1>
            <br />
            <p id="p4q">Choose the payment method you prefer</p>
          </div>
        </div>
        <h3 id="H3q">Payment Method Options</h3>

        <div id="mainq">
          <div id="cardq">
            <div id="cardDeatilsq">
              <div id="iconq">
                <img
                  src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Credit_Debit_Card.svg"
                  alt=""
                />
              </div>
              <div id="cardPq">
                <p id="crq">Credit/Debit Card</p>
                <p id="drq">Visa, Mastercard, Rupay & more</p>
              </div>
              <img
                id="img2q"
                src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/dropdown-right-arrow.png"
                alt=""
              />
            </div>

            <div id="cardssssq">
              <div id="cardssq">
                <div id="icon1q">
                  <img
                    src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPI.svg"
                    alt=""
                  />
                </div>
                <div id="cardP1q">
                  <p id="cr1q">UPI</p>
                  <p id="dr1q">Google Pay, PhonePe, Paytm & more</p>
                </div>
              </div>

              <div id="cardss1q">
                <div id="icon2q">
                  <img
                    src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Netbanking.svg"
                    alt=""
                  />
                </div>
                <div id="cardP2q">
                  <p id="cr2q">NetBanking</p>
                  <p id="dr2q">Pay through your favourite bank</p>
                </div>
              </div>

              <div id="cardss2q">
                <div id="icon3q">
                  <img
                    src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Snpl.svg"
                    alt=""
                  />
                </div>
                <div id="cardP3q">
                  <p id="cr3q">Shop now & Pay later</p>
                  <p id="dr3q">Zest money, Simpl & more</p>
                </div>
              </div>

              <div id="cardss3q">
                <div id="icon4q">
                  <img
                    src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/PaytmPaymentOption.svg"
                    alt=""
                  />
                </div>
                <div id="cardP4q">
                  <p id="cr4q">Paytm Wallet</p>
                  <p id="dr4q">Link your Paytm wallet and pay</p>
                </div>
              </div>

              <div id="cardss4q">
                <div id="icon5q">
                  <img
                    src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/GiftCard.svg"
                    alt=""
                  />
                </div>
                <div id="cardP5q">
                  <p id="cr5q">Gift card</p>
                  <p id="dr5q">One card for all Nykaa apps</p>
                </div>
              </div>

              <div id="cardss5q">
                <div id="icon6q">
                  <img
                    src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/EMI.svg"
                    alt=""
                  />
                </div>
                <div id="cardP6q">
                  <p id="cr6q">EMI</p>
                  <p id="dr6q">Easy installments</p>
                </div>
              </div>
            </div>
          </div>
          <div id="cardsDetailsq">
            <h3 id="head22q">Credit/Debit Card</h3>
            <hr id="lineq" />
            <div id="logosq">
              <p id="p5q">WE ACCEPT</p>
              <img
                id="img3q"
                src="https://www.lyra.com/in/wp-content/uploads/sites/8/2020/03/card-schemes.png"
                alt=""
              />
            </div>

            <div id="formq" action="">
              <form onSubmit={handleSubmit}>
                <input
                  id="cardNumberq"
                  type="text"
                  placeholder="Card Number"
                  value={formData.cardNo}
                  onChange={(e) => {
                    setFormData({ ...formData, cardNo: e.target.value });
                  }}
                />
                <br />
                <input
                  type="text"
                  name=""
                  id="expiryq"
                  placeholder="Expiry(MM/YY)"
                  value={formData.exp}
                  onChange={(e) => {
                    setFormData({ ...formData, exp: e.target.value });
                  }}
                />
                <input
                  type="password"
                  name=""
                  id="cvvq"
                  placeholder="CVV"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                />
                <div id="checkedq">
                  <input type="checkbox" name="" id="checkq" />
                  <p id="p6q">Save this card securely for future</p>
                </div>
                <input type="submit" id="submitq" value="Pay" />
              </form>
            </div>
          </div>

          <div id="bagDetailsq">
            {/* <!-- --------------------------------------------------------------------------------------------- --> */}

            <div class="sub-menu-wrapq" id="subMenuq">
              <div class="sub-menuq">
                <div class="user-infoq">
                  <div id="fetchAddressq">
                    {/* <!-- <p id="i1">Animesh Kumar</p>
                            <p id="i2">Barola Sector 49 NEAR-SSC PUBLIC SCHOOL,</p>
                            <p id="i3">Uttar Pradesh</p>
                            <p id="i4">Noida-201301</p>
                            <p id="i5">7667694853</p>  --> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ------------------------------------------------------------------------------------------------ --> */}

            {/* <div id="bag2q" onclick="toggleMenus()">
                <h4 id="H6q">Price Details <br/><span>You are saving ₹{Math.round(total*0.1)}</span></h4>
                <p id="p9q"></p>
                <span>Rs.{total*0.9}</span>
            </div> */}

            {/* <!-- --------------------------------------------------------------------------------------- --> */}

            <div class="sub-menu-wrap1q" id="subMenusq">
              <div class="sub-menuq">
                <div class="user-infoq">
                  <div class="totalamntq">
                    <p id="p11q">Total Amount</p>
                    <p id="p2pq"></p>
                  </div>

                  <div class="shippingq">
                    <p id="p11q">Shipping</p>
                    <p id="p2p1p1q">Free</p>
                  </div>
                  <hr />
                  <div class="payq">
                    <h3 id="p12q">You Pay</h3>
                    <h3 id="hhhq"></h3>
                  </div>
                  <div id="designq">
                    <img
                      id="signq"
                      src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/3Success.svg"
                      alt=""
                    />
                    <h4 id="yayq">Yay! You will earn 549 Reward points</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ------------------------------------------------------------------------------------------ --> */}

            <div id="bag3q">
              <p id="p10q">
                Buy authentic products. Pay securely.
                <br /> Easy returns and exchange
              </p>
              <img
                id="lockq"
                src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/pay-secure-lock.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
