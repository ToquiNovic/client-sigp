import axios from "axios";

export const login = async (credentials) =>
  (await axios.post("/api/login", credentials)).data;

export const createInventario = async (data, token) =>
  (
    await axios.post("/api/inventario", data, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data;

