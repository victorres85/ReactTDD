import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../../state/hooks/useParticipantList";
import Draw from "./Draw";
import { useDrawResults } from "../../state/hooks/useDrawResults";

jest.mock("../../state/hooks/useParticipantList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});
jest.mock("../../state/hooks/useDrawResults", () => {
  return {
    useDrawResults: jest.fn(),
  };
});

describe("draw page", () => {
  const participants = ["Cintia", "Pedro", "Lina"];
  const results = new Map([
    ["Cintia", "Pedro"],
    ["Pedro", "Lina"],
    ["Lina", "Cintia"],
  ]);
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
    (useDrawResults as jest.Mock).mockReturnValue(results);
  });
  test("participants can see their christmas santa", () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>,
    );

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(participants.length + 1);
  });

  test("Secret Santa is shown when requested", () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>,
    );

    const select = screen.getByTestId("select-multiple");
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });

    const btn = screen.getByRole("button");

    fireEvent.click(btn);
    const secretSanta = screen.getByRole("alert");
    expect(secretSanta).toBeInTheDocument();
  });
});
