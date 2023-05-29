import { useId, useState } from "react";
import { useCart } from "../../hooks/useCart";
import ItemCart from "../ItemCarr";
import clases from "./Cart.module.css";
import Swal from "sweetalert2";

export default function Cart() {
  const terms = useId();
  const { reservations } = useCart();
  const [acept, setAcept] = useState(false);

  return (
    <div className={clases.container}>
      <h1>Carrito</h1>
      <div>
        {reservations.length === 0 ? (
          <h1>No hay Elementos</h1>
        ) : (
          reservations.map((reser) => <ItemCart key={reser.id} item={reser} />)
        )}
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <div>
          <input
            id={terms}
            type="checkbox"
            checked={acept}
            onChange={() => {
              Swal.fire({
                title: "Terminos y Codiciones",
                text: "You won't be able to revert this!",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Aceptar",
              }).then((result) => {
                if (result.isConfirmed) {
                  setAcept(true);
                }
              });
            }}
            required
          />
          <label htmlFor={terms}>Aceptar terminos y condiciones</label>
        </div>
        <button type="submit">Solicitar</button>
      </form>
    </div>
  );
}
