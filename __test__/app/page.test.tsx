import HomePage from "@/app/page";
import { render, screen } from "@testing-library/react";
// import HomePage from "../pages/index";

describe("HomePage", () => {
  it("renders the homepage content", () => {
    render(<HomePage />);

    // Check if the main heading is rendered
    const mainHeading = screen.getByText("Welcome to PeoplePedia");
    expect(mainHeading).toBeInTheDocument();

    // Check if the subheading is rendered
    const subheading = screen.getByText(
      "The ultimate platform for connecting people and sharing knowledge.",
    );
    expect(subheading).toBeInTheDocument();

    // Check if the "Browse Directory" button is rendered
    const browseDirectoryButtons = screen.getAllByText("Browse Directory");
    expect(browseDirectoryButtons).toHaveLength(2);

    // Check if the section titles are rendered
    const sectionTitles = [
      "Discover a World of Knowledge",
      "Meet Our Animated Characters",
      "Explore Our People Directory",
    ];
    sectionTitles.forEach((title) => {
      const sectionTitle = screen.getByText(title);
      expect(sectionTitle).toBeInTheDocument();
    });

    // Check if the section content is rendered
    const sectionContent = [
      "Connect with Experts",
      "Share Your Knowledge",
      "Collaborate with Peers",
      "Discover a diverse community of individuals on PeoplePedia who are eager to share their knowledge and connect with like-minded individuals.",
    ];
    sectionContent.forEach((content) => {
      const sectionContentText = screen.getByText(content);
      expect(sectionContentText).toBeInTheDocument();
    });
  });
});
