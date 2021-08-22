import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import { render } from "@testing-library/react";

describe("Header Component", () => {
  it("should render the header without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
  });

  it("should render the header correctly", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("header").textContent).toBe("Shopping Cart React");
  });
});
