import { useElements } from "../../hooks/useElements";
import CardElement from "../CardElement";
import Loading from "../Loading";
import clases from "./ElementsResourse.module.css";

export default function ElementsResourse() {
  const { loading, elements, error } = useElements();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className={clases.container}>
      <div className={clases.containerElements}>
        {elements.length === 0 ? (
          <h1>No hay Elementos</h1>
        ) : (
          elements.map((element) => (
            <CardElement key={element.id} element={element} />
          ))
        )}
      </div>
    </div>
  );
}
