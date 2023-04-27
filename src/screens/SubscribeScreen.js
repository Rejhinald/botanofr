import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonWrapper from "../components/ButtonWrapper";

function SubscribeScreen() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      {userInfo && !userInfo.isSubscriber && (
        <div className="text-center my-4">
          <h1>Subscribe now</h1>
          <PayPalScriptProvider
            options={{
              "client-id":
                "AUgpEmZhBp5JIEIFTUcY2fCqZGncGEduE2tq8suRS39oXl768r0V30K8JwyfmFvjSLGr8kMFSZTJQ2R5",
              components: "buttons",
              intent: "subscription",
              vault: true,
            }}
          >
            <ButtonWrapper type="subscription" />
          </PayPalScriptProvider>
        </div>
      )}
    </>
  );
}

export default SubscribeScreen;
