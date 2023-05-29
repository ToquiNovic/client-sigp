import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReservation,
  deleteReservation,
  removeReservation,
} from "../redux/features/reservationCartSlice";

export function useCart() {
  const reservations = useSelector((state) => state.cart.reservations);
  const dispatch = useDispatch();

  const addElement = (data) => {
    dispatch(addReservation(data));
  };

  const removeElement = (data) => {
    dispatch(removeReservation(data));
  };

  const deleteElement = (data) => {
    dispatch(deleteReservation(data));
  };

  useEffect(() => {}, []);

  return { reservations, addElement, removeElement, deleteElement };
}
