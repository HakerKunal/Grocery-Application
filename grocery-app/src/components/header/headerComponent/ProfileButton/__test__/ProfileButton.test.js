import React from "react";
import { render, screen } from "../../../../../test-utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileButton from "../ProfileButton";

describe("Profile cart button", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ProfileButton />} />
        </Routes>
      </BrowserRouter>
    );
  test("Profile button present in the page ", () => {
    setup();

    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  test("should render a  button  ", () => {
    setup();
    const profileButton = screen.getByRole("button");
    expect(profileButton).toHaveClass("button__profile");
  });
});
