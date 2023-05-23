import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import style from "./PhysicalResource.module.css";
import { useDispatch } from "react-redux";
import { setPhysicalResource } from "../../redux/features/physicalResourceSlice";
import { getPhysicalResource } from "../../services/physicalResource";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Archive from "@mui/icons-material/Archive";
import Ballot from "@mui/icons-material/Ballot";
import PictureIcon from "@mui/icons-material/AspectRatio";
import Modal from "@mui/material/Modal";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";

const PhysicalResource = ({ searchResults }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpenModal = (imageUrl) => () => {
    setSelectedImage(imageUrl);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    getPhysicalResource().then((response) => {
      dispatch(setPhysicalResource(response));
      setResources(searchResults.length > 0 ? searchResults : response);
      setIsLoading(false);
    });
  }, [dispatch, searchResults]);

  return (
    <div className={style.cardContainer}>
      {isLoading
        ? Array.from(new Array(6)).map((_, index) => (
            <Card key={index} className={style.cardItem} sx={{ maxWidth: 345 }}>
              <Skeleton variant="rectangular" height={190} />
              <CardContent>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
              </CardContent>
            </Card>
          ))
        : resources.map((resource, index) => (
            <Tooltip
              key={index}
              title={resource.REFI_NOMBRERESCURSOFISICO}
              placement="top-end"
            >
              <Card
                key={index}
                className={style.cardItem}
                sx={{ maxWidth: 345 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6H866DdmDTJ-LBjDxLCwDruIPM8QHRcUXIw&usqp=CAU"
                    alt={resource.REFI_NOMBRERESCURSOFISICO}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {resource.REFI_NOMBRERESCURSOFISICO}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Capacidad: {resource.REFI_CAPACIDADRECURSOFISICO}
                      <br />
                      Estado: {resource.REFI_ESTADORECURSOFISICO}
                      <br />
                      Tipo: {resource.TIRE_NOMBRETIPORECURSOFISICO}
                    </Typography>
                  </CardContent>
                  <Tooltip title="Reservar">
                    <IconButton
                      onClick={() =>
                        navigate(`/reservar/${resource.REFI_IDRESCURSOFISICO}`)
                      }
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
                    <IconButton
                      aria-label="Ver imagen"
                      onClick={handleOpenModal(
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6H866DdmDTJ-LBjDxLCwDruIPM8QHRcUXIw&usqp=CAU"
                      )}
                    >
                      <PictureIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                  <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                  >
                    <div className={style.modalContent}>
                      <img
                        src={selectedImage}
                        alt={resource.REFI_NOMBRERESCURSOFISICO}
                      />
                    </div>
                  </Modal>
                </CardActionArea>
              </Card>
            </Tooltip>
          ))}
    </div>
  );
};

export default PhysicalResource;
