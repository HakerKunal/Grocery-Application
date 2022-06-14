import React from "react";
import { render, screen } from "../../../test-utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileButton from "./ProfileButton";

describe("Profile cart button", () => {
  test("Profile button present in the page ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ProfileButton />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText("Profile")).toBeInTheDocument();
  });
});
describe("Profile cart button", () => {
  test("should render a  button  ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ProfileButton />} />
        </Routes>
      </BrowserRouter>
    );

    const profileButton = screen.getByRole("button");
    expect(profileButton).toHaveClass("button__profile");
  });
});
