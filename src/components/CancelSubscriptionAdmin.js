import React, { useState } from "react";
import axios from "axios";
import {Button} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { cancelSubscription } from "../actions/accountActions";

const CancelSubscriptionAdmin = ({ subscriptionId, accessToken, id }) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch()
  const cancelSubscription2 = async () => {
    
    try {
      const response = await axios.post(
        `https://api.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionId}/cancel`,
        {
          reason: "The customer requested to cancel.",
          note: "This subscription was canceled by the customer."
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      if (response.status === 204) {
        dispatch(cancelSubscription(id))
        setSuccess(true);
        setError(null);
        
      } else {
        setSuccess(false);
        setError(response.data.error.message);
      }
    } catch (error) {
      setSuccess(false);
      setError(error.message);
    }
  };

  return (
    <div>
      <Button variant="danger" onClick={cancelSubscription2}><i className="fas fa-slash"></i></Button>
      {success && <p>Subscription canceled successfully.</p>}
      {error && <p>Error canceling subscription: {error}</p>}
    </div>
  );
};

export default CancelSubscriptionAdmin;
