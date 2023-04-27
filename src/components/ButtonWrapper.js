import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PayPalScriptProvider,
  PayPalButtons
} from '@paypal/react-paypal-js';
import { paymentUserSuccess, updateSubscriptionId, updateAccount } from '../actions/accountActions';

const PLAN_ID = 'P-28D816824R709661FMQQ5WMQ';

const ButtonWrapper = ({ type }) => {
  const [intent, setIntent] = useState('subscription');
  const dispatch = useDispatch();

  useEffect(() => {
    setIntent('subscription');
  }, [type]);

  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const dispatchPaymentUserSuccess = useMemo(() => {
    return () => dispatch(paymentUserSuccess());
  }, [dispatch]);

  const dispatchUpdateSubscriptionId = useMemo(() => {
    return (orderId) => dispatch(updateSubscriptionId(orderId));
  }, [dispatch]);

  const dispatchUpdateAccount = useMemo(() => {
    return (plan_id) => dispatch(updateAccount({ plan_id }));
  }, [dispatch]);

  const handleApprove = (data, actions) => {
    dispatchPaymentUserSuccess();
    dispatchUpdateAccount(PLAN_ID);
  };

  return (
    <PayPalScriptProvider options={{ intent }}>
      <PayPalButtons
        createSubscription={(data, actions) => {
          return actions.subscription
            .create({
              plan_id: PLAN_ID,
            })
            .then((orderId) => {
              console.log(orderId);
              dispatchUpdateSubscriptionId(orderId);
              return orderId;
            });
        }}
        onApprove={handleApprove}
        style={{
          shape: 'rect',
          color: 'blue',
          layout: 'vertical',
          label: 'subscribe',
        }}
      />
    </PayPalScriptProvider>
  );
};

export default ButtonWrapper;
