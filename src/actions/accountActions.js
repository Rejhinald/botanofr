import {
  ACCOUNT_ADD_REQUEST,
  ACCOUNT_ADD_SUCCESS,
  ACCOUNT_ADD_FAIL,
  ACCOUNT_UPDATE_REQUEST,
  ACCOUNT_UPDATE_SUCCESS,
  ACCOUNT_UPDATE_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_PAYMENT_REQUEST,
  USER_PAYMENT_SUCCESS,
  USER_PAYMENT_FAIL,
  CANCEL_SUBSCRIPTION_REQUEST,
  CANCEL_SUBSCRIPTION_SUCCESS,
  CANCEL_SUBSCRIPTION_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../constants/accountConstants";
import axios from "axios";

export const addAccount = (account) => async (dispatch) => {
  try {
    dispatch({
      type: ACCOUNT_ADD_REQUEST,
    });

    const { data } = await axios.post("https://botan0.pythonanywhere.com/auth/register/", account); //create a new product

    dispatch({
      type: ACCOUNT_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACCOUNT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://botan0.pythonanywhere.com/auth/login/",
      { email: email, password: password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.details
          ? error.response.data.details
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const updateAccount = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ACCOUNT_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };

    const { data } = await axios.put(`https://botan0.pythonanywhere.com/auth/updateuser/`, user, config);

    dispatch({
      type: ACCOUNT_UPDATE_SUCCESS,
      payload: data,
    });

    const updatedUserInfo = {
      ...userInfo,
      ...data,
    };

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: updatedUserInfo,
    });

    localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
  } catch (error) {
    dispatch({
      type: ACCOUNT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSubscriptionId =
  (user, orderId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ACCOUNT_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}`,
        },
      };

      const updatedUser = {
        ...user,
        orderId: orderId,
      };

      const { data } = await axios.put(
        "https://botan0.pythonanywhere.com/auth/subscriptionId/",
        updatedUser,
        config
      );
      
      console.log(user);
      dispatch({
        type: ACCOUNT_UPDATE_SUCCESS,
        payload: data,
      });

      const updatedUserInfo = {
        ...userInfo,
        ...data,
        // 'subscription_id': user,
      };

      // dispatch({
      //   type: USER_LOGIN_SUCCESS,
      //   payload: updatedUserInfo,
      // });
      // localStorage.removeItem("userInfo");
      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
    } catch (error) {
      dispatch({
        type: ACCOUNT_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  

export const paymentUserSuccess = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_PAYMENT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };

    const { data } = await axios.put("https://botan0.pythonanywhere.com/auth/updatepayment/", user, config); //create a new product

    dispatch({
      type: USER_PAYMENT_SUCCESS,
      payload: data,
    });

    const updatedUserInfo = {
      ...userInfo,
      ...data,
    };

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: updatedUserInfo,
    });

    localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
  } catch (error) {
    dispatch({
      type: USER_PAYMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const cancelSubscriptionUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CANCEL_SUBSCRIPTION_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };

    const { data } = await axios.put("https://botan0.pythonanywhere.com/auth/cancelsubscription/", user, config); 

    dispatch({
      type: CANCEL_SUBSCRIPTION_SUCCESS,
      payload: data,
    });

    const updatedUserInfo = {
      ...userInfo,
      ...data,
    };

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: updatedUserInfo,
    });

    localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
  } catch (error) {
    dispatch({
      type: CANCEL_SUBSCRIPTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const cancelSubscription = (id, user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CANCEL_SUBSCRIPTION_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };

    const { data } = await axios.put(`https://botan0.pythonanywhere.com/auth/cancelsubscription/${id}`, user , config); 

    dispatch({
      type: CANCEL_SUBSCRIPTION_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: CANCEL_SUBSCRIPTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };
    const { data } = await axios.get(`https://botan0.pythonanywhere.com/auth/user/${id}`, config);
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: {
        ...data,
        planId: data.planId,
        subscription_id: data.subscription_id, // add subscription_id to the userInfo object
      },
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.details
          ? error.response.data.details
          : error.message,
    });
  }
};



export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };

    const { data } = await axios.get("https://botan0.pythonanywhere.com/auth/userlist", config); 
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserInfo = (id, user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ACCOUNT_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.access}`,
      },
    };

    const { data } = await axios.put(`https://botan0.pythonanywhere.com/auth/updateuserinfo/${id}`, user, config, );

    dispatch({
      type: ACCOUNT_UPDATE_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: ACCOUNT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};