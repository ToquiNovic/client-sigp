import { Archive, Ballot } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import PictureIcon from "@mui/icons-material/AspectRatio";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: '5px',
  p: 4,
};

export default function CardElement({ element }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { id, name, state, category, stock } = element;

  return (
    <Tooltip title={name} placement="top-end">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6H866DdmDTJ-LBjDxLCwDruIPM8QHRcUXIw&usqp=CAU"
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Capacidad: {stock}
              <br />
              Estado: {state}
              <br />
              Tipo: {category}
            </Typography>
          </CardContent>
          <Tooltip title="Reservar">
            <IconButton
              onClick={() => navigate(`/reservar/${id}`)}
              aria-label="Reservar"
            >
              <Archive fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Inventario">
            <IconButton aria-label="Inventario">
              <Ballot fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Ver imagen">
            <IconButton onClick={() => setOpen(true)} aria-label="Ver imagen">
              <PictureIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </CardActionArea>
        <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6H866DdmDTJ-LBjDxLCwDruIPM8QHRcUXIw&usqp=CAU"
            alt="random"
            style={{ width: "100%" }}
          />
        </Box>
      </Modal>
      </Card>
    </Tooltip>
  );
}
