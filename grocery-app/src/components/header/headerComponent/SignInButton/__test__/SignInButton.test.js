import React from "react";
import { render, screen } from "../../../../../test-utils";
import SignInButton from "../SignInButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Sign In button", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignInButton />} />
        </Routes>
      </BrowserRouter>
    );
  test("Sign in button present in the page ", () => {
    setup();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });

  test("should render a  button  ", () => {
    setup();
    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toHaveClass("button");
  });
});
