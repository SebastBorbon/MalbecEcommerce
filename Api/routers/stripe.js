const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51K4szeFnWhKaaSIYkCxYZICvZj6Vr1vMhnfTlhgzoxRCohQcG2Oo8XWRWqt4rFFbSMXqJEKkwNcym9mEXZ4iXMq700L7qZLCqe"
);

router.post("/payment", (req, res) => {
  console.log(req.body);
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.json(stripeErr);
      } else {
        res.json(stripeRes);
      }
    }
  );
});

exports.router = router;
