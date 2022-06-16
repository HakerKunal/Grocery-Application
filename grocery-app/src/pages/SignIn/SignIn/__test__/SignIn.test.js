import React from "react";
import { render, screen, fireEvent, userEvent } from "../../../../test-utils";
import SignIn from "../SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Sign In Page", () => {
  const setup = () => {
    return render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    );
  };
  test("Conatins Image ", () => {
    setup();
    const sideImg = screen.getByRole("img");
    expect(sideImg).toHaveAttribute("src", "sideimage3.jpg");
    expect(sideImg).toHaveAttribute("alt", "login");
  });

  test("Conatins Heading-Welcome to Grocery Store ", () => {
    setup();
    expect(screen.getByText("Welcome to Grocery App")).toBeInTheDocument();
  });
  test("render user name input ", () => {
    setup();
    const inputEl = screen.getByPlaceholderText("User name");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  test("render password input ", () => {
    setup();
    const inputEl = screen.getByPlaceholderText("Password");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "password");
  });
  test("render SignUp Button ", () => {
    setup();
    const button = screen.getByRole("button", { name: "Log In" });
    expect(button).toBeInTheDocument();
  });
  test("should update username value", () => {
    setup();
    const searchInput = screen.getByPlaceholderText("User name");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
  test("should Update Password value", () => {
    setup();
    const searchInput = screen.getByPlaceholderText("Password");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
