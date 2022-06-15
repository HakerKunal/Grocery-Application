import React from "react";
import { render, screen, fireEvent, userEvent } from "../../../../test-utils";
import CartItem from "../CartItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Cart Item Page", () => {
  const item = {
    qty: 2,
    imgLocation: "test-image",
    title: "test-title",
    name: "test-name",
    price: 2000,
  };
  const setup = () =>
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<CartItem item={item} />} />
        </Routes>
      </BrowserRouter>
    );
  test("Renders Image", () => {
    setup();
    const itemImage = screen.getByRole("img");
    expect(itemImage).toBeInTheDocument();
    expect(itemImage).toHaveAttribute("src", "test-image");
    expect(itemImage).toHaveAttribute("alt", "test-name");
  });
  test("Contains correct item name  ", () => {
    setup();
    const name = screen.getByTestId("test-name");
    expect(name.textContent).toBe("test-name");
  });
  test("Contains correct item price  ", () => {
    setup();
    const price = screen.getByTestId("test-price");
    expect(price.textContent).toBe("Rs 2000");
  });
  test("Contains input Filed For Quantity  ", () => {
    setup();
    const input = screen.getByDisplayValue(item.qty);

    expect(input.value).toBe("2");
  });
  test("render Button- + ", () => {
    setup();
    const button = screen.getByRole("button", { name: "+" });

    expect(button).toHaveClass("qty__button");
  });
  test("render Button- - ", () => {
    setup();
    const button = screen.getByRole("button", { name: "-" });

    expect(button).toHaveClass("qty__button");
  });
});
