import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_PAYMENT_REQUEST,
  USER_PAYMENT_SUCCESS,
  USER_PAYMENT_FAIL,
  ACCOUNT_UPDATE_REQUEST,
  ACCOUNT_UPDATE_SUCCESS,
  ACCOUNT_UPDATE_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../constants/accountConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ACCOUNT_UPDATE_REQUEST:
      return { loading: true };
    case ACCOUNT_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case ACCOUNT_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userPaymentReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PAYMENT_REQUEST:
      return { loading: true };
    case USER_PAYMENT_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_PAYMENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const cancelSubscriptionReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PAYMENT_REQUEST:
      return { loading: true };
    case USER_PAYMENT_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_PAYMENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };

    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case USER_DETAILS_RESET:
      return { user: {} };

    default:
      return state;
  }
};

export const UserListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true, users: [] };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
