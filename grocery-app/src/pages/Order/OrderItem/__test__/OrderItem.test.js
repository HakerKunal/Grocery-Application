import React from "react";
import { render, screen, fireEvent, userEvent } from "../../../../test-utils";
import OrderItem from "../OrderItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Experimental_CssVarsProvider } from "@mui/material";

describe("Order Page", () => {
  const item = {
    product_id: { imgLocation: "image" },
    quantity: 2,
    price: 2000,
  };
  const setup = () =>
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<OrderItem item={item} />} />
        </Routes>
      </BrowserRouter>
    );
  test("Conatins Img ", () => {
    setup();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "image");
    expect(img).toHaveAttribute("alt", "order");
  });
  test("Contains Qty Div ", () => {
    setup();
    const qtyDiv = screen.queryByText(/QTY-/i);
    expect(qtyDiv).toBeInTheDocument();
  });
  test("Contains correct Qty  ", () => {
    setup();
    const qty = screen.getByTestId("test-quantity");
    expect(qty.textContent).toBe("2");
  });
  test("Contains correct price  ", () => {
    setup();
    const price = screen.getByTestId("test-price");
    expect(price.textContent).toBe("Rs.2000");
  });
});
