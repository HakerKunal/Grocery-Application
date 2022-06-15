import React from "react";
import { render, screen, fireEvent, userEvent } from "../../../../test-utils";
import ProductList from "../ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { experimental_extendTheme } from "@mui/material";

describe("Product List Page", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    );
  test("Render text category", () => {
    setup();
    const text = screen.getByText(/Category/i);
    expect(text).toBeInTheDocument();
  });
  test("Render text vegetable", () => {
    setup();
    const text = screen.getByText(/Vegetable/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("category__options");
  });
  test("Render text household", () => {
    setup();
    const text = screen.getByText(/Household/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("category__options");
  });
  test("Render text Food", () => {
    setup();
    const text = screen.getByText(/Food/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("category__options");
  });
  test("Render text beauty", () => {
    setup();
    const text = screen.getByText(/Beauty/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("category__options");
  });
  test("Render text Electronics", () => {
    setup();
    const text = screen.getByText(/Electronics/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("category__options");
  });
  test("Render text Bevrages", () => {
    setup();
    const text = screen.getByText(/Bevrage/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("category__options");
  });
  test("Render text Fruit", () => {
    setup();
    const text = screen.getByText(/Fruit/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("category__options");
  });
  test("Render text Clear", () => {
    setup();
    const text = screen.getByText(/Clear/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("clear__button");
  });
});
