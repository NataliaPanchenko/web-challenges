import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  const handleCreateGame = jest.fn();
  render(<GameForm onCreateGame={handleCreateGame} />);

  const nameOfGame = screen.getByLabelText("Name of game");
  const playerNames = screen.getByLabelText("Player names, separated by comma");
  const button = screen.getByRole("button", {
    name: "Create game",
  });

  expect(nameOfGame).toBeInTheDocument();
  expect(playerNames).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  const handleCreateGame = jest.fn();
  render(<GameForm onCreateGame={handleCreateGame} />);

  const form = screen.getByRole("form", {
    name: "Create a new game",
  });

  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const handleCreateGame = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={handleCreateGame} />);

  const nameOfGame = screen.getByLabelText("Name of game");
  const playerNames = screen.getByLabelText("Player names, separated by comma");
  const button = screen.getByRole("button", {
    name: "Create game",
  });

  await user.type(nameOfGame, "Dodelido");
  await user.type(playerNames, "John Doe");
  await user.click(button);

  expect(handleCreateGame).toHaveBeenCalledWith({
    nameOfGame: "Dodelido",
    playerNames: ["John Doe"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const handleCreateGame = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={handleCreateGame} />);

  const nameOfGame = screen.getByLabelText("Name of game");
  const button = screen.getByRole("button", {
    name: "Create game",
  });

  await user.type(nameOfGame, "Dodelido");
  await user.click(button);

  expect(handleCreateGame).not.toHaveBeenCalled();
});
