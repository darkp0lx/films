import React from "react";
import CharacterItem from './CharacterItem'
const FilmsGrid = ({ loading, data }) => {
  return loading ? (
    <h1>loading--</h1>
  ) : (
    <section className="cards">
      {data.Search? data.Search.map(item=>(
        <CharacterItem key={item.imdbID} item={item}/>
      )):""}
    </section>
  );
};

export default FilmsGrid;
