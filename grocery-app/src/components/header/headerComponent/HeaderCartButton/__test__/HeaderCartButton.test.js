import React from "react";
import { render, screen } from "../../../../../test-utils";
import HeaderCartButton from "../HeaderCartButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Header cart button", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderCartButton />} />
        </Routes>
      </BrowserRouter>
    );
  test("Header cart button present in the page ", () => {
    setup();
    expect(screen.getByText("Your Cart")).toBeInTheDocument();
  });

  test("Header cart cart button present in the page ", () => {
    setup();
    expect(screen.getByTestId("shopping-carticon")).toBeInTheDocument();
  });

  test("should render a  button  ", () => {
    setup();
    const primaryButton2 = screen.getByRole("button");
    expect(primaryButton2).toHaveClass("button");
  });
});
