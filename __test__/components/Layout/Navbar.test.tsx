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
});
