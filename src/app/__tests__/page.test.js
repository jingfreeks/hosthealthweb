import { render } from "@testing-library/react";
import Page from "../page";

describe("Page", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
