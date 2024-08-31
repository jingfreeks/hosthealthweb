import { render } from "@testing-library/react";
import Page from "../page";

describe("Login Screen Page", () => {
  it("renders Login Screen Page to match snaptshots", async() => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
