import React from "react";
import comics from "./comics"

export default ({ id, title, imageUrl ,changecomic}) => (
    <li
      onClick={() => changecomic(id)}
      className={title === id ? "border-thick card mt-3" : "card mt-3"}
      key={title}
      style={{ cursor: "pointer" }}
    >
      <div className="media card-body">
        <img className="book-image" src={imageUrl} alt="comic cover" />
        <div>
          <p className="card-title font-weight-bold">{title}</p>
         
        </div>
      </div>
    </li>
  );