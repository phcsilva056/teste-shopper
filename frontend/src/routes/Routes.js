import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import StockPage from "../pages/StockPage/StockPage";
import GlobalState from "../global/GlobalState";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <GlobalState>
              <OrderPage />
            </GlobalState>
          }
        />
        <Route
          path="/stock"
          element={
            <GlobalState>
              <StockPage />
            </GlobalState>
          }
        />
        <Route
          path="/cart"
          element={
            <GlobalState>
              <CartPage />
            </GlobalState>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
