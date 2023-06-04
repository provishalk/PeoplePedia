module.exports = {
  // Run TypeScript type checking
  "**/*.(ts|tsx)": () => "next build",

  // Run ESLint for linting and Prettier for formatting TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `eslint --fix ${filenames.join(" ")}`,
    `prettier --write ${filenames.join(" ")}`,
  ],

  // Run Prettier for formatting MarkDown and JSON files
  "**/*.(md|json)": (filenames) => `prettier --write ${filenames.join(" ")}`,

  // Run tests using React Testing Library
  "**/*.test.(ts|tsx)": () => "jest",
};
