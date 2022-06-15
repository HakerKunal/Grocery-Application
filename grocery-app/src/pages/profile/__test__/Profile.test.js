import React from "react";
import { render, screen, fireEvent, userEvent } from "../../../test-utils";
import Profile from "../Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const setup = () =>
  render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
describe("Profile Page", () => {
  test("Conatins Image ", () => {
    setup();
    const profileImg = screen.getByRole("img");
    expect(profileImg).toBeInTheDocument();
  });

  test("image have correct attributes", () => {
    setup();
    const profileImg = screen.getByRole("img");

    expect(profileImg).toHaveAttribute("src", "banner.jpg");
    expect(profileImg).toHaveAttribute("alt", "full of delicous food!");
  });
  test("contain username div", () => {
    setup();
    const { container } = setup();
    const usernameDiv = container.getElementsByClassName("username__box");
  });
});
