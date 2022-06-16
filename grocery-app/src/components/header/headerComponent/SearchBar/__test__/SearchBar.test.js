import React from "react";
import { render, screen, fireEvent } from "../../../../../test-utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBar from "../SearchBar";

describe("Search Bar", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SearchBar />} />
        </Routes>
      </BrowserRouter>
    );
  test("Update on change", () => {
    setup();
    expect(
      screen.getByPlaceholderText("What are you looking for?")
    ).toBeInTheDocument();
  });

  test("Contains Button  ", () => {
    setup();
    const searchButton = screen.getByRole("button");
    expect(searchButton).toHaveClass("searchButton");
  });

  test("should update value", () => {
    setup();
    const searchInput = screen.getByPlaceholderText(
      "What are you looking for?"
    );
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
