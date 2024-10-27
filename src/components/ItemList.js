import React from "react";
import { Link } from "react-router-dom";

const ItemList = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/itemdetail/1">Item 1</Link>
          </li>
          <li>
            <Link to="/itemdetail/2">Item 2</Link>
          </li>
          <li>
            <Link to="/itemdetail/3">Item 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ItemList;
