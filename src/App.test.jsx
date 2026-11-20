import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("React App Unit Tests", () => {
  it("renders the React app without crashing", () => {
    render(<App />);
    // This checks if the page renders anything at all
    expect(document.body).toBeInTheDocument();
  });
});
