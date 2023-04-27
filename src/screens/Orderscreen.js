import React, { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { ListGroup } from "react-bootstrap";
import { getOrderDetails, payOrder } from "../actions/orderAction";

function Orderscreen({ match }) {
  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();

  const addPayPalScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AaucYPMaRFUh-_oxSoxOl5wSEZEgHaFUfVqopKBgVd2kabPxvSmW1j6ZZymBkLq7y8ryclXS9YvVLQWwB&currency=USD";
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  useEffect(() => {
    if (!order || successPay || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, order, successPay]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
  };

  return (
    <ListGroup.Item>
      {loadingPay && <Loader />}
      {!order.isPaid && sdkReady ? (
        <PayPalButton
          amount={order.totalPrice}
          onSuccess={successPaymentHandler}
        />
      ) : (
        <Loader />
      )}
    </ListGroup.Item>
  );
}

export default Orderscreen;
