import React, { useState } from "react";
import { Box } from "@mui/material";
import PhysicalResource from "../PhysicalResource";
import SearchBar from "../SearchBar";
import style from "./BoxHome.module.css";
import FilterRecurse from "../FilterRecurse/FilterRecurse";

const BoxHome = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className={style.container}>
      <Box component="div" className={style.content}>
        <div className={style.horizontalContainer}>
          <div className={style.filterContainer}>
            <FilterRecurse />
          </div>
          <div className={style.searchBarContainer}>
            <SearchBar setSearchResults={setSearchResults} />
          </div>
        </div>
        <div className={style.customComponent} />
        <PhysicalResource earchResults={searchResults} />
      </Box>
    </div>
  );
};

export default BoxHome;
