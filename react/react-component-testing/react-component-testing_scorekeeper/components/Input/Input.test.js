import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Name"
      placeholder="Enter your name"
      name="John Doe"
      value="value"
      onChange={() => {}}
      required
    />,
  );
  const input = screen.getByRole("textbox");
  const labelText = screen.getByText("Name");

  expect(labelText).toBeInTheDocument();
  expect(input).toHaveAttribute("placeholder", "Enter your name");
  expect(input).toHaveAttribute("name", "John Doe");
  expect(input).toHaveValue("value");
  expect(input).toBeRequired();
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();
  render(
    <Input
      labelText="Name"
      placeholder="Enter your name"
      name="John Doe"
      value="value"
      onChange={handleChange}
      required
    />,
  );
  const user = userEvent.setup();
  const input = screen.getByRole("textbox");

  await user.type(input, "Natalia");

  expect(handleChange).toHaveBeenCalledTimes(7);
});
