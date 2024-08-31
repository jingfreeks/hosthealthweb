import { render } from "@testing-library/react";
import Page from "../page";

describe("Register Screen Page", () => {
  it("renders Register Screen Page to match snaptshots", async() => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
