import {
  RDV_ADD_DATE,
  RDV_ADD_DOCTOR,
  RDV_ADD_PAYMENT_METHOD,
  RDV_ADD_RENSEIGNEMETS,
} from '../constants/rdvInfoConstants';

export const rdvInfoReducer = (
  state = {
    date: {},
    doctor: {},
    renseignements: {},
    paymentMethod: {},
  },
  action
) => {
  switch (action.type) {
    case RDV_ADD_DOCTOR:
      return {
        ...state,
        doctor: action.payload,
      };

    case RDV_ADD_DATE:
      return {
        ...state,
        date: action.payload,
      };

    case RDV_ADD_RENSEIGNEMETS:
      return {
        ...state,
        renseignements: action.payload,
      };

    case RDV_ADD_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
