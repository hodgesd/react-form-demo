import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("renders with the correct label, placeholder, and id and is of type text", () => {
    const myLabel = "label";
    render(<Input label={myLabel} />);

    const input = screen.getByLabelText(myLabel);

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("renders with the correct type", () => {
    render(<Input label="label" type="email" />);

    const input = screen.getByLabelText("label");

    expect(input).toHaveAttribute("type", "email");
  });
});
