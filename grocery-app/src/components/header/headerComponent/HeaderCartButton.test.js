import React from "react";
import { render, screen } from "../../../test-utils";
import HeaderCartButton from "./HeaderCartButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Header cart button", () => {
  test("Header cart button present in the page ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderCartButton />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText("Your Cart")).toBeInTheDocument();
  });
});
describe("Header cart button", () => {
  test("Header cart cart button present in the page ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderCartButton />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByTestId("shopping-carticon")).toBeInTheDocument();
  });
});
describe("Header cart button", () => {
  test("should render a  button  ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HeaderCartButton />} />
        </Routes>
      </BrowserRouter>
    );
    const primaryButton2 = screen.getByRole("button");
    expect(primaryButton2).toHaveClass("button");
  });
});
