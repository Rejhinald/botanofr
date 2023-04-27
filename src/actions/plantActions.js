import {
  PLANT_LIST_REQUEST,
  PLANT_LIST_SUCCESS,
  PLANT_LIST_FAIL,
  PLANT_DETAILS_REQUEST,
  PLANT_DETAILS_SUCCESS,
  PLANT_DETAILS_FAIL,
  PLANT_DELETE_REQUEST,
  PLANT_DELETE_SUCCESS,
  PLANT_DELETE_FAIL,
  PLANT_CREATE_REQUEST,
  PLANT_CREATE_SUCCESS,
  PLANT_CREATE_FAIL,
} from "../constants/plantConstants";
import axios from "axios";

export const listPlants = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLANT_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.get(
      `https://botan0.pythonanywhere.com/api/plants/`,
      config
    );

    dispatch({
      type: PLANT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PLANT_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.messge,
    });
  }
};

export const listPlantDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PLANT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(
      `https://botan0.pythonanywhere.com/api/plants/${id}`
    );

    dispatch({
      type: PLANT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PLANT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deletePlants = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLANT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `https://botan0.pythonanywhere.com/api/products/delete/${id}/`,
      config
    );

    dispatch({
      type: PLANT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PLANT_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createPlants = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLANT_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `https://botan0.pythonanywhere.com/api/products/create/`,
      {},
      config
    );

    dispatch({
      type: PLANT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PLANT_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export default { listPlants, listPlantDetails, deletePlants, createPlants };
