import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReservation } from "../redux/features/reservationCartSlice";

export function useCart() {
  const reservations = useSelector((state) => state.cart.reservations);
  const dispatch = useDispatch();

  const addElement = (data) => {
    dispatch(addReservation(data));
  };

  useEffect(() => {}, []);

  return { reservations, addElement };
}
