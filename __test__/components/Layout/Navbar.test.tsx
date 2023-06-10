import Navbar from "@/components/Layout/Navbar";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Navbar", () => {
  test("renders the Navbar component", () => {
    render(<Navbar />);

    // Check if the logo text is rendered
    const logoText = screen.getByText("PeoplePedia");
    expect(logoText).toBeInTheDocument();

    // Check if the menu links are rendered
    const directoryLink = screen.getByText("Directory");
    expect(directoryLink).toBeInTheDocument();

    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByText("Contact");
    expect(contactLink).toBeInTheDocument();
  });

  test("opens the menu when the hamburger icon is clicked", () => {
    render(<Navbar />);

    // Check if the menu is initially closed
    const menuLinks = screen.queryAllByRole("link");
    expect(menuLinks.length).toBe(0);

    // Click the hamburger icon to open the menu
    const hamburgerIcon = screen.getByRole("button", { name: "Open Menu" });
    fireEvent.click(hamburgerIcon);

    // Check if the menu is now open
    const directoryLink = screen.getByText("Directory");
    expect(directoryLink).toBeInTheDocument();

    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByText("Contact");
    expect(contactLink).toBeInTheDocument();
  });
});
