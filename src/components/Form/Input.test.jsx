import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("renders with the correct label, placeholder, and id", () => {
    const myLabel = "label";
    render(<Input label={myLabel} />);

    const input = screen.getByLabelText(myLabel);

    expect(input).toBeInTheDocument();
  });
});
