import { act, fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";
import { RecoilRoot } from "recoil";

describe("Test Form Behaviour", () => {
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

  test("duplicated names can't be included in the list", () => {
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

    // add same value
    fireEvent.change(input, {
      target: {
        value: "Victor Almeida",
      },
    });
    fireEvent.click(btn);

    const errorMessage = screen.getByRole("alert");

    expect(errorMessage.textContent).toBe("Duplicated names are not allowed");
  });

  test("error message on duplicated names should disapear after 3 seconds", () => {
    jest.useFakeTimers();
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

    // add same value
    fireEvent.change(input, {
      target: {
        value: "Victor Almeida",
      },
    });
    fireEvent.click(btn);

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage?.textContent).toBe("Duplicated names are not allowed");
    act(() => {
      jest.runAllTimers();
    });
    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
