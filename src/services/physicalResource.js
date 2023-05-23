import axios from "axios";

export const getPhysicalResource = async (Credentials) => (await axios.get("/api/physicalresourse", Credentials)).data;

export const findPhysicalResource = async (name) => (await axios.post("/api/physicalresourse/searchRecurse", { name })).data;

export const getReservas = async (id) => (await axios.post("/api/physicalresourse/reservas", { id })).data;
