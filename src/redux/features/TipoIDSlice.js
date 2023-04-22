import { createSlice } from '@reduxjs/toolkit';

const tipoIDSlice = createSlice({
  name: 'tipoID',
  initialState: {
    tipos: [],
    tipoSeleccionado: null,
  },
  reducers: {
    setTipos: (state, action) => {
      state.tipos = action.payload;
    },
    setTipoSeleccionado: (state, action) => {
      state.tipoSeleccionado = action.payload;
    },
  },
});

export const { setTipos, setTipoSeleccionado } = tipoIDSlice.actions;

export default tipoIDSlice.reducer;
