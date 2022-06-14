import React from "react";
import { render, screen } from "../../../test-utils";
import OrderButton from "./OrderButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Order cart button", () => {
  test("Order cart button present in the page ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<OrderButton />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText("Orders")).toBeInTheDocument();
  });
});
describe("Order cart button", () => {
  test("should render a  button  ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<OrderButton />} />
        </Routes>
      </BrowserRouter>
    );
    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toHaveClass("button__profile");
  });
});
