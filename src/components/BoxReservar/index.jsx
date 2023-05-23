import React from "react";
import { Box } from "@mui/material";
import Reservar from "../Reservar";
import DetaillPhysicalResource from "../DetaillPhysicalResource";

export default function BoxReservar() {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <DetaillPhysicalResource />
      <Reservar />
    </Box>
  );
}
