import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Test from ".";

describe("<Test />", () => {
  it("should render Test component", () => {
    render(<Test />);
    expect(screen.getByTestId("test-id")).toBeDefined();
  });
});
