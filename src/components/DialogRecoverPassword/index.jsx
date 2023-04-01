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
import { recoverPassword } from "../../services/sendEmail";

export default function DialogRecoverPassword({ open, handleClose }) {
  const [usuario, setUsuario] = useState("");

  const handleSubmit = () => {
    console.log(usuario);
    recoverPassword({ nickName: usuario })
      .then((data) => {
        handleClose();
        setUsuario("");
        Swal.fire("", data.msg, "success");
      })
      .catch((res) => {
        handleClose();
        setUsuario("");
        Swal.fire("", res.response.data.msg, "error");
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Olvido contrseña</DialogTitle>
      <DialogContent>
        <DialogContentText>Digita tu usuario</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Numero de Documento"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
        <Button onClick={handleSubmit}>Enviar</Button>
      </DialogActions>
    </Dialog>
  );
}
