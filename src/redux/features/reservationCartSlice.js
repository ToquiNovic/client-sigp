import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const reservationCartSlice = createSlice({
  name: "reservationCart",
  initialState: {
    amount: 0,
    reservations: [],
  },
  reducers: {
    addReservation: (state, { payload }) => {
      const findReservation = state.reservations.find(
        (reser) => reser.id === payload.id
      );

      if (findReservation) {
        if (findReservation.amount >= payload.stock) {
          Swal.fire("", "No hay Stock", "warning");
          return { ...state };
        }

        return {
          ...state,
          amount: state.amount + 1,
          reservations: state.reservations.map((reser) =>
            reser.id === payload.id
              ? { ...reser, amount: reser.amount + 1 }
              : reser
          ),
        };
      }

      return {
        ...state,
        amount: state.amount + 1,
        reservations: [...state.reservations, { ...payload, amount: 1 }],
      };
    },
    removeReservation: (state, { payload }) => {
      if (state.amount > 0) {
        if (payload.amount > 1) {
          return {
            ...state,
            amount: state.amount - 1,
            reservations: state.reservations.map((reser) =>
              reser.id === payload.id
                ? { ...reser, amount: reser.amount - 1 }
                : reser
            ),
          };
        }

        return {
          ...state,
          amount: state.amount - 1,
          reservations: state.reservations.filter(
            (reser) => reser.id !== payload.id
          ),
        };
      }

      return { ...state };
    },
    deleteReservation: (state, { payload }) => {
      return {
        ...state,
        amount: state.amount - payload.amount,
        reservations: state.reservations.filter(
          (reser) => reser.id !== payload.id
        ),
      };
    },
  },
});

export const { addReservation, removeReservation, deleteReservation } =
  reservationCartSlice.actions;
export default reservationCartSlice.reducer;
