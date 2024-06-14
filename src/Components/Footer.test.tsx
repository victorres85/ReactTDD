import { RecoilRoot } from "recoil";
import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { useParticipantsList } from "../state/hooks/useParticipantList";

jest.mock("../state/hooks/useParticipantList", () => {
  return { useParticipantsList: jest.fn() };
});

const mockNavegation = jest.fn();
const mockDraw = jest.fn();

jest.mock("../state/hooks/useDraw", () => {
  return {
    useDraw: () => mockDraw,
  };
});

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegation,
  };
});

describe("Not enough participants", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });
  test("the draw can not be initiated", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>,
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
  });
});

describe("enough participants", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });
  const participants = ["Cintia", "Pedro", "Lina"];
  test("the draw can be initiated", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>,
    );
    const btn = screen.getByRole("button");
    expect(btn).not.toBeDisabled();
  });

  test("the draw has been initiated", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>,
    );
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(mockNavegation).toHaveBeenCalledTimes(1);
    expect(mockNavegation).toHaveBeenCalledWith("/draw");
    expect(mockDraw).toHaveBeenCalledTimes(1);
  });
});
