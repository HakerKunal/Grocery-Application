import React from "react";
import { render, screen, fireEvent, userEvent } from "../../../../test-utils";
import Product from "../Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Product Page", () => {
  const item = {
    imgLocation: "image-location",
    name: "test-name",
    price: 2000,
  };
  const setup = () =>
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Product item={item} />} />
        </Routes>
      </BrowserRouter>
    );
  test("Conatins Img ", () => {
    setup();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "image-location");
    expect(img).toHaveAttribute("alt", "product");
  });
  test("Render Correct Item Name", () => {
    setup();
    const itemName = screen.getByTestId(/test-itemName/i);
    expect(itemName).toBeInTheDocument();
    expect(itemName.textContent).toBe("test-name");
  });
  test("Render Correct Item Price", () => {
    setup();
    const itemPrice = screen.getByTestId(/test-itemPrice/i);
    expect(itemPrice).toBeInTheDocument();

    expect(itemPrice.textContent).toBe("Price- Rs 2000");
  });
  test("render Add to cart Button ", () => {
    setup();
    const button = screen.getByRole("button", { name: /Add to Cart/i });
    expect(button).toBeInTheDocument();
  });
  test("render View Details Button ", () => {
    setup();
    const button = screen.getByRole("button", { name: /View Details/i });
    expect(button).toBeInTheDocument();
  });
});
