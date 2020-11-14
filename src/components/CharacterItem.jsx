import React from "react";
const CharacterItem = ({ item }) => {
  return (
    <div className="Card">
      {item ? (
        <div className="card-inner">
          <div className="card-front p-0 item_container my-3 text-center text-light">
            <h1 className="m-0">{item.Title}</h1>
            <img src={item.Poster} alt="" />
          </div>
          <div className="p-0 item_container my-3 text-center text-light card-back">
            <div className="card-back-content">
              <h1>{item.name}</h1>
              <ul>
                <li>
                  <strong>nombre:</strong> {item.Title}
                </li>
                <li>
                  <strong>Año de publicación:</strong> {item.Year}
                </li>
                <li>
                  <strong>Tipo:</strong> {item.Type}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        "d"
      )}
    </div>
  );
};

export default CharacterItem;
