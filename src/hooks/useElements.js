import { useEffect, useState } from "react";
import { getElements } from "../services/elements";

export function useElements() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [elements, setElements] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        setError(null);
        const elements = await getElements();
        setElements(elements);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  return { loading, elements, error };
}
