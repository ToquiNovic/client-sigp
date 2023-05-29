import appFirebase from "../../utils/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import SelectCategory from "../SelectCategory";
import { createdElement } from "../../services/elements";

const storage = getStorage(appFirebase);

const FromRegisterElements = () => {
  const [urlImage, setUrlImage] = useState("");

  const fileHandler = async (event) => {
    const file = event.target.files[0];
    const refFile = ref(storage, `images/${file.name}`);
    await uploadBytes(refFile, file);
    setUrlImage(await getDownloadURL(refFile));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { category, ...newElement } = Object.fromEntries(
      new window.FormData(event.target)
    );
    createdElement({
      ...newElement,
      categoryId: Number(category),
      image: urlImage,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input id="name" type="text" name="name" required />
        <label htmlFor="brand">Marca</label>
        <input id="brand" type="text" name="brand" required />
        <label id="description">Descripcion</label>
        <input id="description" type="text" name="description" required />
        <SelectCategory />
        {!urlImage ? (
          <input onChange={fileHandler} type="file" name="image" required />
        ) : (
          <img width="300" src={urlImage} alt="" />
        )}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FromRegisterElements;
