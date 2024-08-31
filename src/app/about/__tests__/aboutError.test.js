import { render } from "@testing-library/react";
import AboutError from "../error";

describe("About Error Page", () => {
  it("renders About  Error Page to match snaptshot", () => {
    const { container } = render(<AboutError />);
    expect(container).toMatchSnapshot();
  });
});
