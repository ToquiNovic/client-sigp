import { useEffect, useId, useState } from "react";
import { getCategories } from "../../services/category";

export default function SelectCategory() {
  const elementID = useId();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setOptions(data);
    })
  }, [])

  return (
    <div>
      <label htmlFor={elementID}></label>
      <select id={elementID} name='category' required>
        <option value="">Categorias</option>
        {options.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
