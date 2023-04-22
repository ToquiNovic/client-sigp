import axios from "axios";

export const recoverUser = async (Credential) => (await axios.post("/api/forgetuser", Credential)).data;