import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { findPhysicalResource } from "../../services/physicalResource";
import style from "./SearchBar.module.css";

const SearchBar = ({ setSearchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <form>
      <TextField
        className={style.customsearchbar}
        sx={{ m: 1 }}
        id="search-bar"
        onInput={async (e) => {
          const data = await findPhysicalResource(e.target.value);
          setSearchResults(data);
        }}
        label="Ingrese el Nombre del Recurso"
        variant="outlined"
        placeholder="Buscar..."
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
