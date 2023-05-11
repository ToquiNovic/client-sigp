import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { findPhysicalResource } from "../../services/physicalResource";
import style from "./SearchBar.module.css";

const SearchBar = ({ setSearchResults }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { search } = Object.fromEntries(new window.FormData(e.target));
    const data = await findPhysicalResource(search);
    setSearchResults(data.msg);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={style.customsearchbar}
        sx={{ m: 1 }}
        id="search-bar"
        name="search"
        label="Ingrese el Nombre del Recurso"
        variant="outlined"
        placeholder="Buscar..."
        required
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
