import React from "react";
import { render, screen, fireEvent, userEvent } from "../../../../test-utils";
import Cart from "../Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Cart Item Page", () => {
  const cart = [
    { qty: 2, price: 100 },
    { qty: 2, price: 100 },
  ];
  const setup = () =>
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>
    );
  test("Renders text Cart Summary", () => {
    setup();
    const text = screen.getByText(/Cart Summary/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("summary__title");
  });
  test("render Button- Proceed to checkout ", () => {
    setup();
    const button = screen.getByRole("button", {
      name: /Proceed To Checkout/i,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("summary__checkoutBtn");
  });
  test("render Total Item quantity", () => {
    setup();
    const totalItem = screen.getByTestId("test-item");
    expect(totalItem).toBeInTheDocument();
  });
});
