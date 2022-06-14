import React from "react";
import { render, screen, fireEvent } from "../../../test-utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBar from "./SearchBar";

describe("Search Bar", () => {
  test("Update on change", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SearchBar />} />
        </Routes>
      </BrowserRouter>
    );

    expect(
      screen.getByPlaceholderText("What are you looking for?")
    ).toBeInTheDocument();
  });
});
describe("Search bar", () => {
  test("Contains Button  ", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SearchBar />} />
        </Routes>
      </BrowserRouter>
    );

    const searchButton = screen.getByRole("button");
    expect(searchButton).toHaveClass("searchButton");
  });
});

describe("Search bar", () => {
  test("should update value", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SearchBar />} />
        </Routes>
      </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText(
      "What are you looking for?"
    );
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
