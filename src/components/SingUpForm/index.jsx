import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import styles from "./SingUpFrom.module.css";
import TipoIDSelect from "../TipoIDSelect";
import { singUp } from "../../services/singUp";
import { useState } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import LoadImagePerfil from "../LoadImagePerfil";
import { useNavigate } from "react-router-dom";

const SingUpForm = () => {
  const [nombre1, setNombre1] = useState("");
  const [nombre2, setNombre2] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [numerodni, setNumberoDni] = useState("");
  const [correo, setCorreo] = useState("");
  const [genero, setGenero] = useState("");
  const tipoSeleccionado = useSelector(
    (state) => state.tipoID.tipoSeleccionado
  );

  const navigate = useNavigate();
  // const [image, setImage] = useState(null);
  // const [imageDataURL, setImageDataURL] = useState(null);

  const validarFormulario = () => {
    if (!nombre1 || !apellido1 || !numerodni || !correo) {
      Swal.fire(
        "",
        "Por favor completa todos los campos obligatorios",
        "error"
      );
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validarFormulario()) {
      singUp({
        nombre1,
        nombre2,
        apellido1,
        apellido2,
        tipodni: tipoSeleccionado,
        numerodni,
        correo,
        genero,
      })
        .then((data) => {
          Swal.fire("", data.msg, "success");
          navigate("/");
        })
        .catch((res) => {
          Swal.fire("", res.response.data.msg, "error");
        });
    }
  };

  // const handleImageUpload = (file, dataURL) => {
  //   console.log('Archivo de imagen seleccionado:', file);
  //   setImage(file);
  //   setImageDataURL(dataURL);
  // };

  return (
    <div>
      <Box
        className={styles.container}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
      >
        <form onSubmit={handleSubmit} className={styles.content}>
          <TextField
            label="Primer Nombre"
            value={nombre1}
            onChange={(e) => setNombre1(e.target.value)}
          />
          <TextField
            label="Segundo Nombre"
            value={nombre2}
            onChange={(e) => setNombre2(e.target.value)}
          />
          <TextField
            label="Primer Apellido"
            value={apellido1}
            onChange={(e) => setApellido1(e.target.value)}
          />
          <TextField
            label="Segundo Apellido"
            value={apellido2}
            onChange={(e) => setApellido2(e.target.value)}
          />

          <TipoIDSelect
            onChange={tipoSeleccionado}
            label="Tipo de Identificación"
          />

          <TextField
            label="Numero de Identificaion"
            value={numerodni}
            onChange={(e) => setNumberoDni(e.target.value)}
          />
          <TextField
            label="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Genero
            </FormLabel>
            <RadioGroup
              onChange={(e) => {
                setGenero(e.target.value);
              }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="F" control={<Radio />} label="F" />
              <FormControlLabel value="M" control={<Radio />} label="M" />
              <FormControlLabel value="Otro" control={<Radio />} label="Otro" />
            </RadioGroup>
          </FormControl>

          {/* <LoadImagePerfil
            onImageUpload={handleImageUpload}
          /> */}
          {/* <LoadImagePerfil onImageChange={handleImageUpload} /> */}

          {/* {imageDataURL && (
            <img
              src={imageDataURL}
              alt="Imagen de perfil"
              style={{ width: "100px", height: "100px" }}
            />
          )} */}

          <Button variant="contained" type="submit">
            Crear Cuenta
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default SingUpForm;
