module.exports = {
  // Run TypeScript type checking
  "**/*.(ts|tsx)": () => "next build",

  // Run ESLint for linting and Prettier for formatting TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `prettier --write ${filenames.join(" ")}`,
  ],

  // Run Prettier for formatting MarkDown and JSON files
  "**/*.(md|json)": (filenames) => `prettier --write ${filenames.join(" ")}`,
};
