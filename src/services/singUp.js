import axios from "axios";

export const singUp = async (Credential) => (await axios.post("/api/singup", Credential)).data;