import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { setTipos, setTipoSeleccionado } from '../../redux/features/TipoIDSlice';
import { getTipos } from '../../services/tipoID';

const TipoIDSelect = () => {
  const dispatch = useDispatch();
  const tipos = useSelector((state) => state.tipoID.tipos) || [];
  const tipoSeleccionado = useSelector((state) => state.tipoID.tipoSeleccionado);

  useEffect(() => {
    getTipos().then((response) => {
      dispatch(setTipos(response.msg));
    });
  }, [dispatch]);

  const handleChange = (event) => {
    dispatch(setTipoSeleccionado(event.target.value));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="tipo">Tipo de Identificacion</InputLabel>
      <Select
        labelId="tipo"
        name="tipo"
        label="Tipo de Identificacion"
        value={tipoSeleccionado || ''}
        onChange={handleChange}
      >
        {tipos.map((tipo) => (
          <MenuItem key={tipo.TIID_ID_TIPOID} value={tipo.TIID_ID_TIPOID}>
            {tipo.TIID_NOMBRE_TIPOID}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TipoIDSelect;
