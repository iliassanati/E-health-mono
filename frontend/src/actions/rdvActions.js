import {
  RDV_CREATE_FAIL,
  RDV_CREATE_REQUEST,
  RDV_CREATE_SUCCESS,
  RDV_DETAILS_FAIL,
  RDV_DETAILS_REQUEST,
  RDV_DETAILS_SUCCESS,
} from '../constants/rdvConstants';
import axios from 'axios';

export const createRdv = rdv => async (dispatch, getState) => {
  try {
    dispatch({ type: RDV_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post('/api/rdvs', rdv, config);

    dispatch({
      type: RDV_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RDV_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getRdvDetails = id => async (dispatch, getState) => {
  try {
    dispatch({ type: RDV_DETAILS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/rdvs/${id}`, config);
    dispatch({ type: RDV_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RDV_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
