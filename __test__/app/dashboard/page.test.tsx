import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DashboardIndexPage from "@/app/dashboard/page";

describe("Dashboard page", () => {
  it("Should render properly", () => {
    render(<DashboardIndexPage />);
    const header = screen.getByRole("heading");
    const headerText = "Hello World";
    expect(header).toHaveTextContent(headerText);
  });

  it("Should have disabled  button", () => {
    render(<DashboardIndexPage />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
