// import { it } from "mocha";
import { useParams } from "react-router-dom";
import React from "react";

const ItemDetail = () => {
  const { id } = useParams();

  const items = {
    1: { name: "Item 1", description: "Description for Item 1" },
    2: { name: "Item 2", description: "Description for Item 2" },
    3: { name: "Item 3", description: "Description for Item 3" },
  };

  const item = items[id];

  console.log(id);

  return (
    <div>
      {item ? (
        <>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </>
      ) : (
        <p>Item not found.</p>
      )}
    </div>
  );
};

export default ItemDetail;
