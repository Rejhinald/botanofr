import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Subscriptionscreen() {
  const [subscribed, setSubscribed] = useState(false);
  const couponCode = "STEALDEAL20";

  const handleSubscribe = () => {
    navigator.clipboard.writeText(couponCode);
    setSubscribed(true);
  };

  return (
    <div className="container">
      <div className="coupon-card">
        <img src="https://media.istockphoto.com/id/1225394970/photo/ecology-protection-of-natural-environment-earth-day-concept.jpg?b=1&s=170667a&w=0&k=20&c=eiwkEtn8WebfpbSnYG-fz0EBsNNRegUti8WyrQFmUso=" alt="Handplant" />
        <h3>
          To All Subscribers Could Gain <br />
          All Access to This App
        </h3>

        <div className="coupon-row">
          <Link to="/subscribe">
            <span
              id="cpnBtn"
              onClick={handleSubscribe}
              className={subscribed ? "subscribed" : ""}
            >
              {subscribed ? "Subscribed" : "Subscribe"}
            </span>
          </Link>
        </div>

        <p>PHP 200 for One-time only</p>

        <div className="cirlce1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  );
}

export default Subscriptionscreen;
