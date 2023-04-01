import axios from "axios";

export const recoverPassword = async (credentials) =>
  (await axios.post("/api/email/recoverpassword", credentials)).data;