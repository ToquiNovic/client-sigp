import React from "react";
import { Box } from "@mui/material";
import Reservar from "../Reservar";
import DetaillPhysicalResource from "../DetaillPhysicalResource";

export default function BoxReservar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DetaillPhysicalResource />
      <hr style={{ backgroundColor: "black", height: "2px", width: "100%" }} />
      <Reservar />
    </Box>
  );
}



