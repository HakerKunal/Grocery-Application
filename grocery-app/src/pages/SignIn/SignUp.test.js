import React from "react";
import { render, screen, fireEvent, userEvent } from "../../test-utils";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Sign Page", () => {
  test("Conatins Image ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
    const sideImg = screen.getByRole("img");
    expect(sideImg).toHaveAttribute("src", "sideimage3.jpg");
    expect(sideImg).toHaveAttribute("alt", "signup");
  });

  test("Conatins Heading-Welcome to Grocery Store ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText("Welcome to Grocery App")).toBeInTheDocument();
  });
  test("Conatins Sign UP Form", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("signup-form")).toBeInTheDocument();
  });
  test("render user name input ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
    const inputEl = screen.getByPlaceholderText("User name");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  test("render password input ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
    const inputEl = screen.getByPlaceholderText("Password");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "password");
  });
  test("render first name input ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
    const inputEl = screen.getByPlaceholderText("First name");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  test("render last name input ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
    const inputEl = screen.getByPlaceholderText("Last name");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  test("render email input ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
    const inputEl = screen.getByPlaceholderText("Email");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
  test("render SignUp Button ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
    const inputEl = screen.getByRole("button");
    expect(inputEl).toBeInTheDocument();
  });
});
