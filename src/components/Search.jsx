import React, { useState } from "react";

const Search = ({getQuery}) => {
  const [text, setText] = useState("");
  const onChange=(t)=>{
    setText(t)
    getQuery(t)
  }
  return (
    <div className="container-buscar">
      <input
        className="buscar form-control"
        type="text"
        placeholder="buscar pelicula.."
        value={text}
        onChange={(e)=>
          onChange(e.target.value)
        }
      />
    </div>
  );
};

export default Search;
