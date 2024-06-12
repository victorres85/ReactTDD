import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";
import { RecoilRoot } from "recoil";

test("new participants, can't be added if input is empty", () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>,
  );

  // find elements
  const input = screen.getByPlaceholderText("Add Paticipants' names");
  const btn = screen.getByRole("button");

  // make sure input has been found and button is disabled
  expect(input).toBeInTheDocument();
  expect(btn).toBeDisabled();
});

test("add participant", () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>,
  );

  // find elements
  const input = screen.getByPlaceholderText("Add Paticipants' names");
  const btn = screen.getByRole("button");

  // add value
  fireEvent.change(input, {
    target: {
      value: "Victor Almeida",
    },
  });
  fireEvent.click(btn);

  expect(input).toHaveFocus();
  expect(input).toHaveValue("");
});
