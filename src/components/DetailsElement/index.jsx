import { useState } from "react";
import { useDetailsElement } from "../../hooks/useDetailsElement";
import Loading from "../Loading";
import clases from "./DetailsElement.module.css";
import { useCart } from "../../hooks/useCart";

export default function DetailsElement() {
  const { element, loading, error } = useDetailsElement();
  const { addElement, reservations } = useCart();
  const [dates, setDates] = useState({
    start: "",
    end: "",
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDates({ ...dates, [name]: value });
  };

  console.log(reservations);

  const add = () => {
    if (!dates.start || !dates.end) {
      return;
    }
    addElement({
      id: element.id,
      ...dates,
      stock: element.stock,
      name: element.name,
      image: element.image,
    });
  };

  return (
    <div className={clases.container}>
      <div className={clases.card}>
        <h5 className={clases.title}>Detalle Elemento</h5>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 50%)",
          }}
        >
          <div>
            <img
              src={
                element.image
                  ? element.image
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6H866DdmDTJ-LBjDxLCwDruIPM8QHRcUXIw&usqp=CAU"
              }
              alt={element.name}
            />
          </div>
          <div>
            <h5 className={clases.title}>{element.name}</h5>
            <p>{element.description}</p>
            <ul>
              <li>
                <strong>Capacidad: </strong> {element.stock}
              </li>
              <li>
                <strong>Estado: </strong> {element.state}
              </li>
              <li>
                <strong>Marca: </strong> {element.brand}
              </li>
              <li>
                <strong>Categoria: </strong> {element.category}
              </li>
            </ul>
          </div>
        </div>
        <br
          style={{
            border: "1px solid #9A9999",
          }}
        />
        <form
          onSubmit={(event) => event.preventDefault()}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 50%)",
            gap: "2rem",
          }}
        >
          <input
            type="datetime-local"
            name="start"
            onChange={handleChange}
            value={dates.start}
            required
          />
          <input
            required
            type="datetime-local"
            name="end"
            value={dates.end}
            onChange={handleChange}
          />
          <button type="submit" onClick={add}>
            Aniadir
          </button>
          <button type="submit">Solicitar</button>
        </form>
      </div>
    </div>
  );
}
