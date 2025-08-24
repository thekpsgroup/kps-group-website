import { render, screen } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Button from "../Button.svelte";

describe("Button Component", () => {
  it("renders with correct text", () => {
    render(Button, { props: { text: "Click me" } });
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies correct CSS classes for primary variant", () => {
    const { container } = render(Button, {
      props: {
        text: "Test Button",
        variant: "primary",
      },
    });

    const button = container.querySelector("button");
    expect(button).toHaveClass("bg-gold", "text-navy");
  });

  it("handles click events", async () => {
    const mockClick = vi.fn();
    const { component } = render(Button, {
      props: {
        text: "Click me",
      },
    });

    component.$on("click", mockClick);
    const button = screen.getByText("Click me");
    await button.click();

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it("renders as link when href is provided", () => {
    const { container } = render(Button, {
      props: {
        text: "Link Button",
        href: "/test",
      },
    });

    const link = container.querySelector("a");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });

  it("applies disabled state correctly", () => {
    const { container } = render(Button, {
      props: {
        text: "Disabled Button",
        disabled: true,
      },
    });

    const button = container.querySelector("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("opacity-50", "cursor-not-allowed");
  });
});
