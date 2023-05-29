import axios from "axios";

export const getElements = async () => {
  try {
    return (await axios.get("/api/elements")).data;
  } catch (error) {
    throw new Error("Error con el servidor!");
  }
};

export const getElementsName = async ({ name }) => {
  try {
    return (await axios.get(`/api/elements?name=${encodeURI(name)}`)).data;
  } catch (error) {
    throw new Error("Error con el servidor!");
  }
};
