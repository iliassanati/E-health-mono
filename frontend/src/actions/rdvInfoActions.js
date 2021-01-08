import {
  RDV_ADD_DATE,
  RDV_ADD_DOCTOR,
  RDV_ADD_PAYMENT_METHOD,
  RDV_ADD_RENSEIGNEMETS,
} from '../constants/rdvInfoConstants';
import moment from 'moment';
import axios from 'axios';

export const addToRdv = id => async dispatch => {
  const { data } = await axios.get(`/api/doctors/${id}`);

  dispatch({
    type: RDV_ADD_DOCTOR,
    payload: data,
  });

  localStorage.setItem('doctor', JSON.stringify(data));
};

export const saveDate = data => dispatch => {
  dispatch({
    type: RDV_ADD_DATE,
    payload: moment(data).format('MMMM Do YYYY, h:mm:ss a'),
  });

  localStorage.setItem('date', JSON.stringify(data));
};

export const saveRenseignements = data => dispatch => {
  dispatch({ type: RDV_ADD_RENSEIGNEMETS, payload: data });
  localStorage.setItem('renseignements', JSON.stringify(data));
};

export const savePaymentMethod = data => dispatch => {
  dispatch({
    type: RDV_ADD_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem('paymentMethod', JSON.stringify(data));
};
