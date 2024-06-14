import { RecoilRoot } from "recoil";
import Home from "./Home";
import { render } from "@testing-library/react";

const mockNavegation = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegation,
  };
});

describe("Home Page", () => {
  test("Home Page has to render all the relevant elements", () => {
    const { container } = render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>,
    );
    expect(container).toMatchSnapshot();
  });
});
