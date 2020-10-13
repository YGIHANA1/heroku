import React from "react";
import Comic from "./comics";


export default ({ comics, comicSelected,changecomic }) => (
  <ul className="col-sm-4">
    {comics.map((comic, index) => (
      <Comic
        {...comic}
        key={index}
        changecomic={changecomic}
        comicSelected={comicSelected}
      />
    ))}
  </ul>
);