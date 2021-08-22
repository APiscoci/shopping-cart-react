import React from "react";
import Header from "./header";
import { act, render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Header Component", () => {
  it("should render the header correctly", () => {
    act(() => {
      render(<Header />, container);
    });
    expect(screen.getByTestId("header").textContent).toBe(
      "Shopping Cart React"
    );
  });
});
