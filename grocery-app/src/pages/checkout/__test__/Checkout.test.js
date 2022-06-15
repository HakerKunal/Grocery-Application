import React from "react";
import { render, screen, fireEvent, userEvent } from "../../../test-utils";
import Checkout from "../Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Checkout Page", () => {
  const total = { total: 2000 };
  const setup = () =>
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Checkout total={total} />} />
        </Routes>
      </BrowserRouter>
    );
  test("Conatins text Checkout ", () => {
    setup();
    const checkoutText = screen.getByText(/Checkout/i);
    expect(checkoutText).toBeInTheDocument();
  });
  test("Conatins text Total Price ", () => {
    setup();
    const priceText = screen.getByText(/Total Price/i);
    expect(priceText).toBeInTheDocument();
  });
  test("Conatins text Mode Of Payment ", () => {
    setup();
    const paymentText = screen.getByText(/Mode Of Payment/i);
    expect(paymentText).toBeInTheDocument();
  });
  test("Conatins text Billing Address ", () => {
    setup();
    const billingAddressText = screen.getByText(/Billing Address/i);
    expect(billingAddressText).toBeInTheDocument();
  });
  test("Conatins text Phone Number ", () => {
    setup();
    const phoneNumberText = screen.getByText(/Phone Number/i);
    expect(phoneNumberText).toBeInTheDocument();
  });
  test("render mode of payemnt radio button-Debit Card ", () => {
    setup();
    const inputEl = screen.getByDisplayValue(/Debit card/i);
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "radio");
  });
  test("render mode of payemnt radio button- Cash On Delivery ", () => {
    setup();
    const inputEl = screen.getByDisplayValue(/Cash On Delivery/i);
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "radio");
  });
  test("render mode of payemnt radio button- Net Banking", () => {
    setup();
    const inputEl = screen.getByDisplayValue(/Net Banking/i);
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "radio");
  });
  test("render input field - Address", () => {
    setup();
    const inputEl = screen.getByPlaceholderText(/Enter the Address/i);
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  test("render input field - Phone Number", () => {
    setup();
    const inputEl = screen.getByPlaceholderText(/Enter the Phone Number/i);
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  test("should Update Address value", () => {
    setup();
    const searchInput = screen.getByPlaceholderText(/Enter the Address/i);
    fireEvent.change(searchInput, { target: { value: "test@test.com" } });
    expect(searchInput.value).toBe("test@test.com");
  });
  test("should Update Phone Number value", () => {
    setup();
    const searchInput = screen.getByPlaceholderText(/Enter the Phone Number/i);
    fireEvent.change(searchInput, { target: { value: "1234567890" } });
    expect(searchInput.value).toBe("1234567890");
  });
});
