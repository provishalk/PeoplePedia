import Footer from "@/components/Layout/Footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  test("renders the Footer component", () => {
    render(<Footer />);

    // Check if the links are rendered
    const termsLink = screen.getByText("Terms of Service");
    expect(termsLink).toBeInTheDocument();

    const privacyLink = screen.getByText("Privacy Policy");
    expect(privacyLink).toBeInTheDocument();

    const contactLink = screen.getByText("Contact Us");
    expect(contactLink).toBeInTheDocument();

    // Check if the copyright text is rendered
    const copyrightText = screen.getByText(
      `© ${new Date().getFullYear()} PeoplePedia. All rights reserved.`,
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
