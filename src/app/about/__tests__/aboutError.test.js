import { render } from "@testing-library/react";
import AboutError from "../error";

describe("About Page", () => {
  it("renders About Page to match snaptshot", () => {
    const { container } = render(<AboutError />);
    expect(container).toMatchSnapshot();
  });
});
