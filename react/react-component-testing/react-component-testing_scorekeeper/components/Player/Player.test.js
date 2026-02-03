import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(
    <Player
      name="John Doe"
      score="100"
      onDecreasePlayerScore={() => {}}
      onIncreasePlayerScore={() => {}}
    />,
  );
  const name = screen.getByText("John Doe");
  const score = screen.getByText("100");
  const buttons = screen.getAllByRole("button");

  expect(name).toBeInTheDocument();
  expect(score).toBeInTheDocument();
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleDecrease = jest.fn();
  const handleIncrease = jest.fn();
  render(
    <Player
      name="John Doe"
      score="100"
      onDecreasePlayerScore={handleDecrease}
      onIncreasePlayerScore={handleIncrease}
    />,
  );
  const user = userEvent.setup();
  const decreaseButton = screen.getByRole("button", {
    name: "Decrease Score",
  });
  const increaseButton = screen.getByRole("button", {
    name: "Increase Score",
  });

  await user.click(decreaseButton);
  await user.click(increaseButton);

  expect(handleDecrease).toHaveBeenCalledTimes(1);
  expect(handleIncrease).toHaveBeenCalledTimes(1);
});
