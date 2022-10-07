import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import StockPage from "../pages/StockPage/StockPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<OrderPage />} />
        <Route path="/stock" element={<StockPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
