import React from "react";
import { render, screen } from "../../../test-utils";
import SignInButton from "./SignInButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Sign In button", () => {
  test("Sign in button present in the page ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignInButton />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });
});
describe("Sign In  button", () => {
  test("should render a  button  ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignInButton />} />
        </Routes>
      </BrowserRouter>
    );
    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toHaveClass("button");
  });
});
