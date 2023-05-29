import { Box, Button, TextField, Typography } from "@mui/material";
import styles from "./FromRegisterElement.module.css";
import appFirebase from "../../utils/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDowloadURL } from "firebase/storage";

const db = getFirestore(appFirebase);
const storage = getStorage(appFirebase);

const FromRegisterElements = () => {
  let urlimDesc;

  const saveElement = async (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const brand = e.target.brand.value;
    const category = e.target.category.value;
    const description = e.target.description.value;

    const newElement = {
      nombre: nombre,
      image: urlimDesc,
      brand: brand,
      category: category,
      description: description,
    };

    //funcion de guardado
    try {
        await addDoc(collection(db, 'elements'), {
            ...newElement,
        })
    } catch (error) {
        console.log(error);
    }

    e.target.nombre.value = '';
    e.target.image.value = '';
    e.target.brand.value = '';
    e.target.category.value = '';
    e.target.description.value = '';
    e.target.file.value = '';
  };

  const fileHandle = async (e) => {
    const archiveI = e.target.files[0];
    const refArchive = ref(storage, `documentos/${archiveI.name}`)
    await uploadBytes(refArchive, archiveI)
    urlimDesc = await getDowloadURL(refArchive)
  }

  return (
    <div>
      <Box
        className={styles.container}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
      >
        <Typography variant="h4" gutterBottom>
          Agregar Elemento
        </Typography>
        <form onSubmit={saveElement}>
          <TextField label="Nombre Elemento" />
          <TextField label="Marca" />
          <TextField label="Categoria" />
          <TextField label="Descripcion" />
          <TextField type="file" label="Agregar Imagen: " id="file" onChange={fileHandle}/>
          <Button variant="contained" type="submit">
            Crear Elemento
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default FromRegisterElements;
