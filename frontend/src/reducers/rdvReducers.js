import {
  RDV_CREATE_FAIL,
  RDV_CREATE_REQUEST,
  RDV_CREATE_SUCCESS,
  RDV_DETAILS_FAIL,
  RDV_DETAILS_REQUEST,
  RDV_DETAILS_SUCCESS,
} from '../constants/rdvConstants';

export const rdvCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case RDV_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case RDV_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        rdv: action.payload,
      };

    case RDV_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const rdvDetailsReducer = (state = { rdv: {} }, action) => {
  switch (action.type) {
    case RDV_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case RDV_DETAILS_SUCCESS:
      return {
        loading: false,
        rdv: action.payload,
      };

    case RDV_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
