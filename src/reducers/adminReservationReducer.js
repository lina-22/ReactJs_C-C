import { LOAD_ADMIN_RESERVATIONS } from "../actionTypes";

export const adminReservationStore = {
    isLoaded: false,
    reservation: null,
    // expiredReservations: null,
  };


  export const adminReservationReducer = (state, action) => {
    switch (action.type) {
      case LOAD_ADMIN_RESERVATIONS:
        return {
          isLoaded: true,
          reservations: action.payload,
        };
  
      default:
        return state;
    }
  };
  