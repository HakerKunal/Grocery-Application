import React from "react";
import { render, screen, fireEvent, userEvent } from "../../../../test-utils";
import SignUp from "../SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Sign Up Page", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
  test("Conatins Image ", () => {
    setup();
    const sideImg = screen.getByRole("img");
    expect(sideImg).toHaveAttribute("src", "sideimage3.jpg");
    expect(sideImg).toHaveAttribute("alt", "signup");
  });

  test("Conatins Heading-Welcome to Grocery Store ", () => {
    setup();
    expect(screen.getByText("Welcome to Grocery App")).toBeInTheDocument();
  });
  test("Conatins Sign UP Form", () => {
    setup();
    expect(screen.queryByTestId("signup-form")).toBeInTheDocument();
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
  test("render first name input ", () => {
    setup();
    const inputEl = screen.getByPlaceholderText("First name");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  test("render last name input ", () => {
    setup();
    const inputEl = screen.getByPlaceholderText("Last name");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  test("render email input ", () => {
    setup();
    const inputEl = screen.getByPlaceholderText("Email");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
  test("render SignUp Button ", () => {
    setup();
    const button = screen.getByRole("button", { name: "Sign up" });
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
  test("should Update Password value", () => {
    setup();
    const searchInput = screen.getByPlaceholderText("Password");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
  test("should Update username value", () => {
    setup();
    const searchInput = screen.getByPlaceholderText("User name");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
  test("should Update first name value", () => {
    setup();
    const searchInput = screen.getByPlaceholderText("First name");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
  test("should Update Last Name value", () => {
    setup();
    const searchInput = screen.getByPlaceholderText("Last name");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
  test("should Update Email value", () => {
    setup();
    const searchInput = screen.getByPlaceholderText("Email");
    fireEvent.change(searchInput, { target: { value: "test@123" } });
    expect(searchInput.value).toBe("test@123");
  });
});
