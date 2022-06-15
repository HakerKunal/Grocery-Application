import React from "react";
import { render, screen } from "../../../../../test-utils";
import OrderButton from "../OrderButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Order cart button", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<OrderButton />} />
        </Routes>
      </BrowserRouter>
    );
  test("Order cart button present in the page ", () => {
    setup();
    expect(screen.getByText("Orders")).toBeInTheDocument();
  });

  test("should render a  button  ", () => {
    setup();
    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toHaveClass("button__profile");
  });
});
