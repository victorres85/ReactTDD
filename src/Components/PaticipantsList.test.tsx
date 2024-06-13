import { RecoilRoot } from "recoil";
import { render, screen } from "@testing-library/react";
import ParticipantsList from "./PaticipantsList";
import { useParticipantsList } from "../state/hooks/useParticipantList";

jest.mock("../state/hooks/useParticipantList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

describe("Test participant list", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });
  // ########################################################################
  test("empty list", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>,
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(0);
  });
});
// ########################################################################
describe("list with elements", () => {
  const participants = ["Ana", "Catharine"];
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });
  test("list with elements", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>,
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(participants.length);
  });
});
