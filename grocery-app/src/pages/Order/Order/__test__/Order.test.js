import React from "react";
import { render, screen, fireEvent, userEvent } from "../../../../test-utils";
import Order from "../Order";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Experimental_CssVarsProvider } from "@mui/material";

describe("Order Page", () => {
  const orders = { 1: 12, 3: 23 };
  const setup = () =>
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Order orders={orders} />} />
        </Routes>
      </BrowserRouter>
    );
  test("Conatins Orders Text ", () => {
    setup();
    const ordersText = screen.getByTestId("previous");
    expect(ordersText).toBeInTheDocument();
  });
});
