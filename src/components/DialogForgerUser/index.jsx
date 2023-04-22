import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import { recoverUser } from "../../services/forgetUser";

export default function DialogForgetUser({ open, handleClose }) {
  const [dni, setdni] = useState("");

  const handleSubmit = () => {
    console.log(dni);
    recoverUser({ dni: dni })
      .then((data) => {
        handleClose();
        setdni("");
        Swal.fire("Tu Usuraio es: ", data.msg, "success");
      })
      .catch((res) => {
        handleClose();
        setdni("");
        Swal.fire("", res.responce.data.msg, "error");
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Olvide mi Usuario</DialogTitle>
      <DialogContent>
        <DialogContentText>Digite su Numero de Documento.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          value={dni}
          onChange={(e) => setdni(e.target.value)}
          placeholder="Numero de Documento"
          type="number"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
        <Button onClick={handleSubmit}>Buscar</Button>
      </DialogActions>
    </Dialog>
  );
}
