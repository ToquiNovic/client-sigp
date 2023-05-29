import { useCart } from "../../hooks/useCart";

export default function ItemCart({ item }) {
  const { addElement, removeElement, deleteElement } = useCart();
  const { image, name, amount } = item;

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "100%",
        gridTemplateColumns: "2fr 1fr 2fr",
        borderBottom: "2px solid black",
        padding: "1rem",
        marginBottom: "1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          placeItems: "center",
        }}
      >
        <img
          src={
            image
              ? image
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6H866DdmDTJ-LBjDxLCwDruIPM8QHRcUXIw&usqp=CAU"
          }
          alt={name}
        />
        <h3>{name}</h3>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={() => addElement(item)} className="text-2">
          +
        </button>
        <p className="text-2">{amount}</p>
        <button onClick={() => removeElement(item)} className="text-2">
          -
        </button>
      </div>
      <div>
        <button onClick={() => deleteElement(item)} className="text-2">
          Delete
        </button>
      </div>
    </div>
  );
}
