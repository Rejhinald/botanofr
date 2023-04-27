import {
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
  PAYMENT_FAIL,
} from "../constants/orderConstants";

export const orderSubscribe = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_REQUEST:
      return { loading: true, error: null, success: null };

    case PAYMENT_SUCCESS:
      return { loading: false, success: true };

    case PAYMENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
