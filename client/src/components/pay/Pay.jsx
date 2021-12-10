import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const STRIPE_KEY =
  "pk_test_51K4szeFnWhKaaSIYZQC8u4CsYNcIs7xfYZclOULVwtAG72nfWToBFrSIqsUHQuRhpA9FvjeSsUNdqoxRISR8Cjsb004orMmqWe";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        history.push("/success");
      } catch (err) {
        console.log(err);
      }
    };
    if (stripeToken) makeRequest();
  }, [stripeToken, history]);
  return (
    <div>
      <div>Payment</div>
      <StripeCheckout
        name="Malbec"
        image=""
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={STRIPE_KEY}
      >
        <button>Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
