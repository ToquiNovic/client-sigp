import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getElementsName } from "../services/elements";

export function useDetailsElement() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [element, setElements] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        setError(null);
        const elements = await getElementsName({ name });
        if(!elements[0]) {
          throw new Error('El elemento no existe!')
        }
        setElements(elements[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [name]);

  return { loading, element, error };
}
