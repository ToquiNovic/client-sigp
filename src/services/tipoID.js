import axios from "axios";

export const getTipos = async (credential) => {
  return (await axios.get("/api/tipoid", credential)).data;
};
  
