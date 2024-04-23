import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Components/Main";
import Cart from "../Components/Cart";
import Product from "../Components/Product";
import Error from "../Components/Error";
export default function Routess() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Product/:id" element={<Product />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
