import React from "react";
import "./../styles/App.css";
import ItemList from "./ItemList";
import { Route, Routes } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      Hey there!
      <Routes>
        <Route path="/" element={<ItemList />} />
        {/* <Route path="/itemList" element={<ItemList />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/itemdetail/:id" element={<ItemDetail />} />
      </Routes>
      {/* <ItemList /> */}
    </div>
  );
};

export default App;
