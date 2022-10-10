import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Button from ".";

describe("<Button />", () => {
  it("should render Button component", () => {
    render(<Button>Button</Button>);
    expect(screen.getByTestId("button-id")).toBeDefined();
  });
});
