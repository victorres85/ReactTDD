import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../state/hooks/useParticipantList";
import Draw from "./Draw";

jest.mock("../state/hooks/useParticipantList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

describe("draw page", () => {
  const participants = ["Cintia", "Pedro", "Lina"];
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });
  test("participants can see their christmas santa", () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>,
    );

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(participants.length);
  });
});
