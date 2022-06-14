import React from "react";
import { render, screen, fireEvent, userEvent } from "../../test-utils";
import SignIn from "./SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Sign Page", () => {
  test("Conatins Image ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    );
    const sideImg = screen.getByRole("img");
    expect(sideImg).toHaveAttribute("src", "sideimage3.jpg");
    expect(sideImg).toHaveAttribute("alt", "login");
  });
});

describe("Sign Page", () => {
  test("Conatins Heading-Welcome to Grocery Store ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText("Welcome to Grocery App")).toBeInTheDocument();
  });
  test("render user name input ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignIn />} />
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
          <Route path="*" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    );
    const inputEl = screen.getByPlaceholderText("Password");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "password");
  });
  test("render SignUp Button ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    );
    const inputEl = screen.getByRole("button");
    expect(inputEl).toBeInTheDocument();
  });
});
