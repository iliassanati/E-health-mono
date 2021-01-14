import {
  RDV_CREATE_FAIL,
  RDV_CREATE_REQUEST,
  RDV_CREATE_SUCCESS,
  RDV_DELIVER_FAIL,
  RDV_DELIVER_REQUEST,
  RDV_DETAILS_FAIL,
  RDV_DETAILS_REQUEST,
  RDV_DETAILS_SUCCESS,
  RDV_DOCTOR_LIST_FAIL,
  RDV_DOCTOR_LIST_REQUEST,
  RDV_DOCTOR_LIST_SUCCESS,
  RDV_PATIENT_LIST_FAIL,
  RDV_PATIENT_LIST_REQUEST,
  RDV_PATIENT_LIST_SUCCESS,
  RDV_PAY_FAIL,
  RDV_PAY_REQUEST,
  RDV_PAY_SUCCESS,
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

export const payRdv = (rdvId, paymentResult) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RDV_PAY_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/rdvs/${rdvId}/pay`,
      paymentResult,
      config
    );

    dispatch({
      type: RDV_PAY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RDV_PAY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deliverRdv = rdv => async (dispatch, getState) => {
  try {
    dispatch({ type: RDV_DELIVER_REQUEST });

    const {
      doctorLogin: { doctorInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${doctorInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/rdvs/${rdv._id}/deliver`,
      {},
      config
    );

    dispatch({ type: RDV_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RDV_DELIVER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const patientMyrdvs = () => async (dispatch, getState) => {
  try {
    dispatch({ type: RDV_PATIENT_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get('/api/rdvs/patient-rdvs', config);

    dispatch({ type: RDV_PATIENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RDV_PATIENT_LIST_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const doctorMyrdvs = () => async (dispatch, getState) => {
  try {
    dispatch({ type: RDV_DOCTOR_LIST_REQUEST });

    const {
      doctorLogin: { doctorInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${doctorInfo.token}`,
      },
    };
    const { data } = await axios.get('/api/rdvs/doctor-rdvs', config);

    dispatch({ type: RDV_DOCTOR_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RDV_DOCTOR_LIST_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
