import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Tooltip,
} from "@mui/material";

const FilterRecurse = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Filtrar">
      <IconButton onClick={handleClickOpen}>
        <FilterAltIcon />
      </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Filtrar</DialogTitle>
        <DialogContent>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Opción de filtrado</InputLabel>
            <Select label="Opción de filtrado">
              <MenuItem value="option1">Opción 1</MenuItem>
              <MenuItem value="option2">Opción 2</MenuItem>
              <MenuItem value="option3">Opción 3</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Aplicar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FilterRecurse;
